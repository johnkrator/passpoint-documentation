import { createContext } from "react";

export interface SearchItem {
    title: string;
    content: string;
    url: string;
    section?: string;
    keywords?: string[];
}

export interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    searchResults: SearchItem[];
    isSearching: boolean;
    showSuggestions: boolean;
    setShowSuggestions: (show: boolean) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);