import {History} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CardTransaction = () => {
    const endpointCode = () => {
        return `GET https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/card-transaction/{transactionId}`;
    };

    const headersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]`;
    };

    const curlCode = () => {
        return `curl --location 'https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/card-transaction/txn_123456789' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--header 'Authorization: Bearer [your-access-token]'`;
    };

    const responseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Transaction retrieved successfully",
  "data": {
    "transactionId": "txn_123456789",
    "cardId": "card_123456789",
    "amount": 250.00,
    "currency": "USD",
    "merchantName": "Amazon.com",
    "transactionType": "PURCHASE",
    "status": "COMPLETED",
    "transactionDate": "2024-01-15T10:30:00Z"
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Card Transaction
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Retrieve detailed information about a specific card transaction.
                    </p>

                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API</h2>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <History className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Get Transaction
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Endpoint:</strong> https://payment-sandbox.mypasspoint.com/passpoint-payserv/v1/virtual-card/card-transaction/&#123;transactionId&#125;
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Method:</strong> GET
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                                                <strong>Description:</strong> Retrieve details of a specific card transaction
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{endpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                                <CodeBlock language="bash">{headersCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4>
                                                <CodeBlock language="bash">{curlCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
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

export default CardTransaction;
