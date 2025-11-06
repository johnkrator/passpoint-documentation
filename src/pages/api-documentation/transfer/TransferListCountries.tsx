import {Globe2} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransferListCountries = () => {
    const getEndpoint = () => `GET https://dev.mypasspoint.com/paypass/admin-app/country-list`;

    const getRequestExample = () => `curl --location 'https://dev.mypasspoint.com/paypass/admin-app/country-list?filter='`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">List
                        Countries</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Retrieve the list of supported countries for international transfers and mobile money
                        operations.
                        Use the optional filter parameter to search for specific countries.
                    </p>

                    {/* API Endpoint Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">API
                            Endpoint</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Globe2 className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Country List
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Get a comprehensive list of countries where Passpoint services are available.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Query Parameters */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Query
                                                Parameters</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Required</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">filter</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">No</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Optional
                                                            search filter for country name or code
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock language="bash">{getRequestExample()}</CodeBlock>
                                        </div>

                                        {/* Response Note */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Returns a list of country objects containing country codes, names,
                                                    and supported service types.
                                                    The exact response structure is determined by the API
                                                    implementation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Common Use
                            Cases</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">UI
                                    Dropdowns</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Populate country selection dropdowns in payment forms and user interfaces.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Service
                                    Validation</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Validate destination countries before initiating international transfers.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Regional
                                    Routing</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Determine appropriate payment methods and routes based on destination country.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Supported Regions */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Supported
                            Regions</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Africa</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Comprehensive coverage across Sub-Saharan Africa with support for mobile money and
                                    bank transfers.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Nigeria (NGN) - Bank & Mobile Money</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Ghana (GHS) - Bank & Mobile Money</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Kenya (KES) - Bank & Mobile Money</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Additional countries available via API</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">International</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Global reach with support for major currencies and international payment networks.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>United States (USD)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>United Kingdom (GBP)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>European Union (EUR)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Check API for complete list</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Implementation
                            Tips</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-3">Best
                                Practices</h3>
                            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-400">
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Cache the country list to reduce API calls and improve performance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Refresh cached data periodically as new countries may be added</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Use the filter parameter for type-ahead search functionality</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Validate country codes before submitting transfer requests</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-500 mr-2">ℹ</span>
                                    <span>Display country names in user's preferred language when possible</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TransferListCountries;