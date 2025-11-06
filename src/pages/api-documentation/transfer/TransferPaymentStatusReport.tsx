import {FileBarChart} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransferPaymentStatusReport = () => {
    const getEndpoint = () => `GET https://dev.mypasspoint.com/paypass/v1/ft-app/payment-status-report`;

    const getRequestExample = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/payment-status-report?reference=82c46400-3655-4e41-8413-1cfdec579c77&mode=all' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id'`;

    const getResponseExample = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "payment cycle found",
  "data": [
    {
      "transactionId": "82c46400-3655-4e41-8413-1cfdec579c77",
      "paymentOrder": 3,
      "callbackSent": true,
      "transactionStatus": "SUCCESSFUL",
      "responseMessage": "Successful",
      "responseDescription": "Merchant notified via callback on Tue Mar 18 17:45:40 WAT 2025",
      "dateCreated": "2025-03-18 17:45:40"
    },
    {
      "transactionId": "82c46400-3655-4e41-8413-1cfdec579c77",
      "paymentOrder": 2,
      "callbackSent": false,
      "transactionStatus": "SUCCESSFUL",
      "responseMessage": "payment successful",
      "responseDescription": "Transaction has been completed",
      "dateCreated": "2025-03-18 17:45:38"
    },
    {
      "transactionId": "82c46400-3655-4e41-8413-1cfdec579c77",
      "paymentOrder": 1,
      "callbackSent": false,
      "transactionStatus": "NEW",
      "responseMessage": "New",
      "responseDescription": "Transaction has been submitted",
      "dateCreated": "2025-03-18 17:45:21"
    }
  ]
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Payment Status
                        Report</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Retrieve detailed payment cycle information showing all stages of transaction processing.
                        This endpoint returns a complete audit trail of payment status changes from submission to
                        completion.
                    </p>

                    {/* API Endpoint Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">API
                            Endpoint</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileBarChart className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Status Report
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Get comprehensive payment status history showing all processing stages with
                                        timestamps and callback status.
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Values</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">reference</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            transaction ID or client reference
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">mode</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Determines
                                                            whether all stages are requested or the latest stage
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">all,
                                                            latest
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

                                        {/* Response Parameters */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Response
                                                Parameters</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Values</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">responseCode</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            response code
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">00=successful,
                                                            01=pending, 02=failed
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">responseDescription</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            response description
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">responseMessage</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            response message
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Array</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">An
                                                            array of payment status reports
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.transactionStatus</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            status of the transaction
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">NEW,
                                                            PENDING, SUCCESSFUL, FAILED
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.transactionId</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            transaction ID
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.responseDescription</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            response description of the payment stage
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.responseMessage</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            response message of the payment stage
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.callbackSent</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">boolean</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Indicates
                                                            whether callback was sent or not
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">true,
                                                            false
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.paymentOrder</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">int</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            order of the payment
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.dateCreated</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">datetime</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            date and time of the payment stage
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
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

                    {/* Mode Parameter Explanation */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Mode
                            Parameter</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">mode=all</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Returns complete payment history with all processing stages ordered from most recent
                                    to oldest.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Full audit trail of transaction lifecycle</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Track callback delivery status per stage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Detailed timestamps for each stage</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">mode=latest</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Returns only the most recent payment stage status for quick status checks.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Faster response time</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Current transaction state only</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Ideal for polling scenarios</span>
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

export default TransferPaymentStatusReport;