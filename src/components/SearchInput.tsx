import React, {useRef, useEffect} from "react";
import {
    Search,
    Loader2,
    FileText,
    Book,
    Users,
    BarChart3,
    Home,
    Settings,
    X,
    Smartphone,
    Building2,
    Globe,
    CreditCard,
    Banknote
} from "lucide-react";
import {useSearch} from "@/hooks/useSearch";
import {useNavigate} from "react-router-dom";
import {cn} from "@/lib/utils";

interface SearchInputProps {
    className?: string;
    placeholder?: string;
}

const getIcon = (url: string, section?: string) => {
    // Home and main pages
    if (url === "/") return Home;

    // Mobile Money (MoMo) pages
    if (url.includes("momo") || section === "MOBILE MONEY") return Smartphone;

    // Bank related pages
    if (url.includes("bank") || url.includes("account-deposit") || url.includes("wire") || url.includes("ach")) return Building2;

    // Foreign/International transfers
    if (url.includes("foreign") || section === "FOREIGN TRANSFERS") return Globe;

    // Collections and payments
    if (url.includes("collection") || url.includes("payment") || section === "COLLECTIONS" || section === "PAYMENTS") return CreditCard;

    // Payouts and transfers
    if (url.includes("payout") || url.includes("transfer") || section === "PAYOUTS" || section === "TRANSFERS") return Banknote;

    // API and technical docs
    if (url.includes("api-rate-limits") || url.includes("status-responses") || section === "REFERENCE") return BarChart3;

    // Guides and tutorials
    if (url.includes("quick-guides") || url.includes("introduction") || section === "GUIDES") return Book;

    // User management
    if (url.includes("user-roles") || section === "ADMINISTRATION") return Users;

    // Integration and settings
    if (url.includes("api-integrations") || url.includes("callback") || section === "INTEGRATION") return Settings;

    // Default fallback
    return FileText;
};

const SearchInput: React.FC<SearchInputProps> = ({
                                                     className,
                                                     placeholder = "Search API Docs..."
                                                 }) => {
    const {
        searchTerm,
        setSearchTerm,
        searchResults,
        isSearching,
        showSuggestions,
        setShowSuggestions,
    } = useSearch();

    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowSuggestions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        setShowSuggestions(value.trim().length > 0);
    };

    const handleInputFocus = () => {
        if (searchTerm.trim().length > 0) {
            setShowSuggestions(true);
        }
    };

    const handleResultClick = (url: string) => {
        console.log("Search result clicked:", url);

        // Close search suggestions
        setShowSuggestions(false);
        setSearchTerm("");

        // Navigate immediately
        console.log("Navigating to:", url);
        navigate(url);
    };

    const handleClearSearch = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setSearchTerm("");
        setShowSuggestions(false);
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setShowSuggestions(false);
            inputRef.current?.blur();
        } else if (e.key === "Enter" && searchResults.length > 0) {
            // Navigate to first result on Enter
            e.preventDefault();
            handleResultClick(searchResults[0].url);
        }
    };

    return (
        <div ref={containerRef} className={cn("relative w-full", className)}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"/>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md pl-10 pr-10 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
                {/* Clear button - only show when there's text and not searching */}
                {searchTerm.trim().length > 0 && !isSearching && (
                    <button
                        onClick={handleClearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-0.5 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Clear search"
                        type="button"
                    >
                        <X className="h-3.5 w-3.5"/>
                    </button>
                )}
                {/* Loading spinner */}
                {isSearching && (
                    <Loader2
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 animate-spin"/>
                )}
            </div>

            {/* Search Suggestions */}
            {showSuggestions && searchTerm.trim().length > 0 && (
                <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                    {searchResults.length > 0 ? (
                        <div className="py-2">
                            {searchResults.slice(0, 10).map((result, index) => {
                                const Icon = getIcon(result.url, result.section);
                                return (
                                    <div
                                        key={`${result.url}-${index}`}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            console.log("MouseDown - URL:", result.url);
                                            window.location.href = result.url;
                                        }}
                                        className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0 cursor-pointer group"
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <div className="flex items-start gap-3">
                                            <Icon
                                                className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0 group-hover:text-brand-500 transition-colors"/>
                                            <div className="min-w-0 flex-1">
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                                    {result.title}
                                                </div>
                                                <div
                                                    className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                                    {result.content}
                                                </div>
                                                {result.section && (
                                                    <div
                                                        className="text-xs text-brand-600 dark:text-brand-400 mt-1 font-medium">
                                                        {result.section}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {searchResults.length > 10 && (
                                <div
                                    className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                    Showing first 10 of {searchResults.length} results
                                </div>
                            )}
                        </div>
                    ) : !isSearching ? (
                        <div className="px-4 py-6 text-center">
                            <div className="text-gray-500 dark:text-gray-400 text-sm">
                                No results found for "{searchTerm}"
                            </div>
                            <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                                Try searching for: momo, bank, transfer, collection, payout, api, webhook
                            </div>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default SearchInput;