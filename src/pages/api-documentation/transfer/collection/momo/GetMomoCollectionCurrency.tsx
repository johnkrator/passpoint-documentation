import {Globe, AlertCircle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const GetMomoCollectionCurrency = () => {
    const getEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/ft-app/currency-list/momo?type=collection`;
    };

    const getCurlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/currency-list/momo?type=collection'`;
    };

    const getResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "8 payout currency(ies) found.",
  "count": 8,
  "data": [
    {
      "name": "Central African CFA Franc",
      "code": "XAF",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "",
      "countryIso3Code": "XAF",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/XAF.png"
    },
    {
      "name": "Congolese Franc",
      "code": "CDF",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "CD",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/CUR.png"
    },
    {
      "name": "Kenyan Shillings",
      "code": "KES",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "KE",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/KES.png"
    },
    {
      "name": "South African Rand",
      "code": "ZAR",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "SA",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/ZAR.png"
    },
    {
      "name": "Tanzanian Shillings",
      "code": "TZS",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "TZ",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/TZS.png"
    },
    {
      "name": "Ugandan Shillings",
      "code": "UGX",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "UG",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/UGX.png"
    },
    {
      "name": "West African CFA Franc",
      "code": "XOF",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "",
      "countryIso3Code": "XOF",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/XOF.png"
    },
    {
      "name": "Zambian Kwacha",
      "code": "ZMW",
      "momoPayoutEnabled": true,
      "bankPayoutEnabled": false,
      "active": true,
      "countryCode": "ZM",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/ZMW.png"
    }
  ]
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Momo
                        Collection Currency</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        This endpoint lists all mobile money (momo) networks available in a particular momo collection
                        enabled corridor. Use this to retrieve supported currencies and their details for mobile money
                        collections.
                    </p>

                    {/* Main API Section */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Globe className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Currency
                                        List</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="mb-6">
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            <strong>Endpoint:</strong> https://dev.mypasspoint.com/paypass/ft-app/currency-list/momo
                                        </p>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            <strong>Method:</strong> GET
                                        </p>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            <strong>Description:</strong> This endpoint lists all momo networks in a
                                            particular momo collection enabled corridor
                                        </p>

                                        {/* Parameters Table */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Parameters:</h4>
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
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">type</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Specifies
                                                            the transaction type (value: "collection")
                                                        </td>
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
                                                    <h4 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">Currency
                                                        Information</h4>
                                                    <p className="text-blue-700 dark:text-blue-300">
                                                        The response includes currency details such as name, code,
                                                        country code, and whether the currency supports momo/bank
                                                        collections. Logo URLs are provided for UI integration.
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
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{getCurlCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                (200 OK)</h4>
                                            <CodeBlock language="json">{getResponseCode()}</CodeBlock>
                                        </div>
                                    </div>

                                    {/* Response Fields Table */}
                                    <div className="mt-8">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response
                                            Fields:</h4>
                                        <div className="overflow-x-auto">
                                            <table
                                                className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                <thead>
                                                <tr className="bg-gray-50 dark:bg-gray-800">
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Field</th>
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseCode</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Response
                                                        status code (e.g., "00" for success)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseDescription</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Description
                                                        of the response status
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseMessage</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Human-readable
                                                        message with currency count
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">count</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">number</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Total
                                                        number of currencies returned
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].name</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Full
                                                        name of the currency
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].code</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">ISO
                                                        currency code (e.g., "KES", "XAF")
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].momoPayoutEnabled</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">boolean</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Indicates
                                                        if mobile money payout is enabled
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].bankPayoutEnabled</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">boolean</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Indicates
                                                        if bank payout is enabled
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].active</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">boolean</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Currency
                                                        active status
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].countryCode</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Two-letter
                                                        country code (ISO 3166-1 alpha-2)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].countryIso3Code</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Three-letter
                                                        ISO code (for multi-country currencies)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">data[].logoUrl</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">URL
                                                        to the currency logo image
                                                    </td>
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

export default GetMomoCollectionCurrency;

