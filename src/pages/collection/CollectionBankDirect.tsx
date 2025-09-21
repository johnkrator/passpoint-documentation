import {DollarSign, BarChart3, Building2, CheckCircle, Globe, Clock, AlertTriangle, Shield} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const CollectionBankDirect = () => {
    // Code block methods
    const getCollectionCurrencyEndpoint = () => `GET /api/v1/collection/currencies`;

    const getCollectionCurrencyParams = () => `{
  "country": "US",
  "account_type": "virtual",
  "settlement_method": "real_time"
}`;

    const getCollectionCurrencyResponse = () => `{
  "currencies": [
    {
      "currency": "USD",
      "country": "US",
      "name": "US Dollar",
      "symbol": "$",
      "collection_methods": ["ach", "wire", "rtp", "fednow"],
      "virtual_account_support": true,
      "settlement_times": {
        "ach": "1-3 business days",
        "wire": "same day",
        "rtp": "instant",
        "fednow": "instant"
      },
      "fees": {
        "virtual_account_monthly": 0.00,
        "ach_collection": 0.75,
        "wire_collection": 15.00,
        "instant_collection": 1.25
      },
      "limits": {
        "min_amount": 0.01,
        "max_amount_ach": 500000.00,
        "max_amount_wire": 10000000.00
      },
      "status": "active"
    }
  ],
  "total_currencies": 12,
  "supported_regions": ["US", "EU", "UK", "NG"]
}`;

    const getNgnStaticVirtualAccountEndpoint = () => `POST /api/v1/virtual-accounts/ngn/static`;

    const getNgnStaticVirtualAccountRequest = () => `{
  "account_name": "John Doe Collections",
  "account_reference": "JD-STATIC-001",
  "customer": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone": "+234801234567",
    "address": {
      "street": "123 Victoria Island",
      "city": "Lagos",
      "state": "Lagos",
      "postal_code": "101001",
      "country": "NG"
    }
  },
  "webhook_url": "https://yourapp.com/webhooks/collections",
  "auto_settlement": true,
  "settlement_account": "settlement_acc_123"
}`;

    const getNgnStaticVirtualAccountResponse = () => `{
  "virtual_account_id": "va_ngn_static_abc123",
  "account_name": "John Doe Collections",
  "account_number": "2234567890",
  "bank_name": "Passpoint Microfinance Bank",
  "bank_code": "50746",
  "currency": "NGN",
  "type": "static",
  "status": "active",
  "reference": "JD-STATIC-001",
  "settlement_account": "settlement_acc_123",
  "auto_settlement_enabled": true,
  "created_at": "2024-01-15T14:30:00Z",
  "expires_at": null
}`;

    const getUsdIndividualVirtualAccountEndpoint = () => `POST /api/v1/virtual-accounts/usd/individual`;

    const getUsdIndividualVirtualAccountRequest = () => `{
  "customer": {
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "phone": "+15551234567",
    "date_of_birth": "1990-05-15",
    "ssn_last_4": "1234"
  },
  "account_purpose": "personal_savings",
  "expected_monthly_volume": 50000.00,
  "webhook_url": "https://yourapp.com/webhooks/collections"
}`;

    const getUsdBusinessVirtualAccountEndpoint = () => `POST /api/v1/virtual-accounts/usd/business`;

    const getUsdBusinessVirtualAccountRequest = () => `{
  "business": {
    "legal_name": "Tech Innovations LLC",
    "dba_name": "TechInno",
    "ein": "12-3456789",
    "industry": "technology",
    "business_type": "llc"
  },
  "authorized_representative": {
    "first_name": "Michael",
    "last_name": "Johnson",
    "title": "CEO",
    "email": "michael@techinno.com",
    "phone": "+15551234567"
  },
  "expected_monthly_volume": 500000.00,
  "webhook_url": "https://yourapp.com/webhooks/collections"
}`;

    const getManageNgnVirtualAccountsEndpoint = () => `GET /api/v1/virtual-accounts/ngn`;

    const getManageNgnVirtualAccountsParams = () => `{
  "customer_id": "cust_123",
  "status": "active",
  "limit": 50,
  "offset": 0
}`;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Direct Bank
                        Options</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Generate virtual accounts and manage direct bank integrations for automated collections. Support
                        for ACH, SEPA, local clearing systems, and real-time settlement across multiple currencies and
                        regions.
                    </p>

                    {/* Get Collection Currency */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Collection
                            Currency</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <DollarSign className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Collection
                                        Currency</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve supported currencies for direct bank collections, including exchange
                                        rates, processing fees, and settlement times for each currency.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getCollectionCurrencyEndpoint()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{getCollectionCurrencyParams()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getCollectionCurrencyResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Generate NGN Static Virtual Account */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Generate NGN
                            Static Virtual Account</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Building2 className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">NGN
                                        Virtual Account</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Generate a static NGN virtual account for collecting Nigerian Naira payments
                                        with
                                        automatic settlement to your designated account.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getNgnStaticVirtualAccountEndpoint()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getNgnStaticVirtualAccountRequest()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock
                                                language="json">{getNgnStaticVirtualAccountResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* USD Virtual Accounts */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">USD Virtual
                            Accounts</h2>

                        <div className="space-y-6 lg:grid lg:gap-6 lg:grid-cols-2 lg:space-y-0">
                            {/* Individual Account */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Building2 className="h-8 w-8 text-blue-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Individual
                                        Account</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                                    Generate USD virtual accounts for individual customers with ACH, wire, and RTP
                                    support.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                        <CodeBlock>{`POST /api/v1/virtual-accounts/usd/individual`}</CodeBlock>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Request
                                            Body</h4>
                                        <CodeBlock language="json">{`{
  "customer": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "ssn_last_4": "1234",
    "date_of_birth": "1990-05-15",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    }
  },
  "account_purpose": "freelancer_payments"
}`}</CodeBlock>
                                    </div>
                                </div>
                            </div>

                            {/* Business Account */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Building2 className="h-8 w-8 text-purple-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business
                                        Account</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                                    Generate USD virtual accounts for business customers with enhanced limits and
                                    compliance features.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                        <CodeBlock>{`POST /api/v1/virtual-accounts/usd/business`}</CodeBlock>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Request
                                            Body</h4>
                                        <CodeBlock language="json">{`{
  "business": {
    "name": "Doe Consulting LLC",
    "ein": "12-3456789",
    "address": {
      "street": "456 Business Ave",
      "city": "New York",
      "state": "NY",
      "zip": "10002"
    },
    "business_type": "llc",
    "industry": "consulting"
  },
  "account_purpose": "client_payments"
}`}</CodeBlock>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* List Virtual Accounts */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">List Virtual
                            Accounts - NGN - Paginated</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <BarChart3 className="h-12 w-12 text-orange-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">List
                                        Accounts</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve a paginated list of all NGN virtual accounts with status, balance
                                        information, and collection statistics.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`GET /api/v1/virtual-accounts/ngn`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{`{
  "limit": 25,
  "offset": 0,
  "status": "active",
  "customer_id": "cust_ngn_001",
  "created_after": "2024-01-01T00:00:00Z",
  "sort": "created_at",
  "order": "desc"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "virtual_accounts": [
    {
      "virtual_account_id": "va_ngn_abc123",
      "account_number": "2034567890",
      "account_name": "John Doe Collections",
      "bank_name": "Passpoint Bank",
      "currency": "NGN",
      "status": "active",
      "balance": 150000.00,
      "customer": {
        "name": "John Doe",
        "customer_id": "cust_ngn_001"
      },
      "stats": {
        "total_collections": 45,
        "total_amount_collected": 2500000.00,
        "last_collection": "2024-01-14T16:22:00Z"
      },
      "created_at": "2024-01-10T14:30:00Z"
    }
  ],
  "pagination": {
    "total_count": 237,
    "limit": 25,
    "offset": 0,
    "has_more": true
  }
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Virtual Account */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Virtual
                            Account</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <BarChart3 className="h-12 w-12 text-teal-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                        Account Details</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve detailed information about a specific virtual account including
                                        balance, transaction history, and collection statistics.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`GET /api/v1/virtual-accounts/{account_id}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "virtual_account_id": "va_ngn_abc123",
  "account_number": "2034567890",
  "account_name": "John Doe Collections",
  "bank_name": "Passpoint Bank",
  "bank_code": "999999",
  "currency": "NGN",
  "status": "active",
  "balance": {
    "available": 150000.00,
    "pending": 25000.00,
    "total": 175000.00
  },
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+2348012345678",
    "customer_id": "cust_ngn_001"
  },
  "settings": {
    "auto_settlement": {
      "enabled": true,
      "threshold": 100000.00,
      "settlement_account": "main_wallet"
    },
    "webhook_url": "https://yourapp.com/webhooks/ngn-collection"
  },
  "statistics": {
    "total_collections": 45,
    "total_amount_collected": 2500000.00,
    "average_collection_amount": 55555.56,
    "last_collection": "2024-01-14T16:22:00Z",
    "this_month": {
      "collections_count": 12,
      "collections_amount": 650000.00
    }
  },
  "recent_transactions": [
    {
      "transaction_id": "txn_ngn_xyz789",
      "amount": 75000.00,
      "description": "Customer payment",
      "sender_name": "Jane Smith",
      "sender_account": "****6789",
      "status": "completed",
      "created_at": "2024-01-14T16:22:00Z"
    }
  ],
  "created_at": "2024-01-10T14:30:00Z",
  "updated_at": "2024-01-14T16:22:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Virtual Account Benefits */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Virtual
                            Account Benefits</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Automated Collection */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <CheckCircle className="h-8 w-8 text-green-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Automated
                                    Collection</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Automatic payment collection with real-time settlement and instant balance updates.
                                </p>
                            </div>

                            {/* Unique Account Numbers */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <Building2 className="h-8 w-8 text-blue-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Unique
                                    Identifiers</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Each virtual account has a unique number for easy payment tracking and
                                    reconciliation.
                                </p>
                            </div>

                            {/* Multi-Currency */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <Globe className="h-8 w-8 text-purple-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Multi-Currency</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Support for USD, EUR, GBP, NGN and other major currencies with local clearing.
                                </p>
                            </div>

                            {/* Real-Time Settlement */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <Clock className="h-8 w-8 text-orange-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-Time
                                    Settlement</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Instant settlement to your main wallet with configurable thresholds and schedules.
                                </p>
                            </div>

                            {/* Compliance Ready */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <Shield className="h-8 w-8 text-red-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compliance
                                    Ready</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Built-in AML monitoring and regulatory compliance for all supported jurisdictions.
                                </p>
                            </div>

                            {/* Detailed Reporting */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <BarChart3 className="h-8 w-8 text-teal-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed
                                    Reporting</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Comprehensive transaction reporting with export capabilities and real-time
                                    analytics.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Fees & Limits */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Fees &
                            Limits</h2>

                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <CheckCircle
                                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-green-800 dark:text-green-200">Competitive
                                        Rates</h3>
                                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                                        Industry-leading collection fees with no setup costs and transparent pricing
                                        across all currencies.
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
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Currency</th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Collection
                                            Fee
                                        </th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Settlement
                                            Time
                                        </th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Daily
                                            Limit
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">USD</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">0.5%
                                            + $0.25
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">Real-time</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$500,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">EUR</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">0.4%
                                            + €0.30
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">Real-time</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">€400,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">GBP</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">0.4%
                                            + £0.25
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">Real-time</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">£300,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">NGN</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">0.75%
                                            + ₦50
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">₦50,000,000</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Security & Compliance */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Security &
                            Compliance</h2>

                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Regulatory
                                        Compliance</h3>
                                    <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                                        Virtual accounts are subject to banking regulations and AML requirements in each
                                        supported jurisdiction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Shield className="h-8 w-8 text-blue-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bank-Grade
                                    Security</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    All virtual accounts are protected by the same security measures as traditional bank
                                    accounts.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• 256-bit SSL encryption</li>
                                    <li>• Multi-factor authentication</li>
                                    <li>• Real-time fraud monitoring</li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <Building2 className="h-8 w-8 text-green-500 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Licensed &
                                    Regulated</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Licensed as a money service business with full regulatory compliance in all
                                    operating jurisdictions.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• FDIC insured (US accounts)</li>
                                    <li>• FCA regulated (UK accounts)</li>
                                    <li>• CBN licensed (Nigerian accounts)</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Bank Collections",
                        href: "/collection/bank"
                    }}
                    nextPage={{
                        title: "Open Banking Collections",
                        href: "/collection/bank/open-banking"
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

export default CollectionBankDirect;

