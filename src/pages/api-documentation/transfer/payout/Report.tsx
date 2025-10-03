import {FileText} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const Report = () => {
    const getTransactionHistoryEndpoint = () => {
        return `POST https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=payout`;
    };

    const getTransactionHistoryRequestBodyNGNNotPaginated = () => {
        return `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "NGN",
    "pageNumber": 0,
    "pageSize": 0
}`;
    };

    const getTransactionHistoryRequestBodyNGNPaginated = () => {
        return `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 5
}`;
    };

    const getTransactionHistoryRequestBodyAllPaginated = () => {
        return `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 1,
    "pageSize": 5
}`;
    };

    const getTransactionHistoryRequestBodyAllNotPaginated = () => {
        return `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 0,
    "pageSize": 0
}`;
    };

    const getTransactionHistoryCurlExampleNGNNotPaginated = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=payout' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: your-merchant-id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "NGN",
    "pageNumber": 0,
    "pageSize": 0
}'`;
    };

    const getTransactionHistoryCurlExampleNGNPaginated = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=payout' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: your-merchant-id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 5
}'`;
    };

    const getTransactionHistoryCurlExampleAllPaginated = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=payout' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: your-merchant-id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 1,
    "pageSize": 5
}'`;
    };

    const getTransactionHistoryCurlExampleAllNotPaginated = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=payout' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: your-merchant-id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 0,
    "pageSize": 0
}'`;
    };

    const getExampleResponsePaginated = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "5 transaction(s) found.",
  "count": 5,
  "data": [
    {
      "transactionId": "65eef400-fa65-46da-b5f9-e68c6d8d9b85",
      "paymentRef": "S58",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "beneficiaryWalletId": "josh@mypasspoint.com",
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "Test Transfer",
      "senderAccountNumber": "9977657822",
      "senderAccountName": "MERCHANT(Kelechi Motors)",
      "senderBankName": "Providus Bank",
      "beneficiaryAccountNumber": "",
      "beneficiaryAccountName": "MERCHANT(Josh Merchant)",
      "beneficiaryBankCode": "000000",
      "beneficiaryBankName": "Providus Bank",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "transactionStatus": "SUCCESSFUL",
      "dateCreated": "2023-10-30T04:29:16.000+00:00",
      "dateUpdated": "2023-10-30T04:29:18.000+00:00",
      "transactionCategory": "PAYOUT",
      "amount": 2150
    }
    // ... more transactions
  ]
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Report</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Retrieve transaction history and reports for payout transactions.
                    </p>

                    {/* General Information */}
                    <div
                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Authorization</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-100 mb-4">
                            <strong>Bearer Token:</strong> This folder is using Bearer Token from collection Passpoint
                            Payment Service
                        </p>
                        <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                            <strong>Note:</strong> The header requires the following:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-sm text-blue-900 dark:text-blue-100 space-y-1">
                            <li>x-channel-id = 2</li>
                            <li>x-channel-code = passpoint-infra-user</li>
                            <li>x-merchant-id = your merchant id</li>
                        </ul>
                    </div>

                    {/* Transaction History - Payout - NGN - Not Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Payout - NGN - Not Paginated</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint returns the list of transactions.
                        </p>

                        <div
                            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
                            <p className="text-sm text-blue-900 dark:text-blue-100">
                                <strong>Note:</strong> The header requires the following:
                            </p>
                            <ul className="list-disc list-inside mt-2 text-sm text-blue-900 dark:text-blue-100 space-y-1">
                                <li>x-channel-id = 2</li>
                                <li>x-channel-code = passpoint-infra-user</li>
                                <li>x-merchant-id = your merchant id</li>
                            </ul>
                        </div>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryEndpoint()}</CodeBlock>
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
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">payout</td>
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
                                <CodeBlock>{getTransactionHistoryRequestBodyNGNNotPaginated()}</CodeBlock>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">startDate</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Start
                                                date for the transaction history (format: YYYY-MM-DD)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">endDate</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">End date
                                                for the transaction history (format: YYYY-MM-DD)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">currency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Currency
                                                code (e.g., NGN, USD, GBP, EUR)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">pageNumber</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Page
                                                number for pagination (set to 0 for not paginated)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">pageSize</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Number of
                                                records per page (set to 0 for not paginated)
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
                                <CodeBlock>{getTransactionHistoryCurlExampleNGNNotPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Response Information */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    The endpoint returns a list of payout transactions for the specified date range and
                                    currency.
                                </p>
                                <div
                                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                    <p className="text-sm text-green-900 dark:text-green-100">
                                        <strong>Success Status:</strong> 200 OK
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Response Structure */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response
                                Structure</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Field</th>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">array</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array of
                                                transaction objects containing transaction details
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Important
                                Notes</h3>
                            <div
                                className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                                <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-amber-100">
                                    <li>Setting both <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">pageNumber</code> and <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">pageSize</code> to
                                        0 will return all transactions without pagination
                                    </li>
                                    <li>The date format must be YYYY-MM-DD</li>
                                    <li>Ensure the <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">endDate</code> is
                                        greater than or equal to <code
                                            className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">startDate</code>
                                    </li>
                                    <li>The response will include transactions within the specified date range for the
                                        given currency
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Transaction History - Payout - NGN - Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Payout - NGN - Paginated</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint returns the list of transactions with pagination enabled for NGN currency.
                        </p>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryEndpoint()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">POST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getTransactionHistoryRequestBodyNGNPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Request */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Request</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CodeBlock>{getTransactionHistoryCurlExampleNGNPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Response */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-semibold">200 OK</p>
                                <CodeBlock>{getExampleResponsePaginated()}</CodeBlock>
                            </div>
                        </div>
                    </section>

                    {/* Transaction History - Payout - All Currency - Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Payout - All Currency - Paginated</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint returns the list of transactions with pagination enabled for all currencies.
                        </p>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryEndpoint()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">POST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getTransactionHistoryRequestBodyAllPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Request */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Request</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CodeBlock>{getTransactionHistoryCurlExampleAllPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Response */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-semibold">200 OK</p>
                                <CodeBlock>{getExampleResponsePaginated()}</CodeBlock>
                            </div>
                        </div>
                    </section>

                    {/* Transaction History - Payout - All Currency - Not Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Payout - All Currency - Not Paginated</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            This endpoint returns the complete list of transactions without pagination for all
                            currencies.
                        </p>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryEndpoint()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">POST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getTransactionHistoryRequestBodyAllNotPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Request */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Request</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CodeBlock>{getTransactionHistoryCurlExampleAllNotPaginated()}</CodeBlock>
                            </div>
                        </div>

                        {/* Example Response */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-semibold">200 OK</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Returns all transactions
                                    found (9 transaction(s) in example)</p>
                                <CodeBlock>{getExampleResponsePaginated()}</CodeBlock>
                            </div>
                        </div>
                    </section>

                    {/* Common Headers and Parameters */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Common Headers
                            and Parameters</h2>

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
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">payout</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
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
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">startDate</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Start
                                                date for the transaction history (format: YYYY-MM-DD)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">endDate</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">End date
                                                for the transaction history (format: YYYY-MM-DD)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">currency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Yes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Currency
                                                code (e.g., NGN, USD, GBP, EUR) or "all" for all currencies
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">pageNumber</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Page
                                                number for pagination (set to 0 for not paginated, or 1+ for specific
                                                page)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">pageSize</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Number of
                                                records per page (set to 0 for not paginated, or specific number for
                                                pagination)
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Response Structure */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response
                                Structure</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Field</th>
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
                                                message indicating number of transactions found
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">count</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Number of
                                                transactions returned
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">array</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array of
                                                transaction objects containing transaction details
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data[].transactionId</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unique
                                                transaction identifier
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data[].paymentRef</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Payment
                                                reference number
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data[].amount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                amount
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data[].currency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                currency
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data[].transactionStatus</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Status of
                                                the transaction (SUCCESSFUL, FAILED, NEW)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data[].dateCreated</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                creation timestamp
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Important
                                Notes</h3>
                            <div
                                className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                                <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-amber-100">
                                    <li>Setting both <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">pageNumber</code> and <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">pageSize</code> to
                                        0 will return all transactions without pagination
                                    </li>
                                    <li>For paginated results, set <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">pageNumber</code> to
                                        1 or higher and <code
                                            className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">pageSize</code> to
                                        the desired number of records per page
                                    </li>
                                    <li>The date format must be YYYY-MM-DD</li>
                                    <li>Ensure the <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">endDate</code> is
                                        greater than or equal to <code
                                            className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">startDate</code>
                                    </li>
                                    <li>Use <code className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">currency:
                                        "all"</code> to retrieve transactions for all currencies
                                    </li>
                                    <li>Use specific currency codes (NGN, USD, GBP, EUR) to filter transactions by
                                        currency
                                    </li>
                                    <li>The response includes a <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">count</code> field
                                        indicating the number of transactions returned
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

export default Report;

