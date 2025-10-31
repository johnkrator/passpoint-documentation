import {Smartphone, AlertCircle, CheckCircle, Shield} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionMomoRequestToPay = () => {
    const getEndpointCode = () => {
        return `POST https://dev.mypasspoint.com/paypass/momo-app/request-payment`;
    };

    const getRequestBodyCode = () => {
        return `{
  "amount": "100",
  "transactionCurrency": "KES",
  "accountName": "Tom Mcforth",
  "bankCode": "000000",
  "serviceCode": "airtel",
  "channel": "3",
  "msisdn": "254714748036",
  "clientReference": "12237546",
  "countryCode": "KE",
  "callbackUrl": "https://yourapp.com/webhooks/momo-collection"
}`;
    };

    const getCurlCode = () => {
        return `curl --location 'https://dev.mypasspoint.com/paypass/momo-app/request-payment' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-merchant-user' \\
--header 'x-merchant-id: YOUR_MERCHANT_ID' \\
--header 'Content-Type: application/json' \\
--user 'username:password' \\
--data '{
  "amount": "100",
  "transactionCurrency": "KES",
  "accountName": "Tom Mcforth",
  "bankCode": "000000",
  "serviceCode": "airtel",
  "channel": "3",
  "msisdn": "254714748036",
  "clientReference": "12237546",
  "countryCode": "KE"
}'`;
    };

    const getResponseCode = () => {
        return `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "mobile money payment request initiated successfully"
}`;
    };

    const getHeadersCode = () => {
        return `x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: YOUR_MERCHANT_ID
Content-Type: application/json`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Momo Request to
                        Pay</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Initiates a request to receive funds from a mobile money wallet account holder. This API allows
                        you to collect payments from customers using their mobile money accounts across various networks
                        and countries.
                    </p>

                    {/* Authentication Notice */}
                    <div
                        className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
                        <div className="flex">
                            <Shield className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                            <div>
                                <h3 className="text-base font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Authentication
                                    Required</h3>
                                <p className="text-yellow-700 dark:text-yellow-300">
                                    This endpoint uses Basic Authentication with username and password credentials.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main API Section */}
                    <section className="mb-16">
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Smartphone className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Request
                                        Payment</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="mb-6">
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            <strong>Endpoint:</strong> https://dev.mypasspoint.com/paypass/momo-app/request-payment
                                        </p>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            <strong>Method:</strong> POST
                                        </p>
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            <strong>Description:</strong> Initiates a request to receive funds from a
                                            momo wallet account holder
                                        </p>

                                        {/* Request Parameters Table */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request
                                                Parameters:</h4>
                                            <div className="overflow-x-auto">
                                                <table
                                                    className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                    <thead>
                                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Required</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Values</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">amount</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            transaction amount
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">e.g.,
                                                            "100"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">transactionCurrency</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            transaction currency
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">KES,
                                                            GHS, UGX, etc.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">channel</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            channel through which the request is sent
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">1-MOBILE_ANDROID,
                                                            2-MOBILE_IOS, 3-WEB, 4-THIRDPARTY, 5-USSD
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">msisdn</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            momo phone number
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">e.g.,
                                                            "254714748036"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">serviceCode</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            momo network service code. Obtain from Get Momo Collection
                                                            Network endpoint
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">e.g.,
                                                            "airtel", "mtn"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">bankCode</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Passpoint
                                                            default bank code
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">"000000"</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">clientReference</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Uniquely
                                                            generated reference used by the merchant to identify the
                                                            transaction
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">Must
                                                            be unique
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">countryCode</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            payer country code
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">e.g.,
                                                            "KE", "UG"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">accountName</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Yes</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            payer name
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">callbackUrl</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">No</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            callback URL where the final status of transaction will be
                                                            sent
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">-</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Response Parameters Table */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response
                                                Parameters:</h4>
                                            <div className="overflow-x-auto">
                                                <table
                                                    className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                    <thead>
                                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Parameter</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Type</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                        <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Values</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseCode</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            response code
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">00-successful,
                                                            01-pending, 02-failed
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseDescription</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            response description
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">responseMessage</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">string</td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">The
                                                            response message
                                                        </td>
                                                        <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">-</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Info Boxes */}
                                        <div
                                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6 shadow-sm">
                                            <div className="flex">
                                                <AlertCircle
                                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                                <div>
                                                    <h4 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">Service
                                                        Code Information</h4>
                                                    <p className="text-blue-700 dark:text-blue-300">
                                                        The service code identifies the mobile money network. Retrieve
                                                        available service codes using the <strong>Get Momo Collection
                                                        Network</strong> endpoint before making a payment request.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6 shadow-sm">
                                            <div className="flex">
                                                <CheckCircle
                                                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                                                <div>
                                                    <h4 className="text-base font-semibold text-green-800 dark:text-green-200 mb-2">Response
                                                        Codes</h4>
                                                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                                                        <li><strong>00:</strong> Transaction successful</li>
                                                        <li><strong>01:</strong> Transaction pending (customer needs to
                                                            approve)
                                                        </li>
                                                        <li><strong>02:</strong> Transaction failed</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock>{getHeadersCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{getCurlCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response
                                                (200 OK)</h4>
                                            <CodeBlock language="json">{getResponseCode()}</CodeBlock>
                                        </div>
                                    </div>

                                    {/* Channel Values Reference */}
                                    <div className="mt-8">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Channel
                                            Values Reference:</h4>
                                        <div className="overflow-x-auto">
                                            <table
                                                className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                                                <thead>
                                                <tr className="bg-gray-50 dark:bg-gray-800">
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Value</th>
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Channel
                                                        Type
                                                    </th>
                                                    <th className="text-left py-3 px-4 border border-gray-200 dark:border-gray-700 font-semibold">Description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">1</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">MOBILE_ANDROID</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Android
                                                        mobile application
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">2</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">MOBILE_IOS</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">iOS
                                                        mobile application
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">3</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">WEB</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Web
                                                        application or browser
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">4</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">THIRDPARTY</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">Third-party
                                                        integration
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700 font-mono text-xs">5</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">USSD</td>
                                                    <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">USSD
                                                        channel
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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

export default CollectionMomoRequestToPay;
