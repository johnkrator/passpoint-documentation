import {Webhook} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const PayoutFundTransferCallbackSample = () => {
    const getCallbackEndpoint = () => {
        return `POST https://merchant_callback_url`;
    };

    const getJavaSignatureExample = () => {
        return `HmacUtils hmac = HmacUtils("HmacSHA512", callback_secret)

String signature = hmac.hmacHex(callback_data)`;
    };

    const getCallbackRequestBody = () => {
        return `{
    "srcAccountName": "Seyi ",
    "destAccountNumber": "1000005661",
    "clientReference": "090565631230185003649552088420",
    "srcBank": "Passpoint",
    "srcAccountNumber": "90010000325",
    "eventType": "FUNDS_TRANSFER",
    "transactionId": "dd7f0e1c-c382-4015-8b47-315a1a1fa4d2",
    "destAccountName": "UCHEGBULEM KELECHI ",
    "paymentRef": "090551231230185003649552088420",
    "charges": 53.75,
    "destBank": "Sparkle",
    "merchantId": "90676942-e221-4f45-94cf-0c7eff979c11",
    "transactionAmount": 50000,
    "narration": "7787999898",
    "currency": "NGN", 
    "status": "successful",
    "code": "00",
    "message": "Approved or completed successfully"
}`;
    };

    const getCallbackCurlExample = () => {
        return `curl --location 'https://merchant_callback_url' \\
--header 'signature;' \\
--data '{
    "srcAccountName": "Seyi ",
    "destAccountNumber": "1000005661",
    "clientReference": "090565631230185003649552088420",
    "srcBank": "Passpoint",
    "srcAccountNumber": "90010000325",
    "eventType": "FUNDS_TRANSFER",
    "transactionId": "dd7f0e1c-c382-4015-8b47-315a1a1fa4d2",
    "destAccountName": "UCHEGBULEM KELECHI ",
    "paymentRef": "090551231230185003649552088420",
    "charges": 53.75,
    "destBank": "Sparkle",
    "merchantId": "90676942-e221-4f45-94cf-0c7eff979c11",
    "transactionAmount": 50000,
    "narration": "7787999898",
    "currency": "NGN", 
    "status": "successful",
    "code": "00",
    "message": "Approved or completed successfully"
}'`;
    };

    const getCallbackResponse = () => {
        return `{
  "code": "00",
  "status": "successful",
  "message": "callback received successfully"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Funds Transfer
                        Callback Sample</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        This endpoint receives callback notifications for fund transfer transactions. The callback is
                        sent to your configured merchant callback URL.
                    </p>

                    {/* Signature Information */}
                    <div
                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Signature
                            Verification</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-100 mb-4">
                            The header parameter <code
                            className="bg-blue-100 dark:bg-blue-900/40 px-1.5 py-0.5 rounded font-mono">signature</code> is
                            sha512(callback_data) using the callback secret as the secret key.
                        </p>
                        <p className="text-sm text-blue-900 dark:text-blue-100 mb-3">
                            <strong>Example Java snippet:</strong>
                        </p>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <CodeBlock>{getJavaSignatureExample()}</CodeBlock>
                        </div>
                    </div>

                    {/* Funds Transfer Callback Sample */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Callback
                            Details</h2>

                        {/* API Endpoint */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Webhook className="h-12 w-12 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">POST
                                        Request</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getCallbackEndpoint()}</CodeBlock>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Method</h4>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">POST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Headers */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Headers</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Header</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">signature</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">SHA512
                                                hash of callback data using callback secret key
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Request Body */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request Body</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">raw (json)</p>
                                <CodeBlock>{getCallbackRequestBody()}</CodeBlock>
                            </div>
                        </div>

                        {/* Request Body Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Callback Payload
                                Parameters</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">srcAccountName</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                account name
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">srcAccountNumber</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                account number
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">srcBank</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Source
                                                bank name
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">destAccountName</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                account name
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">destAccountNumber</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                account number
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">destBank</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Destination
                                                bank name
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">transactionId</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unique
                                                transaction identifier
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">paymentRef</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Payment
                                                reference number
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">clientReference</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Client
                                                reference number
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">merchantId</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Merchant
                                                identifier
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">transactionAmount</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                amount
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">charges</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                charges/fees
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">currency</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                currency code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">narration</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                narration/description
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">eventType</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Event
                                                type (FUNDS_TRANSFER)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">status</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Transaction
                                                status (successful, failed, etc.)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">code</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Response
                                                code
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">message</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Response
                                                message
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Example Request */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example
                                Request</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <CodeBlock>{getCallbackCurlExample()}</CodeBlock>
                            </div>
                        </div>

                        {/* Expected Response */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expected
                                Response</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-semibold">200 OK</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Your callback endpoint
                                    should return the following response to acknowledge receipt:</p>
                                <CodeBlock>{getCallbackResponse()}</CodeBlock>
                            </div>
                        </div>

                        {/* Response Parameters */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response
                                Parameters</h3>
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">code</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Response
                                                code (00 for success)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">status</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Status of
                                                the callback receipt
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">message</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Acknowledgment
                                                message
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Important
                                Notes</h3>
                            <div
                                className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                                <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-amber-100">
                                    <li>Always verify the <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">signature</code> header
                                        to ensure the callback is from a trusted source
                                    </li>
                                    <li>The signature is calculated using SHA512 HMAC with your callback secret key</li>
                                    <li>Your callback endpoint must return a 200 OK response to acknowledge receipt</li>
                                    <li>The <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">eventType</code> field
                                        will always be "FUNDS_TRANSFER" for fund transfer callbacks
                                    </li>
                                    <li>Store the <code
                                        className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">transactionId</code> for
                                        transaction reconciliation
                                    </li>
                                    <li>Implement idempotency to handle duplicate callbacks safely</li>
                                    <li>Ensure your callback URL is publicly accessible and can handle POST requests
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Security Best Practices */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Security Best
                                Practices</h3>
                            <div
                                className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                                <ul className="list-disc list-inside space-y-2 text-sm text-purple-900 dark:text-purple-100">
                                    <li><strong>Signature Verification:</strong> Always verify the signature before
                                        processing the callback
                                    </li>
                                    <li><strong>HTTPS Only:</strong> Use HTTPS for your callback URL to ensure secure
                                        communication
                                    </li>
                                    <li><strong>Secret Key Security:</strong> Keep your callback secret key confidential
                                        and rotate it periodically
                                    </li>
                                    <li><strong>Logging:</strong> Log all callback attempts for audit and debugging
                                        purposes
                                    </li>
                                    <li><strong>Error Handling:</strong> Implement robust error handling to manage
                                        failed callback processing
                                    </li>
                                    <li><strong>Rate Limiting:</strong> Consider implementing rate limiting to prevent
                                        abuse
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PayoutFundTransferCallbackSample;