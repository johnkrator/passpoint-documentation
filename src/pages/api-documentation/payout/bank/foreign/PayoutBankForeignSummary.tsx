const PayoutBankForeignSummary = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Foreign Bank
                        Transfer APIs</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Complete API reference for foreign bank payout transactions, including payment methods, account
                        types, and regulatory compliance endpoints.
                    </p>

                    {/* API Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API
                            Overview</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Endpoint</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Method</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/country-list</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get available
                                            countries for foreign payout transactions
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/available-payment-methods</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get payment
                                            methods available by country for foreign payout transactions
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/account-types</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get list of
                                            account types
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/inquiry-types</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get inquiry
                                            type list
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/sender-beneficiary-relationship</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get
                                            sender-beneficiary relationship list
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/purpose-of-payment</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get purpose
                                            of payment list
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/source-of-funds</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get source of
                                            funds list
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/occupations</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get list of
                                            occupations
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/bank-locations</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get list of
                                            bank locations that CNY bank supports
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get Available Payment Countries */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Available
                            Payment Countries</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Method</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">GET</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Endpoint</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">/paypass/foreign-ft-app/country-list</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Method</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">responseCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the response
                                            code of the operation. this indicates that the request was submitted
                                            successfully
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">array of
                                            countries
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.iso</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">country iso
                                            code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.dialingCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the country
                                            dialing code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.currencyCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the country
                                            currency code
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data.iso3code</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the country
                                            iso 3 code
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get Payment Methods by Country */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Payment
                            Methods by Country</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the selected
                                            country code
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">countryCode</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">US</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get List of Account Type */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get List of
                            Account Type</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            List of Account Type
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/account-types</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">channelId</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">string</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">mandatory</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the channel
                                            client for the account type list
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            account type
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get Inquiry Type List */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Inquiry
                            Type List</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            List of Inquiry Type List
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/inquiry-types</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the inquiry
                                            type for inquiry type list
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            inquiry type
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get Sender-Beneficiary Relationship List */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get
                            Sender-Beneficiary Relationship List</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            Sender-Beneficiary Relationship List
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/sender-beneficiary-relationship</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the sender
                                            beneficiary relationship list for the relationship type
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            the sender-beneficiary relationship list
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get Purpose of Payment List */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Purpose of
                            Payment List</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            Purpose of Payment List
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/purpose-of-payment</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the purpose
                                            of payment list for the payment purpose
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">any</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            the payment purpose list
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get Source of Funds List */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Source of
                            Funds List</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            Source of Funds List
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/source-of-funds</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            source of funds. the source for the payment being placed by the client
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            the source of funds list
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get List of Occupations */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get List of
                            Occupations</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            List of Occupations
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/occupations</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            occupations. the occupation for the payment customer
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            the occupation. the occupation for the payment customer
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Get List of Bank Locations that CNY Bank Supports */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get List of
                            Bank Locations that CNY Bank Supports</h2>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Method: GET</h3>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Get
                                            List of Bank Locations that CNY Bank Supports
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">/paypass/foreign-ft-app/bank-locations</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Request
                            Parameters</h3>
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
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the bank
                                            locations for the cny bank supports
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Response
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
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">data</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Array
                                            object
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">the array of
                                            bank locations list
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PayoutBankForeignSummary;