import {MapPin, Globe, Shield, CheckCircle, AlertTriangle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBank = () => {
    const getVerifyBankAccountEndpointCode = () => {
        return `POST /api/v1/bank-accounts/verify`;
    };

    const getVerifyBankAccountRequestBodyCode = () => {
        return `{
  "account_number": "1234567890",
  "routing_number": "021000021",
  "account_type": "checking",
  "account_holder_name": "John Doe",
  "verification_method": "instant"
}`;
    };

    const getVerifyBankAccountResponseCode = () => {
        return `{
  "verification_id": "verify_abc123",
  "status": "verified",
  "account_details": {
    "account_number": "****7890",
    "routing_number": "021000021",
    "account_type": "checking",
    "account_holder_name": "John Doe",
    "bank_name": "JPMorgan Chase Bank",
    "bank_address": "New York, NY"
  },
  "verification_method": "instant",
  "verified_at": "2024-01-15T14:30:00Z"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Bank Payouts</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Process secure bank transfers for both local and international recipients. Support for ACH, wire
                        transfers, and real-time payment networks with comprehensive compliance and fraud protection.
                    </p>

                    {/* Bank Payout Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bank Transfer
                            Methods</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Local Bank Transfers */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-12 w-12 text-blue-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Local
                                        Bank Transfers</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Fast, low-cost transfers to domestic bank accounts via ACH and wire networks with
                                    same-day processing options.
                                </p>
                                <div className="space-y-2 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">Same day - 3 days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">$1.00 - $25.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Daily Limit:</span>
                                        <span className="text-gray-900 dark:text-white">$250,000</span>
                                    </div>
                                </div>
                                <Link to="/payout/bank/local">
                                    <Button className="w-full">
                                        View Local Bank Options
                                    </Button>
                                </Link>
                            </div>

                            {/* Foreign Bank Transfers */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Globe className="h-12 w-12 text-green-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">International
                                        Transfers</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Global payment network supporting wire transfers, RTP, FedNow, and local payment
                                    methods across 200+ countries.
                                </p>
                                <div className="space-y-2 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">Instant - 5 days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">$15.00 - $50.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Daily Limit:</span>
                                        <span className="text-gray-900 dark:text-white">$100,000</span>
                                    </div>
                                </div>
                                <Link to="/payout/bank/foreign">
                                    <Button className="w-full">
                                        View International Options
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Bank Verification */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bank Account
                            Verification</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Shield className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Verify
                                        Bank Account</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Verify bank account ownership before processing payouts to prevent fraud and
                                        ensure compliance with regulatory requirements.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getVerifyBankAccountEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock
                                                language="json">{getVerifyBankAccountRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getVerifyBankAccountResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Transfer Methods Comparison */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transfer
                            Methods Comparison</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Method</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing
                                            Time
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee
                                            Range
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Best
                                            For
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ACH
                                            Same-Day
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Local</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">4-6 hours
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$1.50</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Urgent
                                            domestic payroll
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Wire
                                            Transfer
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Local/International</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2-4 hours
                                            (local), 1-3 days (intl)
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$25.00 -
                                            $50.00
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">High-value
                                            transfers
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">RTP</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Local</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$1.25</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Real-time
                                            payments
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">FedNow</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Local</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$1.25</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Federal
                                            Reserve network
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Security Notice */}
                    <section className="mb-16">
                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex">
                                <CheckCircle
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">Security
                                        Features</h3>
                                    <div className="text-blue-700 dark:text-blue-300 space-y-2">
                                        <p><strong>End-to-End Encryption:</strong> All bank transfer data is encrypted
                                            using industry-standard AES-256 encryption.</p>
                                        <p><strong>Fraud Detection:</strong> Real-time fraud scoring and monitoring for
                                            all bank transfer requests.</p>
                                        <p><strong>Compliance Screening:</strong> Automatic AML and sanctions screening
                                            for all international transfers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Compliance Requirements */}
                    <section className="mb-16">
                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-base font-semibold text-orange-800 dark:text-orange-200 mb-2">Compliance
                                        Requirements</h3>
                                    <div className="text-orange-700 dark:text-orange-300 space-y-2">
                                        <p><strong>Know Your Customer (KYC):</strong> Beneficiary verification required
                                            for transfers over $1,000.</p>
                                        <p><strong>Anti-Money Laundering (AML):</strong> All transfers are subject to
                                            AML screening and reporting.</p>
                                        <p><strong>OFAC Screening:</strong> Automatic sanctions list screening for all
                                            international transfers.</p>
                                        <p><strong>Documentation:</strong> Purpose of payment documentation required for
                                            high-value transfers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Convert Funds",
                        href: "/payout/convert-funds"
                    }}
                    nextPage={{
                        title: "Local Bank Transfers",
                        href: "/payout/bank/local"
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

export default PayoutBank;
