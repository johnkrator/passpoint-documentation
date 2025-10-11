import {
    Terminal,
    Key,
    Globe,
    AlertTriangle,
    CheckCircle,
    ArrowRight,
    Code,
    BookOpen,
    XCircle,
    Zap,
    DollarSign
} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";
import {Link} from "react-router-dom";

const ApiIntegrations = () => {
    const getRestApiExampleCode = () => {
        return `curl -X POST https://dev.mypasspoint.com/paypass/api/v1/wallet/create \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "x-channel-id: 3" \\
  -H "x-channel-code: legacy-api-user" \\
  -H "x-merchant-id: YOUR_MERCHANT_ID" \\
  -d '{
    "customerReference": "CUST001",
    "currency": "USD",
    "initialBalance": 0
  }'`;
    };

    const getRequiredHeadersCode = () => {
        return `Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: YOUR_MERCHANT_ID`;
    };

    const getAuthenticationExampleCode = () => {
        return `const axios = require('axios');

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
    throw error;
  }
}`;
    };

    const getCreateWalletExampleCode = () => {
        return `// Create a wallet
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
    throw error;
  }
}`;
    };

    const getCompleteIntegrationCode = () => {
        return `// Complete integration example
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
integratePasspoint();`;
    };

    const getErrorHandlingCode = () => {
        return `async function makeApiCallWithErrorHandling() {
  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    
    // Check response code
    if (response.data.responseCode === '00') {
      // Success - check data.status for processing result
      if (response.data.data.status === '00') {
        console.log('Transaction successful:', response.data.data);
        return response.data.data;
      } else if (response.data.data.status === '01') {
        console.log('Transaction pending:', response.data.data);
        // Handle pending status - wait for webhook
      } else {
        console.error('Transaction failed:', response.data.data);
        throw new Error(response.data.responseMessage);
      }
    } else if (response.data.responseCode === '02') {
      // Request failed
      throw new Error(\`Request failed: \${response.data.responseMessage}\`);
    }
  } catch (error) {
    if (error.response) {
      // API returned error response
      const { responseCode, responseMessage } = error.response.data;
      
      switch(responseCode) {
        case '30':
        case '31':
          console.error('Validation error:', responseMessage);
          break;
        case '60':
          console.error('Security violation - check credentials');
          break;
        case '06':
          console.error('Session timeout - refresh token');
          await refreshToken();
          break;
        default:
          console.error('API error:', responseMessage);
      }
    } else if (error.request) {
      // Network error
      console.error('Network error - no response received');
    } else {
      console.error('Request setup error:', error.message);
    }
    throw error;
  }
}`;
    };

    const getTokenRefreshCode = () => {
        return `let accessToken = null;
let tokenExpiryTime = null;

async function getValidToken() {
  const now = Date.now();
  
  // Check if token exists and is still valid (with 1 minute buffer)
  if (accessToken && tokenExpiryTime && now < tokenExpiryTime - 60000) {
    return accessToken;
  }
  
  // Token expired or doesn't exist - get new one
  const response = await axios.post(
    'https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token',
    {
      merchantId: process.env.MERCHANT_ID,
      apiKey: process.env.API_KEY
    }
  );
  
  accessToken = response.data.data.accessToken;
  const expiresIn = response.data.data.expiresIn; // in seconds
  tokenExpiryTime = now + (expiresIn * 1000);
  
  console.log(\`New token obtained, expires at \${new Date(tokenExpiryTime).toISOString()}\`);
  return accessToken;
}

// Use in your API calls
async function makeApiCall(endpoint, data) {
  const token = await getValidToken();
  return axios.post(endpoint, data, {
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
      'x-channel-id': '3',
      'x-channel-code': 'legacy-api-user',
      'x-merchant-id': process.env.MERCHANT_ID
    }
  });
}`;
    };

    const getWebhookSetupCode = () => {
        return `const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Webhook endpoint
app.post('/webhooks/passpoint', (req, res) => {
  try {
    // Verify webhook signature (if implemented by Passpoint)
    // const signature = req.headers['x-passpoint-signature'];
    // if (!verifySignature(req.body, signature)) {
    //   return res.status(401).send('Invalid signature');
    // }
    
    const webhookData = req.body;
    
    console.log('Webhook received:', webhookData);
    
    // Process webhook based on event type
    switch(webhookData.eventType) {
      case 'payment.success':
        handlePaymentSuccess(webhookData);
        break;
      case 'payment.failed':
        handlePaymentFailure(webhookData);
        break;
      case 'payout.completed':
        handlePayoutCompleted(webhookData);
        break;
      case 'wallet.credited':
        handleWalletCredited(webhookData);
        break;
      default:
        console.log('Unknown event type:', webhookData.eventType);
    }
    
    // Respond immediately to acknowledge receipt
    res.status(200).json({ received: true });
    
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Processing failed' });
  }
});

async function handlePaymentSuccess(data) {
  // Update your database
  // Send confirmation email
  // Trigger fulfillment process
  console.log('Processing successful payment:', data);
}

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`;
    };

    const getRetryLogicCode = () => {
        return `async function makeApiCallWithRetry(endpoint, data, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await makeApiCall(endpoint, data);
      return response.data;
    } catch (error) {
      lastError = error;
      
      // Don't retry on client errors (4xx)
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        throw error;
      }
      
      // Don't retry on validation errors
      if (error.response?.data?.responseCode === '30' || error.response?.data?.responseCode === '31') {
        throw error;
      }
      
      if (attempt < maxRetries) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.log(\`Retry attempt \${attempt} after \${delay}ms\`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
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
                            className="bg-[#009ac2]/10 dark:bg-[#009ac2]/20 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <AlertTriangle
                                    className="h-6 w-6 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#009ac2] dark:text-[#009ac2] mb-2">Token
                                        Expiry Notice</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
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

                    {/* Integration Methods */}
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
                                        <CodeBlock language="bash">{getRestApiExampleCode()}</CodeBlock>
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
                                        <Globe className="h-12 w-12 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
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
                                                <div className="w-2 h-2 bg-[#009ac2] rounded-full"></div>
                                                <span>Payment transaction status</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-[#009ac2] rounded-full"></div>
                                                <span>Wallet balance updates</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-[#009ac2] rounded-full"></div>
                                                <span>Transfer confirmations</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-[#009ac2] rounded-full"></div>
                                                <span>Payout notifications</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-[#009ac2] rounded-full"></div>
                                                <span>Collection receipts</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-[#009ac2] rounded-full"></div>
                                                <span>Security alerts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authentication & Headers */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Authentication
                            & Headers</h2>

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
                                <CodeBlock>{getRequiredHeadersCode()}</CodeBlock>
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

                    {/* Quick Start Examples */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start
                            Examples</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 1: Get
                                    Access Token</h3>
                                <CodeBlock title="Authentication (Node.js)"
                                           language="javascript">{getAuthenticationExampleCode()}</CodeBlock>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 2: Create
                                    Wallet</h3>
                                <CodeBlock title="Create Wallet (Node.js)"
                                           language="javascript">{getCreateWalletExampleCode()}</CodeBlock>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Complete
                                    Integration</h3>
                                <CodeBlock title="Full Integration Example (Node.js)"
                                           language="javascript">{getCompleteIntegrationCode()}</CodeBlock>
                            </div>
                        </div>
                    </section>

                    {/* Error Handling */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Error
                            Handling</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                Implement robust error handling to gracefully manage API failures, validation errors,
                                and network issues.
                                Always check both <code
                                className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">responseCode</code> and{" "}
                                <code
                                    className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">data.status</code> for
                                comprehensive error detection.
                            </p>

                            <CodeBlock title="Error Handling Example (Node.js)"
                                       language="javascript">{getErrorHandlingCode()}</CodeBlock>
                        </div>

                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5"/>
                                Common Error Codes
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-orange-200 dark:border-orange-700">
                                    <code className="font-mono text-orange-900 dark:text-orange-100">30 / 31</code>
                                    <span className="text-orange-700 dark:text-orange-300">Validation errors - check request parameters</span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-orange-200 dark:border-orange-700">
                                    <code className="font-mono text-orange-900 dark:text-orange-100">06</code>
                                    <span className="text-orange-700 dark:text-orange-300">Session timeout - refresh your token</span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-orange-200 dark:border-orange-700">
                                    <code className="font-mono text-orange-900 dark:text-orange-100">60</code>
                                    <span className="text-orange-700 dark:text-orange-300">Security violation - verify credentials</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <code className="font-mono text-orange-900 dark:text-orange-100">50 / 51</code>
                                    <span className="text-orange-700 dark:text-orange-300">Server errors - implement retry logic</span>
                                </div>
                            </div>
                            <Link to="/learn-more/status-responses"
                                  className="inline-flex items-center gap-2 mt-4 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium text-sm">
                                View Complete Status Code Reference
                                <ArrowRight className="h-4 w-4"/>
                            </Link>
                        </div>
                    </section>

                    {/* Token Management */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Token
                            Management & Refresh</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                Implement automatic token refresh to avoid session timeouts during long-running
                                operations.
                                Tokens expire after 10 minutes (dev) or 1 hour (production).
                            </p>

                            <CodeBlock title="Token Refresh Strategy (Node.js)"
                                       language="javascript">{getTokenRefreshCode()}</CodeBlock>
                        </div>

                        <div
                            className="bg-[#009ac2]/10 dark:bg-[#009ac2]/20 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-[#009ac2] dark:text-[#009ac2] mb-3">Best
                                Practices</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                    <span>Cache tokens in memory with expiry tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                    <span>Refresh tokens proactively before expiry (1 minute buffer)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                    <span>Handle 06 (session_timeout) errors with automatic retry</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                    <span>Never store tokens in client-side code or version control</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Webhook Setup */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Webhook
                            Setup</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                Configure webhooks to receive real-time notifications about transaction status changes.
                                Set up your webhook URL in the Passpoint dashboard under Global Callback Setup.
                            </p>

                            <CodeBlock title="Webhook Handler (Node.js + Express)"
                                       language="javascript">{getWebhookSetupCode()}</CodeBlock>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">Webhook
                                    Requirements</h3>
                                <ul className="space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <Code className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                        <span>HTTPS endpoint (SSL certificate required)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Code className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                        <span>Publicly accessible URL</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Code className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                        <span>Respond with 200 OK within 5 seconds</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Code className="h-5 w-5 flex-shrink-0 mt-0.5"/>
                                        <span>Idempotent processing (handle duplicates)</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Configuration
                                    Steps</h3>
                                <ol className="space-y-2 text-green-700 dark:text-green-300 text-sm list-decimal list-inside">
                                    <li>Deploy your webhook endpoint</li>
                                    <li>Navigate to Global Callback Setup in dashboard</li>
                                    <li>Enter your webhook URL</li>
                                    <li>Test with sandbox transactions</li>
                                    <li>Monitor webhook logs for errors</li>
                                </ol>
                                <Link to="/api-documentation/global-callback-setup"
                                      className="inline-flex items-center gap-2 mt-4 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm">
                                    View Callback Setup Guide
                                    <ArrowRight className="h-4 w-4"/>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Testing & Best Practices */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Testing & Best
                            Practices</h2>

                        <div className="grid gap-6 md:grid-cols-2 mb-6">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Zap className="h-6 w-6 text-green-500"/>
                                    Sandbox Testing
                                </h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Always test in sandbox before production</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Use test credentials from dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Test all payment flows and edge cases</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Verify webhook delivery and processing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Test error handling scenarios</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <CheckCircle className="h-6 w-6 text-[#009ac2]"/>
                                    Production Checklist
                                </h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <input type="checkbox" className="mt-1" disabled/>
                                        <span>API credentials secured in environment variables</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <input type="checkbox" className="mt-1" disabled/>
                                        <span>Error handling and retry logic implemented</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <input type="checkbox" className="mt-1" disabled/>
                                        <span>Webhook endpoint properly configured</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <input type="checkbox" className="mt-1" disabled/>
                                        <span>Logging and monitoring in place</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <input type="checkbox" className="mt-1" disabled/>
                                        <span>Transaction reconciliation process defined</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Retry Logic
                                Implementation</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Implement exponential backoff for transient failures like network errors or temporary
                                service unavailability.
                                Do not retry on validation errors (30, 31) or authentication failures (60).
                            </p>
                            <CodeBlock title="Retry Logic with Exponential Backoff (Node.js)"
                                       language="javascript">{getRetryLogicCode()}</CodeBlock>
                        </div>
                    </section>

                    {/* Common Pitfalls */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Common
                            Integration Pitfalls</h2>

                        <div className="space-y-4">
                            <div
                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                                            Ignoring Token Expiry
                                        </h3>
                                        <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                                            Tokens expire after 10 minutes (dev) or 1 hour (prod). Failing to refresh
                                            causes 06 (session_timeout) errors.
                                        </p>
                                        <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                                            ✓ Solution: Implement automatic token refresh with expiry tracking
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                                            Not Handling Pending Status
                                        </h3>
                                        <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                                            Some transactions return status "01" (pending) and complete asynchronously.
                                            You must wait for webhooks.
                                        </p>
                                        <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                                            ✓ Solution: Implement webhook handlers and status polling for pending
                                            transactions
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                                            Missing Mandatory Headers
                                        </h3>
                                        <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                                            All requests require x-channel-id, x-channel-code, and x-merchant-id
                                            headers. Missing headers cause authentication failures.
                                        </p>
                                        <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                                            ✓ Solution: Create a request wrapper that automatically includes all
                                            required headers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                                            Exposing Credentials Client-Side
                                        </h3>
                                        <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                                            API keys and merchant IDs should never be exposed in frontend code, mobile
                                            apps, or public repositories.
                                        </p>
                                        <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                                            ✓ Solution: Always make API calls from your secure backend server
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                                            No Idempotency for Webhooks
                                        </h3>
                                        <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                                            Webhooks may be sent multiple times. Processing duplicates can lead to
                                            incorrect balance updates or double fulfillment.
                                        </p>
                                        <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                                            ✓ Solution: Use transaction IDs to track processed webhooks and prevent
                                            duplicate processing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Next
                            Steps</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Link to="/api-documentation/collection"
                                  className="bg-gradient-to-br from-[#009ac2]/10 to-[#009ac2]/20 dark:from-[#009ac2]/30 dark:to-[#009ac2]/40 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 hover:shadow-md transition-all">
                                <BookOpen className="h-8 w-8 text-[#009ac2] dark:text-[#009ac2] mb-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Collections API
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Accept payments via bank transfers, mobile money, and virtual accounts
                                </p>
                                <span
                                    className="text-[#009ac2] dark:text-[#009ac2] text-sm font-medium inline-flex items-center gap-1">
                                    Explore Collections
                                    <ArrowRight className="h-4 w-4"/>
                                </span>
                            </Link>

                            <Link to="/api-documentation/payout"
                                  className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 hover:shadow-md transition-all">
                                <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400 mb-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Payouts API
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Send money to bank accounts and mobile wallets locally and internationally
                                </p>
                                <span
                                    className="text-green-600 dark:text-green-400 text-sm font-medium inline-flex items-center gap-1">
                                    Explore Payouts
                                    <ArrowRight className="h-4 w-4"/>
                                </span>
                            </Link>

                            <Link to="/api-documentation/wallet"
                                  className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl p-6 hover:shadow-md transition-all">
                                <Code className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Wallet API
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Create and manage digital wallets with multi-currency support
                                </p>
                                <span
                                    className="text-purple-600 dark:text-purple-400 text-sm font-medium inline-flex items-center gap-1">
                                    Explore Wallets
                                    <ArrowRight className="h-4 w-4"/>
                                </span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiIntegrations;

