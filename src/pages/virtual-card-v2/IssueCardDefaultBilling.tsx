import {CreditCard} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const IssueCardDefaultBilling = () => {
    const endpointCode = () => {
        return `POST https://dev.mypasspoint.com/cardapp/issue`;
    };

    const headersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]
Content-Type: application/json`;
    };

    const requestBodyCode = () => {
        return `{
    "firstName":"Bogus",
    "lastName":"Pokus",
    "email":"chinedu37dz+123456@gmail.com",
    "phoneNumber":"08038276746",
    "currency":"USD",
    "scheme":"2",
    "cardType" : "0",
    "orderId":"39737957-7af4-4b8a-b289-51b3315bc7f1",
    "pin":"1234",
    "is3d" : "no",
    "tokenization" : "no",
    "useCardAsChargeBearer" : "no"
}`;
    };

    const curlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/cardapp/issue' \\
--data-raw '{
    "firstName":"Bogus",
    "lastName":"Pokus",
    "email":"chinedu37dz+123456@gmail.com",
    "phoneNumber":"08038276746",
    "currency":"USD",
    "scheme":"2",
    "cardType" : "0",
    "orderId":"827c8156-55ab-4917-8f5c-19d90cc64780",
    "is3d" : "no",
    "tokenization" : "no",
    "useCardAsChargeBearer" : "no"
}'`;
    };

    const responseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "string",
  "reference": "string"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-2xl text-xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">
                        Issue Card - Default Billing Details
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This is the endpoint for creating a virtual card for the customer. A bearer token is required in the Authorization header which will be used to retrieve the customer's details and create the virtual card. colour = the display colour of the card on your interface e.g mobile app etc. scheme = the card scheme e.g. 1 - Mastercard, 2 - Visa
                    </p>

                    {/* API Section */}
                    <section className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>

                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <CreditCard className="h-10 w-10 sm:h-12 sm:w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Issue Virtual Card
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed break-all">
                                                <strong className="block sm:inline mb-1 sm:mb-0">Endpoint:</strong> <span className="text-xs sm:text-sm">https://dev.mypasspoint.com/cardapp/issue</span>
                                            </p>
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                <strong>Description:</strong> This is the endpoint for creating a virtual card for the customer
                                            </p>
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                <strong>Authorization:</strong> Bearer Token (This request is using Bearer Token from collection Passpoint Payment Service)
                                            </p>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4">
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Endpoint
                                                </h4>
                                                <div className="overflow-x-auto">
                                                    <CodeBlock>{endpointCode()}</CodeBlock>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Headers
                                                </h4>
                                                <div className="overflow-x-auto">
                                                    <CodeBlock language="bash">{headersCode()}</CodeBlock>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Request Body
                                                </h4>
                                                <div className="overflow-x-auto">
                                                    <CodeBlock language="json">{requestBodyCode()}</CodeBlock>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    cURL Example
                                                </h4>
                                                <div className="overflow-x-auto">
                                                    <CodeBlock language="bash">{curlCode()}</CodeBlock>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Response (200 OK)
                                                </h4>
                                                <div className="overflow-x-auto">
                                                    <CodeBlock language="json">{responseCode()}</CodeBlock>
                                                </div>
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

export default IssueCardDefaultBilling;