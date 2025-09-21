import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import { SearchContext } from "./SearchContextTypes";
import type { SearchItem } from "./SearchContextTypes";

const searchData: SearchItem[] = [
    // Getting Started
    {
        title: "Homepage",
        content: "Welcome to Passpoint API documentation",
        url: "/",
        section: "GETTING STARTED",
        keywords: ["home", "welcome", "start", "overview"]
    },
    {
        title: "Introduction",
        content: "Get started with Passpoint APIs and learn the basics",
        url: "/introduction",
        section: "GETTING STARTED",
        keywords: ["introduction", "basics", "getting started", "overview"]
    },
    {
        title: "Authentication",
        content: "API authentication, API keys, and security implementation",
        url: "/authentication",
        section: "GETTING STARTED",
        keywords: ["authentication", "auth", "api key", "security", "token", "bearer"]
    },
    {
        title: "API Integrations",
        content: "REST API, SDKs, Webhooks, Authentication, Quick Start Examples",
        url: "/api-integrations",
        section: "GETTING STARTED",
        keywords: ["integration", "rest", "sdk", "webhook", "api"]
    },

    // Guides
    {
        title: "Quick Guides",
        content: "Fast track guides to get you started with common integration patterns",
        url: "/quick-guides",
        section: "GUIDES",
        keywords: ["quick", "guide", "tutorial", "example", "pattern"]
    },
    {
        title: "API Rate Limits",
        content: "Learn about API rate limiting, quotas, and best practices for managing requests",
        url: "/api-rate-limits",
        section: "GUIDES",
        keywords: ["rate", "limit", "quota", "throttle", "request"]
    },
    {
        title: "Global Callback Setup",
        content: "Configure global webhooks and callback URLs for your application",
        url: "/global-callback-setup",
        section: "GUIDES",
        keywords: ["callback", "webhook", "global", "notification", "event"]
    },

    // Core Services
    {
        title: "Wallet",
        content: "Digital wallet management, balance operations, and multi-currency support",
        url: "/wallet",
        section: "CORE SERVICES",
        keywords: ["wallet", "balance", "digital", "currency", "account"]
    },
    {
        title: "Transfer",
        content: "Send money between wallets, accounts, and payment methods",
        url: "/transfer",
        section: "CORE SERVICES",
        keywords: ["transfer", "send", "money", "payment", "move"]
    },
    {
        title: "Collection",
        content: "Collect payments from customers through multiple channels",
        url: "/collection",
        section: "CORE SERVICES",
        keywords: ["collection", "collect", "payment", "receive", "invoice"]
    },
    {
        title: "Payout",
        content: "Process secure payouts to bank accounts, cards, and digital wallets",
        url: "/payout",
        section: "CORE SERVICES",
        keywords: ["payout", "disburse", "send", "withdraw", "distribute"]
    },

    // Collection Methods
    {
        title: "Bank Collections",
        content: "Collect payments from bank accounts worldwide using Open Banking APIs",
        url: "/collection/bank",
        section: "COLLECTIONS",
        keywords: ["bank", "collection", "open banking", "ach", "wire"]
    },
    {
        title: "Direct Bank Options",
        content: "Generate virtual accounts and manage direct bank integrations",
        url: "/collection/bank/direct",
        section: "COLLECTIONS",
        keywords: ["direct", "bank", "virtual", "account", "integration"]
    },
    {
        title: "Open Banking Collections",
        content: "Secure bank-to-bank payments using Open Banking APIs",
        url: "/collection/bank/open-banking",
        section: "COLLECTIONS",
        keywords: ["open banking", "bank", "secure", "api", "psd2"]
    },

    // Payout Methods
    {
        title: "Bank Payouts",
        content: "Process secure bank transfers for local and international recipients",
        url: "/payout/bank",
        section: "PAYOUTS",
        keywords: ["bank", "payout", "transfer", "wire", "ach"]
    },
    {
        title: "Local Bank Transfers",
        content: "Process domestic bank transfers with same-day ACH and wire transfers",
        url: "/payout/bank/local",
        section: "PAYOUTS",
        keywords: ["local", "domestic", "bank", "ach", "wire", "same day"]
    },
    {
        title: "Foreign Bank Transfers",
        content: "Global payment network supporting international wire transfers",
        url: "/payout/bank/foreign",
        section: "PAYOUTS",
        keywords: ["foreign", "international", "wire", "global", "cross border"]
    },
    {
        title: "Convert Funds",
        content: "Convert funds between different currencies in your Passpoint wallet",
        url: "/payout/convert-funds",
        section: "PAYOUTS",
        keywords: ["convert", "currency", "exchange", "rate", "fx"]
    },

    // Foreign Bank Transfer Methods
    {
        title: "Account Deposit - CNY",
        content: "Deposit funds to Chinese Yuan bank accounts",
        url: "/payout/bank/foreign/account-deposit-cny",
        section: "FOREIGN TRANSFERS",
        keywords: ["cny", "china", "yuan", "deposit", "account"]
    },
    {
        title: "Account Deposit - EUR",
        content: "Deposit funds to Euro bank accounts",
        url: "/payout/bank/foreign/account-deposit-eur",
        section: "FOREIGN TRANSFERS",
        keywords: ["eur", "euro", "europe", "deposit", "account"]
    },
    {
        title: "Account Deposit - GBP",
        content: "Deposit funds to British Pound bank accounts",
        url: "/payout/bank/foreign/account-deposit-gbp",
        section: "FOREIGN TRANSFERS",
        keywords: ["gbp", "pound", "uk", "britain", "deposit"]
    },
    {
        title: "Account Deposit - USD",
        content: "Deposit funds to US Dollar bank accounts",
        url: "/payout/bank/foreign/account-deposit-usd",
        section: "FOREIGN TRANSFERS",
        keywords: ["usd", "dollar", "usa", "america", "deposit"]
    },
    {
        title: "ACH Transfer - USD",
        content: "Process ACH transfers in US Dollars",
        url: "/payout/bank/foreign/ach-usd",
        section: "FOREIGN TRANSFERS",
        keywords: ["ach", "usd", "dollar", "automated", "clearing"]
    },
    {
        title: "B2B Transfer - CNY",
        content: "Business-to-business transfers in Chinese Yuan",
        url: "/payout/bank/foreign/b2b-transfer-cny",
        section: "FOREIGN TRANSFERS",
        keywords: ["b2b", "business", "cny", "yuan", "china"]
    },
    {
        title: "B2B Transfer - USD",
        content: "Business-to-business transfers in US Dollars",
        url: "/payout/bank/foreign/b2b-transfer-usd",
        section: "FOREIGN TRANSFERS",
        keywords: ["b2b", "business", "usd", "dollar"]
    },
    {
        title: "B2C Transfer - CNY",
        content: "Business-to-consumer transfers in Chinese Yuan",
        url: "/payout/bank/foreign/b2c-transfer-cny",
        section: "FOREIGN TRANSFERS",
        keywords: ["b2c", "consumer", "cny", "yuan", "china"]
    },
    {
        title: "FedNow Transfer - USD",
        content: "Real-time payments using the Federal Reserve's FedNow service",
        url: "/payout/bank/foreign/fednow-usd",
        section: "FOREIGN TRANSFERS",
        keywords: ["fednow", "federal", "reserve", "real time", "usd"]
    },
    {
        title: "Get Available Countries",
        content: "Retrieve list of countries supported for foreign transfers",
        url: "/payout/bank/foreign/get-available-countries",
        section: "FOREIGN TRANSFERS",
        keywords: ["countries", "supported", "foreign", "international"]
    },
    {
        title: "Get Payment Methods",
        content: "Retrieve available payment methods for foreign transfers",
        url: "/payout/bank/foreign/get-payment-methods",
        section: "FOREIGN TRANSFERS",
        keywords: ["payment", "methods", "foreign", "options"]
    },
    {
        title: "MoMo Deposit - CNY",
        content: "Mobile money deposits in Chinese Yuan",
        url: "/payout/bank/foreign/momo-deposit-cny",
        section: "FOREIGN TRANSFERS",
        keywords: ["momo", "mobile", "money", "deposit", "cny", "china"]
    },
    {
        title: "RTP Transfer - USD",
        content: "Real-time payments using RTP network in US Dollars",
        url: "/payout/bank/foreign/rtp-usd",
        section: "FOREIGN TRANSFERS",
        keywords: ["rtp", "real time", "payment", "usd", "instant"]
    },
    {
        title: "Wire Transfer - USD",
        content: "Traditional wire transfers in US Dollars",
        url: "/payout/bank/foreign/wire-usd",
        section: "FOREIGN TRANSFERS",
        keywords: ["wire", "transfer", "usd", "traditional", "swift"]
    },
    {
        title: "Foreign Transfer Summary",
        content: "Overview of all foreign transfer options and capabilities",
        url: "/payout/bank/foreign/summary",
        section: "FOREIGN TRANSFERS",
        keywords: ["summary", "overview", "foreign", "international"]
    },

    // Local Bank Transfer Methods
    {
        title: "Account Enquiry",
        content: "Verify and enquire about local bank account details",
        url: "/payout/bank/local/account-enquiry",
        section: "LOCAL TRANSFERS",
        keywords: ["enquiry", "verify", "account", "local", "bank"]
    },
    {
        title: "Account Transfer - NGN",
        content: "Transfer funds to Nigerian Naira bank accounts",
        url: "/payout/bank/local/account-transfer-ngn",
        section: "LOCAL TRANSFERS",
        keywords: ["ngn", "naira", "nigeria", "account", "transfer"]
    },
    {
        title: "Get Banks",
        content: "Retrieve list of supported local banks",
        url: "/payout/bank/local/get-banks",
        section: "LOCAL TRANSFERS",
        keywords: ["banks", "local", "list", "supported"]
    },
    {
        title: "Passpoint Enquiry",
        content: "Verify a passpoint beneficiary wallet",
        url: "/payout/bank/local/passpoint-enquiry",
        section: "LOCAL TRANSFERS",
        keywords: ["passpoint", "enquiry", "wallet", "beneficiary", "verify"]
    },

    // Mobile Money (MoMo) Services
    {
        title: "MoMo Get Currency",
        content: "Get supported currencies for mobile money transfers",
        url: "/payout/momo/get-payout-network",
        section: "MOBILE MONEY",
        keywords: ["momo", "mobile", "money", "currency", "supported"]
    },
    {
        title: "MoMo Get Network",
        content: "Retrieve available mobile money networks and providers",
        url: "/payout/momo/get-network",
        section: "MOBILE MONEY",
        keywords: ["momo", "mobile", "money", "network", "provider", "operator"]
    },
    {
        title: "MoMo Transfer",
        content: "Send money to mobile money wallets and accounts",
        url: "/payout/momo/transfer",
        section: "MOBILE MONEY",
        keywords: ["momo", "mobile", "money", "transfer", "send", "wallet"]
    },
    {
        title: "MoMo Validate MSISDN",
        content: "Validate mobile phone numbers for mobile money transfers",
        url: "/payout/momo/validate-msisdn",
        section: "MOBILE MONEY",
        keywords: ["momo", "mobile", "money", "validate", "msisdn", "phone", "number"]
    },

    // Additional Core Pages
    {
        title: "User Roles and Permissions",
        content: "Manage user access levels and permission systems",
        url: "/user-roles",
        section: "ADMINISTRATION",
        keywords: ["user", "roles", "permissions", "access", "admin"]
    },
    {
        title: "Status Responses",
        content: "HTTP status codes and their meanings in Passpoint API",
        url: "/status-responses",
        section: "REFERENCE",
        keywords: ["status", "response", "http", "code", "error"]
    },

    // Additional searchable terms for better keyword matching
    {
        title: "Mobile Money",
        content: "Mobile money transfers, networks, and validation services",
        url: "/payout/momo/transfer",
        section: "MOBILE MONEY",
        keywords: ["mobile", "money", "momo", "airtel", "mtn", "vodacom", "orange"]
    },
    {
        title: "Webhooks",
        content: "Real-time notifications about transaction events and system updates",
        url: "/global-callback-setup",
        section: "INTEGRATION",
        keywords: ["webhook", "callback", "notification", "event", "real time"]
    },
    {
        title: "API Documentation",
        content: "Complete API reference and documentation",
        url: "/api-integrations",
        section: "REFERENCE",
        keywords: ["api", "documentation", "reference", "endpoint"]
    },
    {
        title: "Bank Transfers",
        content: "Local and international bank transfer services",
        url: "/payout/bank",
        section: "TRANSFERS",
        keywords: ["bank", "transfer", "wire", "ach", "swift"]
    },
    {
        title: "Payment Processing",
        content: "Process payments and handle payment flows",
        url: "/collection",
        section: "PAYMENTS",
        keywords: ["payment", "process", "flow", "checkout"]
    }
];

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowSuggestions(false);
        setSearchTerm("");
    }, [location.pathname]);

    useEffect(() => {
        if (searchTerm.trim().length === 0) {
            setSearchResults([]);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);

        // Enhanced search with timeout
        const timeoutId = setTimeout(() => {
            const searchTermLower = searchTerm.toLowerCase();

            const filtered = searchData.filter(item => {
                // Search in title
                const titleMatch = item.title.toLowerCase().includes(searchTermLower);

                // Search in content
                const contentMatch = item.content.toLowerCase().includes(searchTermLower);

                // Search in section
                const sectionMatch = item.section?.toLowerCase().includes(searchTermLower);

                // Search in keywords
                const keywordMatch = item.keywords?.some(keyword =>
                    keyword.toLowerCase().includes(searchTermLower) ||
                    searchTermLower.includes(keyword.toLowerCase())
                );

                // Search in URL path segments
                const urlMatch = item.url.split("/").some(segment =>
                    segment.toLowerCase().includes(searchTermLower)
                );

                return titleMatch || contentMatch || sectionMatch || keywordMatch || urlMatch;
            });

            // Sort results by relevance
            const sortedResults = filtered.sort((a, b) => {
                const aTitle = a.title.toLowerCase();
                const bTitle = b.title.toLowerCase();
                const searchLower = searchTermLower;

                // Exact title matches first
                if (aTitle === searchLower) return -1;
                if (bTitle === searchLower) return 1;

                // Title starts with search term
                if (aTitle.startsWith(searchLower) && !bTitle.startsWith(searchLower)) return -1;
                if (bTitle.startsWith(searchLower) && !aTitle.startsWith(searchLower)) return 1;

                // Title contains search term
                if (aTitle.includes(searchLower) && !bTitle.includes(searchLower)) return -1;
                if (bTitle.includes(searchLower) && !aTitle.includes(searchLower)) return 1;

                // Keyword matches
                const aKeywordMatch = a.keywords?.some(k => k.toLowerCase().includes(searchLower));
                const bKeywordMatch = b.keywords?.some(k => k.toLowerCase().includes(searchLower));

                if (aKeywordMatch && !bKeywordMatch) return -1;
                if (bKeywordMatch && !aKeywordMatch) return 1;

                return 0;
            });

            setSearchResults(sortedResults);
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