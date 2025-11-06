import {ArrowRight, BookOpen, Code, Zap, Shield, Globe, CheckCircle, Clock, DollarSign} from "lucide-react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Hero Section */}
                <div className="max-w-4xl mb-16">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Welcome to Passpoint Payment Service
                    </h1>
                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                        Build powerful payment solutions with our comprehensive API suite. Accept payments, manage
                        wallets,
                        process transfers, and handle payouts across multiple countries and currencies with
                        enterprise-grade
                        security and reliability.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/introduction"
                            className="inline-flex items-center gap-2 bg-[#009ac2] hover:bg-[#008ab0] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md"
                        >
                            Get Started
                            <ArrowRight className="h-5 w-5"/>
                        </Link>
                        <Link
                            to="/authentication"
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md"
                        >
                            <Code className="h-5 w-5"/>
                            View API Docs
                        </Link>
                    </div>
                </div>

                {/* Key Features Grid */}
                <section className="mb-16">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Why Choose
                        Passpoint?</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#009ac2]/10 dark:bg-[#009ac2]/30 p-3 rounded-lg">
                                    <Zap className="h-6 w-6 text-[#009ac2] dark:text-[#009ac2]"/>
                                </div>
                            </div>
                            <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                Lightning Fast
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Sub-second API response times with real-time transaction processing and instant webhook
                                notifications for all payment events.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400"/>
                                </div>
                            </div>
                            <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                Bank-Level Security
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                End-to-end encryption, PCI DSS compliance, fraud detection, and comprehensive audit
                                trails
                                to protect your business and customers.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                                    <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400"/>
                                </div>
                            </div>
                            <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                Global Reach
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Process payments across multiple countries with support for local payment methods,
                                multiple currencies, and regional compliance.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                                    <DollarSign className="h-6 w-6 text-orange-600 dark:text-orange-400"/>
                                </div>
                            </div>
                            <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                Multi-Currency
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Create and manage wallets in multiple currencies with real-time exchange rates and
                                transparent conversion fees.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400"/>
                                </div>
                            </div>
                            <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                99.9% Uptime
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Enterprise-grade infrastructure with high availability SLA, redundant systems, and
                                24/7 monitoring for uninterrupted service.
                            </p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                                    <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400"/>
                                </div>
                            </div>
                            <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                Developer Friendly
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                RESTful APIs with comprehensive documentation, code examples in multiple languages,
                                and sandbox environment for testing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="mb-16">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Core Services</h2>
                    <div className="space-y-6">
                        <div
                            className="bg-gradient-to-r from-[#009ac2]/10 to-[#009ac2]/20 dark:from-[#009ac2]/30 dark:to-[#009ac2]/40 border border-[#009ac2]/30 dark:border-[#009ac2]/50 rounded-xl p-6 lg:p-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#009ac2] dark:bg-[#009ac2] p-3 rounded-lg flex-shrink-0">
                                    <DollarSign className="h-6 w-6 text-white"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Payment Collections
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Accept payments through bank transfers, mobile money, virtual accounts, and open
                                        banking.
                                        Support for both one-time and recurring payments with automatic reconciliation.
                                    </p>
                                    <Link
                                        to="/collection"
                                        className="inline-flex items-center gap-2 text-[#009ac2] dark:text-[#009ac2] hover:text-[#008ab0] dark:hover:text-[#008ab0] font-medium"
                                    >
                                        Explore Collections API
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 lg:p-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-600 dark:bg-green-500 p-3 rounded-lg flex-shrink-0">
                                    <ArrowRight className="h-6 w-6 text-white"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Payouts & Transfers
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Send money to bank accounts and mobile wallets locally and internationally.
                                        Bulk payout support with automated scheduling and compliance checks.
                                    </p>
                                    <Link
                                        to="/payout"
                                        className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                                    >
                                        Explore Payout API
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl p-6 lg:p-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-600 dark:bg-purple-500 p-3 rounded-lg flex-shrink-0">
                                    <BookOpen className="h-6 w-6 text-white"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Wallet Management
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        Create and manage digital wallets for your customers. Multi-currency support,
                                        balance tracking, transaction history, and wallet-to-wallet transfers.
                                    </p>
                                    <Link
                                        to="/wallet"
                                        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                                    >
                                        Explore Wallet API
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Start Guide */}
                <section className="mb-16">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Quick Start
                        Guide</h2>
                    <div
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="bg-[#009ac2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Create Your Account
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300">
                                        Sign up for a Passpoint merchant account and complete the KYC verification
                                        process.
                                        Access your API credentials from the dashboard.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className="bg-[#009ac2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Get Your Credentials
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300 mb-2">
                                        Navigate to the Developers section in your dashboard to retrieve your Merchant
                                        ID
                                        and API keys for both sandbox and production environments.
                                    </p>
                                    <div
                                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400"/>
                                            <span className="text-gray-700 dark:text-gray-300">Merchant ID</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm mt-1">
                                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400"/>
                                            <span className="text-gray-700 dark:text-gray-300">API Key</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className="bg-[#009ac2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Make Your First API Call
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300 mb-3">
                                        Start with authentication, then create a wallet or process your first
                                        transaction
                                        in the sandbox environment.
                                    </p>
                                    <Link
                                        to="/api-integrations"
                                        className="inline-flex items-center gap-2 text-[#009ac2] dark:text-[#009ac2] hover:text-[#008ab0] dark:hover:text-[#008ab0] font-medium"
                                    >
                                        View Integration Guide
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className="bg-[#009ac2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                    4
                                </div>
                                <div className="flex-1">
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Go Live
                                    </h3>
                                    <p className="md:text-base text-sm text-gray-700 dark:text-gray-300">
                                        After thorough testing in sandbox, switch to production credentials and start
                                        processing real transactions. Configure webhooks for event notifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources */}
                <section className="mb-16">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Additional
                        Resources</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Link
                            to="/introduction"
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-[#009ac2]/50 dark:hover:border-[#009ac2]/70"
                        >
                            <div className="flex items-start gap-4">
                                <BookOpen className="h-8 w-8 text-[#009ac2] dark:text-[#009ac2] flex-shrink-0"/>
                                <div>
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Introduction
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        Learn about Passpoint's architecture, authentication methods, response formats,
                                        and API fundamentals.
                                    </p>
                                    <span
                                        className="text-[#009ac2] dark:text-[#009ac2] text-sm font-medium inline-flex items-center gap-1">
                                        Read More
                                        <ArrowRight className="h-4 w-4"/>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to="/quick-guides"
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-green-300 dark:hover:border-green-700"
                        >
                            <div className="flex items-start gap-4">
                                <Zap className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0"/>
                                <div>
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Quick Guides
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        Step-by-step tutorials for common use cases like accepting payments,
                                        processing payouts, and managing wallets.
                                    </p>
                                    <span
                                        className="text-green-600 dark:text-green-400 text-sm font-medium inline-flex items-center gap-1">
                                        Explore Guides
                                        <ArrowRight className="h-4 w-4"/>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to="/authentication"
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-purple-300 dark:hover:border-purple-700"
                        >
                            <div className="flex items-start gap-4">
                                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400 flex-shrink-0"/>
                                <div>
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Authentication
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        Secure your API integration with proper authentication methods,
                                        token management, and security best practices.
                                    </p>
                                    <span
                                        className="text-purple-600 dark:text-purple-400 text-sm font-medium inline-flex items-center gap-1">
                                        Learn More
                                        <ArrowRight className="h-4 w-4"/>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to="/status-responses"
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-orange-300 dark:hover:border-orange-700"
                        >
                            <div className="flex items-start gap-4">
                                <Code className="h-8 w-8 text-orange-600 dark:text-orange-400 flex-shrink-0"/>
                                <div>
                                    <h3 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                        Status Codes & Errors
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        Comprehensive reference for API response codes, error handling,
                                        and troubleshooting common integration issues.
                                    </p>
                                    <span
                                        className="text-orange-600 dark:text-orange-400 text-sm font-medium inline-flex items-center gap-1">
                                        View Reference
                                        <ArrowRight className="h-4 w-4"/>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="bg-gradient-to-r from-[#009ac2] to-[#008ab0] dark:from-[#008ab0] dark:to-[#007a9a] rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="md:text-2xl text-xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/90 md:text-lg text-sm mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses using Passpoint to power their payment infrastructure.
                        Start building today with our comprehensive API suite.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/introduction"
                            className="inline-flex items-center gap-2 bg-white text-[#009ac2] hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                        >
                            Read Documentation
                            <ArrowRight className="h-5 w-5"/>
                        </Link>
                        <a
                            href="https://go.mypasspoint.com/auth/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#007a9a] hover:bg-[#006a8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Sign Up Free
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Passpoint Payment Service. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Home;