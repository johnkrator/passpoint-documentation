import React, {useState} from "react";
import {Code, Settings} from "lucide-react";
import SandboxTextEditor from "@/components/SandboxTextEditor.tsx";

const SandboxPlayground = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState("wallet/balance");
    const [requestData, setRequestData] = useState("");

    const endpoints = [
        {
            id: "wallet/balance",
            name: "Get Wallet Balance",
            method: "GET",
            url: "https://dev.mypasspoint.com/paypass/api/v1/wallet/balance",
            description: "Retrieve wallet balance information",
            defaultRequest: {
                headers: {
                    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                    "Content-Type": "application/json",
                    "X-Channel-Id": "3",
                    "X-Channel-Code": "legacy-api-user"
                }
            }
        },
        {
            id: "wallet/create",
            name: "Create Wallet",
            method: "POST",
            url: "https://dev.mypasspoint.com/paypass/api/v1/wallet/create",
            description: "Create a new wallet",
            defaultRequest: {
                headers: {
                    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                    "Content-Type": "application/json",
                    "X-Channel-Id": "3",
                    "X-Channel-Code": "legacy-api-user"
                },
                body: {
                    "currency": "NGN",
                    "name": "Main Wallet"
                }
            }
        },
        {
            id: "payout/momo/transfer",
            name: "Mobile Money Transfer",
            method: "POST",
            url: "https://dev.mypasspoint.com/paypass/api/v1/payout/momo/transfer",
            description: "Transfer funds via mobile money",
            defaultRequest: {
                headers: {
                    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                    "Content-Type": "application/json",
                    "X-Channel-Id": "3",
                    "X-Channel-Code": "legacy-api-user"
                },
                body: {
                    "amount": "1000",
                    "currency": "NGN",
                    "recipientPhone": "+2348123456789",
                    "network": "MTN",
                    "reference": "TXN_" + Date.now(),
                    "description": "Test transfer"
                }
            }
        },
        {
            id: "collection/virtual-account",
            name: "Generate Virtual Account",
            method: "POST",
            url: "https://dev.mypasspoint.com/paypass/api/v1/collection/virtual-account/generate",
            description: "Generate a virtual account for collections",
            defaultRequest: {
                headers: {
                    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
                    "Content-Type": "application/json",
                    "X-Channel-Id": "3",
                    "X-Channel-Code": "legacy-api-user"
                },
                body: {
                    "currency": "NGN",
                    "accountType": "individual",
                    "customerName": "John Doe",
                    "customerEmail": "john.doe@example.com"
                }
            }
        }
    ];

    const selectedEndpointData = endpoints.find(ep => ep.id === selectedEndpoint);

    React.useEffect(() => {
        if (selectedEndpointData) {
            // Combine headers and body into a single request object
            const requestObject = {
                method: selectedEndpointData.method,
                url: selectedEndpointData.url,
                headers: selectedEndpointData.defaultRequest.headers,
                ...(selectedEndpointData.defaultRequest.body && {body: selectedEndpointData.defaultRequest.body})
            };
            setRequestData(JSON.stringify(requestObject, null, 2));
        }
    }, [selectedEndpoint, selectedEndpointData]);

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

                {/* Main Content - Single Editor */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="w-full">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                            {/* Request Header */}
                            <div
                                className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700">
                                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400"/>
                                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                                    API Testing Environment
                                </h2>
                            </div>

                            {selectedEndpointData && (
                                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                    {/* Endpoint Info */}
                                    <div
                                        className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
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

                                    {/* Single API Testing Editor */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                                            Request Configuration & Response
                                        </h3>
                                        <SandboxTextEditor
                                            value={requestData}
                                            onChange={setRequestData}
                                            placeholder="Configure your API request..."
                                            title="API Request"
                                            minHeight="400px"
                                            maxHeight="600px"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SandboxPlayground;

