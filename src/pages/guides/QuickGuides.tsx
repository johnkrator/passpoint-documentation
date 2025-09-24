
const QuickGuides = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* Main content */}
            <div className="prose prose-invert max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Guides</h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    Quick guides help developers get started quickly. You'll find step-by-step instructions to integrate
                    Passpoint APIs, from setting up authentication to processing transactions.
                </p>

                <section className="mb-12">
                    <div className="grid gap-8 sm:grid-cols-2">
                        {/* Guide 1 */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Getting
                                Started</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Set up your development environment and make your first API call in under 5 minutes.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Create API credentials</li>
                                <li>• Configure authentication</li>
                                <li>• Make test requests</li>
                            </ul>
                        </div>

                        {/* Guide 2 */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Authentication
                                Setup</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Learn how to securely authenticate with Passpoint APIs using API keys and OAuth flows.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>• API key management</li>
                                <li>• OAuth 2.0 setup</li>
                                <li>• Security best practices</li>
                            </ul>
                        </div>

                        {/* Guide 3 */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Transaction
                                Processing</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Process payments, refunds, and handle transaction states with confidence.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Create transactions</li>
                                <li>• Handle callbacks</li>
                                <li>• Process refunds</li>
                            </ul>
                        </div>

                        {/* Guide 4 */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Webhook
                                Integration</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Set up webhooks to receive real-time notifications about transaction events.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Configure endpoints</li>
                                <li>• Verify signatures</li>
                                <li>• Handle retries</li>
                            </ul>
                        </div>

                        {/* Guide 5 */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Error Handling</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Implement robust error handling and recovery strategies for production systems.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Error response formats</li>
                                <li>• Retry mechanisms</li>
                                <li>• Logging strategies</li>
                            </ul>
                        </div>

                        {/* Guide 6 */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Testing &
                                Sandbox</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Use Passpoint's sandbox environment to test your integration before going live.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Sandbox setup</li>
                                <li>• Test scenarios</li>
                                <li>• Production deployment</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Common Integration
                        Patterns</h2>

                    <div className="space-y-6">
                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">E-commerce
                                Integration</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Integrate Passpoint with your e-commerce platform for seamless payment processing.
                            </p>
                            <div
                                className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">
                                <div className="break-all">POST /api/v1/transactions</div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Subscription
                                Billing</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Handle recurring payments and subscription management with automated billing cycles.
                            </p>
                            <div
                                className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">
                                <div className="break-all">POST /api/v1/subscriptions</div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Marketplace
                                Payments</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Split payments between multiple parties in marketplace scenarios.
                            </p>
                            <div
                                className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">
                                <div className="break-all">POST /api/v1/marketplace/transfers</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-gray-500 text-sm">All rights reserved</p>
            </footer>
        </div>
    );
};

export default QuickGuides;