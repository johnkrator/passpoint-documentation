import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const ChatBotWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
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
    }, [isOpen]);

    // Add welcome message on first open
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcomeMessage: Message = {
                id: "bot-" + Date.now(),
                text: "Hello! I'm your documentation assistant. How can I help you today?",
                sender: "bot",
                timestamp: new Date()
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen, messages.length]);

    /**
     * Placeholder function for bot response
     * TODO: integrate actual LLM endpoint here
     */
    const handleBotResponse = (): string => {
        // Simple placeholder logic - can be replaced with API call
        const responses = [
            "That's a great question! Let me help you with that.",
            "I understand what you're asking. Here's what I can tell you:",
            "Based on the documentation, here's the answer:",
            "Let me find that information for you.",
            "That's covered in our API documentation. Would you like more details?"
        ];

        // Return a random response for demo purposes
        return responses[Math.floor(Math.random() * responses.length)] + " (This is a placeholder response)";
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isTyping) return;

        const userMessage: Message = {
            id: "user-" + Date.now(),
            text: inputValue.trim(),
            sender: "user",
            timestamp: new Date()
        };

        // Add user message
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot thinking/typing delay
        setTimeout(() => {
            const botResponse = handleBotResponse();
            const botMessage: Message = {
                id: "bot-" + Date.now(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
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
                                        Documentation Assistant
                                    </h2>
                                    <p className="text-xs text-white/80">
                                        Always here to help
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
                            {messages.map((message) => (
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
                                        <p className="text-sm whitespace-pre-wrap break-words">
                                            {message.text}
                                        </p>
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
                                    placeholder="Type your message..."
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
