/**
 * AI Streaming Service
 * Handles Server-Sent Events (SSE) streaming from the AI agent endpoint
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface StreamCallbacks {
  onStart?: () => void;
  onChunk?: (chunk: string, fullText: string) => void;
  onComplete?: (fullText: string) => void;
  onError?: (error: Error) => void;
}

export class AIStreamingService {
  private controller: AbortController | null = null;

  /**
   * Send a question to the AI and stream the response
   */
  async streamQuestion(
    question: string,
    callbacks: StreamCallbacks
  ): Promise<void> {
    // Create abort controller for cancellation
    this.controller = new AbortController();

    try {
      const url = new URL('/public/ai/ask/stream', API_BASE_URL);
      url.searchParams.append('question', question);

      callbacks.onStart?.();

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          Accept: 'text/event-stream',
        },
        signal: this.controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      // Read the stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        // Decode the chunk
        buffer += decoder.decode(value, { stream: true });

        // Split by newlines to process complete SSE messages
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Keep incomplete line in buffer

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.substring(6).trim();

            // Check for end of stream
            if (data === '[DONE]') {
              callbacks.onComplete?.(fullText);
              return;
            }

            try {
              // Parse JSON data
              const parsed = JSON.parse(data);

              if (parsed.error) {
                throw new Error(parsed.error);
              }

              if (parsed.chunk) {
                fullText += parsed.chunk;
                callbacks.onChunk?.(parsed.chunk, fullText);
              }
            } catch (parseError) {
              // If it's not JSON, treat it as plain text
              if (data && data !== '[DONE]') {
                fullText += data;
                callbacks.onChunk?.(data, fullText);
              }
            }
          }
        }
      }

      // If we exit the loop without seeing [DONE], complete anyway
      callbacks.onComplete?.(fullText);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          // Stream was cancelled - this is not an error
          return;
        }
        callbacks.onError?.(error);
      } else {
        callbacks.onError?.(new Error('Unknown error occurred'));
      }
    } finally {
      this.controller = null;
    }
  }

  /**
   * Cancel the current streaming request
   */
  cancel(): void {
    if (this.controller) {
      this.controller.abort();
      this.controller = null;
    }
  }

  /**
   * Check if currently streaming
   */
  isStreaming(): boolean {
    return this.controller !== null;
  }
}

// Singleton instance
export const aiStreamingService = new AIStreamingService();
