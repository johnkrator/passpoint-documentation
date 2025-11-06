import {
    Rocket,
    Shield,
    CreditCard,
    Bell,
    AlertTriangle,
    TestTube2,
    CheckCircle,
    Code,
    Zap,
    BookOpen
} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";
import {Link} from "react-router-dom";

const QuickGuides = () => {
    const getQuickStartCode = () => {
        return `// 1. Obtain access token
const authResponse = await fetch('https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    merchantId: process.env.MERCHANT_ID,
    apiKey: process.env.API_KEY
  })
});

const { accessToken } = (await authResponse.json()).data;

// 2. Make your first API call
const response = await fetch('https://dev.mypasspoint.com/paypass/api/v1/wallet/get-balance', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${accessToken}\`,
    'x-channel-id': '3',
    'x-channel-code': 'legacy-api-user',
    'x-merchant-id': process.env.MERCHANT_ID
  }
});

const data = await response.json();
console.log('Wallet Balance:', data);`;
    };

    const getWebhookHandlerCode = () => {
        return `const crypto = require('crypto');

app.post('/webhooks/passpoint', (req, res) => {
  // 1. Verify webhook signature
  const signature = req.headers['x-passpoint-signature'];
  const payload = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature');
  }

  // 2. Handle the webhook event
  const event = req.body;

  switch(event.eventType) {
    case 'TRANSACTION_SUCCESSFUL':
      console.log('Transaction succeeded:', event.data.transactionId);
      // Update your database, notify customer
      break;

    case 'TRANSACTION_FAILED':
      console.log('Transaction failed:', event.data.transactionId);
      // Log failure, notify customer
      break;

    case 'VIRTUAL_CARD_AUTHORIZATION':
      console.log('Card authorization:', event.data.cardId);
      // Handle real-time authorization
      break;
  }

  // 3. Always return 200 to acknowledge receipt
  res.status(200).send('Webhook received');
});`;
    };

    const getErrorHandlingCode = () => {
        return `async function handlePasspointRequest(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Check Passpoint response code
    switch(result.responseCode) {
      case '00':
        // Success
        return result.data;

      case '01':
        // Pending - monitor via webhook
        console.log('Transaction pending, awaiting completion');
        return result;

      case '06':
        // Session timeout - refresh token and retry
        console.warn('Session expired, refreshing token...');
        await refreshAccessToken();
        return handlePasspointRequest(url, options);

      case '30':
      case '31':
        // Validation errors
        throw new Error(\`Validation error: \${result.responseMessage}\`);

      case '60':
        // Security violation
        throw new Error(\`Authentication failed: \${result.responseMessage}\`);

      default:
        // Other errors
        throw new Error(\`API error (\${result.responseCode}): \${result.responseMessage}\`);
    }

  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Start
                        Guides</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Get up and running with Passpoint APIs in minutes. These quick-start guides provide step-by-step
                        instructions for common integration scenarios, from authentication to transaction processing.
                    </p>

                    {/* Quick Start Cards */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Getting
                            Started</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            <Link to="/getting-started/introduction" className="group">
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-full hover:shadow-lg hover:border-brand-500 dark:hover:border-brand-400 transition-all">
                                    <Rocket className="h-10 w-10 text-brand-500 mb-4"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                                        5-Minute Quickstart
                                    </h3>
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Set up your development environment and make your first API call in under 5
                                        minutes.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Create API credentials
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Configure authentication
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Make test requests
                                        </li>
                                    </ul>
                                </div>
                            </Link>

                            <Link to="/getting-started/api-integrations" className="group">
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-full hover:shadow-lg hover:border-brand-500 dark:hover:border-brand-400 transition-all">
                                    <Shield className="h-10 w-10 text-purple-500 mb-4"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                                        Authentication Setup
                                    </h3>
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Securely authenticate with Passpoint APIs using API keys and access tokens.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            API key management
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Token lifecycle
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Security best practices
                                        </li>
                                    </ul>
                                </div>
                            </Link>

                            <Link to="/guides/transaction-dynamics" className="group">
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-full hover:shadow-lg hover:border-brand-500 dark:hover:border-brand-400 transition-all">
                                    <CreditCard className="h-10 w-10 text-yellow-500 mb-4"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                                        Transaction Processing
                                    </h3>
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Process payments, refunds, and handle transaction states with confidence.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Create transactions
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Handle callbacks
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Process refunds
                                        </li>
                                    </ul>
                                </div>
                            </Link>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                <Bell className="h-10 w-10 text-green-500 mb-4"/>
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Webhook Integration
                                </h3>
                                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    Set up webhooks to receive real-time notifications about transaction events.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500"/>
                                        Configure endpoints
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500"/>
                                        Verify signatures
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500"/>
                                        Handle retries
                                    </li>
                                </ul>
                            </div>

                            <Link to="/learn-more/status-responses" className="group">
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-full hover:shadow-lg hover:border-brand-500 dark:hover:border-brand-400 transition-all">
                                    <AlertTriangle className="h-10 w-10 text-red-500 mb-4"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                                        Error Handling
                                    </h3>
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Implement robust error handling and recovery strategies for production systems.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Error response formats
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Retry mechanisms
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Logging strategies
                                        </li>
                                    </ul>
                                </div>
                            </Link>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                <TestTube2 className="h-10 w-10 text-blue-500 mb-4"/>
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Testing & Sandbox
                                </h3>
                                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    Use Passpoint's sandbox environment to test your integration before going live.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500"/>
                                        Sandbox setup
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500"/>
                                        Test scenarios
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500"/>
                                        Production deployment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Step-by-Step Guide */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">5-Minute
                            Integration</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Follow these steps to integrate Passpoint into your application quickly. This example uses
                            JavaScript,
                            but the concepts apply to any programming language.
                        </p>

                        <CodeBlock language="javascript" title="Quick Start Example">
                            {getQuickStartCode()}
                        </CodeBlock>

                        <div
                            className="mt-8 bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6">
                            <h3 className="md:text-base text-sm font-semibold text-brand-900 dark:text-brand-100 mb-3 flex items-center gap-2">
                                <Zap className="h-5 w-5"/>
                                Next Steps
                            </h3>
                            <ul className="space-y-2 text-brand-800 dark:text-brand-200">
                                <li>• Review the <Link to="/api-documentation/authentication"
                                                       className="underline hover:text-brand-600">Authentication
                                    documentation</Link> for token management details
                                </li>
                                <li>• Set up webhooks to receive real-time transaction updates</li>
                                <li>• Explore the <Link to="/api-documentation/wallet"
                                                        className="underline hover:text-brand-600">Wallet API</Link> to
                                    manage customer wallets
                                </li>
                                <li>• Implement error handling for production readiness</li>
                                <li>• Review rate limits and implement retry logic</li>
                            </ul>
                        </div>
                    </section>

                    {/* Webhook Integration Guide */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Webhook
                            Integration</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Webhooks provide real-time notifications about transaction events. This is the recommended
                            approach
                            for monitoring transaction status instead of polling.
                        </p>

                        <CodeBlock language="javascript" title="Webhook Handler Implementation">
                            {getWebhookHandlerCode()}
                        </CodeBlock>

                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5"/>
                                    Webhook Best Practices
                                </h4>
                                <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                                    <li>• Always verify webhook signatures to prevent spoofing</li>
                                    <li>• Return 200 immediately to acknowledge receipt</li>
                                    <li>• Process webhook data asynchronously using queues</li>
                                    <li>• Implement idempotency to handle duplicate webhooks</li>
                                    <li>• Log all webhook events for debugging</li>
                                </ul>
                            </div>

                            <div
                                className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5"/>
                                    Common Webhook Events
                                </h4>
                                <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                                    <li>• <code
                                        className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">TRANSACTION_SUCCESSFUL</code>
                                    </li>
                                    <li>• <code
                                        className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">TRANSACTION_FAILED</code>
                                    </li>
                                    <li>• <code
                                        className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">TRANSACTION_PENDING</code>
                                    </li>
                                    <li>• <code
                                        className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">VIRTUAL_CARD_AUTHORIZATION</code>
                                    </li>
                                    <li>• <code
                                        className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">WALLET_BALANCE_UPDATED</code>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Error Handling Guide */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Production-Ready
                            Error Handling</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Proper error handling is critical for production systems. Passpoint uses response codes to
                            indicate
                            the status of each request. Always check the <code
                            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">responseCode</code> field.
                        </p>

                        <CodeBlock language="javascript" title="Comprehensive Error Handling">
                            {getErrorHandlingCode()}
                        </CodeBlock>
                    </section>

                    {/* Common Integration Patterns */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Common
                            Integration Patterns</h2>

                        <div className="space-y-6">
                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <Code className="h-8 w-8 text-brand-500 flex-shrink-0"/>
                                    <div>
                                        <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                            E-commerce Integration
                                        </h3>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                            Integrate Passpoint with your e-commerce platform for seamless payment
                                            processing at checkout.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Create wallet for new customers during registration</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Initiate transfer/payout at checkout</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Monitor transaction status via webhooks</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Update order status based on payment completion</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <BookOpen className="h-8 w-8 text-purple-500 flex-shrink-0"/>
                                    <div>
                                        <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                            Virtual Card Implementation
                                        </h3>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                            Issue virtual cards to customers for secure online payments and spending
                                            control.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Create customer profile and virtual card</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Fund card from wallet or external source</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Receive real-time authorization webhooks</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Manage card lifecycle (freeze, unfreeze, terminate)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <Zap className="h-8 w-8 text-yellow-500 flex-shrink-0"/>
                                    <div>
                                        <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                            Bulk Payout System
                                        </h3>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                            Process high-volume payouts efficiently for marketplace sellers,
                                            contractors, or affiliates.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Validate recipient bank details before processing</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Use bulk transfer endpoints to minimize API calls</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Implement idempotency with unique client references</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                                <span className="text-gray-700 dark:text-gray-300">Monitor payout status and reconcile failed transactions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sandbox Testing */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Sandbox
                            Environment</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                            <h3 className="md:text-base text-sm font-semibold text-blue-900 dark:text-blue-100 mb-3">Development
                                Environment</h3>
                            <p className="text-blue-800 dark:text-blue-200 mb-4">
                                Use the sandbox environment to test your integration without affecting real data or
                                processing actual transactions.
                            </p>
                            <div className="bg-white dark:bg-blue-900/20 rounded p-4 font-mono text-sm">
                                <div className="text-blue-900 dark:text-blue-100 mb-2">Base URL:</div>
                                <div className="text-blue-700 dark:text-blue-300">https://dev.mypasspoint.com</div>
                                <div
                                    className="text-blue-700 dark:text-blue-300">https://payment-sandbox.mypasspoint.com
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Test Scenarios</h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li>• Create test wallets and virtual cards</li>
                                    <li>• Simulate successful and failed transactions</li>
                                    <li>• Test webhook delivery and signature verification</li>
                                    <li>• Verify error handling for all response codes</li>
                                    <li>• Load test rate limiting behavior</li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Production
                                    Checklist</h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                        Webhooks configured and tested
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                        Error handling implemented
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                        Rate limiting strategy in place
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                        Logging and monitoring configured
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                        Security review completed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default QuickGuides;
