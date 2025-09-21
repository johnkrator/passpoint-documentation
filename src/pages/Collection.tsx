import {Download, CreditCard, Banknote, Clock, CheckCircle, XCircle, AlertTriangle, QrCode} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const Collection = () => {
    const getCreatePaymentLinkEndpoint = () => {
        return `POST /api/v1/collections/payment-links`;
    };

    const getCreatePaymentLinkRequestBody = () => {
        return `{
  "amount": 299.99,
  "currency": "USD",
  "description": "Premium Subscription - Monthly",
  "reference": "sub_premium_202401_001",
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe",
    "phone": "+1234567890"
  },
  "payment_methods": ["card", "bank_transfer", "digital_wallet"],
  "redirect_urls": {
    "success": "https://yourapp.com/payment/success",
    "cancel": "https://yourapp.com/payment/cancel",
    "failure": "https://yourapp.com/payment/failure"
  },
  "expiry": "2024-01-31T23:59:59Z",
  "metadata": {
    "product_id": "premium_sub",
    "plan_type": "monthly",
    "customer_id": "cust_1234567890"
  },
  "customization": {
    "theme_color": "#0099c2",
    "logo_url": "https://yourapp.com/logo.png",
    "business_name": "Your Business"
  },
  "callback_url": "https://yourapp.com/webhooks/payment"
}`;
    };

    const getCreatePaymentLinkResponse = () => {
        return `{
  "id": "link_abc123def456",
  "payment_url": "https://pay.passpoint.com/link/abc123def456",
  "qr_code_url": "https://pay.passpoint.com/qr/abc123def456.png",
  "amount": 299.99,
  "currency": "USD",
  "description": "Premium Subscription - Monthly",
  "reference": "sub_premium_202401_001",
  "status": "active",
  "payment_methods": ["card", "bank_transfer", "digital_wallet"],
  "expiry": "2024-01-31T23:59:59Z",
  "visits": 0,
  "payments_received": 0,
  "total_collected": 0.00,
  "created_at": "2024-01-15T10:30:00Z"
}`;
    };

    const getDirectPaymentEndpoint = () => {
        return `POST /api/v1/collections/payments`;
    };

    const getDirectPaymentRequestBody = () => {
        return `{
  "amount": 149.99,
  "currency": "USD",
  "payment_method": {
    "type": "card",
    "card": {
      "number": "4111111111111111",
      "exp_month": "12",
      "exp_year": "2025",
      "cvc": "123",
      "cardholder_name": "John Doe"
    },
    "billing_address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "postal_code": "10001",
      "country": "US"
    }
  },
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe",
    "phone": "+1234567890"
  },
  "description": "Online Course - Advanced React",
  "reference": "course_react_adv_001",
  "metadata": {
    "course_id": "react_advanced",
    "student_id": "student_789",
    "enrollment_type": "full_access"
  },
  "capture": true,
  "callback_url": "https://yourapp.com/webhooks/payment"
}`;
    };

    const getDirectPaymentResponse = () => {
        return `{
  "id": "payment_xyz789abc123",
  "status": "succeeded",
  "amount": 149.99,
  "currency": "USD",
  "payment_method": {
    "type": "card",
    "card": {
      "brand": "visa",
      "last_four": "1111",
      "exp_month": "12",
      "exp_year": "2025"
    }
  },
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe"
  },
  "description": "Online Course - Advanced React",
  "reference": "course_react_adv_001",
  "fees": {
    "processing_fee": 4.65,
    "network_fee": 0.30,
    "total_fees": 4.95
  },
  "net_amount": 145.04,
  "created_at": "2024-01-15T14:22:00Z",
  "captured_at": "2024-01-15T14:22:01Z"
}`;
    };

    const getPaymentStatusEndpoint = () => {
        return `GET /api/v1/collections/payments/{payment_id}`;
    };

    const getPaymentStatusResponse = () => {
        return `{
  "id": "payment_xyz789abc123",
  "status": "succeeded",
  "amount": 149.99,
  "currency": "USD",
  "payment_method": {
    "type": "card",
    "card": {
      "brand": "visa",
      "last_four": "1111",
      "exp_month": "12",
      "exp_year": "2025"
    }
  },
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe"
  },
  "description": "Online Course - Advanced React",
  "reference": "course_react_adv_001",
  "fees": {
    "processing_fee": 4.65,
    "network_fee": 0.30,
    "total_fees": 4.95
  },
  "net_amount": 145.04,
  "settlement": {
    "status": "pending",
    "estimated_date": "2024-01-17T00:00:00Z",
    "batch_id": "batch_settlement_20240117"
  },
  "risk_assessment": {
    "fraud_score": 0.15,
    "risk_level": "low",
    "checks_passed": ["cvv", "address", "velocity"]
  },
  "created_at": "2024-01-15T14:22:00Z",
  "captured_at": "2024-01-15T14:22:01Z"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Collection</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Collect payments from customers through multiple channels including payment links, QR codes, and
                        direct API integration. Support for cards, bank transfers, and digital wallets.
                    </p>

                    {/* Create Payment Link */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Create Payment
                            Link</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Download className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Create
                                        Payment Link</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Generate secure payment links for invoices, products, or services with
                                        customizable amounts and payment methods.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getCreatePaymentLinkEndpoint()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getCreatePaymentLinkRequestBody()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getCreatePaymentLinkResponse()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Direct Payment Collection */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Direct Payment
                            Collection</h2>

                        <div className="space-y-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <CreditCard className="h-12 w-12 text-brand-500"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Process
                                            Direct Payment</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Collect payments directly through API integration with support for cards,
                                            ACH, and alternative payment methods.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getDirectPaymentEndpoint()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                    Body (Card Payment)</h4>
                                                <CodeBlock language="json">{getDirectPaymentRequestBody()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getDirectPaymentResponse()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Methods */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Supported
                            Payment Methods</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <CreditCard className="h-8 w-8 text-blue-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Credit/Debit
                                        Cards</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Accept Visa, Mastercard, American Express, and Discover cards with instant
                                    processing.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">Instant</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">2.9% + $0.30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Chargeback Risk:</span>
                                        <span className="text-gray-900 dark:text-white">Yes</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Banknote className="h-8 w-8 text-green-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ACH Bank
                                        Transfer</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Direct bank account debits with lower fees and reduced chargeback risk.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">1-3 business days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">0.8% + $0.30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Chargeback Risk:</span>
                                        <span className="text-gray-900 dark:text-white">Low</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <QrCode className="h-8 w-8 text-purple-500 mr-3"/>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digital
                                        Wallets</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Apple Pay, Google Pay, PayPal, and other popular digital payment methods.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">Instant</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">2.7% + $0.30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Chargeback Risk:</span>
                                        <span className="text-gray-900 dark:text-white">Medium</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Status Tracking */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Payment Status
                            Tracking</h2>

                        <div className="space-y-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Clock className="h-12 w-12 text-brand-500"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                            Payment Status</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Monitor payment progress, view transaction details, and track settlement
                                            status.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getPaymentStatusEndpoint()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getPaymentStatusResponse()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Values */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <div
                                    className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2"/>
                                        <span
                                            className="font-semibold text-yellow-800 dark:text-yellow-200">pending</span>
                                    </div>
                                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">Payment initiated,
                                        awaiting processing</p>
                                </div>

                                <div
                                    className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"/>
                                        <span
                                            className="font-semibold text-blue-800 dark:text-blue-200">processing</span>
                                    </div>
                                    <p className="text-blue-700 dark:text-blue-300 text-sm">Payment being processed by
                                        network</p>
                                </div>

                                <div
                                    className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2"/>
                                        <span
                                            className="font-semibold text-green-800 dark:text-green-200">succeeded</span>
                                    </div>
                                    <p className="text-green-700 dark:text-green-300 text-sm">Payment completed
                                        successfully</p>
                                </div>

                                <div
                                    className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2"/>
                                        <span className="font-semibold text-red-800 dark:text-red-200">failed</span>
                                    </div>
                                    <p className="text-red-700 dark:text-red-300 text-sm">Payment failed or was
                                        declined</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Recurring Collections */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Recurring
                            Collections</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Clock className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Setup
                                        Recurring Payments</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Create subscription-based recurring payment schedules with flexible billing
                                        intervals and automatic retry logic.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST /api/v1/collections/subscriptions`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "customer": {
    "email": "subscriber@example.com",
    "name": "Jane Smith",
    "phone": "+1234567890"
  },
  "payment_method": {
    "type": "card",
    "card": {
      "number": "4111111111111111",
      "exp_month": "12",
      "exp_year": "2025",
      "cvc": "123",
      "cardholder_name": "Jane Smith"
    }
  },
  "plan": {
    "amount": 29.99,
    "currency": "USD",
    "interval": "monthly",
    "interval_count": 1,
    "description": "Pro Plan Monthly Subscription"
  },
  "trial_period_days": 14,
  "start_date": "2024-01-29T00:00:00Z",
  "metadata": {
    "plan_id": "pro_monthly",
    "customer_segment": "enterprise",
    "signup_source": "website"
  },
  "callback_url": "https://yourapp.com/webhooks/subscription"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "id": "sub_def456ghi789",
  "status": "trialing",
  "customer": {
    "email": "subscriber@example.com",
    "name": "Jane Smith"
  },
  "plan": {
    "amount": 29.99,
    "currency": "USD",
    "interval": "monthly",
    "interval_count": 1,
    "description": "Pro Plan Monthly Subscription"
  },
  "current_period_start": "2024-01-15T10:30:00Z",
  "current_period_end": "2024-01-29T10:30:00Z",
  "trial_end": "2024-01-29T10:30:00Z",
  "next_billing_date": "2024-01-29T10:30:00Z",
  "payments_count": 0,
  "total_collected": 0.00,
  "created_at": "2024-01-15T10:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Fraud Prevention */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Fraud
                            Prevention</h2>

                        <div
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <AlertTriangle
                                    className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-3"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Fraud
                                        Protection</h3>
                                    <p className="text-orange-700 dark:text-orange-300 text-sm mt-1">
                                        All payments are automatically screened using machine learning models and risk
                                        assessment algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fraud
                                            Check
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action
                                            on Failure
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">CVV
                                            Verification
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Validates
                                            card security code
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Payment
                                            declined
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Address
                                            Verification
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Matches
                                            billing address with card issuer
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual review
                                            required
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Velocity
                                            Checking
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Monitors
                                            payment frequency and amounts
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Temporary
                                            block applied
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Device
                                            Fingerprinting
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Analyzes
                                            device and browser characteristics
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Risk score
                                            increased
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Machine
                                            Learning
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">AI-powered
                                            fraud pattern detection
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Payment
                                            flagged for review
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation/>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default Collection;

