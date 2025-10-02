import {Key, Shield, Lock, AlertTriangle, CheckCircle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const Authentication = () => {
    const getCredentialsEndpointCode = () => {
        return `POST https://dev.mypasspoint.com/userapp/merchant-app/init-credentials`;
    };

    const getCredentialsRequestBodyCode = () => {
        return `{
  "merchantId": "0f66a8ce-497e-483e-9a32-04f00ffb3bc4"
}`;
    };

    const getCredentialsCurlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/init-credentials' \\
--data '{
    "merchantId":"0f66a8ce-497e-483e-9a32-04f00ffb3bc4"
}'`;
    };

    const getCredentialsResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Merchant credential reset successful",
  "data": {
    "apiKey": "string"
  }
}`;
    };

    const getAuthClientEndpointCode = () => {
        return `POST https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token`;
    };

    const getAuthClientRequestBodyCode = () => {
        return `{
  "merchantId": "string",
  "apiKey": "string"
}`;
    };

    const getAuthClientCurlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token' \\
--data '{
    "merchantId":"string",
    "apiKey":"string"
}'`;
    };

    const getAuthClientResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Client token obtained successful",
  "data": {
    "accessToken": "string",
    "expiresIn": 0
  }
}`;
    };

    const getWhitelistIpsEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/userapp/merchant-app/get-all-whitelisted-ip`;
    };

    const getWhitelistIpsHeadersCode = () => {
        return `Authorization: Bearer YOUR_ACCESS_TOKEN
x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: YOUR_MERCHANT_ID`;
    };

    const getWhitelistIpsCurlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/get-all-whitelisted-ip' \\
--header 'x-channel-id: 3' \\
--header 'x-channel-code: legacy-api-user' \\
--header 'x-merchant-id: e0b157a2-9245-40b9-8117-d25cadfdcfaa'`;
    };

    const getWhitelistIpsResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "1 ip address(es) found",
  "data": [
    "127.0.0.1"
  ]
}`;
    };

    const getBearerTokenHeadersCode = () => {
        return `Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: YOUR_MERCHANT_ID`;
    };

    const getBearerTokenExampleCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/api/v1/wallet/balance' \\
