import {CreditCard} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const PayoutBankForeignGetPaymentMethods = () => {
    const getEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/foreign-ft-app/available-payment-methods?countryCode=`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Get Payment
                        Methods</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Get payment methods available by country for foreign payout transactions.
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CreditCard className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">GET
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpointCode()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">GET</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Request Parameters */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request
                            Parameters</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                            Value
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">countryCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the selected
                                            country code
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Response Parameters */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Response
                            Parameters</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the response
                                            code of the operation. this indicates that the request was submitted
                                            successfully
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseDescription</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                            description of the response code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseMessage</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            payment methods
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.name</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the name of
                                            the payment method
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.alias</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the code for
                                            the payment method
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.minLimit</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the minimum
                                            limit of the payment method
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.maxLimit</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the maximum
                                            limit of the payment method
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PayoutBankForeignGetPaymentMethods;