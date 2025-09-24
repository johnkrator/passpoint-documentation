import {Building2, Shield, CreditCard, CheckCircle, AlertTriangle, Globe} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import CodeBlock from "@/components/CodeBlock.tsx";
import PaginationNavigation from "@/components/PaginationNavigation.tsx";

const CollectionBank = () => {
    // Code block methods
    const getBankVerificationEndpoint = () => `POST /api/v1/bank-accounts/verify`;

    const getBankVerificationRequestBody = () => `{
  "account_holder_name": "John Doe",
  "account_number": "1234567890",
  "routing_number": "021000021",
  "account_type": "checking",
  "bank_name": "Chase Bank",
  "verification_method": "open_banking"
}`;

    const getBankVerificationResponse = () => `{
  "verification_id": "verify_bank_abc123",
  "status": "verified",
  "account_status": "active",
  "account_holder_match": "exact_match",
  "bank_details": {
    "bank_name": "JPMorgan Chase Bank",
    "routing_number": "021000021",
    "account_type": "checking",
    "account_number_last_4": "7890"
  },
  "capabilities": {
    "supports_ach": true,
    "supports_open_banking": true,
    "real_time_verification": true
  },
  "verified_at": "2024-01-15T14:30:00Z"
}`;

    const getPaymentRequestEndpoint = () => `POST /api/v1/payment-requests`;

    const getPaymentRequestBody = () => `{
  "amount": 250.00,
  "currency": "USD",
  "description": "Monthly subscription payment",
  "customer": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "+1234567890"
  },
  "payment_methods": ["open_banking", "ach"],
  "expires_at": "2024-01-22T14:30:00Z",
  "return_url": "https://yourapp.com/payment/success",
  "webhook_url": "https://yourapp.com/webhooks/payment",
  "reference": "SUB-2024-001",
  "metadata": {
    "subscription_id": "sub_123",
    "customer_id": "cust_456"
  }
}`;

    const getPaymentRequestResponse = () => `{
  "payment_request_id": "preq_abc123def456",
  "status": "pending",
  "amount": 250.00,
  "currency": "USD",
  "payment_url": "https://pay.passpoint.com/preq_abc123def456",
  "expires_at": "2024-01-22T14:30:00Z",
  "available_payment_methods": [
    {
      "type": "open_banking",
      "banks": ["chase", "bofa", "wells_fargo"],
      "processing_time": "instant"
    },
    {
      "type": "ach",
      "processing_time": "1-3 business days"
    }
  ],
  "created_at": "2024-01-15T14:30:00Z"
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Bank
                        Collections</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Collect payments from bank accounts worldwide using Open Banking APIs and direct bank
                        connections. Support for real-time account verification, payment requests, and automated
                        settlement with comprehensive fraud protection.
                    </p>

                    {/* Collection Methods Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Collection
                            Methods</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Open Banking */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Shield className="h-12 w-12 text-blue-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Open
                                        Banking</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Secure bank-to-bank payments using Open Banking APIs with instant account
                                    verification and real-time payment confirmation.
                                </p>
                                <div className="space-y-2 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">Instant - 2 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Success Rate:</span>
                                        <span className="text-gray-900 dark:text-white">98.5%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Supported Regions:</span>
                                        <span className="text-gray-900 dark:text-white">EU, UK, US</span>
                                    </div>
                                </div>
                                <Link to="/collection/bank/open-banking">
                                    <Button className="w-full">
                                        View Open Banking Options
                                    </Button>
                                </Link>
                            </div>

                            {/* Direct Bank Integration */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Building2 className="h-12 w-12 text-green-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Direct
                                        Bank Options</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Virtual account generation and direct bank integrations for automated collections
                                    with ACH, SEPA, and local clearing systems.
                                </p>
                                <div className="space-y-2 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Virtual Accounts:</span>
                                        <span className="text-gray-900 dark:text-white">Unlimited</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Auto-Settlement:</span>
                                        <span className="text-gray-900 dark:text-white">Real-time</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Currencies:</span>
                                        <span className="text-gray-900 dark:text-white">USD, EUR, GBP, NGN</span>
                                    </div>
                                </div>
                                <Link to="/collection/bank/direct">
                                    <Button className="w-full">
                                        View Direct Bank Options
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Bank Account Verification */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Account
                            Verification</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CheckCircle className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Verify
                                        Bank Account</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Verify customer bank account ownership and validity before processing payment
                                        requests to reduce failed payments and fraud.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getBankVerificationEndpoint()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getBankVerificationRequestBody()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getBankVerificationResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Collection Features */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Collection
                            Features</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Real-Time Verification */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CheckCircle className="h-8 w-8 text-green-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-Time
                                    Verification</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Instantly verify bank account ownership and balance availability before processing
                                    payment requests.
                                </p>
                            </div>

                            {/* Automated Reconciliation */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Building2 className="h-8 w-8 text-blue-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Auto
                                    Reconciliation</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Automatically match incoming payments to invoices and customer accounts with
                                    transaction references.
                                </p>
                            </div>

                            {/* Multi-Currency Support */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Globe className="h-8 w-8 text-purple-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Multi-Currency</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Collect payments in multiple currencies with automatic conversion and competitive
                                    exchange rates.
                                </p>
                            </div>

                            {/* Fraud Protection */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Shield className="h-8 w-8 text-red-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fraud
                                    Protection</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Advanced machine learning algorithms detect suspicious patterns and prevent
                                    fraudulent transactions.
                                </p>
                            </div>

                            {/* Instant Notifications */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CreditCard className="h-8 w-8 text-orange-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant
                                    Notifications</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Real-time webhooks and notifications for payment confirmations, failures, and status
                                    updates.
                                </p>
                            </div>

                            {/* Compliance Ready */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CheckCircle className="h-8 w-8 text-teal-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compliance
                                    Ready</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Built-in AML, KYC, and regulatory compliance for all supported jurisdictions and
                                    payment methods.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Payment Request Flow */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Payment
                            Request Flow</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CreditCard className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Request
                                        Payment</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Create secure payment requests that customers can fulfill using their preferred
                                        bank account with optional tokenization for recurring payments.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getPaymentRequestEndpoint()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getPaymentRequestBody()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getPaymentRequestResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Success Rates by Method */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Success Rates
                            by Method</h2>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <CheckCircle
                                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-green-800 dark:text-green-200">High
                                        Success Rates</h3>
                                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                                        Our bank collection methods achieve industry-leading success rates with advanced
                                        fraud detection and real-time verification.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Payment
                                            Method
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Success
                                            Rate
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing
                                            Time
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Typical
                                            Fee
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Open
                                            Banking
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">98.5%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant - 2
                                            hours
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.5% +
                                            $0.25
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ACH
                                            Direct Debit
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">92.3%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-3 business
                                            days
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1.0% +
                                            $0.30
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">SEPA
                                            Direct Debit
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">94.7%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-2 business
                                            days
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.8% +
                                            €0.35
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Virtual
                                            Accounts
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">99.1%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Real-time</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.3% +
                                            $0.15
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Compliance & Security */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Compliance &
                            Security</h2>

                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Regulatory
                                        Requirements</h3>
                                    <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                                        All bank collections are subject to regional banking regulations, Open Banking
                                        standards, and consumer protection laws.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Shield className="h-8 w-8 text-blue-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data
                                    Protection</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Bank-grade security with PSD2 compliance, Strong Customer Authentication (SCA), and
                                    encrypted data transmission.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• PCI DSS Level 1 certified</li>
                                    <li>• 256-bit SSL encryption</li>
                                    <li>• GDPR compliant data handling</li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CheckCircle className="h-8 w-8 text-green-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Regulatory
                                    Compliance</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Licensed and regulated in all operating jurisdictions with full compliance to local
                                    banking and payment regulations.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• FCA regulated (UK)</li>
                                    <li>• PSD2 licensed (EU)</li>
                                    <li>• Money transmitter licenses (US)</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Collections Overview",
                        href: "/collection"
                    }}
                    nextPage={{
                        title: "Open Banking Collections",
                        href: "/collection/bank/open-banking"
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

export default CollectionBank;

