import {Building2} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBankLocalGetBanks = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Get Banks</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        This endpoint lists all financial institutions in a particular bank payout enabled corridor.
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Building2 className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">GET
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`GET https://dev.mypasspoint.com/paypass/ft-app/bank-list/NG`}</CodeBlock>
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
                                    <CodeBlock
                                        language="bash">{`curl --location 'https://dev.mypasspoint.com/paypass/ft-app/bank-list/NG'`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Response */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Response</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                        Body</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                        This request doesn't return any response body
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Local Bank Transfers",
                        href: "/payout/bank/local"
                    }}
                    nextPage={{
                        title: "Account Enquiry",
                        href: "/payout/bank/local/account-enquiry"
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

export default PayoutBankLocalGetBanks;