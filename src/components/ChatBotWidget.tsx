import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useChat, type Message } from "@/contexts/ChatContext";
import { aiStreamingService } from "@/services/aiStreamingService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

    // Local state for input
    const [inputValue, setInputValue] = useState("");

    // Refs
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

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
                                            "max-w-[80%] rounded-lg px-4 py-2 shadow-sm",
                                            message.sender === "user"
                                                ? "bg-[#0099c2] text-white"
                                                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                                        )}
                                    >
                                        {message.sender === "bot" ? (
                                            <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        // Style headings
                                                        h1: ({ ...props }) => <h1 className="text-lg font-bold mt-4 mb-2" {...props} />,
                                                        h2: ({ ...props }) => <h2 className="text-base font-bold mt-3 mb-2" {...props} />,
                                                        h3: ({ ...props }) => <h3 className="text-sm font-bold mt-2 mb-1" {...props} />,
                                                        // Style lists
                                                        ul: ({ ...props }) => <ul className="list-disc ml-4 my-2 space-y-1" {...props} />,
                                                        ol: ({ ...props }) => <ol className="list-decimal ml-4 my-2 space-y-1" {...props} />,
                                                        li: ({ ...props }) => <li className="text-sm" {...props} />,
                                                        // Style code
                                                        code: ({ inline, ...props }: any) =>
                                                            inline ? (
                                                                <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono" {...props} />
                                                            ) : (
                                                                <code className="block bg-gray-100 dark:bg-gray-700 p-2 rounded text-xs font-mono overflow-x-auto my-2" {...props} />
                                                            ),
                                                        // Style paragraphs
                                                        p: ({ ...props }) => <p className="my-2 leading-relaxed" {...props} />,
                                                        // Style links
                                                        a: ({ ...props }) => <a className="text-[#0099c2] hover:underline" {...props} />,
                                                        // Style blockquotes
                                                        blockquote: ({ ...props }) => (
                                                            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-2 italic" {...props} />
                                                        ),
                                                        // Style tables
                                                        table: ({ ...props }) => (
                                                            <div className="overflow-x-auto my-2">
                                                                <table className="min-w-full border-collapse text-xs" {...props} />
                                                            </div>
                                                        ),
                                                        th: ({ ...props }) => <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 bg-gray-50 dark:bg-gray-700" {...props} />,
                                                        td: ({ ...props }) => <td className="border border-gray-300 dark:border-gray-600 px-2 py-1" {...props} />,
                                                    }}
                                                >
                                                    {message.text}
                                                </ReactMarkdown>
                                                {message.isStreaming && (
                                                    <span className="inline-block w-1 h-4 ml-1 bg-current animate-pulse" />
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-sm whitespace-pre-wrap break-words">
                                                {message.text}
                                            </p>
                                        )}
                                        <span
                                            className={cn(
                                                "text-xs mt-1 block",
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
