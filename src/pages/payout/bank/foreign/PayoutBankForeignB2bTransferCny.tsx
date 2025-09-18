import { Send } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBankForeignB2bTransferCny = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">B2B Transfer - CNY</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Process business-to-business transfers in Chinese Yuan (CNY) to bank accounts.
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Send className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST https://dev.mypasspoint.com/paypass/foreign-ft-app/make-payment/b2b`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authorization */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Authorization</h2>
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Bearer Token</h4>
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
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
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
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">pass your merchant id</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Request Body */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request Body</h2>
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Body (JSON)</h4>
                                    <CodeBlock language="json">{`{
    "clientReference": "1736193968181",
    "amount": "10.00",
    "narration": "test cny b2b transfer",
    "transactionCurrency": "CNY",
    "baseCurrency": "USD",
    "countryCode": "CN",
    "paymentInfo": {
        "remitterType": "B",
        "senderFirstName": "Josh Travels",
        "senderAddress": "Plot 331, Raji Rasaki Estate",
        "senderCity": "Lagos",
        "senderIdType": "03",
        "senderIdNumber": "46543345322",
        "senderIdIssueCountry": "NGA",
        "senderBeneficiaryRelationship": "02",
        "beneficiaryType": "B",
        "receiverFirstName": "Josh Travels",
        "receiverAddress": "Plot 331, Raji Rasak",
        "receiverNativeAddress": "武汉市东湖新技术开发区高新大道",
        "bankAccountNumber": "99999393939393939",
        "bankBranchCode": "067014822",
        "swiftCode": "382829299",
        "purposeOfRemittance": "06",
        "senderSourceOfFund": "04",
        "payoutCurrency": "CNY",
        "locationId": "CHNJIA54935",
        "uploadRef": "b7d69246-9e23-481c-85f0-4b8bca55c2cb"
    }
}`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Request */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Example Request</h2>
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">CURL Example</h4>
                                    <CodeBlock language="bash">{`curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/make-payment/b2b' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--header 'Content-Type: application/json' \\
--data '{
    "clientReference": "1736193968181",
    "amount": "10.00",
    "narration": "test cny b2b transfer",
    "transactionCurrency": "CNY",
    "baseCurrency": "USD",
    "countryCode": "CN",
    "paymentInfo": {
        "remitterType": "B",
        "senderFirstName": "Josh Travels",
        "senderAddress": "Plot 331, Raji Rasaki Estate",
        "senderCity": "Lagos",
        "senderIdType": "03",
        "senderIdNumber": "46543345322",
        "senderIdIssueCountry": "NGA",
        "senderBeneficiaryRelationship": "02",
        "beneficiaryType": "B",
        "receiverFirstName": "Josh Travels",
        "receiverAddress": "Plot 331, Raji Rasak",
        "receiverNativeAddress": "武汉市东湖新技术开发区高新大道",
        "bankAccountNumber": "99999393939393939",
        "bankBranchCode": "067014822",
        "swiftCode": "382829299",
        "purposeOfRemittance": "06",
        "senderSourceOfFund": "04",
        "payoutCurrency": "CNY",
        "locationId": "CHNJIA54935",
        "uploadRef": "b7d69246-9e23-481c-85f0-4b8bca55c2cb"
    }
}'`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Response */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Example Response</h2>
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">200 OK Response</h4>
                                    <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Your transfer to HABEEB ADEBOWALE ADEDEJI is on the way",
  "data": {
    "status": "NEW",
    "transactionId": "c7035d4d-a0b2-4dab-951c-1f949a4a2731",
    "amount": 1000,
    "charges": 10.8
  }
}`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "MoMo Deposit - CNY",
                        href: "/payout/bank/foreign/momo-deposit-cny"
                    }}
                    nextPage={{
                        title: "B2C Transfer - CNY",
                        href: "/payout/bank/foreign/b2c-transfer-cny"
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

export default PayoutBankForeignB2bTransferCny;