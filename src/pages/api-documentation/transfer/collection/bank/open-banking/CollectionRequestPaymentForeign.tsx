import {CreditCard} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionRequestPaymentForeign = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/foreign-ft-app/request-payment`;

    const getHeaders = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: {your_merchant_id}`;

    const getRequestBody = () => `{
  "amount": "5",
  "transactionCurrency": "GBP",
  "narration": "test gbp collection",
  "email": "customeremail@yahoo.com",
  "phone": "08034954100",
  "channel": "4",
  "redirectUrl": "https://webhook.site/983b3ed0-6090-4f07-9159-fed826b507c5",
  "clientReference": "202501271220"
}`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/request-payment' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer {your_token}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "amount": "1000",
  "transactionCurrency": "GBP",
  "narration": "test eur collection",
  "email": "customeremail@yahoo.com",
  "phone": "08034954100",
  "channel": "4",
  "redirectUrl": "https://webhook.site/7a772620-c37a-49c9-9425-9b8e442e1ebf",
  "clientReference": "202501271214"
}'`;

    const getResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "payment is pending authorization",
  "data": {
    "url": "https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/payment-simulator?token=4abf92d1d70eb0745516c4d06b99bb4842f79fa8c739192f082f7f61aa7d00cf7f49c07970b5a7922f16188f8f4728de",
    "transactionId": "26b7ae4c-724f-49d2-9088-3e34f5ddcf96",
    "message": "proceed to process payment",
    "status": "pending"
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Request Payment - Foreign
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Initiate a foreign payment request via Open Banking. This endpoint creates a payment session and
                        returns
                        a payment URL for the customer to complete the transaction through their bank.
                    </p>

                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CreditCard className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Foreign Payment
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Create a payment request for foreign currency collections. The customer will
                                        select their bank
                                        during the checkout flow on the provided payment URL.
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
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock>{getHeaders()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getRequestBody()}</CodeBlock>
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

export default CollectionRequestPaymentForeign;