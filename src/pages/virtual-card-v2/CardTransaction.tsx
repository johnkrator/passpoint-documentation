import {FileText} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CardTransaction = () => {
    const endpointCode = () => `GET https://dev.mypasspoint.com/cardapp/get-card-trans?id=`;
    const headersCode = () => `x-merchant-id: pass your merchant id
x-channel-id: 2
x-channel-code: passpoint-merchant-user
Authorization: Bearer [your-access-token]`;
    const paramsCode = () => `id: the id of the card. this is a UUID obtained at card creation`;
    const curlCode = () => `curl --location 'https://dev.mypasspoint.com/cardapp/get-card-trans?id='`;
    const responseCode = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "virtual card transaction found",
  "data": {
    "dateCreated": "datetime",
    "transactionId": "string",
    "cardId": "string",
    "currency": "string",
    "cardScheme": "string",
    "amount": "decimal",
    "authorizationMessage": "string",
    "authorizationStatus": "string",
    "authorizationCode": "string",
    "transMode": "string",
    "cardAcceptorName": "string",
    "cardAcceptorCity": "string",
    "cardAcceptorCountry": "string",
    "clientOrderId": "string",
    "narration": "string"
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">Get Card Transaction</h1>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This is the endpoint used to get a card transaction using the transaction id or client order id. It requires an authorization header.
                    </p>
                    <section className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Card Transaction</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 break-words">
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Endpoint:</strong> https://dev.mypasspoint.com/cardapp/get-card-trans?id=</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Method:</strong> GET</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Description:</strong> This is the endpoint used to get a card transaction using the transaction id or client order id</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Authorization:</strong> Bearer Token (This request is using Bearer Token from collection Passpoint Payment Service)</p>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4><CodeBlock language="bash">{paramsCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4><CodeBlock language="bash">{curlCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4><CodeBlock language="json">{responseCode()}</CodeBlock></div>
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

export default CardTransaction;
