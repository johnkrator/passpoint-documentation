import {MapPin, Building2, Globe, Send} from "lucide-react";

const CollectionBankOpenBankingPreselect = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Open Banking Preselect
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Preselect APIs allow merchants to provide a streamlined payment experience by pre-selecting
                        banks and countries for their customers, reducing friction in the payment flow.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Get Banks */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <Building2 className="h-10 w-10 text-brand-500 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Get Banks
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Retrieve a list of supported banks for preselection in your payment flow.
                            </p>
                        </div>

                        {/* Get Countries */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <Globe className="h-10 w-10 text-brand-500 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Get Countries
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Fetch available countries where Open Banking preselect is supported.
                            </p>
                        </div>

                        {/* Request Payment with Bank Preselect */}
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <Send className="h-10 w-10 text-brand-500 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Request Payment with Bank Preselect
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Create payment requests with pre-selected bank for faster customer checkout.
                            </p>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <section className="mt-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Benefits of Preselect
                        </h2>

                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-3"/>
                                    <div>
                                        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
                                            Faster Checkout
                                        </h3>
                                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                                            Reduce friction by pre-selecting the customer's preferred bank or country.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-3"/>
                                    <div>
                                        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
                                            Improved Conversion
                                        </h3>
                                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                                            Streamlined payment flow increases completion rates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-3"/>
                                    <div>
                                        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
                                            Better UX
                                        </h3>
                                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                                            Customize the payment experience based on customer location or preferences.
                                        </p>
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

export default CollectionBankOpenBankingPreselect;