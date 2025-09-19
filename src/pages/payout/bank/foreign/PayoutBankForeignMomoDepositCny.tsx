import { Smartphone } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBankForeignMomoDepositCny = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">MoMo Deposit - CNY</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Deposit funds via mobile money (MoMo) in Chinese Yuan (CNY).
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Smartphone className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">POST Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST https://dev.mypasspoint.com/paypass/foreign-ft-app/momo-deposit/cny`}</CodeBlock>
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
    "clientReference": "1736193968189",
    "amount": "500.00",
    "narration": "momo deposit CNY",
    "transactionCurrency": "CNY",
    "baseCurrency": "CNY",
    "countryCode": "CN",
    "paymentInfo": {
        "remitterType": "I",
        "senderFirstName": "李",
        "senderLastName": "明",
        "senderAddress": "北京市朝阳区建国门外大街1号",
        "senderCity": "北京",
        "senderIdType": "01",
        "senderIdNumber": "110101199001011234",
        "senderIdIssueCountry": "CHN",
        "senderBeneficiaryRelationship": "01",
        "beneficiaryType": "I",
        "receiverFirstName": "王",
        "receiverLastName": "芳",
        "receiverNativeFirstname": "王",
        "receiverNativeLastname": "芳",
        "receiverIdType": "01",
        "receiverIdNumber": "440306199002021234",
        "receiverIdIssueCountry": "CHN",
        "mobileNumber": "13800138000",
        "purposeOfRemittance": "01",
        "senderSourceOfFund": "01",
        "payoutCurrency": "CNY"
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
                                    <CodeBlock language="bash">{`curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/momo-deposit/cny' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--header 'Content-Type: application/json' \\
--data '{
    "clientReference": "1736193968189",
    "amount": "500.00",
    "narration": "momo deposit CNY",
    "transactionCurrency": "CNY",
    "baseCurrency": "CNY",
    "countryCode": "CN",
    "paymentInfo": {
        "remitterType": "I",
        "senderFirstName": "李",
        "senderLastName": "明",
        "senderAddress": "北京市朝阳区建国门外大街1号",
        "senderCity": "北京",
        "senderIdType": "01",
        "senderIdNumber": "110101199001011234",
        "senderIdIssueCountry": "CHN",
        "senderBeneficiaryRelationship": "01",
        "beneficiaryType": "I",
        "receiverFirstName": "王",
        "receiverLastName": "芳",
        "receiverNativeFirstname": "王",
        "receiverNativeLastname": "芳",
        "receiverIdType": "01",
        "receiverIdNumber": "440306199002021234",
        "receiverIdIssueCountry": "CHN",
        "mobileNumber": "13800138000",
        "purposeOfRemittance": "01",
        "senderSourceOfFund": "01",
        "payoutCurrency": "CNY"
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
  "responseMessage": "Your CNY MoMo deposit is being processed",
  "data": {
    "status": "NEW",
    "transactionId": "m5n6o7p8-q9r0-1234-stuv-wxy890zab345",
    "amount": 500.00,
    "charges": 8.00
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
                        title: "Account Deposit - CNY",
                        href: "/payout/bank/foreign/account-deposit-cny"
                    }}
                    nextPage={{
                        title: "B2B Transfer - CNY",
                        href: "/payout/bank/foreign/b2b-transfer-cny"
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

export default PayoutBankForeignMomoDepositCny;