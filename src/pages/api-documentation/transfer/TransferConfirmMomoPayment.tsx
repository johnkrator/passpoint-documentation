import {CheckCircle2} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const TransferConfirmMomoPayment = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/momo-app/confirm-payment`;

    const getRequestBodyExample = () => `{
  "reference": "string",
  "otp": "string"
}`;

    const getRequestExample = () => `curl --location 'https://dev.mypasspoint.com/paypass/momo-app/confirm-payment' \\
--header 'x-channel-id: 2' \\
--header 'x-channel-code: passpoint-infra-user' \\
--header 'x-merchant-id: 22f36327-493c-492d-a390-5bf321ff51ba' \\
--header 'Content-Type: application/json' \\
--data '{
  "reference": "string",
  "otp": "string"
}'`;

    const getResponseExample = () => `{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "transaction confirmation successful"
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Confirm Momo
                        Payment</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Confirm mobile money (MOMO) payin transactions that require OTP verification.
                        This endpoint is specifically used for networks like Orange that implement two-factor
                        authentication for payments.
                    </p>

                    {/* API Endpoint Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API
                            Endpoint</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CheckCircle2 className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Confirm Payment
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Complete mobile money transactions by submitting the OTP received by the
                                        customer.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getEndpoint()}</CodeBlock>
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
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-id</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">2</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-channel-code</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">passpoint-merchant-user</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Channel
                                                            code identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">x-merchant-id</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">your-merchant-id</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Your
                                                            unique merchant identifier
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">Content-Type</td>
                                                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">application/json</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Request
                                                            content type
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Request Body Parameters */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Request
                                                Body Parameters</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead
                                                        className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Required</th>
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">reference</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Yes</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">The
                                                            transaction ID or client reference
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                                        <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">otp</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">string</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Conditional</td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Required
                                                            for networks like Orange that use OTP verification
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
                                            <CodeBlock language="json">{getRequestBodyExample()}</CodeBlock>
                                        </div>

                                        {/* Example Request */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Request</h4>
                                            <CodeBlock language="bash">{getRequestExample()}</CodeBlock>
                                        </div>

                                        {/* Example Response */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                <span className="inline-flex items-center">
                                                    <span
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded mr-2">200 OK</span>
                                                    Example Response
                                                </span>
                                            </h4>
                                            <CodeBlock language="json">{getResponseExample()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Flow */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Payment
                            Flow</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-4">Two-Step
                                Process</h3>
                            <ol className="space-y-3 text-sm text-blue-800 dark:text-blue-400">
                                <li className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">1</span>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300">Initiate Payment</strong>
                                        <p>Customer initiates a mobile money payment through your application. The
                                            payment provider sends an OTP to the customer's phone.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">2</span>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300">Confirm with OTP</strong>
                                        <p>Customer enters the received OTP in your application. You submit the
                                            reference and OTP to this endpoint to complete the transaction.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">3</span>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300">Payment Completion</strong>
                                        <p>Upon successful verification, the payment is processed and you receive a
                                            confirmation response. A webhook callback is sent to your registered
                                            endpoint.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* Supported Networks */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Supported
                            Networks</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">OTP
                                    Required</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    These networks require OTP confirmation for security.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-orange-500 mr-2">🔒</span>
                                        <span>Orange Money (multiple countries)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-500 mr-2">🔒</span>
                                        <span>Selected regional mobile money providers</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Direct
                                    Processing</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    These networks process payments without additional OTP.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>MTN Mobile Money</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Vodafone Cash</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>AirtelTigo Money</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Error Handling */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Error
                            Handling</h2>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-3">Common
                                Failure Scenarios</h3>
                            <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-400">
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <div>
                                        <strong>Invalid OTP:</strong> The OTP entered by the customer is incorrect or
                                        has expired. Allow the customer to retry or request a new OTP.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <div>
                                        <strong>Transaction Not Found:</strong> The reference provided doesn't match any
                                        pending transaction. Verify the reference is correct.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <div>
                                        <strong>OTP Expired:</strong> The OTP validity period has elapsed. Initiate a
                                        new payment request.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-600 dark:text-yellow-500 mr-2">⚠</span>
                                    <div>
                                        <strong>Insufficient Funds:</strong> Customer's mobile money account has
                                        insufficient balance. Customer needs to top up their account.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Best
                            Practices</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User
                                    Experience</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Display clear instructions for OTP entry</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Show OTP timeout countdown timer</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Provide option to resend OTP if expired</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span>Show helpful error messages for failures</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Never log or store OTP values</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Implement rate limiting for OTP attempts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Use HTTPS for all API requests</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Validate transaction status after confirmation</span>
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

export default TransferConfirmMomoPayment;