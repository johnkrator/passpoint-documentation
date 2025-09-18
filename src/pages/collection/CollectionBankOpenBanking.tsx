import { Building2, Send, CreditCard, Shield, CheckCircle, Globe, AlertTriangle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const CollectionBankOpenBanking = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Open Banking Collections</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Secure bank-to-bank payments using Open Banking APIs with instant account verification, real-time payment confirmation, and optional tokenization for recurring payments. Supported across EU, UK, and US markets.
          </p>

          {/* Get Banks */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Supported Banks</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Building2 className="h-12 w-12 text-brand-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get Banks</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Retrieve a comprehensive list of banks that support Open Banking payments, including their capabilities and processing times.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`GET /api/v1/open-banking/banks`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4>
                      <CodeBlock language="json">{`{
  "country": "GB",
  "supports_instant_payments": true,
  "supports_recurring": true,
  "limit": 50
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "banks": [
    {
      "bank_id": "gb_hsbc",
      "name": "HSBC UK",
      "country": "GB",
      "logo_url": "https://cdn.passpoint.com/banks/hsbc-logo.png",
      "capabilities": {
        "instant_payments": true,
        "recurring_payments": true,
        "refunds": true,
        "balance_inquiry": true
      },
      "processing_times": {
        "instant": "0-10 seconds",
        "standard": "1-2 hours"
      },
      "success_rate": 98.7,
      "status": "active"
    },
    {
      "bank_id": "gb_lloyds",
      "name": "Lloyds Bank",
      "country": "GB",
      "logo_url": "https://cdn.passpoint.com/banks/lloyds-logo.png",
      "capabilities": {
        "instant_payments": true,
        "recurring_payments": false,
        "refunds": true,
        "balance_inquiry": true
      },
      "processing_times": {
        "instant": "0-15 seconds",
        "standard": "1-3 hours"
      },
      "success_rate": 97.2,
      "status": "active"
    }
  ],
  "total_banks": 147,
  "supported_countries": ["GB", "IE", "DE", "FR", "NL", "ES"]
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Request Payment - Standard */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request Payment - Standard</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Send className="h-12 w-12 text-blue-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Request Payment</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Create a secure Open Banking payment request that allows customers to pay directly from their bank account with instant confirmation.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/open-banking/payment-requests`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "amount": 125.50,
  "currency": "GBP",
  "description": "E-commerce purchase",
  "reference": "ORDER-2024-001",
  "customer": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "+44 7700 900123"
  },
  "bank_id": "gb_hsbc",
  "redirect_urls": {
    "success": "https://yourstore.com/payment/success",
    "cancel": "https://yourstore.com/payment/cancel",
    "error": "https://yourstore.com/payment/error"
  },
  "webhook_url": "https://yourstore.com/webhooks/payment",
  "expires_in": 900,
  "metadata": {
    "order_id": "ORD-12345",
    "customer_id": "CUST-67890"
  }
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "payment_request_id": "preq_ob_abc123",
  "status": "pending_authorization",
  "amount": 125.50,
  "currency": "GBP",
  "authorization_url": "https://api.passpoint.com/open-banking/authorize/preq_ob_abc123",
  "qr_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "bank_details": {
    "bank_id": "gb_hsbc",
    "bank_name": "HSBC UK",
    "supports_mobile": true
  },
  "expires_at": "2024-01-15T14:45:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Request Payment - With Tokenization */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request Payment - With Tokenization</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <CreditCard className="h-12 w-12 text-green-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">With Tokenization</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Create payment requests with tokenization for recurring payments, allowing future charges without re-authorization from the customer.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/open-banking/payment-requests/tokenized`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "amount": 29.99,
  "currency": "GBP",
  "description": "Monthly subscription",
  "reference": "SUB-2024-001",
  "customer": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "+44 7700 900123",
    "customer_id": "cust_existing_123"
  },
  "bank_id": "gb_hsbc",
  "tokenization": {
    "enabled": true,
    "recurring_type": "variable",
    "max_amount": 100.00,
    "frequency": "monthly",
    "consent_text": "I authorize monthly subscription charges up to £100"
  },
  "redirect_urls": {
    "success": "https://yourapp.com/subscription/success",
    "cancel": "https://yourapp.com/subscription/cancel"
  },
  "webhook_url": "https://yourapp.com/webhooks/payment"
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "payment_request_id": "preq_token_def456",
  "status": "pending_authorization",
  "amount": 29.99,
  "currency": "GBP",
  "authorization_url": "https://api.passpoint.com/open-banking/authorize/preq_token_def456",
  "tokenization": {
    "consent_id": "consent_ghi789",
    "max_amount": 100.00,
    "frequency": "monthly",
    "expires_at": "2025-01-15T14:30:00Z"
  },
  "bank_details": {
    "bank_id": "gb_hsbc",
    "bank_name": "HSBC UK",
    "supports_recurring": true
  },
  "expires_at": "2024-01-15T14:45:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Request Payment - New Payer with Tokenization */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Request Payment - New Payer with Tokenization</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Lock className="h-12 w-12 text-purple-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">New Payer Token</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Onboard new customers with payment and tokenization in a single flow, including KYC verification and consent management.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/open-banking/onboard-and-pay`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "amount": 99.00,
  "currency": "GBP",
  "description": "Initial subscription payment",
  "reference": "ONBOARD-2024-001",
  "customer": {
    "email": "jane.smith@example.com",
    "name": "Jane Smith",
    "phone": "+44 7700 900456",
    "address": {
      "line1": "123 High Street",
      "line2": "Apt 4B",
      "city": "London",
      "postal_code": "SW1A 1AA",
      "country": "GB"
    },
    "date_of_birth": "1990-05-15"
  },
  "preferred_bank_id": "gb_hsbc",
  "tokenization": {
    "enabled": true,
    "recurring_type": "fixed",
    "amount": 99.00,
    "frequency": "monthly",
    "consent_text": "I authorize monthly charges of £99 for my subscription"
  },
  "kyc_verification": {
    "required": true,
    "document_types": ["passport", "driving_license"],
    "verification_level": "enhanced"
  },
  "redirect_urls": {
    "success": "https://yourapp.com/onboarding/success",
    "cancel": "https://yourapp.com/onboarding/cancel",
    "kyc_required": "https://yourapp.com/kyc/verify"
  },
  "webhook_url": "https://yourapp.com/webhooks/onboarding"
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "onboarding_id": "onboard_jkl012",
  "payment_request_id": "preq_onboard_mno345",
  "customer_id": "cust_new_pqr678",
  "status": "kyc_required",
  "amount": 99.00,
  "currency": "GBP",
  "kyc_verification": {
    "verification_id": "kyc_stu901",
    "status": "pending",
    "verification_url": "https://verify.passpoint.com/kyc_stu901",
    "required_documents": ["passport", "proof_of_address"],
    "expires_at": "2024-01-22T14:30:00Z"
  },
  "tokenization": {
    "consent_id": "consent_pending_vwx234",
    "status": "pending_kyc",
    "amount": 99.00,
    "frequency": "monthly"
  },
  "next_steps": [
    "Complete KYC verification",
    "Authorize bank payment",
    "Confirm recurring payment consent"
  ],
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Open Banking Benefits */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Open Banking Benefits</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Instant Verification */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <CheckCircle className="h-8 w-8 text-green-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Verification</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Real-time account verification and balance checks prevent failed payments and reduce fraud.
                </p>
              </div>

              {/* High Success Rate */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <Globe className="h-8 w-8 text-blue-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">98.5% Success Rate</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Industry-leading success rates with secure bank-grade authentication and processing.
                </p>
              </div>

              {/* Lower Costs */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <Building2 className="h-8 w-8 text-purple-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lower Costs</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Reduced processing fees compared to card payments with transparent, predictable pricing.
                </p>
              </div>

              {/* Faster Settlement */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <Send className="h-8 w-8 text-orange-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Faster Settlement</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Same-day settlement with instant payment confirmation and reduced settlement risk.
                </p>
              </div>

              {/* Enhanced Security */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <Shield className="h-8 w-8 text-red-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enhanced Security</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Strong Customer Authentication (SCA) and PSD2 compliance provide maximum security.
                </p>
              </div>

              {/* No Chargebacks */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <Lock className="h-8 w-8 text-teal-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Chargebacks</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Irreversible payments eliminate chargeback risk and associated fees for merchants.
                </p>
              </div>
            </div>
          </section>

          {/* Supported Regions */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Supported Regions</h2>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200">Global Coverage</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                    Open Banking payments supported across EU, UK, and US markets with over 2,500 connected banks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Region</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Connected Banks</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Regulation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">United Kingdom</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">147 banks</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">PSD2, FCA</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant - 2 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">European Union</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1,847 banks</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">PSD2, EBA</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant - 1 hour</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">United States</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">587 banks</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">FedNow, RTP</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant - 30 mins</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Compliance Information */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Compliance & Regulation</h2>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Regulatory Compliance</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                    Open Banking payments must comply with Strong Customer Authentication (SCA) requirements and regional regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                <Shield className="h-8 w-8 text-blue-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">PSD2 Compliance</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Fully compliant with PSD2 regulations across all EU markets with licensed PISP status.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Licensed Payment Institution</li>
                  <li>• Strong Customer Authentication</li>
                  <li>• Data protection compliant</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                <Lock className="h-8 w-8 text-green-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Security Standards</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Bank-grade security with end-to-end encryption and certified security standards.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• PCI DSS Level 1</li>
                  <li>• ISO 27001 certified</li>
                  <li>• SOC 2 Type II compliant</li>
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
            title: "Direct Bank Options",
            href: "/collection/bank/direct"
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

export default CollectionBankOpenBanking;