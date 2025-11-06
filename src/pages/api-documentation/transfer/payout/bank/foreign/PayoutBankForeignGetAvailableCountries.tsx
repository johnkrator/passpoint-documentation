import {Globe} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const PayoutBankForeignGetAvailableCountries = () => {
    const getEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/foreign-ft-app/country-list`;
    };

    const getCurlExampleCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/country-list'`;
    };

    const getExampleResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "country(ies) found",
  "data": [
    {
      "name": "Nigeria",
      "value": "NGA",
      "code": "NG",
      "iso3code": "NGA",
      "currencyCode": "NGN",
      "dialingCode": "234"
    },
    {
      "name": "United States",
      "value": "USA",
      "code": "US",
      "iso3code": "USA",
      "currencyCode": "USD",
      "dialingCode": "1"
    },
    {
      "name": "Kenya",
      "value": "KEN",
      "code": "KE",
      "iso3code": "KEN",
      "dialingCode": "254"
    },
    {
      "name": "Tanzania",
      "value": "TZA",
      "code": "TZ",
      "iso3code": "TZA",
      "currencyCode": "TZS",
      "dialingCode": "255"
    }
  ]
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Available
                        Countries</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Get available countries for foreign payout transactions.
                    </p>

                    {/* API Endpoint */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Globe className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">GET
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpointCode()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">GET</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authorization */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Authorization</h2>
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

                    {/* Response Parameters */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Response
                            Parameters</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the response
                                            code of the operation. this indicates that the request was submitted
                                            successfully
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseDescription</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                            description of the response code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseMessage</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">array of
                                            countries
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.name</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">country
                                            name
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.code</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">country iso
                                            code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.dialingCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the country
                                            dialing code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.currencyCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the country
                                            currency code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.iso3code</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the country
                                            iso 3 code
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Example Request */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Example
                            Request</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">CURL
                                        Example</h4>
                                    <CodeBlock language="bash">{getCurlExampleCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Response */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Example
                            Response</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">200 OK
                                        Response</h4>
                                    <CodeBlock language="json">{getExampleResponseCode()}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PayoutBankForeignGetAvailableCountries;