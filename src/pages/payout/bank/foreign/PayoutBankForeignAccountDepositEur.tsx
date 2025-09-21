import {PiggyBank} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBankForeignAccountDepositEur = () => {
    const getEndpointCode = () => {
        return `POST https://dev.mypasspoint.com/paypass/foreign-ft-app/account-deposit/eur`;
    };

    const getRequestBodyCode = () => {
        return `{
    "clientReference": "1736193968187",
    "amount": "300.00",
    "narration": "account deposit EUR",
    "transactionCurrency": "EUR",
    "baseCurrency": "EUR",
    "countryCode": "DE",
    "paymentInfo": {
        "remitterType": "I",
        "senderFirstName": "Hans",
        "senderLastName": "Mueller",
        "senderAddress": "Hauptstraße 123",
        "senderCity": "Berlin",
        "senderIdType": "02",
        "senderIdNumber": "DE123456789",
        "senderIdIssueCountry": "DEU",
        "senderBeneficiaryRelationship": "02",
        "beneficiaryType": "I",
        "receiverFirstName": "Marie",
        "receiverLastName": "Schmidt",
        "receiverAddress": "Friedrichstraße 456",
        "bankAccountNumber": "DE89370400440532013000",
        "swiftCode": "COBADEFFXXX",
        "purposeOfRemittance": "02",
        "senderSourceOfFund": "02",
        "payoutCurrency": "EUR"
    }
}`;
    };

    const getCurlExampleCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/account-deposit/eur' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--header 'Content-Type: application/json' \\
--data '{
    "clientReference": "1736193968187",
    "amount": "300.00",
    "narration": "account deposit EUR",
    "transactionCurrency": "EUR",
    "baseCurrency": "EUR",
    "countryCode": "DE",
    "paymentInfo": {
        "remitterType": "I",
        "senderFirstName": "Hans",
        "senderLastName": "Mueller",
        "senderAddress": "Hauptstraße 123",
        "senderCity": "Berlin",
        "senderIdType": "02",
        "senderIdNumber": "DE123456789",
        "senderIdIssueCountry": "DEU",
        "senderBeneficiaryRelationship": "02",
        "beneficiaryType": "I",
        "receiverFirstName": "Marie",
        "receiverLastName": "Schmidt",
        "receiverAddress": "Friedrichstraße 456",
        "bankAccountNumber": "DE89370400440532013000",
        "swiftCode": "COBADEFFXXX",
        "purposeOfRemittance": "02",
        "senderSourceOfFund": "02",
        "payoutCurrency": "EUR"
    }
}'`;
    };

    const getExampleResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Your EUR account deposit is being processed",
  "data": {
    "status": "NEW",
    "transactionId": "n7o8p9q0-r1s2-3456-tuvw-xyz012abc678",
    "amount": 300.00,
    "charges": 4.50
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Account Deposit -
                        EUR</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Deposit funds to bank accounts in Euro (EUR).
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <PiggyBank className="h-12 w-12 text-brand-500"/>
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

                    {/* Request Body */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request
                            Body</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Body
                                        (JSON)</h4>
                                    <CodeBlock language="json">{getRequestBodyCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Request */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Example
                            Request</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">CURL
                                        Example</h4>
                                    <CodeBlock language="bash">{getCurlExampleCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Response */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Example
                            Response</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">200 OK
                                        Response</h4>
                                    <CodeBlock language="json">{getExampleResponseCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Account Deposit - GBP",
                        href: "/payout/bank/foreign/account-deposit-gbp"
                    }}
                    nextPage={{
                        title: "Account Deposit - CNY",
                        href: "/payout/bank/foreign/account-deposit-cny"
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

export default PayoutBankForeignAccountDepositEur;