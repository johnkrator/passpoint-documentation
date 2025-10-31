import {ArrowRight, CheckCircle, Clock, RefreshCw, AlertTriangle, XCircle, Bell} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransactionDynamics = () => {
    const getTransactionLifecycleCode = () => {
        return `// Transaction Lifecycle Example
// 1. Initiate Transaction
const initiateResponse = await createTransaction({
  amount: 50000,
  currency: "NGN",
  accountNumber: "1234567890",
  bankCode: "000014"
});

// Response: { responseCode: "00", data: { status: "NEW", transactionId: "TXN123" } }

// 2. Transaction Moves to PENDING
// System begins processing

// 3. Check Status
const statusResponse = await checkTransactionStatus("TXN123");

// Possible outcomes:
// - SUCCESSFUL: Transaction completed
// - FAILED: Transaction failed
// - PROCESSING: Still being processed
// - PENDING: Awaiting provider response`;
    };

    const getWebhookExampleCode = () => {
        return `// Webhook Handler Example
app.post('/webhook/passpoint', (req, res) => {
  const event = req.body;

  // Verify webhook signature (recommended)
  const signature = req.headers['x-passpoint-signature'];
  if (!verifySignature(signature, req.body)) {
    return res.status(401).send('Invalid signature');
  }

  // Handle transaction status update
  switch(event.data.status) {
    case 'SUCCESSFUL':
      console.log('Transaction completed:', event.data.transactionId);
      // Update your database, send customer notification
      break;

    case 'FAILED':
      console.log('Transaction failed:', event.data.transactionId);
      // Log failure reason, notify customer
      break;

    case 'PENDING':
      console.log('Transaction pending:', event.data.transactionId);
      // Continue monitoring
      break;
  }

  // Always return 200 to acknowledge receipt
  res.status(200).send('Webhook received');
});`;
    };

    const getIdempotencyExampleCode = () => {
        return `// Using Client References for Idempotency
const clientReference = \`PAY_\${Date.now()}_\${userId}\`;

const response = await createTransaction({
  clientReference: clientReference, // Unique reference
  amount: 10000,
  currency: "USD",
  accountNumber: "9876543210"
});

// If network fails and you retry with same clientReference,
// Passpoint will return the original transaction instead of creating a duplicate`;
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="prose prose-invert max-w-4xl">
                <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Understanding Transaction Dynamics
                </h1>

                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    This guide explains how transactions flow through the Passpoint system, from initiation to
                    completion.
                    Understanding transaction states, status codes, and lifecycle patterns is essential for building
                    robust
                    payment integrations.
                </p>

                {/* Transaction Lifecycle */}
                <section className="mb-12">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6">Transaction
                        Lifecycle</h2>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6">
                        Every transaction in Passpoint goes through a series of states. Understanding these states helps
                        you
                        handle transactions appropriately at each stage.
                    </p>

                    <div className="space-y-4 mb-8">
                        {/* NEW */}
                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                                    <CheckCircle className="h-5 w-5 text-white"/>
                                </div>
                                <div>
                                    <h3 className="md:text-base text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">1.
                                        NEW</h3>
                                    <p className="text-blue-800 dark:text-blue-200 mb-2">
                                        Transaction has been created and accepted by Passpoint but not yet submitted to
                                        the payment provider.
                                    </p>
                                    <div className="text-sm font-mono text-blue-700 dark:text-blue-300">
                                        data.status: "NEW"
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <ArrowRight className="h-6 w-6 text-gray-400"/>
                        </div>

                        {/* PENDING */}
                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0">
                                    <Clock className="h-5 w-5 text-white"/>
                                </div>
                                <div>
                                    <h3 className="md:text-base text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">2.
                                        PENDING</h3>
                                    <p className="text-yellow-800 dark:text-yellow-200 mb-2">
                                        Transaction is queued and awaiting processing by our system before being sent to
                                        the payment provider.
                                    </p>
                                    <div className="text-sm font-mono text-yellow-700 dark:text-yellow-300">
                                        data.status: "PENDING" | responseCode: "01"
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <ArrowRight className="h-6 w-6 text-gray-400"/>
                        </div>

                        {/* PROCESSING */}
                        <div
                            className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-500 rounded-full p-2 flex-shrink-0">
                                    <RefreshCw className="h-5 w-5 text-white"/>
                                </div>
                                <div>
                                    <h3 className="md:text-base text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">3.
                                        PROCESSING</h3>
                                    <p className="text-purple-800 dark:text-purple-200 mb-2">
                                        Transaction has been submitted to the payment provider and is currently being
                                        processed. This is the active processing state.
                                    </p>
                                    <div className="text-sm font-mono text-purple-700 dark:text-purple-300">
                                        data.status: "PROCESSING"
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <ArrowRight className="h-6 w-6 text-gray-400"/>
                        </div>

                        {/* SUCCESSFUL / FAILED */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                                        <CheckCircle className="h-5 w-5 text-white"/>
                                    </div>
                                    <div>
                                        <h3 className="md:text-base text-sm font-semibold text-green-900 dark:text-green-100 mb-2">4a.
                                            SUCCESSFUL</h3>
                                        <p className="text-green-800 dark:text-green-200 mb-2">
                                            Transaction completed successfully. Funds have been transferred.
                                        </p>
                                        <div className="text-sm font-mono text-green-700 dark:text-green-300">
                                            data.status: "SUCCESSFUL"
                                        </div>
                                        <div className="text-sm font-mono text-green-700 dark:text-green-300">
                                            responseCode: "00"
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                                        <XCircle className="h-5 w-5 text-white"/>
                                    </div>
                                    <div>
                                        <h3 className="md:text-base text-sm font-semibold text-red-900 dark:text-red-100 mb-2">4b.
                                            FAILED</h3>
                                        <p className="text-red-800 dark:text-red-200 mb-2">
                                            Transaction failed and will not be retried. Check responseMessage for
                                            reason.
                                        </p>
                                        <div className="text-sm font-mono text-red-700 dark:text-red-300">
                                            data.status: "FAILED"
                                        </div>
                                        <div className="text-sm font-mono text-red-700 dark:text-red-300">
                                            responseCode: "02"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CodeBlock language="javascript" title="Transaction Lifecycle in Code">
                        {getTransactionLifecycleCode()}
                    </CodeBlock>
                </section>

                {/* Response Code vs Transaction Status */}
                <section className="mb-12">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6">
                        Understanding responseCode vs data.status
                    </h2>

                    <div
                        className="bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6 mb-6">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-brand-900 dark:text-brand-100 mb-2">responseCode</h4>
                                <p className="text-brand-800 dark:text-brand-200">
                                    Indicates the result of your API request to Passpoint. This tells you if your
                                    request was accepted, rejected, or encountered an error.
                                </p>
                                <ul className="mt-2 space-y-1 text-brand-700 dark:text-brand-300 text-sm">
                                    <li>• "00" = API request successful</li>
                                    <li>• "01" = Request accepted but transaction pending</li>
                                    <li>• "02", "30", "31", etc. = Request failed (see status codes documentation)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-brand-900 dark:text-brand-100 mb-2">data.status</h4>
                                <p className="text-brand-800 dark:text-brand-200">
                                    Indicates the current state of the transaction itself in the payment processing
                                    pipeline.
                                </p>
                                <ul className="mt-2 space-y-1 text-brand-700 dark:text-brand-300 text-sm">
                                    <li>• "NEW" = Transaction created</li>
                                    <li>• "PENDING" = Awaiting processing</li>
                                    <li>• "PROCESSING" = Currently being processed</li>
                                    <li>• "SUCCESSFUL" = Transaction completed</li>
                                    <li>• "FAILED" = Transaction failed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                            <AlertTriangle
                                className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"/>
                            <div>
                                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                    <strong>Important:</strong> A transaction can have responseCode "00" (request
                                    successful) but data.status "PENDING" or "PROCESSING".
                                    Always check data.status to determine if funds have been transferred.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monitoring Transactions */}
                <section className="mb-12">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6">Monitoring
                        Transactions</h2>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6">
                        Passpoint provides two ways to monitor transaction status changes: webhooks (recommended) and
                        polling.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4 mb-4">
                                <Bell className="h-8 w-8 text-brand-500 flex-shrink-0"/>
                                <div>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-2">Webhooks
                                        (Recommended)</h3>
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-3">
                                        Passpoint sends real-time notifications to your server when transaction status
                                        changes.
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                    Real-time updates
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                    No polling required
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                    Reduced API calls
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                    More efficient
                                </li>
                            </ul>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4 mb-4">
                                <RefreshCw className="h-8 w-8 text-gray-500 flex-shrink-0"/>
                                <div>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-2">Polling</h3>
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-3">
                                        Periodically query the transaction status endpoint to check for updates.
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0"/>
                                    Delayed updates
                                </li>
                                <li className="flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0"/>
                                    Increased API calls
                                </li>
                                <li className="flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0"/>
                                    Can hit rate limits
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"/>
                                    Useful as backup
                                </li>
                            </ul>
                        </div>
                    </div>

                    <CodeBlock language="javascript" title="Webhook Handler Example">
                        {getWebhookExampleCode()}
                    </CodeBlock>
                </section>

                {/* Idempotency */}
                <section className="mb-12">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6">Idempotency and
                        Duplicate
                        Prevention</h2>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6">
                        Use client references to prevent duplicate transactions when network issues cause retries.
                    </p>

                    <div
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-6">
                        <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">How It
                            Works</h3>
                        <ol className="space-y-3 md:text-lg text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-3">
                                <span
                                    className="bg-brand-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                                <span>Generate a unique clientReference for each transaction attempt</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span
                                    className="bg-brand-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                                <span>Include this reference in your transaction request</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span
                                    className="bg-brand-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                                <span>If the request fails and you retry with the same clientReference, Passpoint will return the original transaction instead of creating a duplicate</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span
                                    className="bg-brand-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                                <span>Store the clientReference in your database to track transactions</span>
                            </li>
                        </ol>
                    </div>

                    <CodeBlock language="javascript" title="Using Client References">
                        {getIdempotencyExampleCode()}
                    </CodeBlock>
                </section>

                {/* Best Practices */}
                <section className="mb-12">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>

                    <div className="space-y-4">
                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle
                                    className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Always check
                                        data.status for final state</h4>
                                    <p className="text-green-800 dark:text-green-200 text-sm">
                                        Don't rely solely on responseCode. A "00" response means the request was
                                        accepted, not that the transaction is complete.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle
                                    className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Implement
                                        webhooks for status updates</h4>
                                    <p className="text-green-800 dark:text-green-200 text-sm">
                                        Webhooks provide real-time notifications and are more efficient than polling.
                                        Use polling only as a backup mechanism.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle
                                    className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Use unique
                                        client references</h4>
                                    <p className="text-green-800 dark:text-green-200 text-sm">
                                        Generate unique clientReference values to prevent duplicate transactions and
                                        enable reliable retry logic.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle
                                    className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Store
                                        transaction references</h4>
                                    <p className="text-green-800 dark:text-green-200 text-sm">
                                        Keep both Passpoint's transactionId and your clientReference in your database
                                        for reconciliation and support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle
                                    className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Handle all
                                        transaction states</h4>
                                    <p className="text-green-800 dark:text-green-200 text-sm">
                                        Build logic to handle NEW, PENDING, PROCESSING, SUCCESSFUL, and FAILED states
                                        appropriately in your application.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle
                                    className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Set realistic
                                        timeouts</h4>
                                    <p className="text-green-800 dark:text-green-200 text-sm">
                                        Bank transfers can take several minutes. Don't timeout too quickly. Wait for
                                        webhook notifications or poll periodically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Scenarios */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Common Scenarios</h2>

                    <div className="space-y-6">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                Scenario 1: Immediate Success
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                Some transactions (like wallet-to-wallet transfers) complete immediately:
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm">
                                <div className="text-gray-700 dark:text-gray-300">POST /transfer → responseCode: "00",
                                    data.status: "SUCCESSFUL"
                                </div>
                                <div className="text-gray-500 dark:text-gray-400 mt-1">// Transaction complete, no
                                    waiting required
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                Scenario 2: Asynchronous Processing
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                Most bank transfers process asynchronously:
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm space-y-2">
                                <div className="text-gray-700 dark:text-gray-300">POST /transfer → responseCode: "00",
                                    data.status: "PENDING"
                                </div>
                                <div className="text-gray-500 dark:text-gray-400">// Wait for webhook or poll status
                                    endpoint
                                </div>
                                <div className="text-gray-700 dark:text-gray-300 mt-2">GET /transfer-status →
                                    data.status: "PROCESSING"
                                </div>
                                <div className="text-gray-500 dark:text-gray-400">// Still processing...</div>
                                <div className="text-gray-700 dark:text-gray-300 mt-2">Webhook received → data.status:
                                    "SUCCESSFUL"
                                </div>
                                <div className="text-gray-500 dark:text-gray-400">// Transaction complete!</div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                Scenario 3: Transaction Failure
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                Failures can occur at various stages:
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm space-y-2">
                                <div className="text-gray-700 dark:text-gray-300">POST /transfer → responseCode: "31"
                                </div>
                                <div className="text-gray-500 dark:text-gray-400">// Validation error - fix and retry
                                </div>
                                <div className="text-gray-700 dark:text-gray-300 mt-2">OR</div>
                                <div className="text-gray-700 dark:text-gray-300 mt-2">POST /transfer → responseCode:
                                    "00", data.status: "PENDING"
                                </div>
                                <div className="text-gray-700 dark:text-gray-300">Webhook received → data.status:
                                    "FAILED"
                                </div>
                                <div className="text-gray-500 dark:text-gray-400">// Provider rejected (e.g.,
                                    insufficient funds, invalid account)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TransactionDynamics;