import {Globe} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const PayoutMomoGetCurrency = () => {
    const getEndpointCode = () => {
        return `GET https://dev.mypasspoint.com/paypass/ft-app/currency-list/momo?type=payout`;
    };

    const getExampleResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "4 payout currency(ies) found.",
  "count": 4,
  "data": [
    {
      "name": "Ghanian Cedis",
      "code": "GHS",
      "currencyType": "FIAT",
      "countryCode": "GH",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/GHS.png"
    },
    {
      "name": "Kenyan Shillings",
      "code": "KES",
      "currencyType": "FIAT",
      "countryCode": "KE",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/KES.png"
    },
    {
      "name": "Ugandan Shillings",
      "code": "UGX",
      "currencyType": "FIAT",
      "countryCode": "UG",
      "logoUrl": "https://asset.mypasspoint.com/img/payoutCurrency/UGX.png"
    },
    {
      "name": "Zambian Kwacha",
      "code": "ZMW",
      "currencyType": "FIAT",
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
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Momo Payout
                        Currency</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        This endpoint list available payout currencies.
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

                    {/* Headers */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Headers</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Header</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-merchant-id</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">pass your
                                            merchant id
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Your unique
                                            merchant identifier
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-channel-id</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Channel
                                            identifier
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">x-channel-code</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">passpoint-merchant-user</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Channel code
                                            identifier
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Parameters */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Parameters</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">payout</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Response */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Response</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
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

export default PayoutMomoGetCurrency;