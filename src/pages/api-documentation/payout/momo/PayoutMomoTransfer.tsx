import {Send} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";
import PaginationNavigation from "@/components/PaginationNavigation.tsx";

const PayoutMomoTransfer = () => {
    const getEndpointCode = () => {
        return `POST https://dev.mypasspoint.com/paypass/momo-app/transfer`;
    };

    const getExampleRequestCode = () => {
        return `{
    "amount": "50",
    "narration": "test KES transfer",
    "serviceCode": "airtel",
    "transactionCurrency": "KES",
    "accountName": "Momo Customer",
    "bankCode": "000000",
    "channel": "3",
    "msisdn": "254726679188",
    "clientReference": "12237546",
    "countryCode" : "KE"
}`;
    };

    const getCurlExampleCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/momo-app/transfer' \\
--data '{
    "amount": "50",
    "narration": "test KES transfer",
    "serviceCode": "airtel",
    "transactionCurrency": "KES",
    "accountName": "Momo Customer",
    "bankCode": "000000",
    "channel": "3",
    "msisdn": "254726679188",
    "clientReference": "12237546",
    "countryCode" : "KE"
}'`;
    };

    const getExampleResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "string",
  "responseMessage": "strng",
  "data": {
    "status": "string",
    "transactionId": "string"
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Momo Transfer</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Initiates a payout request to a momo wallet account holder.
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Send className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpointCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authorization */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Authorization</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Bearer
                                        Token</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        This request is using Bearer Token from collection Passpoint Payment Service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Headers */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Headers</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Header</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-channel-id</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-channel-code</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">passpoint-merchant-user</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-merchant-id</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">pass your
                                            merchant id
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Values</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">amount</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                            transaction amount
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">transactionCurrency</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                            transaction currency
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">e.g. KES,
                                            GHS
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">channel</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the channel
                                            through which the request is sent
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1 -
                                            MOBILE_ANDROID, 2- MOBILE_IOS, 3- WEB, 4- THIRDPARTY, 5-USSD
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">msisdn</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the momo
                                            phone number
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">serviceCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the momo
                                            network service code. This can be obtained from here
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">bankCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">passpoint
                                            default bank code
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">e.g. 000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">clientReference</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">uniquely
                                            generated reference used by the merchant to identify the transaction
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">countryCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the payer
                                            country code
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">accountName</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the payer
                                            name
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">callbackUrl</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">optional</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the callback
                                            url where the final status of transaction will be sent
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">narration</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                            description of the payment
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Request Body */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request
                            Body</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                        Request (JSON)</h4>
                                    <CodeBlock language="json">{getExampleRequestCode()}</CodeBlock>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">CURL
                                        Example</h4>
                                    <CodeBlock language="bash">{getCurlExampleCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Response */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Response</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                        Response</h4>
                                    <CodeBlock language="json">{getExampleResponseCode()}</CodeBlock>
                                </div>
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Values</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the response
                                            code
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">e.g. 00-
                                            successful, 01-pending, 02-failed
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseDescription</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the response
                                            description
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseMessage</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the response
                                            message
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Object</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">The details
                                            of the payment initiation
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.status</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">The status of
                                            the transaction
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">e.g. new,
                                            pending, successful, failed
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.transactionId</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">The
                                            transaction id
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Validate Momo Msisdn",
                        href: "/payout/momo/validate-msisdn"
                    }}
                    nextPage={{
                        title: "Bank Transfers",
                        href: "/payout/bank"
                    }}
                />

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default PayoutMomoTransfer;