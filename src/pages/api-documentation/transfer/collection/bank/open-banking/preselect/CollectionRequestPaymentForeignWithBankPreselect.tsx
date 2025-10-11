import {Send} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionRequestPaymentForeignWithBankPreselect = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/foreign-ft-app/request-payment`;

    const getHeaders = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: {your_merchant_id}`;

    const getRequestBody = () => `{
  "amount": "100",
  "transactionCurrency": "GBP",
  "narration": "test gbp collection",
  "email": "customeremail@yahoo.com",
  "phone": "08034954100",
  "channel": "4",
  "redirectUrl": "https://webhook.site/fcae55cd-54e1-4d34-9780-4e247c0abf1c",
  "clientReference": "58d1ac16-fe79-445b-bc15-2edc823e33c3",
  "paymentInfo": {
    "bankId": "gb-token-natwestsandbox"
  }
}`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/foreign-ft-app/request-payment' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer {your_token}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "amount": "100",
  "transactionCurrency": "GBP",
  "narration": "test gbp collection",
  "email": "customeremail@yahoo.com",
  "phone": "08034954100",
  "channel": "4",
  "redirectUrl": "https://webhook.site/fcae55cd-54e1-4d34-9780-4e247c0abf1c",
  "clientReference": "46d2f6da-da00-4866-b75f-c986c8a2502c",
  "paymentInfo": {
    "bankId": "gb-token-natwestsandbox"
  }
}'`;

    const getResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "payment is pending authorization",
  "data": {
    "url": "https://dev.themansa.net/paypass/webpay?token=05ffcbe877cf397866c3981487970e82e8593d3f7791f6d76eb9262576e13cf8c20f2b155c3877778184a6c002cbcd80",
    "transactionId": "84ccea27-3b5f-46e0-967d-20426ed2945f",
    "message": "please launch the link and proceed to process payment",
    "status": "new"
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Request Payment - Foreign (Bank Pre-select)
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Initiate a foreign payment request with bank preselection. This endpoint allows you to create a
                        payment
                        with a specific bank already selected, streamlining the customer checkout experience.
                    </p>

                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Send className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Bank Preselect Payment
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Create a payment request with a pre-selected bank for faster processing. Include
                                        the bank ID
                                        in the paymentInfo object to skip bank selection during checkout.
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

export default CollectionRequestPaymentForeignWithBankPreselect;