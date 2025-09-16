import {ArrowRight, Globe, Shield, Zap, CreditCard} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const DocumentationContent = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Passpoint Payment
                        Service</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Welcome to the Passpoint Payment Service API documentation. This comprehensive guide contains
                        API requests and responses for seamless integration of payment, wallet, transfer, and payout
                        services across multiple currencies and regions.
                    </p>

                    {/* Service Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Service
                            Overview</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Globe className="h-8 w-8 text-blue-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multi-Region
                                        Support</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Operate across multiple countries with region-specific payment methods, currencies,
                                    and compliance requirements.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <CreditCard className="h-8 w-8 text-green-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comprehensive
                                        Payment Solutions</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    From wallet management to bank transfers, mobile money, and card processing - all in
                                    one unified API.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Environment Configuration */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Environment
                            Configuration</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Shield className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Base
                                        URLs</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Configure your integration using the appropriate base URLs for sandbox testing
                                        and production environments.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Environment
                                                URLs</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <th className="text-left py-2 text-gray-900 dark:text-white font-medium">Service</th>
                                                        <th className="text-left py-2 text-gray-900 dark:text-white font-medium">Sandbox</th>
                                                        <th className="text-left py-2 text-gray-900 dark:text-white font-medium">Production</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="text-gray-700 dark:text-gray-300">
                                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                                        <td className="py-2 font-medium">Client User</td>
                                                        <td className="py-2 font-mono text-xs">https://dev.mypasspoint.com/userapp/</td>
                                                        <td className="py-2 font-mono text-xs">https://app.mypasspoint.com/userapp/</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                                        <td className="py-2 font-medium">Payment</td>
                                                        <td className="py-2 font-mono text-xs">https://dev.mypasspoint.com/paypass/</td>
                                                        <td className="py-2 font-mono text-xs">https://app.mypasspoint.com/paypass/</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 font-medium">Card</td>
                                                        <td className="py-2 font-mono text-xs">https://dev.mypasspoint.com/cardapp/</td>
                                                        <td className="py-2 font-mono text-xs">https://app.mypasspoint.com/cardapp/</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Response Format */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Standard
                            Response Format</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Zap className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Response
                                        Structure</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        All API responses follow a consistent structure to ensure predictable
                                        integration and error handling.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Standard
                                                Response Format</h4>
                                            <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Operation completed successfully",
  "data": {
    "success": true,
    "status": "00",
    // ... additional response data
  }
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                Codes</h4>
                                            <div className="grid gap-3 sm:grid-cols-1">
                                                <div
                                                    className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded p-3">
                                                    <div
                                                        className="font-mono text-sm font-medium text-gray-900 dark:text-white">00
                                                        - Success
                                                    </div>
                                                    <div
                                                        className="text-xs text-gray-600 dark:text-gray-400 mt-1">Request
                                                        submitted successfully
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded p-3">
                                                    <div
                                                        className="font-mono text-sm font-medium text-gray-900 dark:text-white">01
                                                        - Pending
                                                    </div>
                                                    <div
                                                        className="text-xs text-gray-600 dark:text-gray-400 mt-1">Request
                                                        is being processed
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded p-3">
                                                    <div
                                                        className="font-mono text-sm font-medium text-gray-900 dark:text-white">02
                                                        - Failed
                                                    </div>
                                                    <div
                                                        className="text-xs text-gray-600 dark:text-gray-400 mt-1">Request
                                                        failed to process
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Getting Started */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Getting
                            Started</h2>

                        <div className="space-y-6">
                            <div
                                className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Start
                                    Guide</h3>
                                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                    <div className="flex items-start">
                                        <span
                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                        <div>
                                            <strong>Authentication:</strong> Get your merchant credentials and API keys
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span
                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                        <div>
                                            <strong>Wallet Setup:</strong> Create and manage your payment wallets
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span
                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                        <div>
                                            <strong>Integration:</strong> Implement transfers, payouts, and collections
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span
                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                                        <div>
                                            <strong>Webhooks:</strong> Configure global callbacks for real-time
                                            notifications
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <div
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 dark:border-gray-800">
                    <div></div>
                    <Link to="/introduction">
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-end px-4 py-3"
                        >
                            <div className="text-right min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                                <div className="text-sm font-medium truncate">Introduction</div>
                            </div>
                            <ArrowRight className="h-4 w-4 flex-shrink-0"/>
                        </Button>
                    </Link>
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default DocumentationContent;