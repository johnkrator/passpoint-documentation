import {
    ArrowLeft,
    ArrowRight,
    Download,
    CreditCard,
    Banknote,
    Clock,
    CheckCircle,
    XCircle,
    AlertTriangle,
    QrCode
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";

const Collection = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="prose prose-invert max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Collection</h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    Collect payments from customers through multiple channels including payment links, QR codes, and
                    direct API integration. Support for cards, bank transfers, and digital wallets.
                </p>

                {/* Create Payment Link */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Payment Link</h2>

                    <div
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                            <Download className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Create Payment
                                    Link</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Generate secure payment links for invoices, products, or services with customizable
                                    amounts and payment methods.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                        <div
                                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                                            <span
                                                className="text-green-600 dark:text-green-400">POST</span> /api/v1/collections/payment-links
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                            Body</h4>
                                        <div
                                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                        <div
                                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Direct Payment Collection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Direct Payment Collection</h2>

                    <div className="space-y-8">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <CreditCard className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Process
                                        Direct Payment</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Collect payments directly through API integration with support for cards, ACH,
                                        and alternative payment methods.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <div
                                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                                                <span
                                                    className="text-green-600 dark:text-green-400">POST</span> /api/v1/collections/payments
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body (Card Payment)</h4>
                                            <div
                                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <div
                                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Methods */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Supported Payment Methods</h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Credit/Debit Cards */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <CreditCard className="h-8 w-8 text-blue-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Credit/Debit
                                    Cards</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                Accept Visa, Mastercard, American Express, and Discover cards with instant processing.
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

                        {/* ACH Bank Transfer */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
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

                        {/* Digital Wallets */}
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <QrCode className="h-8 w-8 text-purple-500 mr-3"/>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digital Wallets</h3>
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
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payment Status Tracking</h2>

                    <div className="space-y-8">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <Clock className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Payment
                                        Status</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Monitor payment progress, view transaction details, and track settlement status.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <div
                                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                                                <span
                                                    className="text-blue-600 dark:text-blue-400">GET</span> /api/v1/collections/payments/{`{payment_id}`}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <div
                                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                            </div>
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
                                    <span className="font-semibold text-yellow-800 dark:text-yellow-200">pending</span>
                                </div>
                                <p className="text-yellow-700 dark:text-yellow-300 text-sm">Payment initiated, awaiting
                                    processing</p>
                            </div>

                            <div
                                className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"/>
                                    <span className="font-semibold text-blue-800 dark:text-blue-200">processing</span>
                                </div>
                                <p className="text-blue-700 dark:text-blue-300 text-sm">Payment being processed by
                                    network</p>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2"/>
                                    <span className="font-semibold text-green-800 dark:text-green-200">succeeded</span>
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
                                <p className="text-red-700 dark:text-red-300 text-sm">Payment failed or was declined</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recurring Collections */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recurring Collections</h2>

                    <div
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                            <Clock className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1"/>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Setup Recurring
                                    Payments</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Create subscription-based recurring payment schedules with flexible billing
                                    intervals and automatic retry logic.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                        <div
                                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                                            <span
                                                className="text-green-600 dark:text-green-400">POST</span> /api/v1/collections/subscriptions
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                            Body</h4>
                                        <div
                                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                        <div
                                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
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
}`}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fraud Prevention */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Fraud Prevention</h2>

                    <div
                        className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
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
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
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
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Validates card
                                        security code
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Payment
                                        declined
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Address
                                        Verification
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Matches billing
                                        address with card issuer
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual review
                                        required
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Velocity
                                        Checking
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Monitors payment
                                        frequency and amounts
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Temporary block
                                        applied
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Device
                                        Fingerprinting
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Analyzes device
                                        and browser characteristics
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Risk score
                                        increased
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Machine
                                        Learning
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">AI-powered fraud
                                        pattern detection
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Payment flagged
                                        for review
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h2>

                    <div className="space-y-6">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Node.js - Create
                                Payment Link and Monitor Status
                            </div>
                            <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`const passpoint = require('@passpoint/sdk');

const client = new passpoint.Client({
  apiKey: process.env.PASSPOINT_API_KEY
});

async function createPaymentLinkWithMonitoring(linkData) {
  try {
    // Create payment link
    const paymentLink = await client.collections.createPaymentLink({
      amount: linkData.amount,
      currency: 'USD',
      description: linkData.description,
      reference: linkData.reference,
      customer: linkData.customer,
      payment_methods: ['card', 'bank_transfer', 'digital_wallet'],
      redirect_urls: {
        success: 'https://yourapp.com/payment/success',
        cancel: 'https://yourapp.com/payment/cancel',
        failure: 'https://yourapp.com/payment/failure'
      },
      expiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
      customization: {
        theme_color: '#0099c2',
        logo_url: 'https://yourapp.com/logo.png',
        business_name: 'Your Business'
      },
      callback_url: 'https://yourapp.com/webhooks/payment'
    });

    console.log('Payment link created:', paymentLink.payment_url);
    console.log('QR Code URL:', paymentLink.qr_code_url);

    // Monitor payment link activity
    const monitorLink = async () => {
      const status = await client.collections.getPaymentLink(paymentLink.id);

      console.log(\`Link visits: \${status.visits}\`);
      console.log(\`Payments received: \${status.payments_received}\`);
      console.log(\`Total collected: $\${status.total_collected}\`);

      if (status.payments_received > 0) {
        console.log('Payment received! Processing...');

        // Get payment details
        const payments = await client.collections.getPaymentLinkPayments(paymentLink.id);
        payments.forEach(payment => {
          console.log(\`Payment \${payment.id}: \${payment.status} - $\${payment.amount}\`);
        });
      }

      // Continue monitoring if link is still active
      if (status.status === 'active' && new Date() < new Date(status.expiry)) {
        setTimeout(monitorLink, 30000); // Check every 30 seconds
      }
    };

    // Start monitoring after 30 seconds
    setTimeout(monitorLink, 30000);

    return paymentLink;
  } catch (error) {
    console.error('Payment link creation failed:', error.message);
    throw error;
  }
}

// Usage
createPaymentLinkWithMonitoring({
  amount: 299.99,
  description: 'Premium Subscription - Monthly',
  reference: 'sub_premium_202401_001',
  customer: {
    email: 'customer@example.com',
    name: 'John Doe',
    phone: '+1234567890'
  }
});`}</pre>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Python - Process
                                Direct Payment with Fraud Detection
                            </div>
                            <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`import requests
import json

class PasspointCollection:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.passpoint.com/v1'

    def get_headers(self):
        return {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }

    def process_payment_with_fraud_check(self, payment_data):
        # Pre-flight fraud check
        fraud_score = self.check_fraud_indicators(payment_data)

        if fraud_score > 0.7:
            raise Exception(f'High fraud risk detected: {fraud_score}')

        # Process payment
        response = requests.post(
            f'{self.base_url}/collections/payments',
            json=payment_data,
            headers=self.get_headers()
        )

        if response.status_code == 200:
            payment = response.json()

            # Additional fraud monitoring
            if payment.get('risk_assessment', {}).get('fraud_score', 0) > 0.5:
                print(f'Warning: Payment {payment["id"]} flagged for review')
                self.flag_for_manual_review(payment['id'])

            return payment
        else:
            raise Exception(f'Payment processing failed: {response.text}')

    def check_fraud_indicators(self, payment_data):
        """Basic fraud indicators check"""
        risk_score = 0.0

        # Check for suspicious amounts
        amount = payment_data.get('amount', 0)
        if amount > 5000:
            risk_score += 0.2
        if amount in [9999.99, 10000.00]:  # Common fraud amounts
            risk_score += 0.3

        # Check customer information
        customer = payment_data.get('customer', {})
        if not customer.get('phone'):
            risk_score += 0.1
        if 'temp' in customer.get('email', '').lower():
            risk_score += 0.2

        # Check billing address
        billing = payment_data.get('payment_method', {}).get('billing_address', {})
        if not billing.get('postal_code'):
            risk_score += 0.1

        return min(risk_score, 1.0)

    def flag_for_manual_review(self, payment_id):
        """Flag payment for manual review"""
        data = {
            'payment_id': payment_id,
            'reason': 'High fraud score detected',
            'priority': 'high'
        }

        requests.post(
            f'{self.base_url}/collections/payments/{payment_id}/flag',
            json=data,
            headers=self.get_headers()
        )

    def create_subscription_with_trial(self, subscription_data):
        """Create recurring subscription with trial period"""
        response = requests.post(
            f'{self.base_url}/collections/subscriptions',
            json=subscription_data,
            headers=self.get_headers()
        )

        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f'Subscription creation failed: {response.text}')

# Usage
collection_client = PasspointCollection('your_api_key')

# Process one-time payment
payment_data = {
    'amount': 149.99,
    'currency': 'USD',
    'payment_method': {
        'type': 'card',
        'card': {
            'number': '4111111111111111',
            'exp_month': '12',
            'exp_year': '2025',
            'cvc': '123',
            'cardholder_name': 'John Doe'
        },
        'billing_address': {
            'street': '123 Main St',
            'city': 'New York',
            'state': 'NY',
            'postal_code': '10001',
            'country': 'US'
        }
    },
    'customer': {
        'email': 'customer@example.com',
        'name': 'John Doe',
        'phone': '+1234567890'
    },
    'description': 'Online Course - Advanced React',
    'reference': 'course_react_adv_001',
    'capture': True,
    'callback_url': 'https://yourapp.com/webhooks/payment'
}

try:
    payment = collection_client.process_payment_with_fraud_check(payment_data)
    print('Payment processed successfully: %s', payment["id"])
    print('Amount: $%s', payment["amount"])
    print('Status: %s', payment["status"])
    print('Fraud Score: %s', payment.get("risk_assessment", {}).get("fraud_score", "N/A"))

except Exception as e:
    print(f'Payment failed: {e}')

# Create subscription with trial
subscription_data = {
    'customer': {
        'email': 'subscriber@example.com',
        'name': 'Jane Smith',
        'phone': '+1234567890'
    },
    'payment_method': {
        'type': 'card',
        'card': {
            'number': '4111111111111111',
            'exp_month': '12',
            'exp_year': '2025',
            'cvc': '123',
            'cardholder_name': 'Jane Smith'
        }
    },
    'plan': {
        'amount': 29.99,
        'currency': 'USD',
        'interval': 'monthly',
        'interval_count': 1,
        'description': 'Pro Plan Monthly Subscription'
    },
    'trial_period_days': 14,
    'callback_url': 'https://yourapp.com/webhooks/subscription'
}

try:
    subscription = collection_client.create_subscription_with_trial(subscription_data)
    print(f'Subscription created: {subscription["id"]}')
    print(f'Status: {subscription["status"]}')
    print(f'Trial ends: {subscription["trial_end"]}')

except Exception as e:
    print(f'Subscription creation failed: {e}')`}</pre>
                        </div>
                    </div>
                </section>
            </div>

            {/* Pagination Navigation */}
            <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
                <Link to="/transfer/payout">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start"
                    >
                        <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
                        <div className="text-left min-w-0">
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
                            <div className="text-sm font-medium truncate">Payout</div>
                        </div>
                    </Button>
                </Link>

                <Link to="/global-callback-setup">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
                    >
                        <div className="text-right min-w-0">
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                            <div className="text-sm font-medium truncate">Global Callback Setup</div>
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0"/>
                    </Button>
                </Link>
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-gray-500 text-sm">All rights reserved</p>
            </footer>
        </div>
    );
};

export default Collection;