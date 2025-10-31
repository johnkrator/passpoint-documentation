import {List} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionListVirtualAccountsNgnPaginated = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/ft-app/acct-list`;

    const getRequestBody = () => `{
    "startDate": "2024-06-04",
    "endDate": "2024-06-04",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 5
}`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/acct-list' \\
--header 'x-channel-id: 3' \\
--header 'x-channel-code: legacy-api-user' \\
--header 'x-merchant-id: 8b6ea099-1d9e-4e42-94ef-2ae4dac503f2' \\
--data '{
    "startDate": "2024-06-04",
    "endDate": "2024-06-04",
    "currency": "NGN",
    "pageNumber": 1,
    "pageSize": 5
}'`;

    const getResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "5 virtual account(s) found.",
  "totalCount": 28,
  "pageCount": 6,
  "pageSize": 5,
  "currentPage": 1,
  "data": [
    {
      "accountName": "PASSPOINT (divine-will ekpo)",
      "accountNumber": "9637681398",
      "bankName": "Providus Bank",
      "bankCode": "000023",
      "currency": "NGN",
      "merchantId": "8b6ea099-1d9e-4e42-94ef-2ae4dac503f2",
      "transactionReference": "c9c090b2-cb3b-4fbe-ba3f-c0055255c772",
      "dateCreated": "2024-06-04T09:10:21.000+00:00",
      "processed": false,
      "dynamic": false
    },
    {
      "accountName": "PASSPOINT (michael evarist-ch)",
      "accountNumber": "9623652344",
      "bankName": "Providus Bank",
      "bankCode": "000023",
      "currency": "NGN",
      "merchantId": "8b6ea099-1d9e-4e42-94ef-2ae4dac503f2",
      "transactionReference": "3718c80d-ab59-4a08-a96c-d133a8457c22",
      "dateCreated": "2024-06-04T09:05:06.000+00:00",
      "processed": false,
      "dynamic": false
    },
    {
      "accountName": "PASSPOINT (michael evarist-ch)",
      "accountNumber": "9622645004",
      "bankName": "Providus Bank",
      "bankCode": "000023",
      "currency": "NGN",
      "merchantId": "8b6ea099-1d9e-4e42-94ef-2ae4dac503f2",
      "transactionReference": "7e79c4e2-d071-43d7-8028-69a4cc8b8061",
      "dateCreated": "2024-06-04T08:35:53.000+00:00",
      "processed": false,
      "dynamic": false
    },
    {
      "accountName": "PASSPOINT (michael evarist-ch)",
      "accountNumber": "9631619348",
      "bankName": "Providus Bank",
      "bankCode": "000023",
      "currency": "NGN",
      "merchantId": "8b6ea099-1d9e-4e42-94ef-2ae4dac503f2",
      "transactionReference": "8bd33431-5df3-4236-ad44-73e30411bed2",
      "dateCreated": "2024-06-04T08:35:34.000+00:00",
      "processed": false,
      "dynamic": false
    },
    {
      "accountName": "PASSPOINT (michael evarist-ch)",
      "accountNumber": "9619679445",
      "bankName": "Providus Bank",
      "bankCode": "000023",
      "currency": "NGN",
      "merchantId": "8b6ea099-1d9e-4e42-94ef-2ae4dac503f2",
      "transactionReference": "1d62137b-bf59-4d3d-a5be-ca0df46b6cbb",
      "dateCreated": "2024-06-04T08:35:22.000+00:00",
      "processed": false,
      "dynamic": false
    }
  ]
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">List Virtual
                        Accounts - NGN - Paginated</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Retrieve a paginated list of NGN virtual accounts created within a specified date range.
                        Supports filtering by currency and custom page size.
                    </p>

                    {/* List Virtual Accounts */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Endpoint
                            Details</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <List className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">List
                                        Accounts</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        Retrieve a paginated list of virtual accounts filtered by date range and
                                        currency.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Authorization */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Authorization</h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">Type:</span> Bearer Token
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                    Using Bearer Token from collection Passpoint Payment Service
                                                </p>
                                            </div>
                                        </div>

                                        {/* Headers */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Headers</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Header</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">pass
                                                            your merchant id
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getRequestBody()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock language="bash">{getCurlRequest()}</CodeBlock>
                                        </div>

                                        {/* Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Example Response
                                                </span>
                                            </h4>
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

export default CollectionListVirtualAccountsNgnPaginated;