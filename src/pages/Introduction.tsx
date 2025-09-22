import {Globe, Shield, Zap, CreditCard, Smartphone, DollarSign, CheckCircle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const Introduction = () => {
    const getSampleApiRequestCode = () => {
        return `curl -X POST https://dev.mypasspoint.com/paypass/api/v1/wallet/create \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -d '{
    "customerReference": "CUST001",
    "currency": "USD",
    "initialBalance": 0
  }'`;
    };

    const getStandardResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Wallet created successfully",
  "data": {
    "success": true,
    "status": "00",
    "walletId": "WLT_12345",
    "balance": 0,
    "currency": "USD"
  }
}`;
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* Main content */}
            <div className="prose prose-invert max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Introduction to Passpoint Payment
                    Service</h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    Passpoint Payment Service provides a comprehensive API suite for seamless integration of payment,
                    wallet, transfer, and payout services across multiple currencies and regions. Our robust
                    infrastructure enables businesses to process transactions globally with enterprise-grade security
                    and reliability.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Services</h2>

                    <div className="grid gap-6 sm:grid-cols-2 mb-8">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <CreditCard className="h-8 w-8 text-blue-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment
                                    Processing</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Accept payments through multiple channels including bank transfers, mobile money, and
                                card processing with real-time settlement.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-green-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet
                                    Management</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Create and manage digital wallets with multi-currency support, balance tracking, and
                                transaction history.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <Smartphone className="h-8 w-8 text-purple-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transfer
                                    Services</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Facilitate secure money transfers between wallets, banks, and mobile money accounts with
                                transparent fees.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <Globe className="h-8 w-8 text-orange-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Global Reach</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Operate across multiple countries with region-specific payment methods, currencies, and
                                compliance requirements.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>

                    <div className="space-y-6">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                            <div className="flex items-center mb-4">
                                <Shield className="h-6 w-6 text-blue-500 mr-3"/>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Enterprise
                                    Security</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Bank-level security with comprehensive encryption, fraud detection, and regulatory
                                compliance across all supported regions.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• End-to-end encryption for all transactions</li>
                                <li>• Real-time fraud monitoring and prevention</li>
                                <li>• Regulatory compliance (PCI DSS, KYC, AML)</li>
                                <li>• Comprehensive audit trails and logging</li>
                            </ul>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                            <div className="flex items-center mb-4">
                                <Zap className="h-6 w-6 text-green-500 mr-3"/>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Real-time
                                    Processing</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Fast transaction processing with instant notifications and real-time status updates
                                through webhooks.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• Sub-second API response times</li>
                                <li>• Real-time transaction status updates</li>
                                <li>• Instant webhook notifications</li>
                                <li>• High availability (99.9% uptime SLA)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Integration</h2>

                    <div
                        className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6 shadow-sm">
                        <div className="flex items-start">
                            <CheckCircle
                                className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                            <div>
                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Dashboard
                                    Access</h3>
                                <p className="text-green-700 dark:text-green-300">
                                    Your <strong>API keys</strong> and <strong>merchant IDs</strong> can be found in
                                    the <strong>Developers section</strong> of your Passpoint dashboard. Access your
                                    credentials securely through the merchant portal.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Integration
                            Steps</h3>
                        <div className="space-y-3 text-gray-700 dark:text-gray-300">
                            <div className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                <div>
                                    <strong>Get API Credentials:</strong> Obtain your merchant credentials and API keys
                                    from the Developers section of your dashboard
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                <div>
                                    <strong>Environment Setup:</strong> Configure sandbox or production environment URLs
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                <div>
                                    <strong>Implement Authentication:</strong> Secure your API calls with proper
                                    authentication headers
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span
                                    className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                                <div>
                                    <strong>Test Integration:</strong> Use sandbox environment for comprehensive testing
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Sample API Request</h4>
                        <CodeBlock language="bash">{getSampleApiRequestCode()}</CodeBlock>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">Standard Response
                            Format</h4>
                        <CodeBlock language="json">{getStandardResponseCode()}</CodeBlock>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Environment Configuration</h2>

                    <div
                        className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            Passpoint Payment Service provides separate environments for development and production. Use
                            the appropriate base URLs for your integration environment.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Environment</th>
                                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Description</th>
                                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Sandbox</th>
                                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Production</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-3 px-4 font-medium">Client User</td>
                                    <td className="py-3 px-4">Base URL for client user, API key and token generation
                                    </td>
                                    <td className="py-3 px-4 font-mono text-xs break-all">https://dev.mypasspoint.com/userapp/</td>
                                    <td className="py-3 px-4 font-mono text-xs break-all">https://app.mypasspoint.com/userapp/</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-3 px-4 font-medium">Payment</td>
                                    <td className="py-3 px-4">Base URL for payment operations</td>
                                    <td className="py-3 px-4 font-mono text-xs break-all">https://dev.mypasspoint.com/paypass/</td>
                                    <td className="py-3 px-4 font-mono text-xs break-all">https://app.mypasspoint.com/paypass/</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium">Card</td>
                                    <td className="py-3 px-4">Base URL for card services</td>
                                    <td className="py-3 px-4 font-mono text-xs break-all">https://dev.mypasspoint.com/cardapp/</td>
                                    <td className="py-3 px-4 font-mono text-xs break-all">https://app.mypasspoint.com/cardapp/</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication Methods</h2>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        Endpoints requiring authorization can use either Basic Authentication or Bearer Token
                        Authentication methods.
                    </p>

                    <div className="space-y-8">
                        {/* Basic Authentication */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Basic
                                Authentication</h3>

                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Parameter</th>
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Type</th>
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Description</th>
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 px-3 font-mono text-xs">username</td>
                                        <td className="py-2 px-3">string</td>
                                        <td className="py-2 px-3">Basic authentication username</td>
                                        <td className="py-2 px-3 font-mono text-xs">PVTL3CYSKG</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 font-mono text-xs">password</td>
                                        <td className="py-2 px-3">string</td>
                                        <td className="py-2 px-3">Basic authentication password</td>
                                        <td className="py-2 px-3 font-mono text-xs break-all">-Zi-pIyZX9Udr0ms-13mS4Z6PcGuzLdvYC9VRgq6</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Bearer Token Authentication */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Bearer Token
                                Authentication</h3>

                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Parameter</th>
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Type</th>
                                        <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <td className="py-2 px-3 font-mono text-xs">merchantId</td>
                                        <td className="py-2 px-3">string</td>
                                        <td className="py-2 px-3">The merchant ID</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 font-mono text-xs">apiKey</td>
                                        <td className="py-2 px-3">string</td>
                                        <td className="py-2 px-3">The merchant's API key</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mandatory Headers</h2>

                    <div
                        className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            The following header parameters are mandatory for all API requests to Passpoint Payment
                            Service.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Parameter</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Type</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Required</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Description</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Value</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">x-channel-id</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3"><span
                                        className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs">mandatory</span>
                                    </td>
                                    <td className="py-2 px-3">The channel ID (based on the channel used by the merchant
                                        to connect to our services)
                                    </td>
                                    <td className="py-2 px-3 font-mono text-xs">3</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">x-channel-code</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3"><span
                                        className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs">mandatory</span>
                                    </td>
                                    <td className="py-2 px-3">The channel code</td>
                                    <td className="py-2 px-3 font-mono text-xs">legacy-api-user</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">x-merchant-id</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3"><span
                                        className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs">mandatory</span>
                                    </td>
                                    <td className="py-2 px-3">The merchant ID</td>
                                    <td className="py-2 px-3 font-mono text-xs">-</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 font-mono text-xs">x-submerchant-id</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3"><span
                                        className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded text-xs">conditional</span>
                                    </td>
                                    <td className="py-2 px-3">The sub merchant ID. Only required for card acquiring</td>
                                    <td className="py-2 px-3 font-mono text-xs">-</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Response Parameters</h2>

                    <div
                        className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            All API responses follow a consistent structure with the following parameters to indicate
                            request status and processing results.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Parameter</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Type</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Description</th>
                                    <th className="text-left py-2 px-3 text-gray-900 dark:text-white font-medium">Values</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">responseCode</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3">Determines whether the request was submitted successfully
                                        or not
                                    </td>
                                    <td className="py-2 px-3 font-mono text-xs">00 → submitted<br/>01 → pending<br/>02 →
                                        failed
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">responseDescription</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3">The description of the response code</td>
                                    <td className="py-2 px-3">-</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">responseMessage</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3">The message from the submission of the request</td>
                                    <td className="py-2 px-3">-</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">data</td>
                                    <td className="py-2 px-3">Object</td>
                                    <td className="py-2 px-3">Contains response data and processing details</td>
                                    <td className="py-2 px-3">-</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-3 font-mono text-xs">data.success</td>
                                    <td className="py-2 px-3">boolean</td>
                                    <td className="py-2 px-3">Tells us whether the processing was successful or not</td>
                                    <td className="py-2 px-3 font-mono text-xs">true or false</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 font-mono text-xs">data.status</td>
                                    <td className="py-2 px-3">string</td>
                                    <td className="py-2 px-3">The status code of the request</td>
                                    <td className="py-2 px-3 font-mono text-xs">00 ↔ successful</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Complete Status Codes</h2>

                    <div
                        className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            Comprehensive list of all status codes used throughout the Passpoint Payment Service API for
                            detailed error handling and request tracking.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Success Codes */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Success &
                                    Processing</h4>
                                <div className="space-y-2">
                                    <div
                                        className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">00
                                            ↔ successful
                                        </div>
                                    </div>
                                    <div
                                        className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">01
                                            ↔ pending
                                        </div>
                                    </div>
                                    <div
                                        className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded p-3">
                                        <div
                                            className="font-mono text-sm font-medium text-gray-900 dark:text-white">01OTP
                                            ↔ pending_OTP_response
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Error Codes */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Error
                                    Codes</h4>
                                <div className="space-y-2">
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">02
                                            ↔ failed
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">03
                                            ↔ service_unavailable
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">04
                                            ↔ empty_request
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">05
                                            ↔ empty_response
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">06
                                            ↔ session_timeout
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Validation Codes */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Validation
                                    Errors</h4>
                                <div className="space-y-2">
                                    <div
                                        className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">30
                                            ↔ failed_parameter_validation
                                        </div>
                                    </div>
                                    <div
                                        className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">31
                                            ↔ invalid_parameter
                                        </div>
                                    </div>
                                    <div
                                        className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">40
                                            ↔ no_record_found
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* System Errors */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">System
                                    Errors</h4>
                                <div className="space-y-2">
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">50
                                            ↔ database_exception
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">51
                                            ↔ general_exception
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">53
                                            ↔ duplicate_exception
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">60
                                            ↔ security_violation
                                        </div>
                                    </div>
                                    <div
                                        className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                        <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">99
                                            ↔ unknown_error
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Pagination Navigation */}
            <PaginationNavigation/>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-gray-500 text-sm">All rights reserved</p>
            </footer>
        </div>
    );
};

export default Introduction;

