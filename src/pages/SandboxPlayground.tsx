import React, {useState} from "react";
import {Play, Code, Settings, Zap, AlertCircle, CheckCircle, Clock} from "lucide-react";
import {Button} from "@/components/ui/button";
import InteractiveCodeBlock from "@/components/InteractiveCodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

interface ApiResponse {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    data: unknown;
    responseTime: number;
}

interface ApiError {
    message: string;
    status?: number;
    details?: unknown;
}

const SandboxPlayground = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState("wallet/balance");
    const [requestBody, setRequestBody] = useState("");
    const [headers, setHeaders] = useState("");
    const [response, setResponse] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<ApiError | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const endpoints = [
        {
            id: "wallet/balance",
            name: "Get Wallet Balance",
            method: "GET",
            url: "https://dev.mypasspoint.com/paypass/api/v1/wallet/balance",
            description: "Retrieve wallet balance information",
            defaultHeaders: {
                "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                "Content-Type": "application/json",
                "X-Channel-Id": "3",
                "X-Channel-Code": "legacy-api-user"
            },
            defaultBody: null
        },
        {
            id: "wallet/create",
            name: "Create Wallet",
            method: "POST",
            url: "https://dev.mypasspoint.com/paypass/api/v1/wallet/create",
            description: "Create a new wallet",
            defaultHeaders: {
                "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                "Content-Type": "application/json",
                "X-Channel-Id": "3",
                "X-Channel-Code": "legacy-api-user"
            },
            defaultBody: {
                "currency": "NGN",
                "name": "Main Wallet"
            }
        },
        {
            id: "payout/momo/transfer",
            name: "Mobile Money Transfer",
            method: "POST",
            url: "https://dev.mypasspoint.com/paypass/api/v1/payout/momo/transfer",
            description: "Transfer funds via mobile money",
            defaultHeaders: {
                "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                "Content-Type": "application/json",
                "X-Channel-Id": "3",
                "X-Channel-Code": "legacy-api-user"
            },
            defaultBody: {
                "amount": "1000",
                "currency": "NGN",
                "recipientPhone": "+2348123456789",
                "network": "MTN",
                "reference": "TXN_" + Date.now(),
                "description": "Test transfer"
            }
        },
        {
            id: "collection/virtual-account",
            name: "Generate Virtual Account",
            method: "POST",
            url: "https://dev.mypasspoint.com/paypass/api/v1/collection/virtual-account/generate",
            description: "Generate a virtual account for collections",
            defaultHeaders: {
                "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                "Content-Type": "application/json",
                "X-Channel-Id": "3",
                "X-Channel-Code": "legacy-api-user"
            },
            defaultBody: {
                "currency": "NGN",
                "accountType": "individual",
                "customerName": "John Doe",
                "customerEmail": "john.doe@example.com"
            }
        }
    ];

    const selectedEndpointData = endpoints.find(ep => ep.id === selectedEndpoint);

    React.useEffect(() => {
        if (selectedEndpointData) {
            setHeaders(JSON.stringify(selectedEndpointData.defaultHeaders, null, 2));
            setRequestBody(selectedEndpointData.defaultBody ? JSON.stringify(selectedEndpointData.defaultBody, null, 2) : "");
            setResponse(null);
            setError(null);
        }
    }, [selectedEndpoint, selectedEndpointData]);

    const executeRequest = async () => {
        if (!selectedEndpointData) return;

        setIsLoading(true);
        setError(null);
        setResponse(null);

        const startTime = Date.now();

        try {
            let parsedHeaders: Record<string, string> = {};
            let parsedBody: unknown = null;

            // Parse headers
            try {
                parsedHeaders = headers ? JSON.parse(headers) : {};
            } catch {
                throw new Error("Invalid JSON in headers");
            }

            // Parse body for POST requests
            if (selectedEndpointData.method === "POST" && requestBody) {
                try {
                    parsedBody = JSON.parse(requestBody);
                } catch {
                    throw new Error("Invalid JSON in request body");
                }
            }

            // Prepare fetch options
            const fetchOptions: RequestInit = {
                method: selectedEndpointData.method,
                headers: {
                    ...parsedHeaders,
                    // Ensure content-type is set for POST requests
                    ...(selectedEndpointData.method === "POST" && !parsedHeaders["Content-Type"] && {
                        "Content-Type": "application/json"
                    })
                },
                // Handle CORS
                mode: "cors",
                credentials: "omit"
            };

            // Add body for POST requests
            if (parsedBody && selectedEndpointData.method === "POST") {
                fetchOptions.body = JSON.stringify(parsedBody);
            }

            console.log("Making API request:", {
                url: selectedEndpointData.url,
                method: selectedEndpointData.method,
                headers: fetchOptions.headers,
                body: fetchOptions.body
            });

            const response = await fetch(selectedEndpointData.url, fetchOptions);

            let responseData: unknown;
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                try {
                    responseData = await response.json();
                } catch {
                    responseData = await response.text();
                }
            } else {
                responseData = await response.text();
            }

            const endTime = Date.now();

            // Convert headers to object
            const responseHeaders: Record<string, string> = {};
            response.headers.forEach((value, key) => {
                responseHeaders[key] = value;
            });

            setResponse({
                status: response.status,
                statusText: response.statusText,
                headers: responseHeaders,
                data: responseData,
                responseTime: endTime - startTime
            });

        } catch (err: unknown) {
            const error = err as Error;
            console.error("API request failed:", error);

            // Handle specific error types
            let errorMessage = error.message || "Request failed";

            if (error.name === "TypeError" && error.message.includes("fetch")) {
                errorMessage = "Network error: Unable to reach the API endpoint. This might be due to CORS restrictions or the server being unavailable.";
            } else if (error.message.includes("CORS")) {
                errorMessage = "CORS error: The API endpoint doesn't allow requests from this domain.";
            }

            setError({
                message: errorMessage,
                details: error
            });
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusColor = (status: number) => {
        if (status >= 200 && status < 300) return "text-green-600 dark:text-green-400";
        if (status >= 400 && status < 500) return "text-orange-600 dark:text-orange-400";
        if (status >= 500) return "text-red-600 dark:text-red-400";
        return "text-gray-600 dark:text-gray-400";
    };

    const getStatusIcon = (status: number) => {
        if (status >= 200 && status < 300) return <CheckCircle className="h-4 w-4"/>;
        if (status >= 400) return <AlertCircle className="h-4 w-4"/>;
        return <Clock className="h-4 w-4"/>;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-1.5 sm:p-2 bg-brand-100 dark:bg-brand-900/20 rounded-lg">
                            <Code className="h-5 w-5 sm:h-6 sm:w-6 text-brand-600 dark:text-brand-400"/>
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                Sandbox Playground
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                                Test API endpoints interactively with real-time responses
                            </p>
                        </div>
                    </div>
                </div>

                {/* Endpoint Selection */}
                <div className="mb-4 sm:mb-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">
                        Select API Endpoint
                    </label>
                    <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {endpoints.map((endpoint) => (
                            <button
                                key={endpoint.id}
                                onClick={() => setSelectedEndpoint(endpoint.id)}
                                className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 text-left transition-all hover:shadow-md ${
                                    selectedEndpoint === endpoint.id
                                        ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-400"
                                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50"
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                                    <span className={`px-2 py-0.5 sm:py-1 text-xs font-medium rounded ${
                                        endpoint.method === "GET"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                                    }`}>
                                        {endpoint.method}
                                    </span>
                                </div>
                                <h3 className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm mb-1">
                                    {endpoint.name}
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {endpoint.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Request Panel */}
                    <div className="w-full">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400"/>
                                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Request
                                    Configuration</h2>
                            </div>

                            {selectedEndpointData && (
                                <div className="space-y-3 sm:space-y-4">
                                    {/* Endpoint Info */}
                                    <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2 py-1 text-xs font-medium rounded ${
                                                    selectedEndpointData.method === "GET"
                                                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                                                }`}>
                                                    {selectedEndpointData.method}
                                                </span>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {selectedEndpointData.name}
                                                </span>
                                            </div>
                                        </div>
                                        <code
                                            className="text-xs text-gray-600 dark:text-gray-400 break-all block overflow-x-auto">
                                            {selectedEndpointData.url}
                                        </code>
                                    </div>

                                    {/* Headers */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                            Headers
                                        </label>
                                        <InteractiveCodeBlock
                                            value={headers}
                                            onChange={setHeaders}
                                            language="json"
                                            placeholder="Enter request headers..."
                                            title="Request Headers"
                                            minHeight="150px"
                                            readOnly={false}
                                        />
                                    </div>

                                    {/* Request Body (for POST requests) */}
                                    {selectedEndpointData.method === "POST" && (
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                Request Body
                                            </label>
                                            <InteractiveCodeBlock
                                                value={requestBody}
                                                onChange={setRequestBody}
                                                language="json"
                                                placeholder="Enter request body..."
                                                title="Request Body"
                                                minHeight="150px"
                                                readOnly={false}
                                            />
                                        </div>
                                    )}

                                    {/* Execute Button */}
                                    <Button
                                        onClick={executeRequest}
                                        disabled={isLoading}
                                        className="w-full bg-[#0099c2] hover:bg-[#0087a8] disabled:opacity-50 h-10 sm:h-12"
                                        size="lg"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div
                                                    className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"/>
                                                <span className="text-sm sm:text-base">Executing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Play className="h-4 w-4 mr-2"/>
                                                <span className="text-sm sm:text-base">Execute Request</span>
                                            </>
                                        )}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Response Panel */}
                    <div className="w-full">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400"/>
                                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Response</h2>
                            </div>

                            {/* Loading State */}
                            {isLoading && (
                                <div className="flex items-center justify-center py-8 sm:py-12">
                                    <div className="text-center">
                                        <div
                                            className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-3 sm:mb-4"/>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Executing
                                            request...</p>
                                    </div>
                                </div>
                            )}

                            {/* Error State */}
                            {error && (
                                <div
                                    className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400"/>
                                        <h3 className="font-medium text-red-900 dark:text-red-100 text-sm sm:text-base">Error</h3>
                                    </div>
                                    <p className="text-red-700 dark:text-red-300 text-xs sm:text-sm">{error.message}</p>
                                </div>
                            )}

                            {/* Success Response */}
                            {response && (
                                <div className="space-y-3 sm:space-y-4">
                                    {/* Response Status */}
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(response.status)}
                                            <span
                                                className={`font-medium text-sm sm:text-base ${getStatusColor(response.status)}`}>
                                                {response.status} {response.statusText}
                                            </span>
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                            {response.responseTime}ms
                                        </span>
                                    </div>

                                    {/* Response Headers */}
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Response
                                            Headers</h4>
                                        <InteractiveCodeBlock
                                            value={JSON.stringify(response.headers, null, 2)}
                                            readOnly
                                            language="json"
                                            title="Response Headers"
                                            minHeight="120px"
                                        />
                                    </div>

                                    {/* Response Body */}
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Response
                                            Body</h4>
                                        <InteractiveCodeBlock
                                            value={JSON.stringify(response.data, null, 2)}
                                            readOnly
                                            language="json"
                                            title="Response Body"
                                            minHeight="200px"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Empty State */}
                            {!isLoading && !error && !response && (
                                <div className="text-center py-8 sm:py-12">
                                    <div
                                        className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400"/>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                                        Ready to test
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
                                        Configure your request and click "Execute Request" to see the response
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Pagination Navigation */}
                <div className="mt-6 sm:mt-8">
                    <PaginationNavigation
                        previousPage={{
                            title: "Status Responses",
                            href: "/status-responses"
                        }}
                        nextPage={{
                            title: "API Rate Limits",
                            href: "/api-rate-limits"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SandboxPlayground;

