import {Wallet as WalletIcon, BarChart3, AlertCircle, History, FileText} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const Wallet = () => {
    const getWalletBalanceAllEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-balance/all`;
    };

    const getWalletBalanceAllHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]`;
    };

    const getWalletBalanceAllCurlCode = () => {
        return `curl -X GET "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-balance/all" \\
  -H "x-channel-id: 2" \\
  -H "x-channel-code: passpoint-merchant-user" \\
  -H "x-merchant-id: your-merchant-id" \\
  -H "Authorization: Bearer your-access-token"`;
    };

    const getWalletBalanceAllResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Operation completed successfully",
  "data": {
    "success": true,
    "status": "00",
    "balances": [
      {
        "currency": "USD",
        "balance": 15420.50,
        "available": 15420.50
      },
      {
        "currency": "EUR",
        "balance": 8930.25,
        "available": 8930.25
      }
    ]
  }
}`;
    };

    const getWalletDetailsEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-details`;
    };

    const getWalletDetailsHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]`;
    };

    const getWalletDetailsCurlCode = () => {
        return `curl -X GET "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-details" \\
  -H "x-channel-id: 2" \\
  -H "x-channel-code: passpoint-merchant-user" \\
  -H "x-merchant-id: your-merchant-id" \\
  -H "Authorization: Bearer your-access-token"`;
    };

    const getWalletDetailsResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Operation completed successfully",
  "data": {
    "success": true,
    "status": "00",
    "wallets": [
      {
        "currency": "USD",
        "balance": 15420.50,
        "currencySymbol": "$",
        "accountNumber": "1234567890",
        "accountName": "Merchant USD Wallet"
      },
      {
        "currency": "EUR",
        "balance": 8930.25,
        "currencySymbol": "€",
        "accountNumber": "0987654321",
        "accountName": "Merchant EUR Wallet"
      }
    ]
  }
}`;
    };

    const getWalletHistoryEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-history`;
    };

    const getWalletHistoryHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]`;
    };

    const getWalletHistoryQueryParamsCode = () => {
        return `{
  "currency": "USD",
  "startDate": "2024-01-01",
  "endDate": "2024-01-31",
  "page": 1,
  "limit": 50,
  "transactionType": "all"
}`;
    };

    const getWalletHistoryCurlCode = () => {
        return `curl -X GET "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-history?currency=USD&startDate=2024-01-01&endDate=2024-01-31&page=1&limit=50" \\
  -H "x-channel-id: 2" \\
  -H "x-channel-code: passpoint-merchant-user" \\
  -H "x-merchant-id: your-merchant-id" \\
  -H "Authorization: Bearer your-access-token"`;
    };

    const getWalletHistoryResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Transaction history retrieved successfully",
  "data": {
    "success": true,
    "status": "00",
    "transactions": [
      {
        "transactionId": "TXN123456789",
        "type": "credit",
        "amount": 1000.00,
        "currency": "USD",
        "description": "Payment received",
        "timestamp": "2024-01-15T10:30:00Z",
        "reference": "REF123456"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_records": 125,
      "per_page": 50
    }
  }
}`;
    };

    const getWalletStatementEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-statement`;
    };

    const getWalletStatementHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]`;
    };

    const getWalletStatementQueryParamsCode = () => {
        return `{
  "currency": "USD",
  "startDate": "2024-01-01",
  "endDate": "2024-01-31",
  "format": "json"
}`;
    };

    const getWalletStatementCurlCode = () => {
        return `curl -X GET "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-statement?currency=USD&startDate=2024-01-01&endDate=2024-01-31&format=json" \\
  -H "x-channel-id: 2" \\
  -H "x-channel-code: passpoint-merchant-user" \\
  -H "x-merchant-id: your-merchant-id" \\
  -H "Authorization: Bearer your-access-token"`;
    };

    const getWalletStatementResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Statement generated successfully",
  "data": {
    "success": true,
    "status": "00",
    "statement": {
      "currency": "USD",
      "period": "2024-01-01 to 2024-01-31",
      "opening_balance": 14420.50,
      "closing_balance": 15420.50,
      "total_credits": 2500.00,
      "total_debits": 1500.00,
      "net_change": 1000.00,
      "transactions": [
        {
          "date": "2024-01-15",
          "description": "Payment received",
          "credit": 1000.00,
          "debit": 0.00,
          "balance": 15420.50,
          "reference": "REF123456"
        }
      ]
    }
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Wallet
                        Management</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Comprehensive wallet management APIs for the Passpoint Payment Service. Access wallet balances,
                        transaction history, and detailed statements across multiple currencies with real-time updates.
                    </p>

                    {/* Important Notice */}
                    <div
                        className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 lg:p-8 mb-12 shadow-sm">
                        <div className="flex">
                            <AlertCircle
                                className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5 mr-4"/>
                            <div>
                                <h4 className="text-base font-semibold text-amber-800 dark:text-amber-200 mb-2">Important
                                    Authentication Notice</h4>
                                <div className="text-amber-700 dark:text-amber-300 space-y-2">
                                    <p><strong>Token Expiry:</strong> Development tokens expire after 10 minutes,
                                        production tokens after 1 hour.</p>
                                    <p><strong>Dashboard Access:</strong> Get your merchant credentials and API keys
                                        from the Passpoint dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Get Wallet Balance */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Wallet
                            Balance</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <WalletIcon className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Balance
                                        All Currencies</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve merchant wallet balance across all supported currencies in a single
                                        request.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getWalletBalanceAllEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock language="bash">{getWalletBalanceAllHeadersCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{getWalletBalanceAllCurlCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getWalletBalanceAllResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Wallet Details */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Wallet
                            Details</h2>

                        <div className="space-y-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <BarChart3 className="h-12 w-12 text-green-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Wallet
                                            Details</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Get detailed wallet information across all currencies including balances,
                                            currency details, and account information.
                                        </p>

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
                        </div>
                    </section>

                    {/* Wallet History */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Wallet
                            History</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <History className="h-12 w-12 text-blue-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Transaction
                                        History</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve paginated transaction history with filtering options by currency, date
                                        range, and transaction type.
                                    </p>

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
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{getWalletHistoryQueryParamsCode()}</CodeBlock>
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
                    </section>

                    {/* Wallet Statement */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Wallet
                            Statement</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Generate
                                        Statement</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Generate detailed wallet statements with opening/closing balances, transaction
                                        summaries, and complete transaction lists for accounting purposes.
                                    </p>

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
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{getWalletStatementQueryParamsCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{getWalletStatementCurlCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getWalletStatementResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Transfer",
                        href: "/transfer"
                    }}
                    nextPage={{
                        title: "Collection",
                        href: "/collection"
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

export default Wallet;

