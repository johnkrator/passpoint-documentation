import {Eye} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CardFullPan = () => {
    const endpointCode = () => {
        return `GET https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/card-full-pan/{cardId}`;
    };

    const headersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    };

    const curlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/card-full-pan/card_123456789' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer [your-access-token]'`;
    };

    const responseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Full card PAN retrieved successfully",
  "data": {
    "cardId": "card_123456789",
    "cardNumber": "5123456789012345",
    "expiryDate": "12/25",
    "cvv": "123",
    "nameOnCard": "John Doe"
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Card Full Pan
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Retrieve the full Primary Account Number (PAN) and sensitive card details.
                        This endpoint should be used with caution and proper security measures.
                    </p>

                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API</h2>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Eye className="h-12 w-12 text-red-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Get Full PAN
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/card-full-pan/&#123;cardId&#125;
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Method:</strong> GET
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Description:</strong> Retrieve the full unmasked card number and CVV
                                            </p>
                                            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
                                                <p className="text-red-800 dark:text-red-300 text-sm">
                                                    <strong>Security Warning:</strong> This endpoint exposes sensitive card data.
                                                    Ensure proper authentication, authorization, and data handling practices are in place.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Endpoint
                                                </h4>
                                                <CodeBlock>{endpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Headers
                                                </h4>
                                                <CodeBlock language="bash">{headersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    cURL Example
                                                </h4>
                                                <CodeBlock language="bash">{curlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Response
                                                </h4>
                                                <CodeBlock language="json">{responseCode()}</CodeBlock>
                                            </div>
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

export default CardFullPan;