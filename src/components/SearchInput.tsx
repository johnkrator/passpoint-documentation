import React, { useRef, useEffect } from 'react';
import { Search, Loader2, FileText, Book, Users, BarChart3, Home, Settings } from 'lucide-react';
import { useSearch } from '@/contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

const getIcon = (url: string) => {
  if (url === '/') return Home;
  if (url.includes('api-rate-limits') || url.includes('status-responses')) return BarChart3;
  if (url.includes('quick-guides') || url.includes('introduction')) return Book;
  if (url.includes('user-roles')) return Users;
  if (url.includes('api-integrations')) return Settings;
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    navigate(url);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
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
        {isSearching && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 animate-spin" />
        )}
      </div>

      {/* Search Suggestions */}
      {showSuggestions && searchTerm.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="py-2">
              {searchResults.slice(0, 8).map((result, index) => {
                const Icon = getIcon(result.url);
                return (
                  <button
                    key={`${result.url}-${index}`}
                    onClick={() => handleResultClick(result.url)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {result.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                          {result.content}
                        </div>
                        {result.section && (
                          <div className="text-xs text-brand-600 dark:text-brand-400 mt-1 font-medium">
                            {result.section}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
              {searchResults.length > 8 && (
                <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                  {searchResults.length - 8} more results...
                </div>
              )}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                No results found for "{searchTerm}"
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Try searching for API, webhooks, transactions, or guides
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;