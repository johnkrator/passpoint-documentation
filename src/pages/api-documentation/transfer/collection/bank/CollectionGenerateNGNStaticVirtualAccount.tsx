import {CreditCard} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const CollectionGenerateNgnStaticVirtualAccount = () => {
    const getEndpoint = () => `POST https://dev.mypasspoint.com/paypass/ft-app/generate-virtual-account?type=static`;

    const getRequestBody = () => `{
    "accountName": "Chinedu Ojiteli",
    "email": "chinedu37dz@yahoo.com",
    "phoneNumber": "08116070111",
    "bvn": "22222222224"
}`;

    const getCurlRequest = () => `curl --location 'https://dev.mypasspoint.com/paypass/ft-app/generate-virtual-account?type=static' \\
--header 'x-channel-id: 3' \\
--header 'x-channel-code: legacy-api-user' \\
--header 'x-merchant-id: e0b157a2-9245-40b9-8117-d25cadfdcfaa' \\
--data-raw '{
    "accountName": "Chinedu Ojiteli",
    "email": "chinedu37dz@yahoo.com",
    "phoneNumber": "08116070111",
    "bvn": "22222222224"
}'`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Generate NGN
                        Static Virtual Account</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Generate a permanent NGN virtual account for collecting payments. Static accounts remain active
                        indefinitely and can receive multiple payments.
                    </p>

                    {/* Generate Static Account */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Endpoint
                            Details</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CreditCard className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Generate
                                        Static Account</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Create a permanent virtual account number for receiving NGN payments.
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
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">e0b157a2-9245-40b9-8117-d25cadfdcfaa</td>
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
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">static</td>
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
                                                    Example Response
                                                </span>
                                            </h4>
                                            <div
                                                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    This request doesn't return any response body
                                                </p>
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

export default CollectionGenerateNgnStaticVirtualAccount;