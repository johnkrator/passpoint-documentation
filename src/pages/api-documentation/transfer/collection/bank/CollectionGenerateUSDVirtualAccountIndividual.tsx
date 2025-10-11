import {User} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionGenerateUsdVirtualAccountIndividual = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/ft-app/generate-virtual-account?type=individual`;

    const getRequestBody = () => `{
    "accountName": "Joe Biden",
    "email": "joe@yahoo.com",
    "phoneNumber": "08116070111",
    "currency": "USD",
    "otherInfo": {
        "address": "string",
        "idNumber": "string",
        "dateOfBirth": "yyyy-MM-dd"
    }
}`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/generate-virtual-account?type=individual' \\
--header 'x-channel-id: 3' \\
--header 'x-channel-code: legacy-api-user' \\
--header 'x-merchant-id: 80fddf35-bfce-4434-a167-3b57f52aa3f5' \\
--data-raw '{
    "accountName": "Joe Biden",
    "email": "joe@yahoo.com",
    "phoneNumber": "08116070111",
    "currency": "USD",
    "otherInfo": {
        "address": "string",
        "idNumber": "string",
        "dateOfBirth": "yyyy-MM-dd"
    }
}'`;

    const getResponse = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "virtual account has been created successfully",
  "data": {
    "accountName": "John Benson",
    "accountNumber": "0185487837",
    "bankName": "CHASE BANK",
    "bankCode": "000000",
    "transactionReference": "3021072f-2f7c-418a-9c16-326d1fdd666c",
    "processed": false,
    "dynamic": false,
    "active": false,
    "otherInfo": {
      "routingNumber": "021000021",
      "ach": {
        "routingNumber": "021000021",
        "accountNumber": "0185487837"
      },
      "rtp": {
        "routingNumber": "021000021",
        "accountNumber": "0185487837"
      },
      "wire": {
        "routingNumber": "021000021",
        "accountNumber": "0185487837"
      }
    }
  }
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Generate USD
                        Virtual Account - Individual</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        This endpoint generates a USD virtual account for an individual. Generated accounts become
                        active after 24 hours.
                    </p>

                    {/* Description Section */}
                    <section className="mb-12">
                        <div
                            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">Description</h3>
                            <p className="text-blue-800 dark:text-blue-400 text-sm">
                                This endpoint generates a USD virtual account for an individual
                            </p>
                        </div>
                    </section>

                    {/* Request Parameters */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Request
                            Parameters</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead className="bg-gray-50 dark:bg-gray-900/50">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Required</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">accountName</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the name to be assigned
                                        to the virtual account
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">currency</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the currency of the
                                        account
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">email</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the email of the account
                                        holder
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">phone</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the phone number of the
                                        account holder
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">otherInfo</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Object</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">this contains other kyc
                                        information about the account holder
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">otherInfo.address</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the address of the
                                        individual account holder
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">otherInfo.idNumber</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the id number of the
                                        individual account holder. support id types are international passport, drivers
                                        license
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">otherInfo.dateOfBirth</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the date of birth of the
                                        individual account holder. Should be in the format yyyy-MM-dd
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Response Parameters */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Response
                            Parameters</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead className="bg-gray-50 dark:bg-gray-900/50">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Mandatory</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">responseCode</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the response code</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">responseDescription</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the response
                                        description
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">responseMessage</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">mandatory</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the response message</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Object</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the response details of
                                        the generated account. This is present if responseCode = 00
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.accountNumber</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the generated account
                                        number
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.accountName</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the account holder name
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.bankName</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the bank name</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.bankCode</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the bank code. defaults
                                        to 000000
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.active</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">boolean</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">this indicates if the
                                        account is active or not. generated accounts become active after 24 hours
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.otherInfo</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Object</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Other details of the
                                        generated account
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.otherInfo.routingNumber</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">the routing number</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.otherInfo.ach</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Object</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">These are account details
                                        specific to ach. This is expected if they are different from the general account
                                        number and routing number mentioned above
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.otherInfo.rtp</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Object</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">These are account details
                                        specific to rtp. This is expected if they are different from the general account
                                        number and routing number mentioned above
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">data.otherInfo.wire</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Object</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">conditional</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">These are account details
                                        specific to wire. This is expected if they are different from the general
                                        account number and routing number mentioned above
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Generate USD Virtual Account */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Endpoint
                            Details</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <User className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Individual
                                        Account</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Generate a USD virtual account for an individual with KYC information.
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
                                                    <span className="font-semibold">Type:</span> Basic Auth
                                                </p>
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        <span
                                                            className="font-semibold">Username:</span> &lt;username&gt;
                                                    </p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        <span
                                                            className="font-semibold">Password:</span> &lt;password&gt;
                                                    </p>
                                                </div>
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
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">3</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">legacy-api-user</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">80fddf35-bfce-4434-a167-3b57f52aa3f5</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Query Parameters */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Query
                                                Parameters</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">type</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">individual</td>
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

export default CollectionGenerateUsdVirtualAccountIndividual;

