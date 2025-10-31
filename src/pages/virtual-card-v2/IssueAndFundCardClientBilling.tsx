import {CreditCard} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const IssueAndFundCardClientBilling = () => {
    const endpointCode = () => {
        return `POST https://dev.mypasspoint.com/cardapp/issue-and-fund`;
    };

    const headersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer <token>
Content-Type: application/json`;
    };

    const requestBodyCode = () => {
        return `{
    "firstName": "John",
    "lastName": "Deep",
    "email": "teli2x@yahoo.ca",
    "phoneNumber": "08038276746",
    "currency": "USD",
    "scheme": "2",
    "cardType": "0",
    "orderId": "5a927e39-9f93-47bc-b7f8-0173110dca41",
    "useBillingDetails": "client",
    "address": "9 milton drive",
    "city": "Beverly hills",
    "state": "California",
    "country": "US",
    "zipCode": "19901",
    "amount": "10",
    "callbackUrl": "string",
    "is3d": "no",
    "tokenization": "no",
    "useCardAsChargeBearer" : "no"
}`;
    };

    const curlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/cardapp/issue-and-fund' \\
--data-raw '{
    "firstName": "John",
    "lastName": "Deep",
    "email": "teli2x@yahoo.ca",
    "phoneNumber": "08038276746",
    "currency": "USD",
    "scheme": "1",
    "cardType": "0",
    "orderId": "1c4cafe6-a183-41d8-a538-8a37b7815511",
    "useBillingDetails": "client",
    "address": "9 milton drive",
    "city": "Beverly hills",
    "state": "California",
    "country": "US",
    "zipCode": "19901",
    "amount": "10",
    "callbackUrl": "string",
    "is3d": "no",
    "tokenization": "no",
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
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">
                        Issue And Fund Card - Client Billing Details
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This is the endpoint for creating a virtual card for the customer. A bearer token is required in the Authorization header which will be used to retrieve the customer's details and create the virtual card. colour = the display colour of the card on your interface e.g mobile app etc. scheme = the card scheme e.g. 1 - Mastercard, 2 - Visa
                    </p>

                    {/* API Section */}
                    <section className="mb-12 sm:mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>

                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <CreditCard className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Issue & Fund Card
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 break-words">
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://dev.mypasspoint.com/cardapp/issue-and-fund
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed">
                                                <strong>Description:</strong> This is the endpoint for creating a virtual card for the customer
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed">
                                                <strong>Authorization:</strong> Bearer Token
                                            </p>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4">
                                            <div>
                                                <h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                                    Endpoint
                                                </h4>
                                                <CodeBlock>{endpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                                    Headers
                                                </h4>
                                                <CodeBlock language="bash">{headersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                                    Request Body
                                                </h4>
                                                <CodeBlock language="json">{requestBodyCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                                    cURL Example
                                                </h4>
                                                <CodeBlock language="bash">{curlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">
                                                    Response (200 OK)
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

export default IssueAndFundCardClientBilling;
