const PayoutBankForeignSummary = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">Foreign</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        This section of the documentation contains API requests and responses for foreign payouts in
                        USD, GBP, EUR and CNY
                    </p>

                    {/* APIs Overview */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">APIs</h2>

                        {/* Get Available Payout Countries */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get
                                Available Payout Countries</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/country-list</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get
                                    available countries</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseCode</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    response code of the operation. this indicates that the request was
                                                    submitted successfully
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseDescription</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    description of the response code
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseMessage</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">array
                                                    of countries
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">country
                                                    name
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.code</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">country
                                                    iso code
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.dialingCode</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    country dialing code
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.currencyCode</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    country currency code
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.iso3code</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    country iso 3 code
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Payment Methods by Country */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Payment
                                Methods by Country</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/available-payment-methods?countryCode=</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get
                                    payment methods</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">countryCode</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    selected country code
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseCode</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    response code of the operation. this indicates that the request was
                                                    submitted successfully
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseDescription</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    description of the response code
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseMessage</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    array of payment methods
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the payment method
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.alias</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the payment method
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.minLimit</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    minimum limit of the payment method
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.maxLimit</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">number</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    maximum limit of the payment method
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get List of Account Type */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get List of
                                Account Type</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=acct</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of Account Type</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for account type
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">acct</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the account type
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the account type. this code should be passed in the request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Identity Type List */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get
                                Identity Type List</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=idt</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of ID type</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for id type
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">idt</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the id type
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the id type. this code should be passed in the request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Sender-Beneficiary Relationships List */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get
                                Sender-Beneficiary Relationships List</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=sbr</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of Sender/Beneficiary Relationshio</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for sender/beneficiary relationships
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">sbr</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the sender/beneficiary relationships
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the sender/beneficiary relationships. this code should be
                                                    passed in the request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Purpose of Payment List */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Purpose
                                of Payment List</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=pop</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of Purpose of Payment</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for purpose of payment
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">pop</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the payment purpose
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the payment purpose. this code should be passed in the
                                                    request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Source of Funds List */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Source
                                of Funds List</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=sof</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of Sources of Funds</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for source of funds
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">sof</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the source of funds
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the source of funds. this code should be passed in the
                                                    request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get List of Occupations */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get List of
                                Occupations</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=ocu</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of Occupations</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for occupation
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">ocu</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the occupation
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the occupation. this code should be passed in the request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get List of Bank Locations (for CNY B2B Payout) */}
                        <div className="mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Get List of
                                Bank Locations (for CNY B2B Payout)</h3>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint: <span
                                    className="text-red-500">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=cny</span>
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span
                                    className="font-semibold text-gray-900 dark:text-white">Method:</span> GET</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300"><span
                                    className="font-semibold text-gray-900 dark:text-white">Description:</span> Get List
                                    of Bank Locations</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request
                                    Parameters:</h4>
                                <div
                                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default
                                                    Value
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">type</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    param name for bank location
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">cny</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response
                                    Parameters:</h4>
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
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">name</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    name of the bank location
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">value</td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                                    object
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the
                                                    code for the bank location. this code should be passed in the
                                                    request
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
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

export default PayoutBankForeignSummary;
