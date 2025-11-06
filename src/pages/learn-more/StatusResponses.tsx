import {CheckCircle, XCircle, Clock, AlertTriangle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const StatusResponses = () => {
    const getErrorResponseCode = () => {
        return `{
  "responseCode": "31",
  "responseDescription": "Invalid Parameter",
  "responseMessage": "The 'amount' field is required and must be a positive number",
  "data": {
    "success": false,
    "error": "INVALID_PARAMETER",
    "errorDescription": "The amount field contains an invalid value"
  }
}`;
    };

    const getErrorHandlingExampleCode = () => {
        return `async function handlePasspointAPI() {
  try {
    const response = await fetch('https://api.passpoint.io/v1/transfer/status', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        'x-channel-id': '3',
        'x-channel-code': 'legacy-api-user',
        'x-merchant-id': merchantId
      },
      body: JSON.stringify({ transactionReference: 'TXN123456' })
    });

    const result = await response.json();

    // Check Passpoint response code
    if (result.responseCode === '00') {
      console.log('Success:', result.data);
      return result.data;
    } else if (result.responseCode === '01') {
      console.log('Transaction pending, check again later');
      return result;
    } else if (result.responseCode === '06') {
      // Session timeout - refresh token and retry
      console.warn('Session expired, refreshing token...');
      await refreshAccessToken();
      return handlePasspointAPI(); // Retry
    } else if (result.responseCode === '30' || result.responseCode === '31') {
      // Validation errors
      console.error('Validation error:', result.responseMessage);
      throw new Error(result.responseMessage);
    } else if (result.responseCode === '60') {
      // Security violation
      console.error('Authentication failed:', result.responseMessage);
      throw new Error('Invalid credentials');
    } else {
      // Other errors
      console.error('API error:', result.responseCode, result.responseMessage);
      throw new Error(result.responseMessage);
    }

    // Handle HTTP rate limiting
    if (response.status === 429) {
      const retryAfter = response.headers.get('retry-after');
      console.warn(\`Rate limited. Retry after \${retryAfter}s\`);
      await delay(retryAfter * 1000);
      return handlePasspointAPI();
    }

  } catch (error) {
    console.error('Request failed:', error.message);
    throw error;
  }
}`;
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="prose prose-invert max-w-4xl">
                <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Status Responses and
                    Their
                    Meanings</h1>

                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Understanding API status codes and response patterns is crucial for building robust integrations.
                    This guide explains all possible status responses and how to handle them appropriately.
                </p>

                <section className="mb-12">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6">HTTP Status
                        Codes</h2>

                    <div className="space-y-6">
                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="md:text-xl text-lg font-semibold text-green-800 dark:text-green-200 mb-3">2xx
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
                                    <h3 className="md:text-xl text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">4xx
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
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Passpoint Response Codes</h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        All Passpoint API responses include a <code
                        className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">responseCode</code> field
                        that indicates the status of the request. Understanding these codes is essential for proper
                        error handling and transaction processing.
                    </p>

                    <div className="space-y-4">
                        {/* Success Codes */}
                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <CheckCircle className="h-6 w-6 text-green-500"/>
                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">00 -
                                    Successful</h3>
                            </div>
                            <p className="text-green-700 dark:text-green-300 mb-2">
                                Request processed successfully. The operation completed without errors.
                            </p>
                            <div
                                className="bg-white dark:bg-green-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-green-800 dark:text-green-200 break-all">"responseCode": "00"</div>
                            </div>
                        </div>

                        {/* Pending Codes */}
                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Clock className="h-6 w-6 text-yellow-500"/>
                                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">01 -
                                    Pending</h3>
                            </div>
                            <p className="text-yellow-700 dark:text-yellow-300 mb-2">
                                Request is being processed. Monitor for status changes via webhooks or status check
                                endpoints.
                            </p>
                            <div
                                className="bg-white dark:bg-yellow-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-yellow-800 dark:text-yellow-200 break-all">"responseCode": "01"
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Clock className="h-6 w-6 text-yellow-500"/>
                                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">01OTP -
                                    Pending OTP Response</h3>
                            </div>
                            <p className="text-yellow-700 dark:text-yellow-300 mb-2">
                                Transaction is awaiting OTP verification from the user. Provide the OTP to complete the
                                transaction.
                            </p>
                            <div
                                className="bg-white dark:bg-yellow-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-yellow-800 dark:text-yellow-200 break-all">"responseCode":
                                    "01OTP"
                                </div>
                            </div>
                        </div>

                        {/* Failed Codes */}
                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-red-500"/>
                                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">02 - Failed</h3>
                            </div>
                            <p className="text-red-700 dark:text-red-300 mb-2">
                                Request failed. Check the responseMessage field for specific error details.
                            </p>
                            <div className="bg-white dark:bg-red-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-red-800 dark:text-red-200 break-all">"responseCode": "02"</div>
                            </div>
                        </div>

                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-500"/>
                                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">03 - Service
                                    Unavailable</h3>
                            </div>
                            <p className="text-red-700 dark:text-red-300 mb-2">
                                The service is temporarily unavailable. Retry the request after a short delay.
                            </p>
                            <div className="bg-white dark:bg-red-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-red-800 dark:text-red-200 break-all">"responseCode": "03"</div>
                            </div>
                        </div>

                        {/* Request Error Codes */}
                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-orange-500"/>
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">04 - Empty
                                    Request</h3>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 mb-2">
                                The request body is empty or missing required data.
                            </p>
                            <div
                                className="bg-white dark:bg-orange-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-orange-800 dark:text-orange-200 break-all">"responseCode": "04"
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-orange-500"/>
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">05 - Empty
                                    Response</h3>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 mb-2">
                                The server returned an empty response. This may indicate a temporary service issue.
                            </p>
                            <div
                                className="bg-white dark:bg-orange-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-orange-800 dark:text-orange-200 break-all">"responseCode": "05"
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Clock className="h-6 w-6 text-orange-500"/>
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">06 - Session
                                    Timeout</h3>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 mb-2">
                                Your session has expired. Obtain a new access token and retry the request.
                            </p>
                            <div
                                className="bg-white dark:bg-orange-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-orange-800 dark:text-orange-200 break-all">"responseCode": "06"
                                </div>
                            </div>
                        </div>

                        {/* Validation Error Codes */}
                        <div
                            className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-purple-500"/>
                                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">30 - Failed
                                    Parameter Validation</h3>
                            </div>
                            <p className="text-purple-700 dark:text-purple-300 mb-2">
                                One or more request parameters failed validation. Check the responseMessage for specific
                                field errors.
                            </p>
                            <div
                                className="bg-white dark:bg-purple-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-purple-800 dark:text-purple-200 break-all">"responseCode": "30"
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-purple-500"/>
                                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">31 - Invalid
                                    Parameter</h3>
                            </div>
                            <p className="text-purple-700 dark:text-purple-300 mb-2">
                                A request parameter contains an invalid value or format. Review the API documentation
                                for correct parameter specifications.
                            </p>
                            <div
                                className="bg-white dark:bg-purple-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-purple-800 dark:text-purple-200 break-all">"responseCode": "31"
                                </div>
                            </div>
                        </div>

                        {/* Not Found Code */}
                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-blue-500"/>
                                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">40 - No Record
                                    Found</h3>
                            </div>
                            <p className="text-blue-700 dark:text-blue-300 mb-2">
                                The requested resource or record does not exist in the system.
                            </p>
                            <div className="bg-white dark:bg-blue-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-blue-800 dark:text-blue-200 break-all">"responseCode": "40"</div>
                            </div>
                        </div>

                        {/* Server Error Codes */}
                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-gray-500"/>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">50 - Database
                                    Exception</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                A database error occurred while processing your request. Contact support if this
                                persists.
                            </p>
                            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-800 dark:text-gray-200 break-all">"responseCode": "50"</div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-gray-500"/>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">51 - General
                                    Exception</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                An unexpected error occurred while processing your request. Retry with exponential
                                backoff or contact support.
                            </p>
                            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-800 dark:text-gray-200 break-all">"responseCode": "51"</div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-gray-500"/>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">53 - Duplicate
                                    Exception</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                The request contains duplicate data that conflicts with an existing record. Check for
                                idempotency key conflicts.
                            </p>
                            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-800 dark:text-gray-200 break-all">"responseCode": "53"</div>
                            </div>
                        </div>

                        {/* Security Code */}
                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <XCircle className="h-6 w-6 text-red-500"/>
                                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">60 - Security
                                    Violation</h3>
                            </div>
                            <p className="text-red-700 dark:text-red-300 mb-2">
                                Authentication failed or API credentials are invalid. Verify your API keys and
                                authentication headers.
                            </p>
                            <div className="bg-white dark:bg-red-900/20 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-red-800 dark:text-red-200 break-all">"responseCode": "60"</div>
                            </div>
                        </div>

                        {/* Unknown Error Code */}
                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-gray-500"/>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">99 - Unknown
                                    Error</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                An unknown error occurred. Contact Passpoint support with the request_id for
                                investigation.
                            </p>
                            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                                <div className="text-gray-800 dark:text-gray-200 break-all">"responseCode": "99"</div>
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
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">responseCode</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Numeric code indicating the status
                                of the request (e.g., "00", "01", "31")
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">responseDescription</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Short description of the response
                                code (e.g., "Successful", "Invalid Parameter")
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">responseMessage</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Detailed human-readable message
                                explaining the response
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">data</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Contains the response payload or
                                additional error details (success, error, errorDescription fields)
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
                            <li>• Always check the responseCode field before processing the response data</li>
                            <li>• Implement retry logic with exponential backoff for codes 03, 50, 51 (service/server
                                errors)
                            </li>
                            <li>• Handle session timeouts (code 06) by refreshing your access token automatically</li>
                            <li>• Log responseCode, responseMessage, and transaction references for debugging</li>
                            <li>• Handle rate limiting (HTTP 429) gracefully using Retry-After headers</li>
                            <li>• Validate input data before sending requests to avoid codes 30 and 31</li>
                            <li>• Use webhooks to monitor pending transactions (code 01) instead of polling</li>
                        </ul>
                    </div>

                    <CodeBlock
                        title="Example Error Handling (JavaScript)"
                        language="javascript"
                    >{getErrorHandlingExampleCode()}</CodeBlock>
                </section>
            </div>
        </div>
    );
};

export default StatusResponses;

