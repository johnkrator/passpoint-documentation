const PayoutBankForeignSummary = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Foreign</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        This section of the documentation contains API requests and responses for foreign payouts in
                        USD, GBP, EUR and CNY
                    </p>

                    {/* APIs Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">APIs</h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">API
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Endpoint</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Method</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            Available Payout Countries
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/country-list</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get available
                                            countries
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            Payment Methods by Country
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/available-payment-methods?countryCode=</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get payment
                                            methods
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            List of Account Type
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=acct</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            Account Type
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            Identity Type List
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=idt</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            ID type
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            Sender-Beneficiary Relationships List
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=sbr</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            Sender/Beneficiary Relationships
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            Purpose of Payment List
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=pop</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            Purpose of Payment
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            Source of Funds List
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=sof</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            Sources of Funds
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            List of Occupations
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=ocu</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            Occupations
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Get
                                            List of Bank Locations (for CNY B2B Payout)
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">https://dev.mypasspoint.com/paypass/foreign-ft-app/retrieve-metadata?type=cny</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GET</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Get List of
                                            Bank Locations
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