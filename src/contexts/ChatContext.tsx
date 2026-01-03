import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isStreaming?: boolean;
}

type ChatProviderProps = {
  children: React.ReactNode;
};

type ChatProviderState = {
  // State
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  error: string | null;

  // Actions
  setIsOpen: (isOpen: boolean) => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => Message;
  updateStreamingMessage: (id: string, text: string) => void;
  finalizeStreamingMessage: (id: string) => void;
  setIsTyping: (isTyping: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
};

const WELCOME_MESSAGE =
  "Hello! I'm your documentation assistant powered by AI. I have comprehensive knowledge of the Passpoint payment documentation application. Ask me anything about the codebase, architecture, APIs, or implementation details!";

const initialState: ChatProviderState = {
  isOpen: false,
  messages: [],
  isTyping: false,
  error: null,
  setIsOpen: () => null,
  addMessage: () => ({} as Message),
  updateStreamingMessage: () => null,
  finalizeStreamingMessage: () => null,
  setIsTyping: () => null,
  setError: () => null,
  clearMessages: () => null,
};

const ChatContext = createContext<ChatProviderState>(initialState);

export function ChatProvider({ children, ...props }: ChatProviderProps) {
  const [isOpen, setIsOpenState] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initializeChat = useCallback(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: `bot-${Date.now()}`,
        text: WELCOME_MESSAGE,
        sender: 'bot',
        timestamp: new Date(),
        isStreaming: false,
      };
      setMessages([welcomeMessage]);
    }
  }, [messages.length]);

  const setIsOpen = useCallback(
    (newIsOpen: boolean) => {
      setIsOpenState(newIsOpen);

      // Add welcome message when opening for the first time
      if (newIsOpen && messages.length === 0) {
        initializeChat();
      }
    },
    [messages.length, initializeChat]
  );

  const addMessage = useCallback(
    (message: Omit<Message, 'id' | 'timestamp'>): Message => {
      const newMessage: Message = {
        ...message,
        id: `${message.sender}-${Date.now()}-${Math.random()}`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newMessage]);
      return newMessage;
    },
    []
  );

  const updateStreamingMessage = useCallback((id: string, text: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, text } : msg))
    );
  }, []);

  const finalizeStreamingMessage = useCallback((id: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, isStreaming: false } : msg
      )
    );
    setIsTyping(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const value: ChatProviderState = {
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
    clearMessages,
  };

  return (
    <ChatContext.Provider {...props} value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }

  return context;
};
