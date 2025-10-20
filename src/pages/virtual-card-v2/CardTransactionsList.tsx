import {FileText} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CardTransactionsList = () => {
    const endpointCode = () => `POST https://dev.mypasspoint.com/cardapp/card-trans-list`;
    const headersCode = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: pass your merchant id
Authorization: Bearer [your-access-token]
Content-Type: application/json`;
    const requestBodyCode = () => `{
    "pageNumber": 1,
    "startDate": "2024-04-02",
    "endDate": "2024-05-02",
    "pageSize": 10,
    "id": "aa806cff-73b3-4fae-ae21-b8c38ade22ca"
}`;
    const curlCode = () => `curl --location 'https://dev.mypasspoint.com/cardapp/card-trans-list' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate":"2024-04-25",
    "endDate":"2024-04-30",
    "id":"c222d8a1-6aea-4938-b948-5ed8263daa40",
    "pageNumber": "1",
    "pageSize":"20"
}'`;
    const responseCode = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "4 virtual card transaction(s) found.",
  "totalCount": 4,
  "pageCount": 1,
  "pageSize": 10,
  "currentPage": 1,
  "data": [
    {
      "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
      "merchantName": "Chinedu Ojiteli",
      "walletId": "chinedu37dz@gmail.com",
      "transactionId": "df2b3b47-b02e-4f3a-8e7f-16c22af572ad",
      "amount": 4,
      "transactionCharge": 0.5,
      "currency": "USD",
      "cardId": "a1b46c40-efbc-4062-b896-9d67d88b7d62",
      "clientOrderId": "d639c5d7-29df-41da-ade4-20cebaee7c01",
      "cardAcceptorName": "Passpoint Limited",
      "cardAcceptorCity": "Dover County",
      "cardAcceptorState": "Delaware",
      "cardAcceptorCountry": "US",
      "authorizationMessage": "Approved or completed successfully",
      "authorizationStatus": "APPROVED",
      "expired": false,
      "transType": "WITHDRAWAL",
      "transMode": "DEBIT",
      "narration": "Card Withdrawal : USD 4/Charge/USD 0.50/OrderId/d639c5d7-29df-41da-ade4-20cebaee7c01/CardId/a1b46c40-efbc-4062-b896-9d67d88b7d62",
      "eligibleForCrossborder": false,
      "version": 3,
      "dateCreated": "2025-05-22 06:44:28",
      "linkingReference": "M3681"
    }
  ]
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Get Card Transactions List</h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        This is the endpoint used to retrieve all transactions attempted on a card within a specified date range. The transactions can be retrieved per cardholder or per card (by passing the card id in the id field). A bearer token is required in the Authorization header.
                    </p>
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API</h2>
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <FileText className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Transactions List</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <div className="mb-6">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed"><strong>Endpoint:</strong> https://dev.mypasspoint.com/cardapp/card-trans-list</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed"><strong>Method:</strong> POST</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed"><strong>Description:</strong> This is the endpoint used to retrieve all transactions attempted on a card within a specified date range</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed"><strong>Authorization:</strong> Bearer Token (This request is using Bearer Token from collection Passpoint Payment Service)</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div><h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                            <div><h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                            <div><h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4><CodeBlock language="json">{requestBodyCode()}</CodeBlock></div>
                                            <div><h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4><CodeBlock language="bash">{curlCode()}</CodeBlock></div>
                                            <div><h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4><CodeBlock language="json">{responseCode()}</CodeBlock></div>
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

export default CardTransactionsList;
