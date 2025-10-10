import {Globe} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionGetCountries = () => {
    const getEndpoint = () => `GET https://dev.mypasspoint.com/paypass/foreign-ft-app/ob-country-list`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/ob-country-list' \\
--header 'Authorization: Bearer {your_token}'`;

    const getResponse = () => `{
  "data": [
    {
      "name": "United Kingdom",
      "code": "GB",
      "currencyCode": "GBP"
    },
    {
      "name": "Germany",
      "code": "DE",
      "currencyCode": "EUR"
    },
    {
      "name": "France",
      "code": "FR",
      "currencyCode": "EUR"
    },
    {
      "name": "Finland",
      "code": "FI",
      "currencyCode": "EUR"
    },
    {
      "name": "Ireland",
      "code": "IE",
      "currencyCode": "EUR"
    },
    {
      "name": "Italy",
      "code": "IT",
      "currencyCode": "EUR"
    }
  ]
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Get Countries
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Retrieve a list of countries supported for Open Banking foreign collections. This endpoint
                        returns
                        available countries along with their currency codes for payment processing.
                    </p>

                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Globe className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Country List
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Fetch the list of supported countries for Open Banking payments. Each country
                                        includes
                                        its ISO code and associated currency for processing foreign transactions.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Bearer Token</span> - This request
                                                    uses Bearer Token from collection Passpoint Payment Service
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock language="bash">{getCurlRequest()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                (200 OK)</h4>
                                            <CodeBlock language="json">{getResponse()}</CodeBlock>
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

export default CollectionGetCountries;