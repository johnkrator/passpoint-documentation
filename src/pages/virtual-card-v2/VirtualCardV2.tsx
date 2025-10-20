import {CreditCard, ArrowRight, FileText, DollarSign, Settings, Shield} from "lucide-react";
import {Link} from "react-router-dom";

const VirtualCardV2 = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Virtual Card v2
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Comprehensive API suite for managing virtual cards. Issue, fund, freeze, and manage virtual cards
                        with real-time transaction monitoring and authorization controls.
                    </p>

                    {/* Card Issuance Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Card Issuance</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Link
                                to="/virtual-card-v2/issue-card-default-billing"
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-brand-500/50"
                            >
                                <div className="flex items-start gap-4">
                                    <CreditCard className="h-8 w-8 text-brand-500 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Issue Card (Default Billing)
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            Issue a virtual card using default merchant billing details
                                        </p>
                                        <span className="text-brand-500 text-sm font-medium inline-flex items-center gap-1">
                                            View API <ArrowRight className="h-4 w-4"/>
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                to="/virtual-card-v2/issue-card-client-billing"
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-green-500/50"
                            >
                                <div className="flex items-start gap-4">
                                    <CreditCard className="h-8 w-8 text-green-500 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Issue Card (Client Billing)
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            Issue a virtual card with custom client billing address
                                        </p>
                                        <span className="text-green-500 text-sm font-medium inline-flex items-center gap-1">
                                            View API <ArrowRight className="h-4 w-4"/>
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                to="/virtual-card-v2/issue-and-fund-card-client-billing"
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-500/50"
                            >
                                <div className="flex items-start gap-4">
                                    <CreditCard className="h-8 w-8 text-blue-500 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Issue & Fund Card
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            Issue and fund a card with initial balance in one operation
                                        </p>
                                        <span className="text-blue-500 text-sm font-medium inline-flex items-center gap-1">
                                            View API <ArrowRight className="h-4 w-4"/>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Card Information Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Card Information</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Link to="/virtual-card-v2/card-details" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-brand-500/50">
                                <div className="flex items-start gap-4">
                                    <FileText className="h-8 w-8 text-brand-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Details</h3><p className="text-gray-600 dark:text-gray-400 text-sm">Retrieve comprehensive card information</p></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/card-full-pan" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-red-500/50">
                                <div className="flex items-start gap-4">
                                    <FileText className="h-8 w-8 text-red-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Full PAN</h3><p className="text-gray-600 dark:text-gray-400 text-sm">Retrieve full unmasked card number</p></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/card-balance" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-green-500/50">
                                <div className="flex items-start gap-4">
                                    <DollarSign className="h-8 w-8 text-green-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Balance</h3><p className="text-gray-600 dark:text-gray-400 text-sm">Check available card balance</p></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/card-profile-status" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-500/50">
                                <div className="flex items-start gap-4">
                                    <Shield className="h-8 w-8 text-blue-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Profile Status</h3><p className="text-gray-600 dark:text-gray-400 text-sm">Check card status and profile</p></div>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Card Management Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Card Management</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Link to="/virtual-card-v2/freeze-card" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <Settings className="h-8 w-8 text-cyan-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Freeze Card</h3></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/unfreeze-card" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <Settings className="h-8 w-8 text-orange-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Unfreeze Card</h3></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/fund-card" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <DollarSign className="h-8 w-8 text-green-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fund Card</h3></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/withdraw-from-card" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <DollarSign className="h-8 w-8 text-red-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Withdraw from Card</h3></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/terminate-card" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <Settings className="h-8 w-8 text-red-600 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Terminate Card</h3></div>
                                </div>
                            </Link>

                            <Link to="/virtual-card-v2/update-card-callback-details" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <Settings className="h-8 w-8 text-gray-500 flex-shrink-0"/>
                                    <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Update Callback Details</h3></div>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Transactions & Reporting Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transactions & Reporting</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Link to="/virtual-card-v2/card-transaction" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Transaction</h3>
                            </Link>

                            <Link to="/virtual-card-v2/card-transactions-list" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Transactions List</h3>
                            </Link>

                            <Link to="/virtual-card-v2/card-statement" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Statement</h3>
                            </Link>

                            <Link to="/virtual-card-v2/card-statement-by-transaction-id" className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Statement by Transaction ID</h3>
                            </Link>
                        </div>
                    </section>

                    {/* Advanced Features Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Advanced Features</h2>
                        <Link to="/virtual-card-v2/realtime-authorization-decision-maker" className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all block">
                            <div className="flex items-start gap-4">
                                <Shield className="h-10 w-10 text-green-600 dark:text-green-400 flex-shrink-0"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Realtime Authorization Decision Maker</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Make real-time authorization decisions for card transactions with custom rules and controls</p>
                                </div>
                            </div>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default VirtualCardV2;
