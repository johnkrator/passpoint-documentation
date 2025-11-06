import {Network, Shield, AlertCircle, Lock} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const GetMomoCollectionNetwork = () => {
    const getEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/momo-app/momo-networks/{currencyCode}?type=collection&countryCode={countryCode}`;
    };

    const getCurlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/momo-app/momo-networks/XAF?type=collection&countryCode=CM' \\
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'`;
    };

    const getHeadersCode = () => {
        return `Authorization: Bearer YOUR_ACCESS_TOKEN`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Momo
                        Collection Network</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        This endpoint lists all mobile money networks available in a particular momo collection enabled
                        corridor. Use this to retrieve the supported networks for a specific currency and country
                        combination.
                    </p>

                    {/* Authentication Notice */}
                    <div
                        className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
                        <div className="flex">
                            <Lock className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                            <div>
                                <h3 className="text-base font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Authentication
                                    Required</h3>
                                <p className="text-yellow-700 dark:text-yellow-300">
                                    This endpoint requires Bearer Token authentication. Include your access token in the
                                    Authorization header.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main API Section */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Network className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Network
                                        List</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="mb-6">
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            <strong>Endpoint:</strong> https://dev.mypasspoint.com/paypass/momo-app/momo-networks/{"{currencyCode}"}
                                        </p>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            <strong>Method:</strong> GET
                                        </p>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            <strong>Description:</strong> This endpoint lists all momo networks in a
                                            particular momo collection enabled corridor
                                        </p>

                                        {/* Authorization Section */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                                <Shield className="h-5 w-5 text-brand-500"/>
                                                Authorization:
                                            </h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                                    <strong>Type:</strong> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    This request uses Bearer Token from collection Passpoint Payment
                                                    Service
                                                </p>
                                            </div>
                                        </div>

                                        {/* Path Parameters Table */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Path
                                                Parameters:</h4>
                                            <div className="overflow-x-auto">
                                                <table
                                                    className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                    <thead>
                                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Required</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">currencyCode</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            currency code (e.g., XAF, KES, UGX)
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Query Parameters Table */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query
                                                Parameters:</h4>
                                            <div className="overflow-x-auto">
                                                <table
                                                    className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                    <thead>
                                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Required</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Example</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">type</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Specifies
                                                            the transaction type
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">collection</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">countryCode</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Two-letter
                                                            country code (ISO 3166-1 alpha-2)
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">CM</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Info Box */}
                                        <div
                                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6 shadow-sm">
                                            <div className="flex">
                                                <AlertCircle
                                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                                <div>
                                                    <h4 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">Network
                                                        Information</h4>
                                                    <p className="text-blue-700 dark:text-blue-300">
                                                        This endpoint returns the available mobile money networks for a
                                                        specific currency and country. The response structure may vary
                                                        based on the networks available in the specified corridor. Note
                                                        that the example response shown indicates no response body is
                                                        returned in some cases.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock>{getHeadersCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{getCurlCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <strong>Currency:</strong> XAF (Central African CFA Franc)<br/>
                                                    <strong>Country:</strong> CM (Cameroon)<br/>
                                                    <strong>Type:</strong> collection
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                                    No response body returned for this request in the provided example.
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                    The actual response will contain a list of available mobile money
                                                    networks for the specified currency and country combination.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Common Country Codes */}
                                    <div className="mt-8">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Common
                                            Country Codes:</h4>
                                        <div className="overflow-x-auto">
                                            <table
                                                className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                <thead>
                                                <tr className="bg-gray-50 dark:bg-gray-800">
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Country</th>
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Code</th>
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Currency</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Cameroon</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">CM</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">XAF</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Kenya</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">KE</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">KES</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Uganda</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">UG</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">UGX</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Tanzania</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">TZ</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">TZS</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">South
                                                        Africa
                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">ZA</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">ZAR</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Zambia</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">ZM</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">ZMW</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Democratic
                                                        Republic of Congo
                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">CD</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">CDF</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GetMomoCollectionNetwork;