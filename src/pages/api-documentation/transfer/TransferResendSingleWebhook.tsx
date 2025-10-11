import {RefreshCw} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransferResendSingleWebhook = () => {
    const getEndpoint = () => `GET https://dev.mypasspoint.com/paypass/ft-app/resend-webhook`;

    const getRequestExample = () => `curl --location -g 'https://dev.mypasspoint.com/paypass/ft-app/resend-webhook?reference={{reference}}' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id'`;

    const getResponseExample = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "webhook sent successfully again",
  "data": {
    "url": "https://billpoint.co/api/webhook/passpoint",
    "notificationId": "4dfb0080-4c6a-43ff-90b5-099c98bec902",
    "callbackRequest": {
      "srcAccountName": "Passpoint Admin",
      "destAccountNumber": "9415000799",
      "srcBank": "Keystone Bank",
      "srcAccountNumber": "08028485472",
      "eventType": "VIRTUAL_ACCOUNT_CREDIT",
      "transactionId": "0000028855627410545031676223467345423",
      "destAccountName": "Chiemelie",
      "settledAmount": "100",
      "thirdPartyRef": "dbec9306-0824-4d29-a309-0516115da59a",
      "charges": "0",
      "destBank": "Sterling Bank",
      "merchantId": "d4dcc33c-e2f3-4b14-889c-22e9c76d8e7e",
      "narration": "08028485472/9190259488/MDTSession ID: 100004230676457291054432",
      "transactionAmount": "100",
      "currency": "NGN"
    },
    "callbackResponse": {
      "status": "success"
    },
    "successful": true,
    "sent": true,
    "dateSent": "2024-05-31 13:32:28"
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Resend Single
                        Webhook</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Manually trigger a webhook callback for a specific transaction. Useful for recovering from
                        webhook delivery
                        failures or when your endpoint was temporarily unavailable.
                    </p>

                    {/* API Endpoint Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API
                            Endpoint</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <RefreshCw className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Resend Webhook
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retry webhook delivery for a single transaction by reference ID.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Query Parameters */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Query
                                                Parameters</h4>
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
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">reference</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Yes</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            transaction reference or ID
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">2</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            code identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">your-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Your
                                                            unique merchant identifier
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock language="bash">{getRequestExample()}</CodeBlock>
                                        </div>

                                        {/* Example Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Example Response
                                                </span>
                                            </h4>
                                            <CodeBlock language="json">{getResponseExample()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Common Use
                            Cases</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Webhook
                                    Recovery</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    When your webhook endpoint was down or unreachable during the initial callback
                                    attempt.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Server maintenance windows</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Network connectivity issues</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Temporary service outages</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Development &
                                    Testing</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Replay webhooks for testing integrations without creating new transactions.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Test webhook processing logic</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Validate endpoint configurations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Debug callback handling issues</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Best
                            Practices</h2>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-3">Important
                                Considerations</h3>
                            <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-400">
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Ensure your webhook endpoint is operational before triggering resend</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Implement idempotency to handle duplicate webhook deliveries safely</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Avoid excessive resend attempts to prevent rate limiting</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Check the response to confirm successful webhook delivery</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TransferResendSingleWebhook;