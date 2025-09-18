import {Terminal, Key, Globe, AlertTriangle, CheckCircle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation.tsx";

const ApiIntegrations = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">API
                        Integrations</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Learn how to integrate Passpoint Payment Service APIs into your application with comprehensive
                        guides, code examples, and best practices for secure payment processing, wallet management, and
                        transfer operations.
                    </p>

                    {/* Important Notices */}
                    <div className="space-y-4 mb-12">
                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <CheckCircle
                                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Dashboard
                                        Access</h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        Your <strong>API keys</strong> and <strong>merchant IDs</strong> can be found in
                                        the <strong>Developers section</strong> of your Passpoint dashboard. Access your
                                        credentials securely through the merchant portal.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <AlertTriangle
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Token
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
                    </div>

                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Integration
                            Methods</h2>

                        <div className="space-y-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                                        <Terminal className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">REST
                                            API</h3>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Direct HTTP calls to Passpoint Payment Service RESTful endpoints with JSON
                                            payloads. Perfect for custom integrations and server-side applications.
                                        </p>
                                        <CodeBlock language="bash">{`curl -X POST https://dev.mypasspoint.com/paypass/api/v1/wallet/create \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "x-channel-id: 3" \\
  -H "x-channel-code: legacy-api-user" \\
  -H "x-merchant-id: YOUR_MERCHANT_ID" \\
  -d '{
    "customerReference": "CUST001",
    "currency": "USD",
    "initialBalance": 0
  }'`}
                                        </CodeBlock>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                                        <Key className="h-12 w-12 text-green-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">SDKs</h3>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            While Passpoint Payment Service provides comprehensive REST APIs, you can
                                            create wrapper libraries for your preferred programming languages with
                                            built-in error handling and retry logic.
                                        </p>
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            <div
                                                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                <div
                                                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Node.js
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">HTTP
                                                    Client (axios/fetch)
                                                </div>
                                            </div>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                <div
                                                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Python
                                                </div>
                                                <div
                                                    className="text-xs text-gray-600 dark:text-gray-400 font-mono">requests
                                                    library
                                                </div>
                                            </div>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                <div
                                                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Java
                                                </div>
                                                <div
                                                    className="text-xs text-gray-600 dark:text-gray-400 font-mono">OkHttp/HttpClient
                                                </div>
                                            </div>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                <div
                                                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2">PHP
                                                </div>
                                                <div
                                                    className="text-xs text-gray-600 dark:text-gray-400 font-mono">cURL/Guzzle
                                                </div>
                                            </div>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                <div
                                                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2">C#
                                                </div>
                                                <div
                                                    className="text-xs text-gray-600 dark:text-gray-400 font-mono">HttpClient
                                                </div>
                                            </div>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                <div
                                                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Go
                                                </div>
                                                <div
                                                    className="text-xs text-gray-600 dark:text-gray-400 font-mono">net/http
                                                    package
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                                        <Globe className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Webhooks</h3>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Configure global callbacks to receive real-time notifications about
                                            transaction events, payment status changes, and system updates from
                                            Passpoint Payment Service.
                                        </p>
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Payment transaction status</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Wallet balance updates</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Transfer confirmations</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Payout notifications</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Collection receipts</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Security alerts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication &
                            Headers</h2>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-3"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Security
                                        Best Practices</h3>
                                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                                        Never expose your access tokens in client-side code. Always make API calls from
                                        your secure server environment and implement proper token refresh strategies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Required
                                    Headers</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Every API request to Passpoint Payment Service must include these headers:
                                </p>
                                <CodeBlock>{`Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: YOUR_MERCHANT_ID`}</CodeBlock>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Environment
                                    URLs</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div
                                        className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                        <div
                                            className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Development
                                            Environment
                                        </div>
                                        <div
                                            className="text-xs text-green-700 dark:text-green-300 font-mono mb-1">https://dev.mypasspoint.com/
                                        </div>
                                        <div className="text-xs text-green-600 dark:text-green-400">Safe for development
                                            and testing
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                        <div
                                            className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">Production
                                            Environment
                                        </div>
                                        <div
                                            className="text-xs text-red-700 dark:text-red-300 font-mono mb-1">https://app.mypasspoint.com/
                                        </div>
                                        <div className="text-xs text-red-600 dark:text-red-400">Processes real
                                            transactions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Start Examples</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 1: Get
                                    Access Token</h3>
                                <CodeBlock
                                    title="Authentication (Node.js)"
                                    language="javascript"
                                >{`const axios = require('axios');

// Get access token
async function getAccessToken() {
  try {
    const response = await axios.post('https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token', {
      merchantId: process.env.MERCHANT_ID,
      apiKey: process.env.API_KEY
    });

    const { accessToken, expiresIn } = response.data.data;
    console.log('Access token obtained, expires in:', expiresIn, 'seconds');
    return accessToken;
  } catch (error) {
    console.error('Authentication failed:', error.response.data);
  }
}`}</CodeBlock>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 2: Create
                                    Wallet</h3>
                                <CodeBlock
                                    title="Create Wallet (Node.js)"
                                    language="javascript"
                                >{`// Create a wallet
async function createWallet(accessToken) {
  try {
    const response = await axios.post('https://dev.mypasspoint.com/paypass/api/v1/wallet/create', {
      customerReference: 'CUST' + Date.now(),
      currency: 'USD',
      initialBalance: 0
    }, {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
        'x-channel-id': '3',
        'x-channel-code': 'legacy-api-user',
        'x-merchant-id': process.env.MERCHANT_ID
      }
    });

    const wallet = response.data.data;
    console.log('Wallet created:', wallet);
    return wallet;
  } catch (error) {
    console.error('Wallet creation failed:', error.response.data);
  }
}`}</CodeBlock>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Complete
                                    Integration</h3>
                                <CodeBlock
                                    title="Full Integration Example (Node.js)"
                                    language="javascript"
                                >{`// Complete integration example
async function integratePasspoint() {
  try {
    // Step 1: Authenticate
    const accessToken = await getAccessToken();

    // Step 2: Create wallet
    const wallet = await createWallet(accessToken);

    // Step 3: Perform operations (transfer, payout, etc.)
    console.log('Integration complete. Wallet ID:', wallet.walletId);

  } catch (error) {
    console.error('Integration error:', error.message);
  }
}

// Start integration
integratePasspoint();`}</CodeBlock>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation />

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default ApiIntegrations;