import {CheckCircle, XCircle, Clock, AlertTriangle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const StatusResponses = () => {
    const getErrorResponseCode = () => {
        return `{
  "error": {
    "type": "invalid_request_error",
    "code": "missing_required_field",
    "message": "The 'amount' field is required",
    "field": "amount",
    "request_id": "req_abc123"
  }
}`;
    };

    const getErrorHandlingExampleCode = () => {
        return `async function handleAPICall() {
  try {
    const response = await fetch('/api/v1/transactions', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + apiKey },
      body: JSON.stringify(transactionData)
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('API Error:', error.error.message);

      if (response.status === 429) {
        // Handle rate limiting
        const retryAfter = response.headers.get('retry-after');
        await delay(retryAfter * 1000);
        return handleAPICall(); // Retry
      }

      throw new Error(error.error.message);
    }

    return await response.json();
  } catch (error) {
    console.error('Request failed:', error.message);
    throw error;
  }
}`;
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="prose prose-invert max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Status Responses and Their
                    Meanings</h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    Understanding API status codes and response patterns is crucial for building robust integrations.
                    This guide explains all possible status responses and how to handle them appropriately.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">HTTP Status Codes</h2>

                    <div className="space-y-6">
                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">2xx
                                        Success</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white dark:bg-green-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-green-800 dark:text-green-200 mb-1">200
                                                OK
                                            </div>
                                            <div className="text-sm text-green-700 dark:text-green-300">Request
                                                successful, response contains data
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-green-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-green-800 dark:text-green-200 mb-1">201
                                                Created
                                            </div>
                                            <div className="text-sm text-green-700 dark:text-green-300">Resource
                                                successfully created
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-green-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-green-800 dark:text-green-200 mb-1">202
                                                Accepted
                                            </div>
                                            <div className="text-sm text-green-700 dark:text-green-300">Request accepted
                                                for processing
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-green-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-green-800 dark:text-green-200 mb-1">204
                                                No Content
                                            </div>
                                            <div className="text-sm text-green-700 dark:text-green-300">Successful
                                                deletion or update with no response body
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <AlertTriangle className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-3">4xx
                                        Client Errors</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white dark:bg-yellow-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-yellow-800 dark:text-yellow-200 mb-1">400
                                                Bad Request
                                            </div>
                                            <div className="text-sm text-yellow-700 dark:text-yellow-300">Invalid
                                                request format or missing required fields
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-yellow-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-yellow-800 dark:text-yellow-200 mb-1">401
                                                Unauthorized
                                            </div>
                                            <div className="text-sm text-yellow-700 dark:text-yellow-300">Invalid or
                                                missing API key
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-yellow-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-yellow-800 dark:text-yellow-200 mb-1">403
                                                Forbidden
                                            </div>
                                            <div className="text-sm text-yellow-700 dark:text-yellow-300">Valid API key
                                                but insufficient permissions
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-yellow-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-yellow-800 dark:text-yellow-200 mb-1">404
                                                Not Found
                                            </div>
                                            <div className="text-sm text-yellow-700 dark:text-yellow-300">Requested
                                                resource does not exist
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-yellow-900/20 rounded p-3">
                                            <div
                                                className="font-mono text-sm text-yellow-800 dark:text-yellow-200 mb-1">429
                                                Too Many Requests
                                            </div>
                                            <div className="text-sm text-yellow-700 dark:text-yellow-300">Rate limit
                                                exceeded, retry after specified time
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <XCircle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">5xx Server
                                        Errors</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white dark:bg-red-900/20 rounded p-3">
                                            <div className="font-mono text-sm text-red-800 dark:text-red-200 mb-1">500
                                                Internal Server Error
                                            </div>
                                            <div className="text-sm text-red-700 dark:text-red-300">Unexpected server
                                                error, retry with exponential backoff
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-red-900/20 rounded p-3">
                                            <div className="font-mono text-sm text-red-800 dark:text-red-200 mb-1">502
                                                Bad Gateway
                                            </div>
                                            <div className="text-sm text-red-700 dark:text-red-300">Temporary server
                                                issue, safe to retry
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-red-900/20 rounded p-3">
                                            <div className="font-mono text-sm text-red-800 dark:text-red-200 mb-1">503
                                                Service Unavailable
                                            </div>
                                            <div className="text-sm text-red-700 dark:text-red-300">Service temporarily
                                                down for maintenance
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Transaction Status Values</h2>

                    <div className="space-y-4">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <CheckCircle className="h-6 w-6 text-green-500"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">successful</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Transaction completed successfully and funds have been transferred.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-900 dark:text-gray-100 break-all">"status": "successful"</div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Clock className="h-6 w-6 text-yellow-500"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">pending</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Transaction is being processed. Monitor for status changes via webhooks.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-900 dark:text-gray-100 break-all">"status": "pending"</div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-red-500"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">failed</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Transaction could not be completed. Check the error details for specific reason.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-900 dark:text-gray-100 break-all">"status": "failed"</div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-orange-500"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">cancelled</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Transaction was intentionally cancelled before completion.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-900 dark:text-gray-100 break-all">"status": "cancelled"</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Error Response Format</h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        All error responses follow a consistent format to help you handle them programmatically:
                    </p>

                    <CodeBlock language="json">{getErrorResponseCode()}</CodeBlock>

                    <div className="space-y-4">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">type</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Category of error
                                (invalid_request_error, authentication_error, etc.)
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">code</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Specific error code for
                                programmatic handling
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">message</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Human-readable error description
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">field</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Specific field that caused the
                                error (when applicable)
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">request_id</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Unique identifier for debugging
                                and support
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Handling Errors</h2>

                    <div
                        className="bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-3">Best
                            Practices</h3>
                        <ul className="space-y-2 text-brand-800 dark:text-brand-200">
                            <li>• Always check the status code before processing the response</li>
                            <li>• Implement retry logic with exponential backoff for 5xx errors</li>
                            <li>• Log error details including request_id for debugging</li>
                            <li>• Handle rate limiting gracefully using Retry-After headers</li>
                            <li>• Validate input data before sending requests to avoid 4xx errors</li>
                        </ul>
                    </div>

                    <CodeBlock
                        title="Example Error Handling (JavaScript)"
                        language="javascript"
                    >{getErrorHandlingExampleCode()}</CodeBlock>
                </section>
            </div>

            {/* Pagination Navigation */}
            <PaginationNavigation
                previousPage={{
                    title: "User Roles and Permissions",
                    href: "/user-roles"
                }}
                nextPage={{
                    title: "Transaction Dynamics",
                    href: "/transaction-dynamics"
                }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-gray-500 text-sm">All rights reserved</p>
            </footer>
        </div>
    );
};

export default StatusResponses;

