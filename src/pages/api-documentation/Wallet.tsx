import {Wallet as WalletIcon, BarChart3, History, FileText} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const Wallet = () => {
    const getWalletBalanceEndpointCode = () => {
        return `GET https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-balance`;
    };

    const getWalletBalanceHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    };

    const getWalletBalanceCurlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-balance/all' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id'`;
    };

    const getWalletBalanceResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "2 wallet balance found",
  "data": [
    {
      "currency": "NGN",
      "availableBalance": 54015.77
    },
    {
      "currency": "USD",
      "availableBalance": 15420.50
    }
  ]
}`;
    };

    const getWalletDetailsEndpointCode = () => {
        return `GET https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-details`;
    };

    const getWalletDetailsHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    };

    const getWalletDetailsCurlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-details' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id'`;
    };

    const getWalletDetailsResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "12 wallet statement item(s) found.",
  "totalCount": 12,
  "currentBalance": 54015.77,
  "pageCount": 1,
  "pageSize": 20,
  "currentPage": 1,
  "data": [
    {
      "merchantId": "string",
      "walletId": "string",
      "walletName": "string",
      "active": true,
      "dateCreated": "2024-04-29T21:11:06.3329516",
      "walletAccount": {}
    }
  ]
}`;
    };

    const getWalletHistoryEndpointCode = () => {
        return `POST https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/wallet-history?type=all`;
    };

    const getWalletHistoryHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    };

    const getWalletHistoryRequestBodyCode = () => {
        return `{
  "startDate": "2023-10-15",
  "endDate": "2023-11-30",
  "currency": "NGN",
  "pageNumber": 1,
  "pageSize": 5
}`;
    };

    const getWalletHistoryCurlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/wallet-history?type=all' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-11-30",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 5
}'`;
    };

    const getWalletHistoryResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "5 wallet history found.",
  "data": []
}`;
    };

    const getWalletStatementEndpointCode = () => {
        return `POST https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-statement`;
    };

    const getWalletStatementHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    };

    const getWalletStatementRequestBodyCode = () => {
        return `{
  "startDate": "2024-04-20",
  "endDate": "2024-12-31",
  "currency": "USD",
  "transMode": "credit",
  "pageNumber": 1,
  "pageSize": 5
}`;
    };

    const getWalletStatementCurlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-statement' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2024-04-20",
    "endDate": "2024-12-31",
    "currency": "USD",
    "transMode": "credit",
    "pageNumber": 1,
    "pageSize": 5
}'`;
    };

    const getWalletStatementResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "12 wallet statement item(s) found.",
  "totalCount": 12,
  "currentBalance": 54015.77,
  "pageCount": 1,
  "pageSize": 20,
  "currentPage": 1,
  "data": [
    {
      "accountName": "Chinedu Ojiteli",
      "currency": "USD",
      "transactionId": "UBNDd0ce7901454242129ac8a33491e14102171417252204261102421573db267747909c0564ed3321b8e7",
      "runningBalance": "54700.27",
      "narration": "Lien of 100.50 for VIRTUAL CARD FUNDING",
      "amount": 100.5,
      "transactionType": "Transfer",
      "transactionDate": "2024-04-26T23:45:26.1828248",
      "debit": true,
      "transMode": "debit"
    }
  ]
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Wallet</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        The section covers endpoints for Wallet management operations
                    </p>

                    {/* APIs Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">APIs</h2>

                        <div className="space-y-8">
                            {/* Get Wallet Balance */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <WalletIcon className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                            Wallet Balance</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-balance
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Method:</strong> GET
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Description:</strong> Get wallet balance
                                            </p>
                                            <div>
                                                <h4 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">Path
                                                    Parameters:</h4>
                                                <div className="overflow-x-auto">
                                                    <table
                                                        className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                        <thead>
                                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Required</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Default
                                                                Value
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">currency</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">mandatory</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                currency of the wallet. when currency = all , it
                                                                retrieves the balance of all the wallet
                                                            </td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">all</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <h4 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">Response
                                                    Parameters:</h4>
                                                <div className="overflow-x-auto">
                                                    <table
                                                        className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                        <thead>
                                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseCode</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                response code of the operation. this indicates that the
                                                                request was submitted successfully
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseDescription</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                description of the response code
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseMessage</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Array</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                list of balances of the wallets created for the customer
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.currency</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                wallet currency
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.availableBalance</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">decimal</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                available balance of the wallet
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getWalletBalanceEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                                <CodeBlock language="bash">{getWalletBalanceHeadersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getWalletBalanceCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getWalletBalanceResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Get Wallet Details */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <BarChart3 className="h-12 w-12 text-green-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                            Wallet Details</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-details
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Method:</strong> GET
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Description:</strong> Get wallet details
                                            </p>
                                            <div className="mt-6">
                                                <h4 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">Response
                                                    Parameters:</h4>
                                                <div className="overflow-x-auto">
                                                    <table
                                                        className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                        <thead>
                                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                            <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseCode</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                response code of the operation. this indicates that the
                                                                request was submitted successfully
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseDescription</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                description of the response code
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseMessage</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Object</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                details of the wallet
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.merchantId</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                wallet merchant id
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.walletId</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                wallet id
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.walletName</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                wallet name
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.active</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">boolean</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">this
                                                                states whether the wallet is active or inactive
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.dateCreated</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">datetime</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                date and time that the wallet was created
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data.walletAccount</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Dictionary</td>
                                                            <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">the
                                                                wallet account details
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getWalletDetailsEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                                <CodeBlock language="bash">{getWalletDetailsHeadersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getWalletDetailsCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getWalletDetailsResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Wallet History - NGN - Paginated */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <History className="h-12 w-12 text-blue-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Wallet
                                            History - NGN - Paginated</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/wallet-history?type=all
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Description:</strong> This endpoint returns the list of
                                                transactions given the currency
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getWalletHistoryEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                                <CodeBlock language="bash">{getWalletHistoryHeadersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                    Body</h4>
                                                <CodeBlock
                                                    language="json">{getWalletHistoryRequestBodyCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getWalletHistoryCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getWalletHistoryResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Get Wallet Statement */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <FileText className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                            Wallet Statement</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/wallet-app/get-wallet-statement
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                <strong>Description:</strong> This endpoint creates a wallet
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getWalletStatementEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                                <CodeBlock language="bash">{getWalletStatementHeadersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                    Body</h4>
                                                <CodeBlock
                                                    language="json">{getWalletStatementRequestBodyCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{getWalletStatementCurlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock
                                                    language="json">{getWalletStatementResponseCode()}</CodeBlock>
                                            </div>
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

export default Wallet;