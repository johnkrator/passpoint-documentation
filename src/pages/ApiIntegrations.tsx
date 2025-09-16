import {ArrowLeft, ArrowRight, Terminal, Key, Globe} from "lucide-react";
import {Button} from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";

const ApiIntegrations = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">API Integrations</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Learn how to integrate Passpoint APIs into your application with comprehensive guides, code examples,
                        and best practices for production deployments.
                    </p>

                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Integration Methods</h2>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                                    <Terminal className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">REST API</h3>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Direct HTTP calls to our RESTful endpoints with JSON payloads. Perfect for
                                        custom integrations and server-side applications.
                                    </p>
                                    <CodeBlock language="bash">{`curl -X POST https://api.passpoint.com/v1/transactions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"amount": 1000, "currency": "USD"}'`}
                                    </CodeBlock>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                                    <Key className="h-12 w-12 text-green-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">SDKs</h3>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Official libraries for popular programming languages with built-in error
                                        handling and retry logic.
                                    </p>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Node.js</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">npm install @passpoint/sdk</div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Python</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">pip install passpoint-python</div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Java</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">com.passpoint:passpoint-java</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                                    <Globe className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Webhooks</h3>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Receive real-time notifications about transaction events, user actions, and
                                        system updates.
                                    </p>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>Transaction status changes</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>Payment confirmations</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>Account updates</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>Security alerts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h2>

                    <div
                        className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                        <div className="flex">
                            <Key className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-3"/>
                            <div>
                                <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">API Key
                                    Security</h3>
                                <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                                    Never expose your API keys in client-side code. Always make API calls from your
                                    server.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">API Key
                                Authentication</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Include your API key in the Authorization header of every request:
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                                <div className="text-gray-900 dark:text-gray-100">Authorization: Bearer sk_live_...
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Environment
                                Keys</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div
                                    className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Test
                                        Environment
                                    </div>
                                    <div
                                        className="text-xs text-green-700 dark:text-green-300 font-mono mb-1">sk_test_...
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">Safe for development and
                                        testing
                                    </div>
                                </div>
                                <div
                                    className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">Live
                                        Environment
                                    </div>
                                    <div className="text-xs text-red-700 dark:text-red-300 font-mono mb-1">sk_live_...
                                    </div>
                                    <div className="text-xs text-red-600 dark:text-red-400">Processes real
                                        transactions
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Start Example</h2>

                    <CodeBlock
                        title="Create a Transaction (Node.js)"
                        language="javascript"
                    >{`const passpoint = require('@passpoint/sdk');

// Initialize with your API key
const client = new passpoint.Client({
  apiKey: process.env.PASSPOINT_API_KEY
});

// Create a transaction
async function createTransaction() {
  try {
    const transaction = await client.transactions.create({
      amount: 1000, // $10.00 in cents
      currency: 'USD',
      description: 'Payment for services',
      customer: {
        email: 'customer@example.com'
      }
    });

    console.log('Transaction created:', transaction.id);
    return transaction;
  } catch (error) {
    console.error('Error:', error.message);
  }
}`}</CodeBlock>
                </section>
            </div>

            {/* Pagination Navigation */}
            <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start"
                >
                    <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
                    <div className="text-left min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
                        <div className="text-sm font-medium truncate">Introduction</div>
                    </div>
                </Button>

                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
                >
                    <div className="text-right min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                        <div className="text-sm font-medium truncate">User Roles and Permissions</div>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0"/>
                </Button>
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-gray-500 text-sm">All rights reserved</p>
            </footer>
            </div>
        </div>
    );
};

export default ApiIntegrations;