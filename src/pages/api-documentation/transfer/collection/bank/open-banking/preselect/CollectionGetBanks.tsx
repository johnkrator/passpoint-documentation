import {Building2} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionGetBanks = () => {
    const getEndpoint = () => `GET https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-bank-list`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-bank-list?countryCode=GB' \\
--header 'Authorization: Bearer {your_token}'`;

    const getResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "2 banks retrieved",
  "dataList": [
    {
      "name": "Natwest Sandbox",
      "url": "https://static.instantbankpayment.com/bank-logos/uk-natwest.png",
      "id": "gb-token-natwestsandbox"
    },
    {
      "name": "Test Bank (GB)",
      "url": "https://static.instantbankpayment.com/bank-logos/testbank.png",
      "id": "gb-testbank"
    }
  ]
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Get Banks
                    </h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Retrieve a list of banks available for Open Banking payments in a specific country. Use this
                        endpoint
                        to fetch supported banks based on the country code for bank preselection in payment flows.
                    </p>

                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Building2 className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Bank List
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Retrieve supported banks for a specific country. Each bank includes its name,
                                        logo URL,
                                        and unique identifier required for initiating payments.
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
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">countryCode</span>: GB (required) -
                                                    ISO country code
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

export default CollectionGetBanks;