--header 'Authorization: Bearer your_access_token_here' \\
--header 'Content-Type: application/json' \\
--header 'x-channel-id: 3' \\
--header 'x-channel-code: legacy-api-user' \\
--header 'x-merchant-id: your_merchant_id'`;
    };

    const getAuthErrorResponseCode = () => {
        return `{
  "responseCode": "01",
  "responseDescription": "Authentication Failed",
  "responseMessage": "Invalid access token",
  "data": {
    "success": false,
    "error": "INVALID_TOKEN",
    "errorDescription": "The provided access token is invalid or has expired"
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Authentication Overview The Authentication folder contains APIs responsible for retrieving user credentials and token.
                    </p>

                    {/* Authentication Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Authentication
                            Overview</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                The Authentication folder contains APIs responsible for retrieving user credentials and
                                token.
                            </p>
                        </div>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-base font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Security
                                        Notice</h3>
                                    <p className="text-yellow-700 dark:text-yellow-300">
                                        Never expose your access tokens in client-side code. Always make API calls from
                                        your secure server environment and store tokens securely.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">Token
                                        Expiry Notice</h3>
                                    <p className="text-blue-700 dark:text-blue-300">
                                        <strong>Development Environment:</strong> Bearer tokens are active for 10
                                        minutes<br/>
                                        <strong>Production Environment:</strong> Bearer tokens are active for 1
                                        hour<br/>
                                        Plan your token refresh strategy accordingly to maintain uninterrupted API
                                        access.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">APIs</h3>
                        
                        <div className="space-y-8">
                            {/* Get User Credentials */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Shield className="h-12 w-12 text-green-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get User Credentials</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://client-sandbox.mypasspoint.com/passpoint-usr/v1/merchant-app/init-credentials
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Description:</strong> Retrieves merchant api key
                                            </p>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Parameters:</h4>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                        <thead>
                                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">merchantId</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">merchant id</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getCredentialsEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                    Body</h4>
                                                <CodeBlock language="json">{getCredentialsRequestBodyCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getCredentialsCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                    (200 OK)</h4>
                                                <CodeBlock language="json">{getCredentialsResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Authenticate Merchant */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Key className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Authenticate Merchant</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://client-sandbox.mypasspoint.com/passpoint-usr/v1/merchant-app/get-auth-token
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Description:</strong> Retrieves merchant authorization token
                                            </p>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Parameters:</h4>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                        <thead>
                                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">merchantId</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the merchant id</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">apiKey</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the merchant api key</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getAuthClientEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                    Body</h4>
                                                <CodeBlock language="json">{getAuthClientRequestBodyCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getAuthClientCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                    (200 OK)</h4>
                                                <CodeBlock language="json">{getAuthClientResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Get Whitelisted IPs */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Lock className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                            Whitelisted IPs</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            This endpoint retrieves all whitelisted IP addresses for the merchant.
                                            Requires proper authentication headers including Bearer token and merchant
                                            information.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getWhitelistIpsEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Required
                                                    Headers</h4>
                                                <CodeBlock>{getWhitelistIpsHeadersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getWhitelistIpsCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                    (200 OK)</h4>
                                                <CodeBlock language="json">{getWhitelistIpsResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AUTHORIZATION Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">AUTHORIZATION</h2>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bearer Token</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                This folder is using Bearer Token from collection <strong>Passpoint Payment Service</strong>
                            </p>
                        </div>
                    </section>

                    {/* API Parameters Summary */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API Parameters
                            Summary</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                Summary of key parameters used across the authentication endpoints for quick reference.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                                        <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Parameter</th>
                                        <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Type</th>
                                        <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Description</th>
                                        <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Used
                                            In
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-mono text-xs">merchantId</td>
                                        <td className="py-3 px-4">string</td>
                                        <td className="py-3 px-4">Unique identifier for the merchant</td>
                                        <td className="py-3 px-4">All endpoints</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-mono text-xs">apiKey</td>
                                        <td className="py-3 px-4">string</td>
                                        <td className="py-3 px-4">Merchant API key for authentication</td>
                                        <td className="py-3 px-4">Authenticate Client</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-3 px-4 font-mono text-xs">accessToken</td>
                                        <td className="py-3 px-4">string</td>
                                        <td className="py-3 px-4">Bearer token for API authorization</td>
                                        <td className="py-3 px-4">Response from auth endpoints</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-mono text-xs">expiresIn</td>
                                        <td className="py-3 px-4">number</td>
                                        <td className="py-3 px-4">Token expiration time in seconds</td>
                                        <td className="py-3 px-4">Auth token response</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Bearer Token Usage */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bearer Token
                            Usage</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                All authenticated requests to Passpoint Payment Service APIs require a valid Bearer
                                token in the Authorization header.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Required
                                        Headers for Authenticated Requests</h4>
                                    <CodeBlock>{getBearerTokenHeadersCode()}</CodeBlock>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Example
                                        Authenticated Request</h4>
                                    <CodeBlock language="bash">{getBearerTokenExampleCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authentication Errors */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Authentication
                            Errors</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <AlertTriangle className="h-12 w-12 text-red-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Error
                                        Handling</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Handle authentication errors gracefully by checking response codes and
                                        implementing proper error handling logic.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-1">
                                            <div
                                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                                <div
                                                    className="font-mono text-sm font-bold text-gray-900 dark:text-white mb-1">401
                                                    - Unauthorized
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">Invalid or
                                                    missing access token
                                                </div>
                                            </div>
                                            <div
                                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                                <div
                                                    className="font-mono text-sm font-bold text-gray-900 dark:text-white mb-1">403
                                                    - Forbidden
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">Insufficient
                                                    permissions for the requested operation
                                                </div>
                                            </div>
                                            <div
                                                className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                                <div
                                                    className="font-mono text-sm font-bold text-gray-900 dark:text-white mb-1">Token
                                                    Expired
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">Access token
                                                    has expired, use refresh token to get a new one
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Error
                                                Response Format</h4>
                                            <CodeBlock language="json">{getAuthErrorResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Best
                            Practices</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="h-6 w-6 text-blue-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security
                                    Recommendations</h3>
                            </div>
                            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                <div className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                    <div>
                                        <strong>Store tokens securely:</strong> Never expose access tokens in
                                        client-side code or version control systems. Use environment variables or secure
                                        credential management systems.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                    <div>
                                        <strong>Implement token refresh:</strong> Proactively refresh tokens before
                                        expiration to maintain uninterrupted service.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                    <div>
                                        <strong>Use HTTPS only:</strong> Always make authentication requests over HTTPS
                                        to protect credentials in transit.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                                    <div>
                                        <strong>Monitor for errors:</strong> Implement proper error handling and logging
                                        for authentication failures.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Authentication;

