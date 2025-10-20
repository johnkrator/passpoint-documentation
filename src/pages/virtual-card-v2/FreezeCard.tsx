import {Snowflake} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const FreezeCard = () => {
    const endpointCode = () => {
        return `POST https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/freeze-card`;
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
  "cardId": "card_123456789",
  "reason": "Suspicious activity detected"
}`;
    };

    const curlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/freeze-card' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer [your-access-token]' \\
--header 'Content-Type: application/json' \\
--data '{
  "cardId": "card_123456789",
  "reason": "Suspicious activity detected"
}'`;
    };

    const responseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Card frozen successfully",
  "data": {
    "cardId": "card_123456789",
    "status": "FROZEN",
    "frozenAt": "2024-01-15T14:30:00Z"
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Freeze Card
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Temporarily freeze a virtual card to prevent any transactions. The card can be unfrozen later.
                    </p>

                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API</h2>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Snowflake className="h-12 w-12 text-cyan-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Freeze Card
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/freeze-card
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Method:</strong> POST
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Description:</strong> Temporarily freeze a card to block all transactions
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

export default FreezeCard;