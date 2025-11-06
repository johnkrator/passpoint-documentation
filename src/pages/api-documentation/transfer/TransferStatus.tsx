import {Search} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransferStatus = () => {
    const getEndpoint = () => `GET https://dev.mypasspoint.com/paypass/ft-app/transfer-status`;

    const getRequestExample = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transfer-status?reference=00000423060111141481697464946545699112233' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-infra-user' \\
--header 'x-merchant-id: 22f36327-493c-492d-a390-5bf321ff51ba'`;

    const getResponseExample = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "transaction found",
  "data": {
    "status": "SUCCESSFUL",
    "transactionId": "00000423060111141481697464946545699112233",
    "senderAccountNumber": "2025143050",
    "senderAccountName": "OLANIYAN CAXTON-MARTINS",
    "senderBankName": "UNITED BANK FOR AFRICA",
    "beneficiaryAccountNumber": "9977658111",
    "beneficiaryAccountName": "MERCHANT(QA Test Merchant)",
    "beneficiaryBankCode": "000023",
    "amount": 50000,
    "paymentType": "COLLECTION"
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Transfer
                        Status</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Retrieve the current status of a transaction using the transaction ID or client reference.
                        This endpoint provides real-time information about payment processing stages.
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
                                    <Search className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Get Status
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Query transaction status by reference to track payment lifecycle from submission
                                        to completion.
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
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">reference</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            transaction ID or client reference
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
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">3</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">legacy-api-user</td>
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
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.status</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            status of the transaction
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">NEW,
                                                            PENDING, PROCESSING, SUCCESSFUL, FAILED
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
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.amount</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">decimal</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            transaction amount
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.senderAccountNumber</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            sender account number
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.senderAccountName</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            sender account name
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.senderBankName</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            sender bank name
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.beneficiaryAccountNumber</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            beneficiary account number
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.beneficiaryAccountName</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            beneficiary account name
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">-</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.paymentType</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            payment type
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">PAYOUT,
                                                            COLLECTION
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

                    {/* Status Values Reference */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Status
                            Values</h2>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">NEW</h3>
                                <p className="text-sm text-blue-800 dark:text-blue-400">Transaction has been created and
                                    is awaiting processing</p>
                            </div>
                            <div
                                className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                <h3 className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">PENDING</h3>
                                <p className="text-sm text-yellow-800 dark:text-yellow-400">Transaction is queued for
                                    processing</p>
                            </div>
                            <div
                                className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                                <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-2">PROCESSING</h3>
                                <p className="text-sm text-purple-800 dark:text-purple-400">Transaction is currently
                                    being processed</p>
                            </div>
                            <div
                                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                <h3 className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">SUCCESSFUL</h3>
                                <p className="text-sm text-green-800 dark:text-green-400">Transaction completed
                                    successfully</p>
                            </div>
                            <div
                                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                <h3 className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">FAILED</h3>
                                <p className="text-sm text-red-800 dark:text-red-400">Transaction failed and will not be
                                    retried</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TransferStatus;

