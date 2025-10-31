import {CheckCircle, Shield} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const RealtimeAuthorizationDecisionMaker = () => {
    const endpointCode = () => `POST https://merchant_url`;
    const headersCode = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]
Content-Type: application/json`;
    const requestBodyCode = () => `{
    "approvalCode": "string",
    "cardAcceptorCountry": "string",
    "cardAcceptorName": "string",
    "cardId": "string",
    "clientName": "string",
    "maskedCardPan": "string",
    "mcc": "string",
    "rrn": "string",
    "stan": "string",
    "settlementCurrency": "string",
    "terminalId": "string",
    "transactionCurrency": "string",
    "transactionAmount": "decimal",
    "charges": "decimal",
    "debitAmount": "decimal",
    "settlementAmount": "decimal",
    "crossborder": "boolean",
    "crossborderCharge": "decimal",
    "crossborderChargeBearer": "string"
}`;
    const curlCode = () => `curl --location 'https://merchant_url' \\
--header 'Content-Type: application/json' \\
--data '{
    "mcc": "string",
    "cardId": "string",
    "terminalId": "string",
    "cardAcceptorCountry": "string",
    "cardAcceptorName": "string",
    "transactionCurrency": "string",
    "transactionAmount": "number",
    "settlementAmount": "number",
    "settlementCurrency": "string",
    "rrn": "string",
    "stan": "string",
    "maskedCardPan": "string",
    "clientName": "string",
    "approvalCode": "string"
}'`;
    const responseCode = () => `{
  "responseCode": "approve|decline",
  "reasonCode": "approve|decline"
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">Realtime Authorization Decision Maker</h1>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This endpoint fetches a single card statement ledger by transaction id. This is a merchant-hosted endpoint that receives authorization requests from Passpoint.
                    </p>
                    <section className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>
                        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <div className="relative">
                                        <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 flex-shrink-0"/>
                                        <CheckCircle className="h-6 w-6 text-blue-500 absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full"/>
                                    </div>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Authorization Decision</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                    <div className="mb-4 sm:mb-6 break-words">
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Endpoint:</strong> https://merchant_url</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Method:</strong> POST</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Description:</strong> This endpoint fetches a single card statement ledger by transaction id</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Authorization:</strong> Bearer Token (using Bearer Token from collection Passpoint Payment Service)</p>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                        <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                        <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4><CodeBlock language="json">{requestBodyCode()}</CodeBlock></div>
                                        <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4><CodeBlock language="bash">{curlCode()}</CodeBlock></div>
                                        <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4><CodeBlock language="json">{responseCode()}</CodeBlock></div>
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

export default RealtimeAuthorizationDecisionMaker;