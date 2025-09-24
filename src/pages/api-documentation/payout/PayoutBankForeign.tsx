import {
    MapPin,
    CreditCard,
    Banknote,
    Zap,
    ArrowDownToLine,
    ArrowRightLeft,
    Globe,
    AlertTriangle
} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const PayoutBankForeign = () => {
    const getAvailableCountriesEndpointCode = () => {
        return `GET /api/v1/countries/payout`;
    };

    const getAvailableCountriesQueryParamsCode = () => {
        return `{
  "region": "europe",
  "currency": "EUR",
  "payment_method": "wire",
  "limit": 50
}`;
    };

    const getAvailableCountriesResponseCode = () => {
        return `{
  "countries": [
    {
      "country_code": "GB",
      "country_name": "United Kingdom",
      "region": "europe",
      "currencies": ["GBP", "EUR", "USD"],
      "payment_methods": ["wire", "faster_payments", "sepa"],
      "processing_times": {
        "wire": "1-2 business days",
        "faster_payments": "instant",
        "sepa": "1 business day"
      },
      "compliance_level": "standard",
      "status": "active"
    }
  ],
  "total_countries": 247,
  "supported_currencies": 40
}`;
    };

    const getPaymentMethodsEndpointCode = () => {
        return `GET /api/v1/payment-methods/international`;
    };

    const getPaymentMethodsQueryParamsCode = () => {
        return `{
  "country": "GB",
  "currency": "GBP",
  "amount": 1000.00
}`;
    };

    const getPaymentMethodsResponseCode = () => {
        return `{
  "payment_methods": [
    {
      "method_id": "wire_gbp",
      "name": "Wire Transfer",
      "type": "wire",
      "currency": "GBP",
      "processing_time": "1-2 business days",
      "fees": {
        "fixed_fee": 25.00,
        "percentage_fee": 0.0015,
        "total_estimated_fee": 26.50
      },
      "limits": {
        "min_amount": 1.00,
        "max_amount": 1000000.00
      },
      "required_fields": ["iban", "swift_code", "beneficiary_name"],
      "status": "active"
    }
  ]
}`;
    };

    const getInternationalTransferEndpointCode = () => {
        return `POST /api/v1/payouts/international`;
    };

    const getInternationalTransferRequestBodyCode = () => {
        return `{
  "recipient": {
    "country": "GB",
    "currency": "GBP",
    "payment_method": "wire",
    "bank_details": {
      "iban": "GB29NWBK60161331926819",
      "swift_code": "NWBKGB2L",
      "account_holder_name": "John Smith",
      "bank_name": "NatWest Bank"
    },
    "address": {
      "street": "123 High Street",
      "city": "London",
      "postal_code": "SW1A 1AA",
      "country": "GB"
    }
  },
  "amount": 1000.00,
  "source_currency": "USD",
  "target_currency": "GBP",
  "purpose": "freelancer_payment",
  "description": "Website development services",
  "reference": "INV-2024-001",
  "callback_url": "https://yourapp.com/webhooks/payout"
}`;
    };

    const getInternationalTransferResponseCode = () => {
        return `{
  "transfer_id": "transfer_intl_abc123",
  "status": "pending_compliance",
  "recipient": {
    "country": "GB",
    "currency": "GBP",
    "bank_details": {
      "iban": "GB29****1331926819",
      "swift_code": "NWBKGB2L",
      "account_holder_name": "John Smith",
      "bank_name": "NatWest Bank"
    }
  },
  "amount": 1000.00,
  "source_currency": "USD",
  "target_currency": "GBP",
  "exchange_rate": 0.7850,
  "target_amount": 785.00,
  "fees": {
    "transfer_fee": 25.00,
    "fx_spread": 0.0025,
    "total_fees": 26.96
  },
  "compliance_checks": {
    "aml_status": "pending",
    "sanctions_check": "clear"
  },
  "estimated_delivery": "2024-01-17T16:00:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">International Bank
                        Transfers</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Send money globally with multiple payment methods including wire transfers, ACH, RTP, FedNow,
                        and local payment networks across 200+ countries and territories.
                    </p>

                    {/* Get Available Countries */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Available
                            Countries</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <MapPin className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Available
                                        Countries</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve a comprehensive list of countries where international payouts are
                                        supported, including payment methods and processing times for each destination.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getAvailableCountriesEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock
                                                language="json">{getAvailableCountriesQueryParamsCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getAvailableCountriesResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Payment Methods */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Payment
                            Methods</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CreditCard className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Payment
                                        Methods</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Get available payment methods for a specific country and currency combination
                                        with detailed fee structures and processing times.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getPaymentMethodsEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{getPaymentMethodsQueryParamsCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getPaymentMethodsResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* International Transfer */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">International
                            Transfer</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Globe className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Send
                                        Internationally</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Execute international bank transfers with automatic currency conversion,
                                        compliance checks, and real-time status tracking.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getInternationalTransferEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock
                                                language="json">{getInternationalTransferRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock
                                                language="json">{getInternationalTransferResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Methods Grid */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Supported
                            Payment Methods</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {/* Wire Transfer */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Banknote className="h-8 w-8 text-blue-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wire
                                        Transfer</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Traditional bank-to-bank
                                    transfers</p>
                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                    <p>• 1-3 business days</p>
                                    <p>• $15-50 fee</p>
                                    <p>• Global coverage</p>
                                </div>
                            </div>

                            {/* ACH */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <ArrowRightLeft className="h-8 w-8 text-green-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ACH</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">US domestic automated
                                    transfers</p>
                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                    <p>• Same day - 1 business day</p>
                                    <p>• $0.75-2.50 fee</p>
                                    <p>• US only</p>
                                </div>
                            </div>

                            {/* RTP */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Zap className="h-8 w-8 text-yellow-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">RTP</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Real-time payments
                                    network</p>
                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                    <p>• Instant</p>
                                    <p>• $1.25 fee</p>
                                    <p>• US real-time network</p>
                                </div>
                            </div>

                            {/* FedNow */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <ArrowDownToLine className="h-8 w-8 text-purple-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FedNow</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Federal Reserve instant
                                    payments</p>
                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                    <p>• Instant</p>
                                    <p>• $1.25 fee</p>
                                    <p>• US Fed network</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Compliance Notice */}
                    <section className="mb-16">
                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-base font-semibold text-orange-800 dark:text-orange-200 mb-2">Compliance
                                        Requirements</h3>
                                    <div className="text-orange-700 dark:text-orange-300 space-y-2">
                                        <p><strong>High-Value Transfers:</strong> Transfers over $3,000 USD may require
                                            additional documentation and compliance review.</p>
                                        <p><strong>Sanctions Screening:</strong> All international transfers are
                                            screened against global sanctions lists.</p>
                                        <p><strong>Documentation:</strong> Purpose of payment and beneficiary
                                            information required for all international transfers.</p>
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

export default PayoutBankForeign;

