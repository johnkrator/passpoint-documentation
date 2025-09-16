import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SearchItem {
  title: string;
  content: string;
  url: string;
  section?: string;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: SearchItem[];
  isSearching: boolean;
  showSuggestions: boolean;
  setShowSuggestions: (show: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

const searchData: SearchItem[] = [
  {
    title: "API Rate Limits",
    content: "Learn about API rate limiting, quotas, and best practices for managing requests",
    url: "/api-rate-limits",
    section: "GUIDES"
  },
  {
    title: "Quick Guides",
    content: "Fast track guides to get you started with common integration patterns",
    url: "/quick-guides",
    section: "GUIDES"
  },
  {
    title: "Transaction Dynamics on Passpoint",
    content: "Understanding how transactions flow through the Passpoint platform",
    url: "/transaction-dynamics",
    section: "GUIDES"
  },
  {
    title: "Homepage",
    content: "Welcome to Passpoint API documentation",
    url: "/",
    section: "GETTING STARTED"
  },
  {
    title: "Introduction",
    content: "Get started with Passpoint APIs and learn the basics",
    url: "/introduction",
    section: "GETTING STARTED"
  },
  {
    title: "API Integrations",
    content: "REST API, SDKs, Webhooks, Authentication, Quick Start Examples",
    url: "/api-integrations",
    section: "GETTING STARTED"
  },
  {
    title: "User Roles and Permissions",
    content: "Manage user access levels and permission systems",
    url: "/user-roles",
    section: "LEARN MORE"
  },
  {
    title: "Status Responses",
    content: "HTTP status codes and their meanings in Passpoint API",
    url: "/status-responses",
    section: "LEARN MORE"
  },
  // Additional searchable content
  {
    title: "REST API",
    content: "Direct HTTP calls to RESTful endpoints with JSON payloads",
    url: "/api-integrations",
    section: "Integration Methods"
  },
  {
    title: "SDKs",
    content: "Official libraries for Node.js and Java with built-in error handling",
    url: "/api-integrations",
    section: "Integration Methods"
  },
  {
    title: "Webhooks",
    content: "Real-time notifications about transaction events and system updates",
    url: "/api-integrations",
    section: "Integration Methods"
  },
  {
    title: "Authentication",
    content: "API Key security and environment keys for test and live environments",
    url: "/api-integrations",
    section: "Security"
  },
  {
    title: "Transaction Lifecycle",
    content: "Initiation, Processing, and Completion phases of transactions",
    url: "/transaction-dynamics",
    section: "Process Flow"
  },
  {
    title: "Transaction Statuses",
    content: "Successful, Pending, Failed, Cancelled, Refunded transaction states",
    url: "/transaction-dynamics",
    section: "Status Types"
  }
];

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowSuggestions(false);
    setSearchTerm('');
  }, [location.pathname]);

  useEffect(() => {
    if (searchTerm.trim().length === 0) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Simulate search delay
    const timeoutId = setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.section?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filtered);
      setIsSearching(false);
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        isSearching,
        showSuggestions,
        setShowSuggestions,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};