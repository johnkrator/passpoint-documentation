import {FileText} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CardStatement = () => {
    const endpointCode = () => `POST https://dev.mypasspoint.com/cardapp/get-card-statement`;
    const headersCode = () => `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: aeed8e61-db43-4f8a-b792-36e5d2c3dd40
Authorization: Bearer [your-access-token]
Content-Type: application/json`;
    const requestBodyCode = () => `{
    "startDate":"2024-04-20",
    "endDate":"2024-12-31",
    "cardId":"b9c336d6-ec8d-4153-bd36-433b079461ee",
    "pageNumber": 1,
    "pageSize": 20
}`;
    const curlCode = () => `curl --location 'https://dev.mypasspoint.com/cardapp/get-card-statement' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: pass your merchant id' \\
--data '{
    "startDate":"2024-04-20",
    "endDate":"2024-12-31",
    "cardId":"c222d8a1-6aea-4938-b948-5ed8263daa40",
    "transMode":"debit|credit",
    "pageNumber": 1,
    "pageSize": 20
}'`;
    const responseCode = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "4 statement items found.",
  "totalCount": 4,
  "pageCount": 1,
  "pageSize": 20,
  "currentPage": 1,
  "data": [
    {
      "cbaReference": "M8",
      "cardId": "c222d8a1-6aea-4938-b948-5ed8263daa40",
      "currency": "USD",
      "openingBalance": "123.00",
      "amount": 175,
      "runningBalance": "298.00",
      "narration": "Card Funding of 175 - Unblocked and Debited Successfully - Funding IFO - b692fbef-8ed3-4046-9159-34191351717d",
      "transactionType": "FundCard",
      "transactionDate": "2024-04-27 07:51:02",
      "credit": true
    },
    {
      "cbaReference": "S9",
      "cardId": "c222d8a1-6aea-4938-b948-5ed8263daa40",
      "currency": "USD",
      "openingBalance": "123.50",
      "amount": 0.5,
      "runningBalance": "123.00",
      "narration": "Charge for Debit Card of 160 - Withdrawal IFO - 63be3c63-a746-4f09-9e32-d98e347afbef",
      "transactionType": "DebitCardCharge",
      "transactionDate": "2024-04-27 07:53:32",
      "debit": true
    }
  ]
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">Get Card Statement</h1>
                    <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        This endpoint fetches card statements.
                    </p>
                    <section className="mb-12 sm:mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-brand-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Card Statement</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 break-words">
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Endpoint:</strong> https://dev.mypasspoint.com/cardapp/get-card-statement</p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Method:</strong> POST</p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Description:</strong> This endpoint fetches card statements</p>
                                            <p className="text-gray-700 dark:text-gray-300 md:text-lg text-sm mb-3 sm:mb-4 leading-relaxed"><strong>Authorization:</strong> Bearer Token (This request is using Bearer Token from collection Passpoint Payment Service)</p>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4><CodeBlock language="json">{requestBodyCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4><CodeBlock language="bash">{curlCode()}</CodeBlock></div>
                                            <div><h4 className="md:text-lg text-base font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4><CodeBlock language="json">{responseCode()}</CodeBlock></div>
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

export default CardStatement;
