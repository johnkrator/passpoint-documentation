import {RefreshCw, DollarSign, TrendingUp, Globe, CheckCircle, Clock} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutConvertFunds = () => {
    const getConvertCurrencyEndpointCode = () => {
        return `POST /api/v1/wallet/convert`;
    };

    const getConvertCurrencyRequestBodyCode = () => {
        return `{
  "from_currency": "USD",
  "to_currency": "EUR",
  "amount": 1000.00,
  "rate_lock_duration": 300,
  "reference": "conversion_001",
  "description": "Portfolio rebalancing"
}`;
    };

    const getConvertCurrencyResponseCode = () => {
        return `{
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
}`;
    };

    const getExchangeRatesEndpointCode = () => {
        return `GET /api/v1/exchange-rates`;
    };

    const getExchangeRatesQueryParamsCode = () => {
        return `{
  "base_currency": "USD",
  "target_currencies": ["EUR", "GBP", "JPY"],
  "amount": 1000.00
}`;
    };

    const getExchangeRatesResponseCode = () => {
        return `{
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
  "valid_until": "2024-01-15T14:35:00Z"
}`;
    };

    const getConversionHistoryEndpointCode = () => {
        return `GET /api/v1/wallet/conversions`;
    };

    const getConversionHistoryQueryParamsCode = () => {
        return `{
  "start_date": "2024-01-01",
  "end_date": "2024-01-31",
  "currency_pair": "USD/EUR",
  "page": 1,
  "limit": 20
}`;
    };

    const getConversionHistoryResponseCode = () => {
        return `{
  "conversions": [
    {
      "conversion_id": "conv_abc123def456",
      "status": "completed",
      "from_currency": "USD",
      "to_currency": "EUR",
      "from_amount": 1000.00,
      "to_amount": 850.00,
      "exchange_rate": 0.8500,
      "fees": {
        "conversion_fee": 5.00,
        "total_fees": 5.00
      },
      "reference": "conversion_001",
      "completed_at": "2024-01-15T14:30:00Z"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 3,
    "total_records": 45,
    "per_page": 20
  }
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
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
                                            <CodeBlock>{getConvertCurrencyEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getConvertCurrencyRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getConvertCurrencyResponseCode()}</CodeBlock>
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
                                            <CodeBlock>{getExchangeRatesEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{getExchangeRatesQueryParamsCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getExchangeRatesResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conversion History */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Conversion
                            History</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Clock className="h-12 w-12 text-purple-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">View
                                        History</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve historical currency conversion transactions with detailed information
                                        about rates, fees, and status.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getConversionHistoryEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock
                                                language="json">{getConversionHistoryQueryParamsCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getConversionHistoryResponseCode()}</CodeBlock>
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
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                <div className="text-center">
                                    <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Major
                                        Currencies</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">USD, EUR, GBP, JPY, CHF,
                                        CAD, AUD</p>
                                </div>
                                <div className="text-center">
                                    <Globe className="h-12 w-12 text-blue-500 mx-auto mb-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Regional
                                        Currencies</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">NGN, ZAR, CNY, INR, KRW,
                                        SGD</p>
                                </div>
                                <div className="text-center">
                                    <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Emerging
                                        Markets</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">BRL, MXN, TRY, PHP, THB,
                                        MYR</p>
                                </div>
                                <div className="text-center">
                                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">40+
                                        Total</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">All major global currencies
                                        supported</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Payout",
                        href: "/payout"
                    }}
                    nextPage={{
                        title: "Bank Payouts",
                        href: "/payout/bank"
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
