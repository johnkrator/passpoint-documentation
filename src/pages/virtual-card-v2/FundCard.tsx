import {DollarSign} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const FundCard = () => {
    const endpointCode = () => `POST https://dev.mypasspoint.com/cardapp/fund`;
    const headersCode = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]
Content-Type: application/json`;
    const requestBodyCode = () => `{
    "cardId": "c222d8a1-6aea-4938-b948-5ed8263daa40",
    "amount": "175",
    "orderId": "4c90addb-376a-45a6-9519-7426a50f4cb7",
    "callbackUrl": "string"
}`;
    const curlCode = () => `curl --location 'https://dev.mypasspoint.com/cardapp/fund' \\
--data '{
    "cardId": "9d84b6a4-12f4-4cad-b2fe-d39b4f910717",
    "amount": "10",
    "orderId": "fff8640c-c24f-4e3b-8781-61f5fc2d0691",
    "callbackUrl":"string"
}'`;
    const responseCode = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "string",
  "reference": "string"
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">Fund Card</h1>
                    <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This is the endpoint for funding the virtual card of a customer. A bearer token is required in the Authorization header.
                    </p>
                    <section className="mb-12 sm:mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Fund Card</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 break-words">
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Endpoint:</strong> https://dev.mypasspoint.com/cardapp/fund</p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Method:</strong> POST</p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Description:</strong> This is the endpoint for funding the virtual card of a customer</p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Authorization:</strong> Bearer Token (This request is using Bearer Token from collection Passpoint Payment Service)</p>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4><CodeBlock language="json">{requestBodyCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4><CodeBlock language="bash">{curlCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4><CodeBlock language="json">{responseCode()}</CodeBlock></div>
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

export default FundCard;
