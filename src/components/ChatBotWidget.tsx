import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, AlertCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useChat, type Message } from "@/contexts/ChatContext";
import { aiStreamingService } from "@/services/aiStreamingService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const ChatBotWidget: React.FC = () => {
    // Chat context
    const {
        isOpen,
        messages,
        isTyping,
        error,
        setIsOpen,
        addMessage,
        updateStreamingMessage,
        finalizeStreamingMessage,
        setIsTyping,
        setError,
    } = useChat();

    // Local state for input and copy functionality
    const [inputValue, setInputValue] = useState("");
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
    const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

    // Refs
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Copy to clipboard function
    const copyToClipboard = async (text: string, id: string, type: 'message' | 'code') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'message') {
                setCopiedMessageId(id);
                setTimeout(() => setCopiedMessageId(null), 2000);
            } else {
                setCopiedCodeId(id);
                setTimeout(() => setCopiedCodeId(null), 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, setIsOpen]);

    // Clean up streaming on unmount
    useEffect(() => {
        return () => {
            if (aiStreamingService.isStreaming()) {
                aiStreamingService.cancel();
            }
        };
    }, []);

    /**
     * Handle sending a message with SSE streaming response
     */
    const handleSendMessage = async () => {
        if (!inputValue.trim() || isTyping) return;

        const question = inputValue.trim();

        // Add user message
        addMessage({
            text: question,
            sender: "user",
        });

        // Clear input and set typing indicator
        setInputValue("");
        setIsTyping(true);
        setError(null);

        // Create initial bot message for streaming
        const botMessage = addMessage({
            text: "",
            sender: "bot",
            isStreaming: true,
        });

        // Stream the AI response
        try {
            await aiStreamingService.streamQuestion(question, {
                onStart: () => {
                    setIsTyping(true);
                },

                onChunk: (_chunk: string, fullText: string) => {
                    updateStreamingMessage(botMessage.id, fullText);
                },

                onComplete: (fullText: string) => {
                    updateStreamingMessage(botMessage.id, fullText);
                    finalizeStreamingMessage(botMessage.id);
                },

                onError: (err: Error) => {
                    setError(err.message || "Failed to get response from AI");
                    finalizeStreamingMessage(botMessage.id);

                    // Update message with error
                    updateStreamingMessage(
                        botMessage.id,
                        "I apologize, but I encountered an error processing your request. Please try again."
                    );
                },
            });
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : "An unknown error occurred";
            setError(errorMessage);
            setIsTyping(false);

            // Update message with error
            updateStreamingMessage(
                botMessage.id,
                "I apologize, but I encountered an error. Please try again."
            );
            finalizeStreamingMessage(botMessage.id);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    // Custom markdown components with proper styling and copy buttons for code blocks
    const markdownComponents: Components = {
        h1: ({ children }) => (
            <h1 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-gray-100">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-base font-bold mt-2 mb-1 text-gray-900 dark:text-gray-100">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="my-2 leading-relaxed text-gray-800 dark:text-gray-200">
                {children}
            </p>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-[#0099c2] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside my-2 space-y-1 text-gray-800 dark:text-gray-200">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside my-2 space-y-1 text-gray-800 dark:text-gray-200">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="ml-4 text-gray-800 dark:text-gray-200">{children}</li>
        ),
        code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');
            const codeId = 'code-' + Math.random();

            if (!inline && match) {
                // Code block with language
                return (
                    <div className="relative group my-3">
                        <div className="absolute right-2 top-2 z-10">
                            <button
                                onClick={() => copyToClipboard(codeString, codeId, 'code')}
                                className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Copy code"
                            >
                                {copiedCodeId === codeId ? (
                                    <Check className="h-3 w-3" />
                                ) : (
                                    <Copy className="h-3 w-3" />
                                )}
                            </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                            <code className={className} {...props}>
                                {children}
                            </code>
                        </pre>
                    </div>
                );
            } else if (!inline) {
                // Code block without language
                return (
                    <div className="relative group my-3">
                        <div className="absolute right-2 top-2 z-10">
                            <button
                                onClick={() => copyToClipboard(codeString, codeId, 'code')}
                                className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Copy code"
                            >
                                {copiedCodeId === codeId ? (
                                    <Check className="h-3 w-3" />
                                ) : (
                                    <Copy className="h-3 w-3" />
                                )}
                            </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                            <code {...props}>{children}</code>
                        </pre>
                    </div>
                );
            } else {
                // Inline code
                return (
                    <code
                        className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs font-mono text-pink-600 dark:text-pink-400"
                        {...props}
                    >
                        {children}
                    </code>
                );
            }
        },
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#0099c2] pl-4 my-2 italic text-gray-700 dark:text-gray-300">
                {children}
            </blockquote>
        ),
        table: ({ children }) => (
            <div className="overflow-x-auto my-3">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    {children}
                </table>
            </div>
        ),
        thead: ({ children }) => (
            <thead className="bg-gray-100 dark:bg-gray-700">{children}</thead>
        ),
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => (
            <tr className="border-b border-gray-300 dark:border-gray-600">
                {children}
            </tr>
        ),
        th: ({ children }) => (
            <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                {children}
            </td>
        ),
        strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-gray-100">
                {children}
            </strong>
        ),
        em: ({ children }) => (
            <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
        ),
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                        "bg-[#0099c2] hover:bg-[#007a9c] text-white",
                        "flex items-center justify-center",
                        isOpen && "scale-0 opacity-0"
                    )}
                    aria-label="Open chat assistant"
                    aria-expanded={isOpen}
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 bg-black/20 backdrop-blur-sm animate-in fade-in-0 duration-200"
                    onClick={handleBackdropClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="chatbot-title"
                >
                    <div
                        className={cn(
                            "w-full sm:w-96 h-[600px] max-h-[80vh]",
                            "bg-white dark:bg-gray-800 rounded-lg shadow-2xl",
                            "border border-gray-200 dark:border-gray-700",
                            "flex flex-col",
                            "animate-in slide-in-from-bottom-4 duration-300"
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-[#0099c2] rounded-t-lg">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 id="chatbot-title" className="text-base font-semibold text-white">
                                        AI Documentation Assistant
                                    </h2>
                                    <p className="text-xs text-white/80">
                                        Powered by Gemini
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 rounded-full hover:bg-white/20 text-white"
                                aria-label="Close chat assistant"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                            {messages.map((message: Message) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex",
                                        message.sender === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[80%] rounded-lg shadow-sm relative group",
                                            message.sender === "user"
                                                ? "bg-[#0099c2] text-white px-4 py-2"
                                                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 p-4"
                                        )}
                                    >
                                        {message.sender === "bot" ? (
                                            <>
                                                <div className="text-sm">
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm]}
                                                        components={markdownComponents}
                                                    >
                                                        {message.text}
                                                    </ReactMarkdown>
                                                    {message.isStreaming && (
                                                        <span className="inline-block w-1 h-4 ml-1 bg-gray-400 animate-pulse" />
                                                    )}
                                                </div>
                                                {!message.isStreaming && (
                                                    <button
                                                        onClick={() => copyToClipboard(message.text, message.id, 'message')}
                                                        className="absolute bottom-2 right-2 p-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        title="Copy entire response"
                                                    >
                                                        {copiedMessageId === message.id ? (
                                                            <Check className="h-3 w-3" />
                                                        ) : (
                                                            <Copy className="h-3 w-3" />
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <p className="text-sm whitespace-pre-wrap break-words">
                                                {message.text}
                                            </p>
                                        )}
                                        <span
                                            className={cn(
                                                "text-xs mt-2 block",
                                                message.sender === "user"
                                                    ? "text-white/70"
                                                    : "text-gray-500 dark:text-gray-400"
                                            )}
                                        >
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 shadow-sm">
                                        <div className="flex gap-1">
                                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="flex justify-center">
                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-2 shadow-sm flex items-start gap-2 max-w-[90%]">
                                        <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                        <p className="text-xs text-red-700 dark:text-red-300">
                                            {error}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-lg">
                            <div className="flex gap-2">
                                <textarea
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask me anything about the codebase..."
                                    className={cn(
                                        "flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md",
                                        "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",
                                        "placeholder-gray-500 dark:placeholder-gray-400",
                                        "focus:outline-none focus:ring-2 focus:ring-[#0099c2] focus:border-transparent",
                                        "resize-none transition-colors duration-200",
                                        "max-h-24"
                                    )}
                                    rows={1}
                                    disabled={isTyping}
                                    aria-label="Message input"
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isTyping}
                                    className={cn(
                                        "h-10 w-10 rounded-md bg-[#0099c2] hover:bg-[#007a9c] text-white",
                                        "disabled:opacity-50 disabled:cursor-not-allowed",
                                        "flex items-center justify-center flex-shrink-0"
                                    )}
                                    aria-label="Send message"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Press Enter to send, Shift+Enter for new line
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBotWidget;
