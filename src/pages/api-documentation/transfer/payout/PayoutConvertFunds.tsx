import {RefreshCw} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const PayoutConvertFunds = () => {
    const getConvertFundsEndpoint = () => {
        return `POST https://dev.mypasspoint.com/paypass/ft-app/convert-funds`;
    };

    const getConvertFundsRequestBody = () => {
        return `{
    "srcCurrency": "USD",
    "destCurrency": "NGN",
    "amount": 1000.00
}`;
    };

    const getConvertFundsCurlExample = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/convert-funds' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: your-merchant-id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--data '{
    "srcCurrency": "USD",
    "destCurrency": "NGN",
    "amount": 1000.00
}'`;
    };

    const getConvertFundsResponse = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Funds converted successfully",
  "data": {
    "transactionId": "conv_abc123def456",
    "srcCurrency": "USD",
    "destCurrency": "NGN",
    "srcAmount": 1000.00,
    "destAmount": 850000.00,
    "exchangeRate": 850.00,
    "fee": 5.00,
    "vat": 0.00,
    "totalDebitAmount": 1005.00,
    "status": "SUCCESSFUL",
    "dateCreated": "2024-01-15T14:30:00.000+00:00"
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Convert Funds</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Convert funds between different currencies in your Passpoint wallet with competitive exchange
                        rates and instant settlement.
                    </p>

                    {/* Convert Funds */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Currency
                            Conversion</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint allows you to convert funds between different currencies in your wallet.
                        </p>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <RefreshCw className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getConvertFundsEndpoint()}</CodeBlock>
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

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getConvertFundsRequestBody()}</CodeBlock>
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
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">srcCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                currency code (e.g., USD, EUR, GBP)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">destCurrency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                currency code (e.g., NGN, USD, EUR)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">amount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Amount to
                                                convert in source currency
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
                                <CodeBlock>{getConvertFundsCurlExample()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Response */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-semibold">200 OK</p>
                                <CodeBlock>{getConvertFundsResponse()}</CodeBlock>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.transactionId</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unique
                                                conversion transaction identifier
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.srcAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Amount in
                                                source currency
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.destAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Amount
                                                received in destination currency
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.exchangeRate</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Exchange
                                                rate used for conversion
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.fee</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Conversion
                                                fee charged
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.vat</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">VAT
                                                amount
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.totalDebitAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Total
                                                amount debited (amount + fees)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.status</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Conversion
                                                status (SUCCESSFUL, FAILED, PENDING)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.dateCreated</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Timestamp
                                                when conversion was created
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Important
                                Notes</h3>
                            <div
                                className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                                <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-amber-100">
                                    <li>Exchange rates are updated in real-time and may vary</li>
                                    <li>Conversion fees and VAT (if applicable) will be charged as per your merchant
                                        agreement
                                    </li>
                                    <li>Ensure you have sufficient balance in the source currency before initiating
                                        conversion
                                    </li>
                                    <li>Supported currencies include USD, EUR, GBP, NGN, and other major currencies</li>
                                    <li>The <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">totalDebitAmount</code> includes
                                        the source amount plus all applicable fees
                                    </li>
                                    <li>Conversions are typically processed instantly</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PayoutConvertFunds;
