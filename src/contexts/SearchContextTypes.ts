import {createContext} from "react";
import type {LucideIcon} from "lucide-react";

export interface SearchItem {
    title: string;
    content: string;
    url: string;
    section?: string;
    keywords?: string[];
    icon?: LucideIcon;
    aliases?: string[]; // Alternative names/spellings
    category?: string; // For grouping results
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