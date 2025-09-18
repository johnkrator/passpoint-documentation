import {RefreshCw, DollarSign, TrendingUp, Globe, CheckCircle, AlertTriangle, Clock} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutConvertFunds = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Convert Funds</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Convert funds between different currencies in your Passpoint wallet with competitive exchange
                        rates and instant settlement. Support for 40+ major currencies with real-time rate updates.
                    </p>

                    {/* Currency Conversion */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Currency
                            Conversion</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <RefreshCw className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Convert
                                        Currency</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Convert funds between different currencies in your wallet instantly with
                                        market-competitive exchange rates and transparent fees.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST /api/v1/wallet/convert`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "from_currency": "USD",
  "to_currency": "EUR",
  "amount": 1000.00,
  "rate_lock_duration": 300,
  "reference": "conversion_001",
  "description": "Portfolio rebalancing"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "conversion_id": "conv_abc123def456",
  "status": "completed",
  "from_currency": "USD",
  "to_currency": "EUR",
  "from_amount": 1000.00,
  "to_amount": 850.00,
  "exchange_rate": 0.8500,
  "rate_timestamp": "2024-01-15T14:30:00Z",
  "fees": {
    "conversion_fee": 5.00,
    "spread": 0.0025,
    "total_fees": 5.00
  },
  "wallet_balances": {
    "usd_balance": 4000.00,
    "eur_balance": 2350.00
  },
  "reference": "conversion_001",
  "completed_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Exchange Rates */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Real-Time
                            Exchange Rates</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <TrendingUp className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                        Exchange Rates</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve current exchange rates for all supported currency pairs with bid/ask
                                        spreads and rate update timestamps.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`GET /api/v1/exchange-rates`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{`{
  "base_currency": "USD",
  "target_currencies": ["EUR", "GBP", "JPY"],
  "amount": 1000.00
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "base_currency": "USD",
  "rates": [
    {
      "currency": "EUR",
      "rate": 0.8500,
      "bid": 0.8495,
      "ask": 0.8505,
      "spread": 0.0010,
      "amount_converted": 850.00,
      "fees": {
        "conversion_fee": 5.00,
        "percentage_fee": 0.25
      }
    },
    {
      "currency": "GBP",
      "rate": 0.7850,
      "bid": 0.7845,
      "ask": 0.7855,
      "spread": 0.0010,
      "amount_converted": 785.00,
      "fees": {
        "conversion_fee": 5.00,
        "percentage_fee": 0.25
      }
    }
  ],
  "timestamp": "2024-01-15T14:30:00Z",
  "rate_validity": 300
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Supported Currencies */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Supported
                            Currencies</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <CheckCircle
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200">40+ Major
                                        Currencies</h3>
                                    <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                                        Convert between all major global currencies with competitive rates updated in
                                        real-time from multiple liquidity providers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {/* Major Currencies */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Major
                                    Currencies</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">USD</span>
                                        <span className="text-gray-900 dark:text-white">US Dollar</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">EUR</span>
                                        <span className="text-gray-900 dark:text-white">Euro</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">GBP</span>
                                        <span className="text-gray-900 dark:text-white">British Pound</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">JPY</span>
                                        <span className="text-gray-900 dark:text-white">Japanese Yen</span>
                                    </div>
                                </div>
                            </div>

                            {/* Asian Currencies */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Asian
                                    Currencies</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">CNY</span>
                                        <span className="text-gray-900 dark:text-white">Chinese Yuan</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">SGD</span>
                                        <span className="text-gray-900 dark:text-white">Singapore Dollar</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">HKD</span>
                                        <span className="text-gray-900 dark:text-white">Hong Kong Dollar</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">INR</span>
                                        <span className="text-gray-900 dark:text-white">Indian Rupee</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emerging Markets */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Emerging
                                    Markets</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">NGN</span>
                                        <span className="text-gray-900 dark:text-white">Nigerian Naira</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">BRL</span>
                                        <span className="text-gray-900 dark:text-white">Brazilian Real</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">ZAR</span>
                                        <span className="text-gray-900 dark:text-white">South African Rand</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">MXN</span>
                                        <span className="text-gray-900 dark:text-white">Mexican Peso</span>
                                    </div>
                                </div>
                            </div>

                            {/* Crypto & Digital */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Digital
                                    Assets</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">USDC</span>
                                        <span className="text-gray-900 dark:text-white">USD Coin</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">USDT</span>
                                        <span className="text-gray-900 dark:text-white">Tether USD</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">EUROC</span>
                                        <span className="text-gray-900 dark:text-white">Euro Coin</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">GBPT</span>
                                        <span className="text-gray-900 dark:text-white">GBP Token</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Rate Lock Feature */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Rate Lock
                            Feature</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Clock className="h-12 w-12 text-purple-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Lock
                                        Exchange Rate</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Lock in favorable exchange rates for up to 10 minutes to protect against rate
                                        fluctuations during large conversions or planning periods.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST /api/v1/exchange-rates/lock`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "from_currency": "USD",
  "to_currency": "EUR",
  "amount": 10000.00,
  "lock_duration": 600,
  "reference": "rate_lock_001"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "lock_id": "lock_abc123def456",
  "from_currency": "USD",
  "to_currency": "EUR",
  "amount": 10000.00,
  "locked_rate": 0.8500,
  "converted_amount": 8500.00,
  "lock_duration": 600,
  "expires_at": "2024-01-15T14:40:00Z",
  "fees": {
    "conversion_fee": 25.00,
    "lock_fee": 5.00,
    "total_fees": 30.00
  },
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conversion Fees */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Conversion
                            Fees & Limits</h2>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <DollarSign
                                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-green-800 dark:text-green-200">Competitive
                                        Rates</h3>
                                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                                        Industry-leading exchange rates with transparent fees. No hidden markups or
                                        surprise charges.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Conversion
                                            Amount
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Spread</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing
                                            Time
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">$1 -
                                            $1,000
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.5% (min
                                            $2.50)
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.25%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">$1,000
                                            - $10,000
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.25% (min
                                            $5.00)
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.20%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">$10,000
                                            - $100,000
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.15% (min
                                            $25.00)
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.15%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Over
                                            $100,000
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.10% (min
                                            $150.00)
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">0.10%</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Market Hours & Considerations */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Market Hours &
                            Considerations</h2>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Weekend &
                                        Holiday Rates</h3>
                                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                                        Exchange rates may be less favorable during weekends and holidays when major
                                        forex markets are closed. Consider timing for large conversions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Globe className="h-8 w-8 text-blue-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7
                                    Availability</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Currency conversions are available 24/7, even when major forex markets are closed.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Real-time rates during market hours</li>
                                    <li>• Last available rates during closures</li>
                                    <li>• Instant settlement in wallet</li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <TrendingUp className="h-8 w-8 text-green-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Rate
                                    Optimization</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Our system aggregates rates from multiple liquidity providers to ensure competitive
                                    pricing.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Multiple liquidity sources</li>
                                    <li>• Smart order routing</li>
                                    <li>• Transparent fee structure</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Payout Reports",
                        href: "/payout/report"
                    }}
                    nextPage={{
                        title: "Collections",
                        href: "/collection"
                    }}
                />

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default PayoutConvertFunds;