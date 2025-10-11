import {RefreshCcw} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransferResendBulkWebhook = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/ft-app/resend-bulk-webhook`;

    const getRequestBodyExample = () => `{
  "startDate": "yyyy-MM-dd",
  "endDate": "yyyy-MM-dd",
  "currency": "string"
}`;

    const getRequestExample = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/resend-bulk-webhook' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
  "startDate": "yyyy-MM-dd",
  "endDate": "yyyy-MM-dd",
  "currency": "string"
}'`;

    const getResponseExample = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "transactions have been queued for webhook resending"
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Resend Bulk
                        Webhook</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Queue multiple transactions for webhook resending based on date range and currency filters.
                        This endpoint processes webhooks asynchronously to handle large batches efficiently.
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
                                    <RefreshCcw className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Bulk Resend
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Trigger webhook resending for multiple transactions within a specified date
                                        range.
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

                                        {/* Request Body Parameters */}
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
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">startDate</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Yes</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Start
                                                            date in yyyy-MM-dd format
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">endDate</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Yes</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">End
                                                            date in yyyy-MM-dd format
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">currency</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Yes</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Currency
                                                            code filter (e.g., NGN, USD, GHS)
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getRequestBodyExample()}</CodeBlock>
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

                    {/* Processing Behavior */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Processing
                            Behavior</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-3">Asynchronous
                                Processing</h3>
                            <p className="text-sm text-blue-800 dark:text-blue-400 mb-4">
                                This endpoint queues transactions for background processing to handle large volumes
                                efficiently.
                                The response confirms the request was accepted, not that webhooks were delivered.
                            </p>
                            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-400">
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Transactions are queued immediately upon successful request</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Webhook delivery happens in the background over time</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Use the Payment Status Report endpoint to verify delivery status</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Processing time depends on the number of matching transactions</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Common Use
                            Cases</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Disaster
                                    Recovery</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Recover from extended webhook endpoint outages by replaying all missed transactions.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Server downtime recovery</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Data center failures</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Webhook endpoint migrations</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data
                                    Synchronization</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Resync transaction data after system upgrades or database issues.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Database rollbacks</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>System migrations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Audit reconciliation</span>
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
                                    <span>Use narrow date ranges to avoid overwhelming your webhook endpoint</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Ensure your webhook endpoint can handle increased traffic volume</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Implement idempotency keys to prevent duplicate processing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Monitor webhook delivery status after triggering bulk resend</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <span>Coordinate with support team for very large date ranges (30+ days)</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TransferResendBulkWebhook;