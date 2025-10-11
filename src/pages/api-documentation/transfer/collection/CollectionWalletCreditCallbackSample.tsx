import {Webhook} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionWalletCreditCallbackSample = () => {
    const getEndpoint = () => `POST https://merchant_callback_url`;

    const getRequestBody = () => `{
    "srcAccountName": "OLANIYAN CAXTON-MARTINS",
    "destAccountNumber": "9977657822",
    "srcBank": "UNITED BANK FOR AFRICA",
    "srcAccountNumber": "2025143050",
    "eventType": "VIRTUAL_ACCOUNT_CREDIT",
    "transactionId": "000004260111545233412345132327",
    "destAccountName": "MERCHANT(Kelechi Motors)",
    "charges": 100,
    "destBank": "Providus Bank",
    "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
    "narration": "transfer",
    "transactionAmount": 10000000,
    "currency": "NGN"
}`;

    const getCurlRequest = () => `curl --location 'https://merchant_callback_url' \\
--header 'signature;' \\
--data '{
    "srcAccountName": "OLANIYAN CAXTON-MARTINS",
    "destAccountNumber": "9977657822",
    "srcBank": "UNITED BANK FOR AFRICA",
    "srcAccountNumber": "2025143050",
    "eventType": "VIRTUAL_ACCOUNT_CREDIT",
    "transactionId": "000004260111545233412345132327",
    "destAccountName": "MERCHANT(Kelechi Motors)",
    "charges": 100,
    "destBank": "Providus Bank",
    "merchantId": "e0b157a2-9245-40b9-8117-d25cadfdcfaa",
    "narration": "transfer",
    "transactionAmount": 10000000,
    "currency": "NGN"
}
'`;

    const getResponse = () => `{
  "code": "00",
  "status": "successful",
  "message": "callback received successfully"
}`;

    const getJavaSnippet = () => `HmacUtils hmac = new HmacUtils("HmacSHA512", callback_secret);

String signature = hmac.hmacHex(callback_data);`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Wallet Credit
                        Callback Sample</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Receive real-time notifications when a virtual account is credited. This webhook endpoint is
                        called by Passpoint when funds are received into a merchant's virtual account.
                    </p>

                    {/* Wallet Credit Callback */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Callback
                            Details</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Webhook className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Webhook
                                        Callback</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        This callback is sent to your configured merchant callback URL when a virtual
                                        account receives a credit transaction.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
                                        </div>

                                        {/* Signature Information */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Signature
                                                Verification</h4>
                                            <div
                                                className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                                <p className="text-sm text-yellow-900 dark:text-yellow-300 font-semibold mb-2">Security
                                                    Notice:</p>
                                                <p className="text-sm text-yellow-800 dark:text-yellow-400 mb-3">
                                                    The header parameter <code
                                                    className="bg-yellow-100 dark:bg-yellow-900/40 px-1.5 py-0.5 rounded">signature</code> is
                                                    sha512(callback_data) using the callback secret as the secret key.
                                                </p>
                                                <p className="text-sm text-yellow-800 dark:text-yellow-400 font-semibold mb-2">Example
                                                    Java snippet:</p>
                                                <div className="mt-2">
                                                    <CodeBlock language="java">{getJavaSnippet()}</CodeBlock>
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">signature</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">HMAC
                                                            SHA-512 signature of the callback data
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body Fields */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Request
                                                Body Fields</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Field</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">eventType</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">VIRTUAL_ACCOUNT_CREDIT</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">transactionId</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Unique
                                                            transaction identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">merchantId</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Your
                                                            merchant ID
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">transactionAmount</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Amount
                                                            credited to the account
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">charges</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Transaction
                                                            fees
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">currency</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Transaction
                                                            currency (e.g., NGN)
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">srcAccountName</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Sender's
                                                            account name
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">srcAccountNumber</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Sender's
                                                            account number
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">srcBank</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Sender's
                                                            bank name
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">destAccountName</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Recipient's
                                                            account name (merchant)
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">destAccountNumber</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Recipient's
                                                            virtual account number
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">destBank</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Recipient's
                                                            bank name
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">narration</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Transaction
                                                            description
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

                                        {/* Expected Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Expected Response from Your Endpoint
                                                </span>
                                            </h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 mb-3">
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Your endpoint should return a 200 OK response with a JSON body
                                                    confirming receipt of the callback.
                                                </p>
                                            </div>
                                            <CodeBlock language="json">{getResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Implementation Guidelines */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Implementation
                            Guidelines</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Security Best Practices */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security Best
                                    Practices</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Always verify the signature header using HMAC SHA-512</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Validate the merchantId matches your configuration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Use HTTPS for your callback URL endpoint</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Store callback secret securely in environment variables</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Response Requirements */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Requirements</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Return HTTP 200 status code on successful receipt</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Process callbacks asynchronously to avoid timeouts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Implement idempotency using transactionId</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Log all callback requests for audit purposes</span>
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

export default CollectionWalletCreditCallbackSample;

