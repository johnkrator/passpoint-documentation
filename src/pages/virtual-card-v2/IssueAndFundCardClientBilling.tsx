import {CreditCard, DollarSign} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const IssueAndFundCardClientBilling = () => {
    const endpointCode = () => {
        return `POST https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/issue-and-fund-card-client-billing`;
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
  "customerId": "string",
  "currency": "USD",
  "cardType": "VIRTUAL",
  "nameOnCard": "John Doe",
  "initialFundingAmount": 1000.00,
  "billingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postalCode": "10001",
    "country": "US"
  }
}`;
    };

    const curlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/issue-and-fund-card-client-billing' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer [your-access-token]' \\
--header 'Content-Type: application/json' \\
--data '{
  "customerId": "string",
  "currency": "USD",
  "cardType": "VIRTUAL",
  "nameOnCard": "John Doe",
  "initialFundingAmount": 1000.00,
  "billingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postalCode": "10001",
    "country": "US"
  }
}'`;
    };

    const responseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Card issued and funded successfully",
  "data": {
    "cardId": "card_123456789",
    "cardNumber": "****1234",
    "expiryDate": "12/25",
    "cvv": "***",
    "status": "ACTIVE",
    "balance": 1000.00,
    "currency": "USD",
    "billingAddress": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "postalCode": "10001",
      "country": "US"
    }
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Issue And Fund Card (Client Billing Details)
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        This endpoint allows you to issue a new virtual card with custom billing details
                        and fund it with an initial balance in a single operation.
                    </p>

                    {/* API Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API</h2>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <div className="relative">
                                            <CreditCard className="h-12 w-12 text-blue-500 flex-shrink-0"/>
                                            <DollarSign className="h-6 w-6 text-green-500 absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full"/>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Issue & Fund Card
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/issue-and-fund-card-client-billing
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Description:</strong> Issue a new virtual card with client billing
                                                details and fund it with an initial amount
                                            </p>
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
                                                    Request Body
                                                </h4>
                                                <CodeBlock language="json">{requestBodyCode()}</CodeBlock>
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

export default IssueAndFundCardClientBilling;
