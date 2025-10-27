import {CreditCard, DollarSign, FileText, Lock, Webhook, Info, AlertCircle, History, XCircle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";
import {
    issueCardRequestParams,
    basicResponseParams,
    fundWithdrawRequestParams,
    cardDetailsResponseParams,
    cardProfileStatusResponseParams,
    cardTransactionResponseParams,
    cardListResponseParams,
    cardEventCallbackParams,
    webhookParameterDescription
} from "./CardIntroductionData";

const CardIntroduction = () => {
    
    // Table Component for rendering parameter tables
    const ParameterTable = ({ columns, data }: { columns: string[], data: any[] }) => (
        <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        {columns.map((col, idx) => (
                            <th key={idx} className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            {Object.values(row).map((val: any, cellIdx) => (
                                <td key={cellIdx} className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-xs sm:text-sm break-words">
                                    {cellIdx === 0 ? <code className="font-mono text-xs break-all">{val}</code> : val}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Virtual Card v2
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed">
                        This section of the documentation contains API requests and responses for the virtual card issuance and other operations
                    </p>

                    {/* Authorization Section */}
                    <section className="mb-12">
                        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-start gap-3">
                                <Lock className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Authorization</h3>
                                    <p className="text-yellow-800 dark:text-yellow-200">
                                        <strong>Bearer Token:</strong> This folder is using Bearer Token from collection <strong>Passpoint Payment Service</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* APIs Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">APIs</h2>

                        <div className="space-y-12">
                            {/* Issue Card */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <CreditCard className="h-10 w-10 text-brand-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Issue Card</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/issue</code>
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                        <p className="text-blue-800 dark:text-blue-300 text-sm break-words">
                                            <strong>N.B:</strong> When the card is to be funded during card creation, the endpoint is: <br/><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full mt-1">https://dev.mypasspoint.com/cardapp/issue-and-fund</code>
                                        </p>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> POST</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Creates a virtual card</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={issueCardRequestParams} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={basicResponseParams} 
                                />
                            </div>

                            {/* Fund Card */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <DollarSign className="h-10 w-10 text-green-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Fund Card</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/fund</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> POST</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Funds a virtual card</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={fundWithdrawRequestParams} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={basicResponseParams} 
                                />
                            </div>

                            {/* Withdraw From Card */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <DollarSign className="h-10 w-10 text-red-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Withdraw From Card</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/withdraw</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> POST</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Withdraw from a virtual card</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={fundWithdrawRequestParams} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={basicResponseParams} 
                                />
                            </div>

                            {/* Get Card Balance */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <DollarSign className="h-10 w-10 text-blue-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card Balance</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/get-card-balance</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> GET</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Get card balance</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={[
                                        ...basicResponseParams.slice(0, 3),
                                        { parameter: "otherInfo", type: "string", description: "the current available balance of the card" }
                                    ]} 
                                />
                            </div>

                            {/* Get Card Details */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <FileText className="h-10 w-10 text-purple-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card Details</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/get-card-details</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> GET</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Get card details</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description", "Example"]} 
                                    data={cardDetailsResponseParams} 
                                />
                            </div>

                            {/* Get Card Full Pan */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <Lock className="h-10 w-10 text-red-600"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card Full Pan</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/show-card</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> GET</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Show Card Pan</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={[
                                        ...basicResponseParams.slice(0, 3),
                                        { parameter: "otherInfo", type: "string", description: "the card clear pan" },
                                        { parameter: "securityCode", type: "number", description: "the card cvv" },
                                        { parameter: "expiryInfo", type: "string", description: "the card expiry details" }
                                    ]} 
                                />
                            </div>

                            {/* Get Card Profile Status */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <Info className="h-10 w-10 text-cyan-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card Profile Status</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/get-card-status</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> GET</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> This retrieves the card status. It also tells if the card is active or terminated</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description", "Support Values"]} 
                                    data={cardProfileStatusResponseParams} 
                                />
                            </div>

                            {/* Freeze Card */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <AlertCircle className="h-10 w-10 text-orange-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Freeze Card</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/update-card-status/deactivate</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> PUT</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Freeze Card</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={basicResponseParams.slice(0, 3)} 
                                />
                            </div>

                            {/* Unfreeze Card */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <AlertCircle className="h-10 w-10 text-green-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Unfreeze Card</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/update-card-status/activate</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> PUT</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Freeze Card</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={basicResponseParams.slice(0, 3)} 
                                />
                            </div>

                            {/* Terminate Card */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <XCircle className="h-10 w-10 text-red-600"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Terminate Card</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/terminate</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> POST</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Terminate virtual card</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[
                                        { parameter: "cardId", type: "string", required: "mandatory", description: "the unique id of the card", defaultValue: "" },
                                        { parameter: "orderId", type: "string", required: "mandatory", description: "the order id ofthe termination request", defaultValue: "" },
                                        { parameter: "reason", type: "string", required: "mandatory", description: "the reason for termination", defaultValue: "" },
                                        { parameter: "callbackUrl", type: "string", required: "optional", description: "the callback to remove details of the card termination", defaultValue: "" }
                                    ]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description"]} 
                                    data={basicResponseParams.slice(0, 3)} 
                                />
                            </div>

                            {/* Get Card Transaction */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <History className="h-10 w-10 text-indigo-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card Transaction</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/get-card-trans</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> GET</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Get card transaction details</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[{ parameter: "id", type: "string", required: "mandatory", description: "the unique id of the transaction", defaultValue: "" }]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description", "Example"]} 
                                    data={cardTransactionResponseParams} 
                                />
                            </div>

                            {/* Get Card List */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <FileText className="h-10 w-10 text-teal-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card List</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/-card-list</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> GET</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Get card list</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[
                                        { parameter: "id", type: "string", required: "optional", description: "the unique id of the card or the order id used to create the card", defaultValue: "" },
                                        { parameter: "pageNumber", type: "number", required: "mandatory", description: "the number of the page being viewed", defaultValue: "0" },
                                        { parameter: "pageSize", type: "number", required: "mandatory", description: "the number records per page", defaultValue: "0" }
                                    ]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description", "Example"]} 
                                    data={cardListResponseParams} 
                                />
                            </div>

                            {/* Card Event Callback */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <Webhook className="h-10 w-10 text-purple-600"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Card Event Callback</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://merchant_url</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> POST</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Sends callback for card events to merchant</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Header Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[
                                        { parameter: "signature", type: "string", required: "conditional", description: "this is a SHA512 hash of the callback data. It is only available when the callback secret is set via the Update Card Callback Details api", defaultValue: "" }
                                    ]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Callback Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Example"]} 
                                    data={cardEventCallbackParams} 
                                />
                            </div>

                            {/* Get Card Statement */}
                            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <FileText className="h-10 w-10 text-pink-500"/>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Card Statement</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        <strong>Endpoint:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm break-all inline-block max-w-full">https://dev.mypasspoint.com/cardapp/get-card-statement</code>
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Method:</strong> POST</p>
                                    <p className="text-gray-700 dark:text-gray-300"><strong>Description:</strong> Get card statement</p>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Required", "Description", "Default Value"]} 
                                    data={[
                                        { parameter: "startDate", type: "date", required: "mandatory", description: "the start date", defaultValue: "" },
                                        { parameter: "endDate", type: "date", required: "mandatory", description: "the end date", defaultValue: "" },
                                        { parameter: "cardId", type: "string", required: "mandatory", description: "the card id", defaultValue: "" },
                                        { parameter: "transMode", type: "string", required: "conditional", description: "this indicates whether it is a debit or credit. To search for a single ledger, transMode is the transaction id prefixed with \"ref::\" e.g ref::xxxxx", defaultValue: "" },
                                        { parameter: "pageNumber", type: "int", required: "mandatory", description: "the current page number", defaultValue: "0" },
                                        { parameter: "pageSize", type: "int", required: "mandatory", description: "the page size", defaultValue: "0" }
                                    ]} 
                                />

                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Parameters:</h4>
                                <ParameterTable 
                                    columns={["Parameter", "Type", "Description", "Example"]} 
                                    data={[
                                        { parameter: "responseCode", type: "string", description: "the response code of the operation. this indicates that the request was submitted successfully", example: "" },
                                        { parameter: "responseDescription", type: "string", description: "the description of the response code", example: "" },
                                        { parameter: "responseMessage", type: "", description: "", example: "" },
                                        { parameter: "data", type: "Object", description: "this object contains the details of the card", example: "" },
                                        { parameter: "data.cardId", type: "string", description: "the card id", example: "" },
                                        { parameter: "data.cbaReference", type: "string", description: "the reference linking the transaction to the transaction ledger", example: "" },
                                        { parameter: "data.narration", type: "string", description: "the transaction narration", example: "" },
                                        { parameter: "data.amount", type: "decimal", description: "the transaction amount", example: "" },
                                        { parameter: "data.openingBalance", type: "decimal", description: "the balance before the transaction", example: "" },
                                        { parameter: "data.runningBalance", type: "decimal", description: "the balance after the transaction", example: "" },
                                        { parameter: "data.transactionType", type: "string", description: "the transaction ledger type", example: "" },
                                        { parameter: "data.transactionDate", type: "datetime", description: "the date transaction ledger was created", example: "" },
                                        { parameter: "data.currency", type: "string", description: "the transaction currency", example: "" },
                                        { parameter: "data.debit", type: "boolean", description: "indicates if the transaction is a debit", example: "" },
                                        { parameter: "data.credit", type: "boolean", description: "indicates if the transaction is a credit", example: "" }
                                    ]} 
                                />
                            </div>
                        </div>
                    </section>

                    {/* Webhook Event Types Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Event Types</h2>

                        <div className="space-y-8">
                            {/* CARD CREATION WITHOUT FUNDING */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CARD CREATION WITHOUT FUNDING</h3>
                                <CodeBlock language="json">{`{ "eventId": "string", "amount": "0", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "nil", "cardProfileStatus": "approved", "eventType": "VIRTUAL_CARD_CREATION", "merchantState": "string", "transactionId": "string", "cardCreationStatus": "approved", "transactionType": "card_creation", "cardId": "string", "currency": "string", "merchantCountry": "string", "responseMessage": "string" }`}</CodeBlock>
                            </div>

                            {/* CARD CREATION WITH FUNDING */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CARD CREATION WITH FUNDING</h3>
                                <CodeBlock language="json">{`{ "eventId": "string", "amount": "decimal", "charge": "decimal", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "credit", "eventType": "VIRTUAL_CARD_CREATION", "merchantState": "string", "transactionId": "string", "cardCreationStatus": "approved", "transactionType": "card_creation", "cardId": "string", "amountDebited": "decimal", "currency": "string", "merchantCountry": "string", "responseMessage": "string", "cardFundStatus": "approved" }`}</CodeBlock>
                            </div>

                            {/* FUNDING */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">FUNDING</h3>
                                <CodeBlock language="json">{`{ "eventId": "string", "amount": "decimal", "charge": "decimal", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "eventType": "VIRTUAL_CARD_FUNDING", "merchantState": "string", "transactionId": "string", "transactionType": "funding", "cardId": "string", "amountDebited": "debited", "currency": "string", "merchantCountry": "string", "responseMessage": "string", "cardFundStatus": "approved" }`}</CodeBlock>
                            </div>

                            {/* WITHDRAWAL */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">WITHDRAWAL</h3>
                                <CodeBlock language="json">{`{ "eventId": "string", "amount": "decimal", "eventType": "VIRTUAL_CARD_WITHDRAWAL", "transactionId": "string", "cardId": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "debit", "merchantCity": "string", "merchantState": "string", "merchantCountry": "string", "transactionType": "withdrawal", "currency": "string", "responseMessage": "string", "cardWithdrawalStatus": "approved", "charge": "decimal", "amountDebited": "decimal" }`}</CodeBlock>
                            </div>

                            {/* AUTHORIZATION - NON CROSSBORDER */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AUTHORIZATION - NON CROSSBORDER</h3>
                                <CodeBlock language="json">{`{
"eventId": "string",
"amount": "decimal",
"amountDebited": "decimal",
"charge": "decimal",
"chargeBearer":"string",
"merchantCity": "string",
"orderId": "string",
"cardScheme": "string",
"transactionMode": "debit",
"eventType": "VIRTUAL_CARD_AUTHORIZATION",
"mcc": "string",
"transactionId": "string",
"cardAuthorizationStatus": "approved",
"merchantName": "string",
"transactionType": "authorization",
"cardId": "string",
"currency": "string",
"merchantCountry": "string",
"responseMessage": "string",
"isCrossborder":"boolean"
}`}</CodeBlock>
                            </div>

                            {/* AUTHORIZATION - CROSSBORDER */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AUTHORIZATION - CROSSBORDER</h3>
                                <CodeBlock language="json">{`{
"eventId": "string",
"amount": "decimal",
"merchantCity": "string",
"orderId": "string",
"cardScheme": "string",
"transactionMode": "debit",
"eventType": "VIRTUAL_CARD_AUTHORIZATION",
"mcc": "string",
"transactionId": "string",
"cardAuthorizationStatus": "approved",
"merchantName": "string",
"transactionType": "authorization",
"cardId": "string",
"currency": "string",
"merchantCountry": "string",
"responseMessage": "string",
"isCrossborder":"boolean",
"crossborderChargeSuccessful":"boolean",
"crossborderCharge":"decimal",
"crossborderChargeBearer":"string",
"crossborderChargeDebitRef":"string"
}`}</CodeBlock>
                            </div>

                            {/* REVERSAL */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">REVERSAL</h3>
                                <CodeBlock language="json">{`{
"eventId": "string", "amount": "decimal", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "credit", "eventType": "VIRTUAL_CARD_REVERSAL", "mcc": "string", "transactionId": "string", "originalTransactionId": "string", "merchantName": "string", "transactionType": "reversal", "cardReversalStatus": "approved", "cardId": "string", "currency": "string", "merchantCountry": "string", "responseMessage": "string", "isCrossborder":"boolean", "crossborderChargeReversalSuccessful":"boolean", "crossborderCharge":"decimal", "crossborderChargeBearer", "string", "crossborderChargeReversalReference":"string" }`}</CodeBlock>
                            </div>

                            {/* EXPIRED AUTHORIZATION */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">EXPIRED AUTHORIZATION</h3>
                                <CodeBlock language="json">{`{
"eventId": "string", "amount": "decimal", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "credit", "eventType": "VIRTUAL_CARD_EXPIRED_AUTHORIZATION_REFUND", "mcc": "string", "transactionId": "string", "originalTransactionId": "string", "merchantName": "string", "transactionType": "reversal", "cardReversalStatus": "approved", "cardId": "string", "currency": "string", "narration": "string", "merchantCountry": "string", "responseMessage": "string", "isCrossborder":"boolean", "crossborderChargeReversalSuccessful":"boolean", "crossborderCharge":"decimal", "crossborderChargeBearer", "string", "crossborderChargeReversalReference":"string" }`}</CodeBlock>
                            </div>

                            {/* REFUND */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">REFUND</h3>
                                <CodeBlock language="json">{`{
"eventId": "string", "amount": "decimal", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "credit", "eventType": "VIRTUAL_CARD_REFUND", "mcc": "string", "merchantState": "string", "transactionId": "string", "merchantName": "string", "transactionType": "refund", "cardRefundStatus": "approved", "cardId": "string", "currency": "string", "merchantCountry": "string", "responseMessage": "string" }`}</CodeBlock>
                            </div>

                            {/* DECLINE */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">DECLINE</h3>
                                <CodeBlock language="json">{`{ "cardDeclineStatus": "declined", "eventId": "string", "amount": "decimal", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "eventType": "VIRTUAL_CARD_DECLINE", "mcc": "string", "transactionId": "string", "merchantName": "string", "transactionType": "decline", "cardId": "string", "currency": "string", "merchantCountry": "string", "responseMessage": "string", "isPassthrough", "boolean", "passthroughChargeBearer":"string", "passthroughChargeSuccessful":"boolean", "passthroughChargeDebitReference":"string", "passthroughCharge": "decimal" }`}</CodeBlock>
                            </div>

                            {/* CARD TERMINATION */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CARD TERMINATION</h3>
                                <CodeBlock language="json">{`{
"eventId": "string", "amountWithdrawn": "decimal", "merchantId": "string", "maskedPan": "string", "cardId": "string", "dateCardDeactivated": "2024-07-15 16:51:36", "eventType": "VIRTUAL_CARD_TERMINATION", "cardProfileStatus": "terminated", "cardCreationStatus": "terminated", "transactionId": "string", "cardStatus": "deactivated" }`}</CodeBlock>
                            </div>

                            {/* REFUND AFTER CARD TERMINATION */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">REFUND AFTER CARD TERMINATION</h3>
                                <CodeBlock language="json">{`{ "eventId": "string", "amount": "decimal", "authorizationCurrency": "string", "merchantCity": "string", "orderId": "string", "cardScheme": "string", "transactionMode": "credit", "authorizationCode": "string", "eventType": "VIRTUAL_CARD_EXPIRED_AUTHORIZATION_REFUND", "mcc": "string", "transactionId": "string", "merchantName": "string", "transactionType": "refund", "cardRefundStatus": "approved", "originalTransactionId": "string", "cardId": "string", "narration": "string", "currency": "string", "merchantCountry": "string", "responseMessage": "string" }`}</CodeBlock>
                            </div>
                        </div>
                    </section>

                    {/* WEBHOOK PARAMETER DESCRIPTION */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Parameter Description</h2>
                        
                        <ParameterTable 
                            columns={["Parameter", "Type", "Required", "Description"]} 
                            data={webhookParameterDescription} 
                        />
                    </section>

                    {/* WEBHOOK SAMPLE RESPONSE */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Sample Response</h2>
                        
                        <CodeBlock language="json">{`{
"code": "00",
"status": "successful",
"message": "callback received successfully"
}`}</CodeBlock>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CardIntroduction;
