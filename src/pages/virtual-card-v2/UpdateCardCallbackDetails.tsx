import {Settings} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const UpdateCardCallbackDetails = () => {
    const endpointCode = () => `POST https://dev.mypasspoint.com/cardapp/update-callback-details`;
    const headersCode = () => `x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: 3ee89fbb-05f5-4d71-a93f-e85fa3fe5a6c
Authorization: Basic <username>:<password>`;
    const requestBodyCode = () => `{
    "secret": "11111",
    "url": "https://webhook.site/29a086d9-4259-43a2-a40c-1d9304701745"
}`;
    const curlCode = () => `curl --location 'https://dev.mypasspoint.com/cardapp/update-callback-details' \\
--header 'x-channel-id: 3' \\
--header 'x-channel-code: legacy-api-user' \\
--header 'x-merchant-id: 3ee89fbb-05f5-4d71-a93f-e85fa3fe5a6c' \\
--data '{
    "secret": "11111",
    "url": "https://webhook.site/29a086d9-4259-43a2-a40c-1d9304701745"
}'`;
    const responseCode = () => `No response body
This request doesn't return any response body`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">Update Card Callback Details</h1>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed max-w-4xl">
                        Update the callback details for card events.
                    </p>
                    <section className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">API</h2>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Settings className="h-10 w-10 sm:h-12 sm:w-12 text-gray-500 flex-shrink-0"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Update Callback</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl overflow-hidden">
                                        <div className="mb-4 sm:mb-6 break-words">
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Endpoint:</strong> https://dev.mypasspoint.com/cardapp/update-callback-details</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Method:</strong> POST</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Description:</strong> Update the callback details for card events</p>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed"><strong>Authorization:</strong> Basic Auth</p>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4><CodeBlock>{endpointCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4><CodeBlock language="bash">{headersCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4><CodeBlock language="json">{requestBodyCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4><CodeBlock language="bash">{curlCode()}</CodeBlock></div>
                                            <div><h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4><CodeBlock language="text">{responseCode()}</CodeBlock></div>
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

export default UpdateCardCallbackDetails;
