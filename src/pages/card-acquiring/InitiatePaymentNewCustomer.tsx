import {Send} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const InitiatePaymentNewCustomer = () => {
    const endpointCode = () => `POST https://dev.mypasspoint.com/paypass/acq-app/initiate-payment`;
    const headersCode = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    const requestBodyCode = () => `{
    "clientReference": "111111",
    "amount": "1",
    "narration": "pilot card payment 8",
    "transactionCurrency": "USD",
    "existingCustomer": false,
    "redirectUrl": "https://webhook.site/49e8c983-501b-4110-ac02-a6fd9566e345",
    "billingDetails": {
        "countryCode": "US",
        "state": "cardholder state",
        "city": "cardhodler city",
        "address": "cardholder address",
        "zipCode": "11111"
    },
    "customerDetails": {
        "email": "john@doe.com",
        "phone": "08011123456",
        "firstName": "John",
        "lastName": "Doe"
    },
    "paymentDetails": {
        "cardNumber": "4104290687925390",
        "cardHolderName": "John Doe",
        "securityCode": "123",
        "expirationMonth": "12",
        "expirationYear": "31"
    }
}`;
    const curlCode = () => `curl --location 'https://dev.mypasspoint.com/paypass/acq-app/initiate-payment' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data-raw '{
    "clientReference": "111111",
    "amount": "1",
    "narration": "pilot card payment 8",
    "transactionCurrency": "USD",
    "existingCustomer": false,
    "redirectUrl": "https://webhook.site/49e8c983-501b-4110-ac02-a6fd9566e345",
    "billingDetails": {
        "countryCode": "US",
        "state": "cardholder state",
        "city": "cardhodler city",
        "address": "cardholder address",
        "zipCode": "11111"
    },
    "customerDetails": {
        "email": "john@doe.com",
        "phone": "08011123456",
        "firstName": "John",
        "lastName": "Doe"
    },
    "paymentDetails": {
        "cardNumber": "4104290687925390",
        "cardHolderName": "John Doe",
        "securityCode": "123",
        "expirationMonth": "12",
        "expirationYear": "31"
    }
}'`;
    const responseCode = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "payment is pending 3ds challenge",
  "data": {
    "url": "string",
    "transactionId": "26b7ae4c-724f-49d2-9088-3e34f5ddcf96",
    "message": "proceed to challenge page",
    "status": "pending"
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">Initiate Payment - New Customer</h1>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This endpoint is used to initiate a payment for a new customer. A bearer token is required in the Authorization header. The request includes customer details, billing details, and payment card information.
                    </p>
                    <section className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Send className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Initiate Payment (New Customer)</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 break-words">
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Endpoint:</strong> https://dev.mypasspoint.com/paypass/acq-app/initiate-payment</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Method:</strong> POST</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Description:</strong> This endpoint is used to initiate a payment for a new customer</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Authorization:</strong> Bearer Token (This request is using Bearer Token from collection Passpoint Payment Service)</p>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4><CodeBlock language="json">{requestBodyCode()}</CodeBlock></div>
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

export default InitiatePaymentNewCustomer;
