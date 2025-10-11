import {FileText, List, History, Clock} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionReport = () => {
    // Transaction History - All Currency - Paginated
    const getTransactionHistoryAllPaginatedEndpoint = () => `POST https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=collection`;

    const getTransactionHistoryAllPaginatedRequestBody = () => `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 1,
    "pageSize": 2
}`;

    const getTransactionHistoryAllPaginatedCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=collection' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 1,
    "pageSize": 2
}'`;

    const getTransactionHistoryAllPaginatedResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "2 transaction(s) found.",
  "count": 2,
  "data": [
    {
      "transactionId": "00000423060111141481697464946545699112233",
      "paymentRef": "M47",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "beneficiaryBankName": "Providus Bank",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "transactionStatus": "SUCCESSFUL",
      "dateCreated": "2023-10-28T09:25:51.000+00:00",
      "dateUpdated": "2023-10-28T09:25:51.000+00:00",
      "transactionCategory": "COLLECTION",
      "amount": 50000
    },
    {
      "transactionId": "00000423060111141481697464946545699112",
      "paymentRef": "M33",
      "providerRef": "20923060100165745406005602112",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "transactionStatus": "SUCCESSFUL",
      "dateCreated": "2023-10-27T04:44:32.000+00:00",
      "dateUpdated": "2023-10-27T04:44:33.000+00:00",
      "transactionCategory": "COLLECTION",
      "amount": 1000
    }
  ]
}`;

    // Transaction History - NGN - Paginated
    const getTransactionHistoryNGNPaginatedRequestBody = () => `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 2
}`;

    const getTransactionHistoryNGNPaginatedCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=collection' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 2
}'`;

    const getTransactionHistoryNGNPaginatedResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "2 transaction(s) found.",
  "count": 2,
  "data": [
    {
      "transactionId": "00000423060111141481697464946545699112233",
      "paymentRef": "M47",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "transactionAmount": 50000,
      "settledAmount": 50000,
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "beneficiaryBankName": "Providus Bank",
      "cbaCustId": "b0d2d564-ce1e-4366-36ac-08dbd61ddffb",
      "liened": false,
      "lienRemoved": false,
      "initialResponseCode": "Z01",
      "initialResponseMessage": "New",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "dateCreated": "2023-10-28T09:25:51.000+00:00",
      "dateUpdated": "2023-10-28T09:25:51.000+00:00",
      "transactionCategory": "COLLECTION",
      "callbackSent": false
    },
    {
      "transactionId": "00000423060111141481697464946545699112",
      "paymentRef": "M33",
      "providerRef": "20923060100165745406005602112",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "transactionAmount": 1000,
      "settledAmount": 1000,
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "cbaCustId": "b0d2d564-ce1e-4366-36ac-08dbd61ddffb",
      "liened": false,
      "lienRemoved": false,
      "initialResponseCode": "Z01",
      "initialResponseMessage": "New",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "dateCreated": "2023-10-27T04:44:32.000+00:00",
      "dateUpdated": "2023-10-27T04:44:33.000+00:00",
      "transactionCategory": "COLLECTION",
      "callbackSent": false
    }
  ]
}`;

    // Transaction History - All Currency - Not Paginated
    const getTransactionHistoryAllNotPaginatedRequestBody = () => `{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 0,
    "pageSize": 0
}`;

    const getTransactionHistoryAllNotPaginatedCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/transaction-history?type=collection' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-10-30",
    "currency": "all",
    "pageNumber": 0,
    "pageSize": 0
}'`;

    const getTransactionHistoryAllNotPaginatedResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "3 transaction(s) found.",
  "count": 3,
  "data": [
    {
      "transactionId": "00000423060111141481697464946545699112233",
      "paymentRef": "M47",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "transactionAmount": 50000,
      "settledAmount": 50000,
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "beneficiaryBankName": "Providus Bank",
      "cbaCustId": "b0d2d564-ce1e-4366-36ac-08dbd61ddffb",
      "liened": false,
      "lienRemoved": false,
      "initialResponseCode": "Z01",
      "initialResponseMessage": "New",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "dateCreated": "2023-10-28T09:25:51.000+00:00",
      "dateUpdated": "2023-10-28T09:25:51.000+00:00",
      "transactionCategory": "COLLECTION",
      "callbackSent": false
    },
    {
      "transactionId": "00000423060111141481697464946545699112",
      "paymentRef": "M33",
      "providerRef": "20923060100165745406005602112",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "transactionAmount": 1000,
      "settledAmount": 1000,
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "cbaCustId": "b0d2d564-ce1e-4366-36ac-08dbd61ddffb",
      "liened": false,
      "lienRemoved": false,
      "initialResponseCode": "Z01",
      "initialResponseMessage": "New",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "dateCreated": "2023-10-27T04:44:32.000+00:00",
      "dateUpdated": "2023-10-27T04:44:33.000+00:00",
      "transactionCategory": "COLLECTION",
      "callbackSent": false
    },
    {
      "transactionId": "0000042306011114148169746494654569911",
      "paymentRef": "M32",
      "providerRef": "2092306010016574540600560211",
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "walletId": "chinedu37dz@gmail.com",
      "transactionAmount": 10000,
      "settledAmount": 10000,
      "fee": 0,
      "vat": 0,
      "currency": "NGN",
      "narration": "FROM UBA/ OLANIYAN CAXTON-MARTINS-MOB2/UTO/To PASSPOINT Caxton-Ma)/SociaLiga website and mailchimp/0000042306011114185216944910499",
      "senderAccountNumber": "2025143050",
      "senderAccountName": "OLANIYAN CAXTON-MARTINS",
      "senderBankName": "UNITED BANK FOR AFRICA",
      "beneficiaryAccountNumber": "9977657822",
      "beneficiaryAccountName": "MERCHANT(Kelechi Motors)",
      "beneficiaryBankCode": "000023",
      "cbaCustId": "b0d2d564-ce1e-4366-36ac-08dbd61ddffb",
      "liened": false,
      "lienRemoved": false,
      "initialResponseCode": "Z01",
      "initialResponseMessage": "New",
      "finalResponseCode": "00",
      "finalResponseMessage": "Successful",
      "dateCreated": "2023-10-27T04:28:27.000+00:00",
      "dateUpdated": "2023-10-27T04:28:28.000+00:00",
      "transactionCategory": "COLLECTION",
      "callbackSent": false
    }
  ]
}`;

    // List Virtual Accounts - Paginated
    const getVirtualAccountsPaginatedEndpoint = () => `POST https://dev.mypasspoint.com/paypass/ft-app/acct-list`;

    const getVirtualAccountsPaginatedRequestBody = () => `{
    "startDate": "2023-10-15",
    "endDate": "2023-11-08",
    "currency": "all",
    "pageNumber": 1,
    "pageSize": 5
}`;

    const getVirtualAccountsPaginatedCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/acct-list' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-11-08",
    "currency": "all",
    "pageNumber": 1,
    "pageSize": 5
}'`;

    // List Virtual Accounts - Not Paginated
    const getVirtualAccountsNotPaginatedRequestBody = () => `{
    "startDate": "2023-10-15",
    "endDate": "2023-11-05",
    "currency": "all",
    "pageNumber": 0,
    "pageSize": 0
}`;

    const getVirtualAccountsNotPaginatedCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/acct-list' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate": "2023-10-15",
    "endDate": "2023-11-05",
    "currency": "all",
    "pageNumber": 0,
    "pageSize": 0
}'`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Collection
                        Report</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Retrieve comprehensive transaction history and virtual account reports with flexible pagination
                        options. Query by date range, currency, and pagination settings.
                    </p>

                    {/* Transaction History - All Currency - Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Collection - All Currency - Paginated</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <History className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Transaction
                                        History</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        This endpoint returns the list of transactions across all currencies with
                                        pagination support.
                                    </p>

                                    {/* Header Requirements Note */}
                                    <div
                                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                                        <p className="text-sm text-blue-900 dark:text-blue-300 font-semibold mb-2">Header
                                            Requirements:</p>
                                        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                                            <li>• x-channel-id = 2</li>
                                            <li>• x-channel-code = passpoint-infra-user</li>
                                            <li>• x-merchant-id = your merchant id</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryAllPaginatedEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Authorization */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Type:</span> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Using Bearer Token from collection Passpoint Payment Service
                                                </p>
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
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">pass
                                                            your merchant id
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">type</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">collection</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock
                                                language="json">{getTransactionHistoryAllPaginatedRequestBody()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock
                                                language="bash">{getTransactionHistoryAllPaginatedCurlRequest()}</CodeBlock>
                                        </div>

                                        {/* Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Example Response
                                                </span>
                                            </h4>
                                            <CodeBlock
                                                language="json">{getTransactionHistoryAllPaginatedResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Transaction History - NGN - Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Collection - NGN - Paginated</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Clock className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">NGN
                                        History</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        This endpoint returns the list of NGN transactions with detailed settlement
                                        information.
                                    </p>

                                    {/* Header Requirements Note */}
                                    <div
                                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                                        <p className="text-sm text-blue-900 dark:text-blue-300 font-semibold mb-2">Header
                                            Requirements:</p>
                                        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                                            <li>• x-channel-id = 2</li>
                                            <li>• x-channel-code = passpoint-infra-user</li>
                                            <li>• x-merchant-id = your merchant id</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryAllPaginatedEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Authorization */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Type:</span> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Using Bearer Token from collection Passpoint Payment Service
                                                </p>
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
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">pass
                                                            your merchant id
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">type</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">collection</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock
                                                language="json">{getTransactionHistoryNGNPaginatedRequestBody()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock
                                                language="bash">{getTransactionHistoryNGNPaginatedCurlRequest()}</CodeBlock>
                                        </div>

                                        {/* Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Example Response
                                                </span>
                                            </h4>
                                            <CodeBlock
                                                language="json">{getTransactionHistoryNGNPaginatedResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Transaction History - All Currency - Not Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction
                            History - Collection - All Currency - Not Paginated</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Full
                                        History</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        This endpoint returns the complete list of transactions without pagination. Set
                                        pageNumber and pageSize to 0.
                                    </p>

                                    {/* Header Requirements Note */}
                                    <div
                                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                                        <p className="text-sm text-blue-900 dark:text-blue-300 font-semibold mb-2">Header
                                            Requirements:</p>
                                        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                                            <li>• x-channel-id = 2</li>
                                            <li>• x-channel-code = passpoint-infra-user</li>
                                            <li>• x-merchant-id = your merchant id</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getTransactionHistoryAllPaginatedEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Authorization */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Type:</span> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Using Bearer Token from collection Passpoint Payment Service
                                                </p>
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
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">pass
                                                            your merchant id
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">type</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">collection</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock
                                                language="json">{getTransactionHistoryAllNotPaginatedRequestBody()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock
                                                language="bash">{getTransactionHistoryAllNotPaginatedCurlRequest()}</CodeBlock>
                                        </div>

                                        {/* Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Example Response
                                                </span>
                                            </h4>
                                            <CodeBlock
                                                language="json">{getTransactionHistoryAllNotPaginatedResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* List Virtual Accounts - All Currency - Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">List Virtual
                            Accounts - All Currency - Paginated</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <List className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Paginated
                                        List</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve a paginated list of virtual accounts across all supported currencies
                                        within a specified date range.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getVirtualAccountsPaginatedEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Authorization */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Type:</span> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Using Bearer Token from collection Passpoint Payment Service
                                                </p>
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
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">pass
                                                            your merchant id
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
                                            <CodeBlock
                                                language="json">{getVirtualAccountsPaginatedRequestBody()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock
                                                language="bash">{getVirtualAccountsPaginatedCurlRequest()}</CodeBlock>
                                        </div>

                                        {/* Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    Example Response
                                                </span>
                                            </h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    This request doesn't return any response body
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* List Virtual Accounts - All Currency - Not Paginated */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">List Virtual
                            Accounts - All Currency - Not Paginated</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Full
                                        List</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve all virtual accounts across all currencies without pagination. Set
                                        pageNumber and pageSize to 0 for a complete list.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getVirtualAccountsPaginatedEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Authorization */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Type:</span> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Using Bearer Token from collection Passpoint Payment Service
                                                </p>
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
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">pass
                                                            your merchant id
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
                                            <CodeBlock
                                                language="json">{getVirtualAccountsNotPaginatedRequestBody()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock
                                                language="bash">{getVirtualAccountsNotPaginatedCurlRequest()}</CodeBlock>
                                        </div>

                                        {/* Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    Example Response
                                                </span>
                                            </h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    This request doesn't return any response body
                                                </p>
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

export default CollectionReport;

