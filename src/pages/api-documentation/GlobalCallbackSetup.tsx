import {Webhook, Shield, AlertCircle, CheckCircle2} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const GlobalCallbackSetup = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/userapp/merchant-app/update-merchant-callback`;

    const getRequestBodyCode = () => {
        return `{
  "callbackUrl": "https://webhook.site/0a6400cc-1fb6-4a24-a5d4-1810b3c6acb0",
  "callbackSecret": "1111111"
}`;
    };

    const getRequestExample = () => {
        return `curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/update-merchant-callback' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \\
--header 'Content-Type: application/json' \\
--data '{
  "callbackUrl": "https://webhook.site/0a6400cc-1fb6-4a24-a5d4-1810b3c6acb0",
  "callbackSecret": "1111111"
}'`;
    };

    const getSuccessResponse = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Merchant callback URL updated successfully"
}`;
    };

    const getErrorResponse = () => {
        return `{
  "responseCode": "99",
  "responseDescription": "Failed",
  "responseMessage": "Invalid callback URL format"
}`;
    };

    const getCallbackPayloadExample = () => {
        return `{
  "transactionId": "00000423060111141481697464946545699112233",
  "amount": 5000.00,
  "currency": "NGN",
  "status": "SUCCESSFUL",
  "merchantId": "22f36327-493c-492d-a390-5bf321ff51ba",
  "reference": "MERCHANT_REF_12345",
  "paymentType": "COLLECTION",
  "timestamp": "2024-01-15T10:30:00Z",
  "customerEmail": "customer@example.com",
  "metadata": {
    "orderId": "ORD-12345",
    "customField": "value"
  }
}`;
    };

    const getSignatureVerificationExample = () => {
        return `const crypto = require('crypto');

function verifyCallbackSignature(payload, receivedSignature, secret) {
  // Create HMAC using SHA-256
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(JSON.stringify(payload), 'utf8');
  const calculatedSignature = hmac.digest('hex');
  
  // Use timing-safe comparison
  return crypto.timingSafeEqual(
    Buffer.from(receivedSignature),
    Buffer.from(calculatedSignature)
  );
}

// Express.js webhook handler
app.post('/webhooks/passpoint', express.json(), (req, res) => {
  const signature = req.headers['x-passpoint-signature'];
  const payload = req.body;
  
  // Verify signature
  if (!verifyCallbackSignature(payload, signature, process.env.CALLBACK_SECRET)) {
    console.error('Invalid webhook signature');
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Process the webhook
  try {
    switch (payload.status) {
      case 'SUCCESSFUL':
        handleSuccessfulPayment(payload);
        break;
      case 'FAILED':
        handleFailedPayment(payload);
        break;
      case 'PENDING':
        handlePendingPayment(payload);
        break;
      default:
        console.warn('Unknown payment status:', payload.status);
    }
    
    // Always respond with 200 to acknowledge receipt
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Merchant Callback Setup
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Configure your merchant callback URL to receive real-time payment notifications. This endpoint
                        allows you to set as well as update your callback details which will be used for all transaction
                        events. If not set, callback details from individual payment requests will be used.
                    </p>

                    {/* Update Callback URL Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Update Merchant Callback URL
                        </h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Webhook className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Update Callback
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Set or update your merchant's global callback URL and secret for receiving
                                        payment notifications.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Headers */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Headers</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Header</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Required</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">Authorization</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Bearer
                                                            token for authentication
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">integer</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            identifier (use 2)
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            code (use passpoint-merchant-user)
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Your
                                                            unique merchant identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">Content-Type</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Must
                                                            be application/json
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Request
                                                Body Parameters</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Required</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">callbackUrl</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Valid
                                                            HTTPS URL to receive webhook notifications. Must be
                                                            accessible and respond within 30 seconds.
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">callbackSecret</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3"><span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Required</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Secret
                                                            key for HMAC signature verification. Minimum 8 characters
                                                            recommended.
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock language="bash">{getRequestExample()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Success Response
                                                </span>
                                            </h4>
                                            <CodeBlock language="json">{getSuccessResponse()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">400 Bad Request</span>
                                                    Error Response
                                                </span>
                                            </h4>
                                            <CodeBlock language="json">{getErrorResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Callback Payload Structure */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Callback Payload Structure
                        </h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CheckCircle2 className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Webhook Payload
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        When payment events occur, Passpoint will send a POST request to your callback
                                        URL with transaction details.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Callback Payload</h4>
                                            <CodeBlock language="json">{getCallbackPayloadExample()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Security Implementation */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Security Implementation
                        </h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Shield className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Signature Verification
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Always verify the HMAC signature on incoming webhooks to ensure authenticity and
                                        prevent replay attacks.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Node.js
                                                Implementation Example</h4>
                                            <CodeBlock
                                                language="javascript">{getSignatureVerificationExample()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Best Practices
                        </h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <AlertCircle className="h-12 w-12 text-amber-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Important Notes
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div
                                            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">URL
                                                Requirements</h4>
                                            <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-400 space-y-1">
                                                <li>Must use HTTPS protocol (HTTP not allowed in production)</li>
                                                <li>Must be publicly accessible from Passpoint servers</li>
                                                <li>Should respond with 200 status within 30 seconds</li>
                                                <li>Avoid redirects - use the final endpoint URL</li>
                                            </ul>
                                        </div>

                                        <div
                                            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                            <h4 className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">Security
                                                Best Practices</h4>
                                            <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-400 space-y-1">
                                                <li>Always verify HMAC signatures using your callback secret</li>
                                                <li>Use a strong, randomly generated callback secret (32+ characters)
                                                </li>
                                                <li>Store callback secrets securely (environment variables, secrets
                                                    manager)
                                                </li>
                                                <li>Implement rate limiting on your webhook endpoint</li>
                                                <li>Log all webhook attempts for audit trails</li>
                                            </ul>
                                        </div>

                                        <div
                                            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                                            <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-2">Reliability
                                                Recommendations</h4>
                                            <ul className="list-disc list-inside text-sm text-amber-800 dark:text-amber-400 space-y-1">
                                                <li>Process webhooks asynchronously using a queue system</li>
                                                <li>Implement idempotency - handle duplicate webhooks gracefully</li>
                                                <li>Return 200 OK immediately, then process in background</li>
                                                <li>Implement retry logic with exponential backoff for failures</li>
                                                <li>Monitor webhook delivery success rates and alert on anomalies</li>
                                            </ul>
                                        </div>

                                        <div
                                            className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                                            <h4 className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-2">Fallback
                                                Behavior</h4>
                                            <p className="text-sm text-purple-800 dark:text-purple-400">
                                                If a global callback URL is not set here, Passpoint will use the
                                                callback URL
                                                provided in individual payment initiation requests. Set a global
                                                callback to
                                                ensure consistent notification delivery across all transactions.
                                            </p>
                                        </div>
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

export default GlobalCallbackSetup;
