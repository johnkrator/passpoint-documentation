import React, {useRef, useEffect, useState, useCallback} from "react";
import {Search, Loader2, X, FileText} from "lucide-react";
import {useSearch} from "@/hooks/useSearch";
import {useNavigate} from "react-router-dom";
import {cn} from "@/lib/utils";

interface SearchInputProps {
    className?: string;
    placeholder?: string;
}

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
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    // Close suggestions on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Don't close if clicking on search results
            if (target.closest("[data-search-result]")) {
                return;
            }

            if (containerRef.current && !containerRef.current.contains(target)) {
                setShowSuggestions(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowSuggestions]);

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(-1);
    }, [searchResults]);

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

    const handleResultClick = useCallback((url: string) => {
        // Close search suggestions
        setShowSuggestions(false);
        setSearchTerm("");
        setSelectedIndex(-1);

        // Navigate using React Router for internal routes, or window.location for external
        if (url.startsWith("http")) {
            window.location.href = url;
        } else {
            navigate(url);
        }
    }, [navigate, setSearchTerm, setShowSuggestions]);

    const handleClearSearch = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setSearchTerm("");
        setShowSuggestions(false);
        setSelectedIndex(-1);
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!showSuggestions || searchResults.length === 0) {
            if (e.key === "Escape") {
                setShowSuggestions(false);
                setSelectedIndex(-1);
                inputRef.current?.blur();
            }
            return;
        }

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < Math.min(searchResults.length - 1, 9) ? prev + 1 : prev
                );
                break;

            case "ArrowUp":
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
                break;

            case "Enter":
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
                    handleResultClick(searchResults[selectedIndex].url);
                } else if (searchResults.length > 0) {
                    handleResultClick(searchResults[0].url);
                }
                break;

            case "Escape":
                e.preventDefault();
                setShowSuggestions(false);
                setSelectedIndex(-1);
                inputRef.current?.blur();
                break;

            default:
                break;
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
                    aria-label="Search documentation"
                    aria-autocomplete="list"
                    aria-controls="search-results"
                    aria-expanded={showSuggestions && searchTerm.trim().length > 0}
                />
                {/* Clear button */}
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
                    id="search-results"
                    role="listbox"
                    className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
                >
                    {searchResults.length > 0 ? (
                        <div className="py-2">
                            {searchResults.slice(0, 10).map((result, index) => {
                                const Icon = result.icon || FileText;
                                const isSelected = index === selectedIndex;

                                return (
                                    <button
                                        key={`${result.url}-${index}`}
                                        onClick={() => handleResultClick(result.url)}
                                        className={cn(
                                            "w-full text-left px-4 py-3 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0 cursor-pointer group",
                                            isSelected
                                                ? "bg-gray-200 dark:bg-gray-700"
                                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                        )}
                                        role="option"
                                        aria-selected={isSelected}
                                        tabIndex={-1}
                                        data-search-result
                                    >
                                        <div className="flex items-start gap-3">
                                            <Icon
                                                className={cn(
                                                    "h-4 w-4 mt-0.5 flex-shrink-0 transition-colors",
                                                    isSelected
                                                        ? "text-brand-500"
                                                        : "text-gray-500 dark:text-gray-400 group-hover:text-brand-500"
                                                )}
                                            />
                                            <div className="min-w-0 flex-1">
                                                <div
                                                    className={cn(
                                                        "text-sm font-medium truncate transition-colors",
                                                        isSelected
                                                            ? "text-brand-700 dark:text-brand-300"
                                                            : "text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400"
                                                    )}
                                                >
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
                                    </button>
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
                                Try: momo, bank, transfer, collection, payout, webhook, ngn, usd
                            </div>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
