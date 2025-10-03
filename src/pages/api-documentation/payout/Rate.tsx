import {DollarSign, TrendingUp} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const Rate = () => {
    const getTransferFeeEndpoint = () => {
        return `POST https://dev.mypasspoint.com/paypass/ft-app/get-rate?type=fee`;
    };

    const getTransferFeeCurlExample = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/get-rate?type=fee' \\
--data '{
    "srcCurrency": "string",
    "destCurrency": "string",
    "countryCode": "string",
    "amount": "number"
}'`;
    };

    const getTransferFeeRequestBody = () => {
        return `{
    "srcCurrency": "USD",
    "destCurrency": "NGN",
    "countryCode": "NG",
    "amount": "10000"
}`;
    };

    const getTransferFeeResponse = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "rate retrieved successfully",
  "data": {
    "srcCurrency": "string",
    "destCurrency": "string",
    "rate": "decimal",
    "vat": "decimal",
    "fee": "number",
    "srcAmount": "decimal",
    "destAmount": "decimal",
    "totalDebitAmount": "decimal"
  }
}`;
    };

    const getExchangeRateEndpoint = () => {
        return `POST https://dev.mypasspoint.com/paypass/ft-app/get-rate?type=rate`;
    };

    const getExchangeRateRequestBody = () => {
        return `{
    "srcCurrency": "USD",
    "destCurrency": "NGN",
    "countryCode": "NG"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Rates</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Get exchange rates and transaction fees for currency conversions and transfers.
                    </p>

                    {/* Get Transfer Fee */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Transfer
                            Fee</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint returns transaction fee for an amount and currency pair
                        </p>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <DollarSign className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransferFeeEndpoint()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">POST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Authorization */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Authorization</h3>
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
                        </div>

                        {/* Headers */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Headers</h3>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-merchant-id</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">pass your
                                                merchant id
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-channel-id</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-channel-code</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">passpoint-merchant-user</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Query Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Query
                                Parameters</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">fee</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getTransferFeeRequestBody()}</CodeBlock>
                            </div>
                        </div>

                        {/* Request Body Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body
                                Parameters</h3>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">srcCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">destCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">countryCode</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Country
                                                code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">amount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transfer
                                                amount
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Example Request */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Request</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CodeBlock>{getTransferFeeCurlExample()}</CodeBlock>
                            </div>
                        </div>

                        {/* Response */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-semibold">200 OK</p>
                                <CodeBlock>{getTransferFeeResponse()}</CodeBlock>
                            </div>
                        </div>

                        {/* Response Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response
                                Parameters</h3>
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
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Response
                                                code of the operation
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseDescription</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Description
                                                of the response code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseMessage</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Response
                                                message
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.srcCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.destCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.rate</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">decimal</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Exchange
                                                rate
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.vat</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">decimal</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">VAT
                                                amount
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.fee</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                fee
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.srcAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">decimal</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                amount
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.destAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">decimal</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                amount
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.totalDebitAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">decimal</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Total
                                                amount to be debited
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Exchange Rate */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Exchange
                            Rate</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint gets conversion rates for a currency pair. An authorization header is
                            required.
                        </p>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <TrendingUp className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getExchangeRateEndpoint()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">POST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Authorization */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Authorization</h3>
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
                        </div>

                        {/* Headers */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Headers</h3>
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
                        </div>

                        {/* Query Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Query
                                Parameters</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">rate</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getExchangeRateRequestBody()}</CodeBlock>
                            </div>
                        </div>

                        {/* Request Body Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body
                                Parameters</h3>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">srcCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">destCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">countryCode</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Country
                                                code
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Rate;