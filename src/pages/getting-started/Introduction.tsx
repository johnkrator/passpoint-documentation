import {
    Globe,
    Shield,
    Zap,
    CreditCard,
    Smartphone,
    DollarSign,
    CheckCircle,
    ArrowRight,
    AlertTriangle,
    BookOpen,
    Code
} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";
import {Link} from "react-router-dom";

const Introduction = () => {
    const getSampleApiRequestCode = () => {
        return `curl -X POST https://dev.mypasspoint.com/paypass/api/v1/wallet/create \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "x-channel-id: 3" \\
  -H "x-channel-code: legacy-api-user" \\
  -H "x-merchant-id: YOUR_MERCHANT_ID" \\
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
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Introduction to Passpoint Payment Service
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Passpoint Payment Service provides a comprehensive API suite for seamless integration of
                        payment,
                        wallet, transfer, and payout services across multiple currencies and regions. Our robust
                        infrastructure enables businesses to process transactions globally with enterprise-grade
                        security
                        and reliability.
                    </p>

                    {/* What is Passpoint */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">What is
                            Passpoint?</h2>

                        <div
                            className="bg-gradient-to-br from-[#009ac2]/10 to-indigo-50 dark:from-[#009ac2]/20 dark:to-indigo-950/20 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 lg:p-8 mb-8">
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                                Passpoint is a modern payment infrastructure platform that empowers businesses to accept
                                payments,
                                send payouts, and manage digital wallets across Africa and beyond. Built on RESTful API
                                architecture,
                                Passpoint seamlessly integrates with your existing systems to unlock powerful payment
                                capabilities.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <span className="text-gray-700 dark:text-gray-300">RESTful API Architecture</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <span className="text-gray-700 dark:text-gray-300">Multi-Currency Support</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <span className="text-gray-700 dark:text-gray-300">Real-Time Processing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <span className="text-gray-700 dark:text-gray-300">Webhook Notifications</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <span className="text-gray-700 dark:text-gray-300">Sandbox Environment</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <span className="text-gray-700 dark:text-gray-300">Enterprise Security</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Prerequisites */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Prerequisites</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Before You
                                Begin</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="bg-[#009ac2]/10 dark:bg-[#009ac2]/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#009ac2] dark:text-[#009ac2] text-sm font-bold">1</span>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-white">Active Merchant
                                            Account:</strong>
                                        <span className="text-gray-700 dark:text-gray-300"> Sign up for a Passpoint merchant account and complete KYC verification</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="bg-[#009ac2]/10 dark:bg-[#009ac2]/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#009ac2] dark:text-[#009ac2] text-sm font-bold">2</span>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-white">API Credentials:</strong>
                                        <span className="text-gray-700 dark:text-gray-300"> Obtain your Merchant ID and API Key from the Developers section of your dashboard</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="bg-[#009ac2]/10 dark:bg-[#009ac2]/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#009ac2] dark:text-[#009ac2] text-sm font-bold">3</span>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-white">Development
                                            Environment:</strong>
                                        <span className="text-gray-700 dark:text-gray-300"> Server-side application capable of making HTTPS requests (Node.js, Python, PHP, Java, etc.)</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="bg-[#009ac2]/10 dark:bg-[#009ac2]/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#009ac2] dark:text-[#009ac2] text-sm font-bold">4</span>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-white">HTTPS Endpoint:</strong>
                                        <span className="text-gray-700 dark:text-gray-300"> (Optional) A publicly accessible HTTPS endpoint for receiving webhook notifications</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <CheckCircle
                                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Dashboard
                                        Access</h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        Your <strong>API keys</strong> and <strong>merchant IDs</strong> can be found in
                                        the <strong>Developers section</strong> of your Passpoint dashboard. Access your
                                        credentials securely through the merchant portal at{" "}
                                        <a href="https://app.mypasspoint.com" target="_blank" rel="noopener noreferrer"
                                           className="underline font-semibold hover:text-green-600 dark:hover:text-green-300">
                                            app.mypasspoint.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Services */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Core
                            Services</h2>

                        <div className="grid gap-6 sm:grid-cols-2 mb-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <CreditCard className="h-8 w-8 text-[#009ac2] mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment
                                        Processing</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Accept payments through multiple channels including bank transfers, mobile money,
                                    and
                                    card processing with real-time settlement.
                                </p>
                                <Link to="/api-documentation/collection"
                                      className="text-[#009ac2] dark:text-[#009ac2] hover:text-[#008ab0] dark:hover:text-[#008ab0] text-sm font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowRight className="h-3 w-3"/>
                                </Link>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <DollarSign className="h-8 w-8 text-green-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet
                                        Management</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Create and manage digital wallets with multi-currency support, balance tracking, and
                                    transaction history.
                                </p>
                                <Link to="/api-documentation/wallet"
                                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowRight className="h-3 w-3"/>
                                </Link>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Smartphone className="h-8 w-8 text-purple-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transfer
                                        Services</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Facilitate secure money transfers between wallets, banks, and mobile money accounts
                                    with
                                    transparent fees.
                                </p>
                                <Link to="/api-documentation/transfer"
                                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowRight className="h-3 w-3"/>
                                </Link>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Globe className="h-8 w-8 text-orange-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Global
                                        Payouts</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                    Operate across multiple countries with region-specific payment methods, currencies,
                                    and
                                    compliance requirements.
                                </p>
                                <Link to="/api-documentation/payout"
                                      className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowRight className="h-3 w-3"/>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Use
                            Cases</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="bg-gradient-to-br from-[#009ac2]/10 to-[#009ac2]/20 dark:from-[#009ac2]/30 dark:to-[#009ac2]/40 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">E-commerce
                                    Platforms</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Accept payments from customers via bank transfers, mobile money, and cards with
                                    automatic reconciliation
                                </p>
                            </div>
                            <div
                                className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Marketplace
                                    Solutions</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Split payments between sellers, handle escrow, and process bulk payouts to vendors
                                    automatically
                                </p>
                            </div>
                            <div
                                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fintech
                                    Applications</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Build neobanks, lending platforms, or remittance services with wallet infrastructure
                                    and transfers
                                </p>
                            </div>
                            <div
                                className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Subscription
                                    Services</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Automate recurring billing, manage subscription payments, and handle failed payment
                                    retries
                                </p>
                            </div>
                            <div
                                className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Payroll
                                    Systems</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Process salary disbursements, contractor payments, and expense reimbursements at
                                    scale
                                </p>
                            </div>
                            <div
                                className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gaming &
                                    Betting</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Handle player deposits, instant withdrawals, and real-time wallet balance management
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Key
                            Features</h2>

                        <div className="space-y-6">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center mb-4">
                                    <Shield className="h-6 w-6 text-[#009ac2] mr-3"/>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Enterprise
                                        Security</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Bank-level security with comprehensive encryption, fraud detection, and regulatory
                                    compliance across all supported regions.
                                </p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#009ac2] mt-1">•</span>
                                        <span>End-to-end encryption for all transactions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#009ac2] mt-1">•</span>
                                        <span>Real-time fraud monitoring and prevention</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#009ac2] mt-1">•</span>
                                        <span>Regulatory compliance (PCI DSS, KYC, AML)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#009ac2] mt-1">•</span>
                                        <span>Comprehensive audit trails and logging</span>
                                    </li>
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
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Sub-second API response times</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Real-time transaction status updates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>Instant webhook notifications</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>High availability (99.9% uptime SLA)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Environment Configuration */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Environment
                            Configuration</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                Passpoint Payment Service provides separate environments for development and production.
                                Use
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
                                        <td className="py-3 px-4">Base URL for client user, API key and token
                                            generation
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

                        <div
                            className="bg-[#009ac2]/10 dark:bg-[#009ac2]/20 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <AlertTriangle
                                    className="h-6 w-6 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#009ac2] dark:text-[#009ac2] mb-2">Token
                                        Expiry Notice</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <strong>Development Environment:</strong> Bearer tokens are active for 10
                                        minutes<br/>
                                        <strong>Production Environment:</strong> Bearer tokens are active for 1
                                        hour<br/>
                                        Plan your token refresh strategy accordingly to maintain uninterrupted API
                                        access.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* API Integration Quick Start */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">API
                            Integration Overview</h2>

                        <div
                            className="bg-[#009ac2]/10 dark:bg-[#009ac2]/20 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Integration
                                Steps</h3>
                            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                <div className="flex items-start">
                                    <span
                                        className="bg-[#009ac2] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                    <div>
                                        <strong>Get API Credentials:</strong> Obtain your merchant credentials and API
                                        keys from the Developers section of your dashboard
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span
                                        className="bg-[#009ac2] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                    <div>
                                        <strong>Environment Setup:</strong> Configure sandbox or production environment
                                        URLs
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span
                                        className="bg-[#009ac2] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                    <div>
                                        <strong>Implement Authentication:</strong> Secure your API calls with proper
                                        authentication headers
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span
                                        className="bg-[#009ac2] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                                    <div>
                                        <strong>Test Integration:</strong> Use sandbox environment for comprehensive
                                        testing
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

                    {/* Authentication Methods */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Authentication
                            Methods</h2>

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
                                    Authentication (Recommended)</h3>

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
                                <div
                                    className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                    <p className="text-yellow-800 dark:text-yellow-200 text-sm flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5"/>
                                        <span><strong>Best Practice:</strong> Use Bearer Token authentication for better security and easier token management. See the <Link
                                            to="/getting-started/api-integrations"
                                            className="underline hover:text-yellow-900 dark:hover:text-yellow-100">API Integrations</Link> page for implementation examples.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mandatory Headers */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Mandatory
                            Headers</h2>

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
                                        <td className="py-2 px-3">The channel ID (based on the channel used by the
                                            merchant to connect to our services)
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
                                        <td className="py-2 px-3">The sub merchant ID. Only required for card
                                            acquiring
                                        </td>
                                        <td className="py-2 px-3 font-mono text-xs">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Response Parameters */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Response
                            Parameters</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                All API responses follow a consistent structure with the following parameters to
                                indicate
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
                                        <td className="py-2 px-3">Determines whether the request was submitted
                                            successfully or not
                                        </td>
                                        <td className="py-2 px-3 font-mono text-xs">00 → submitted<br/>01 → pending<br/>02
                                            → failed
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
                                        <td className="py-2 px-3">Tells us whether the processing was successful or
                                            not
                                        </td>
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

                    {/* Complete Status Codes */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Complete
                            Status Codes</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                Comprehensive list of all status codes used throughout the Passpoint Payment Service API
                                for
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
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">00
                                                ↔ successful
                                            </div>
                                        </div>
                                        <div
                                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">01
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
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">02
                                                ↔ failed
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">03
                                                ↔ service_unavailable
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">04
                                                ↔ empty_request
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">05
                                                ↔ empty_response
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">06
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
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">30
                                                ↔ failed_parameter_validation
                                            </div>
                                        </div>
                                        <div
                                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">31
                                                ↔ invalid_parameter
                                            </div>
                                        </div>
                                        <div
                                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">40
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
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">50
                                                ↔ database_exception
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">51
                                                ↔ general_exception
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">53
                                                ↔ duplicate_exception
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">60
                                                ↔ security_violation
                                            </div>
                                        </div>
                                        <div
                                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                            <div
                                                className="font-mono text-sm font-medium text-gray-900 dark:text-white">99
                                                ↔ unknown_error
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-6 bg-[#009ac2]/10 dark:bg-[#009ac2]/20 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-lg p-4">
                                <p className="text-gray-800 dark:text-gray-200 text-sm flex items-start gap-2">
                                    <BookOpen className="h-4 w-4 flex-shrink-0 mt-0.5"/>
                                    <span>For detailed error handling strategies and troubleshooting, visit the <Link
                                        to="/learn-more/status-responses"
                                        className="underline font-semibold hover:text-[#009ac2] dark:hover:text-[#009ac2]">Status Responses</Link> page.</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Next
                            Steps</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Link to="/getting-started/api-integrations"
                                  className="bg-gradient-to-br from-[#009ac2]/10 to-[#009ac2]/20 dark:from-[#009ac2]/30 dark:to-[#009ac2]/40 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <Code className="h-8 w-8 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            API Integration Guide
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                            Learn how to integrate Passpoint APIs with code examples, authentication
                                            setup, and best practices
                                        </p>
                                        <span
                                            className="text-[#009ac2] dark:text-[#009ac2] text-sm font-medium inline-flex items-center gap-1">
                                            Start Integrating
                                            <ArrowRight className="h-4 w-4"/>
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/api-documentation/authentication"
                                  className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl p-6 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Authentication Details
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                            Deep dive into authentication methods, token management, and security best
                                            practices
                                        </p>
                                        <span
                                            className="text-purple-600 dark:text-purple-400 text-sm font-medium inline-flex items-center gap-1">
                                            Learn More
                                            <ArrowRight className="h-4 w-4"/>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                {/*<footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">*/}
                {/*    <p className="text-gray-500 dark:text-gray-400 text-sm">*/}
                {/*        © {new Date().getFullYear()} Passpoint Payment Service. All rights reserved.*/}
                {/*    </p>*/}
                {/*</footer>*/}
            </div>
        </div>
    );
};

export default Introduction;

