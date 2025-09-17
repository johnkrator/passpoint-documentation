import { ArrowLeft, ArrowRight, MapPin, CreditCard, Banknote, Zap, ArrowDownToLine, MessageSquare, ArrowRightLeft, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const PayoutBankForeign = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">International Bank Transfers</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Send money globally with multiple payment methods including wire transfers, ACH, RTP, FedNow, and local payment networks across 200+ countries and territories.
          </p>

          {/* Get Available Countries */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Available Countries</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <MapPin className="h-12 w-12 text-brand-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Available Countries</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Retrieve a comprehensive list of countries where international payouts are supported, including payment methods and processing times for each destination.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`GET /api/v1/countries/payout`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4>
                      <CodeBlock language="json">{`{
  "region": "europe",
  "currency": "EUR",
  "payment_method": "wire",
  "limit": 50
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Payment Methods */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Payment Methods</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <CreditCard className="h-12 w-12 text-blue-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Payment Methods</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Get available payment methods for a specific country, including fees, processing times, and required recipient information.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`GET /api/v1/countries/{country_code}/payment-methods`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "country_code": "US",
  "country_name": "United States",
  "payment_methods": [
    {
      "method_id": "ach_usd",
      "name": "ACH Transfer",
      "currency": "USD",
      "processing_time": "1-3 business days",
      "fee_structure": {
        "fixed_fee": 5.00,
        "percentage_fee": 0.0
      },
      "limits": {
        "min_amount": 1.00,
        "max_amount": 25000.00
      },
      "required_fields": [
        "account_number",
        "routing_number",
        "account_holder_name",
        "account_type"
      ]
    }
  ]
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method Options */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Payment Method Options</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* ACH - USD */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Banknote className="h-8 w-8 text-blue-500 mr-3"/>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ACH - USD</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Automated Clearing House transfers for US dollar payments with cost-effective processing.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                    <span className="text-gray-900 dark:text-white">$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="text-gray-900 dark:text-white">1-3 days</span>
                  </div>
                </div>
              </div>

              {/* Wire - USD */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Banknote className="h-8 w-8 text-green-500 mr-3"/>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wire - USD</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  SWIFT wire transfers for high-value USD payments with same-day processing available.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                    <span className="text-gray-900 dark:text-white">$45.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="text-gray-900 dark:text-white">Same day</span>
                  </div>
                </div>
              </div>

              {/* RTP - USD */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-500 mr-3"/>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">RTP - USD</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Real-Time Payments network for instant USD transfers 24/7/365 with immediate settlement.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                    <span className="text-gray-900 dark:text-white">$1.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="text-gray-900 dark:text-white">Instant</span>
                  </div>
                </div>
              </div>

              {/* FedNow - USD */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-purple-500 mr-3"/>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FedNow - USD</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Federal Reserve's instant payment service for immediate USD transfers between banks.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                    <span className="text-gray-900 dark:text-white">$0.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="text-gray-900 dark:text-white">Instant</span>
                  </div>
                </div>
              </div>

              {/* Account Deposits */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <ArrowDownToLine className="h-8 w-8 text-teal-500 mr-3"/>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Deposits</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Direct deposits to bank accounts in USD, GBP, EUR, and CNY with local clearing systems.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Currencies:</span>
                    <span className="text-gray-900 dark:text-white">USD, GBP, EUR, CNY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="text-gray-900 dark:text-white">1-3 days</span>
                  </div>
                </div>
              </div>

              {/* B2B/B2C Transfers */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <ArrowRightLeft className="h-8 w-8 text-indigo-500 mr-3"/>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">B2B/B2C Transfers</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Business-to-business and business-to-consumer transfers in CNY and USD with enhanced compliance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Types:</span>
                    <span className="text-gray-900 dark:text-white">B2B, B2C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Currencies:</span>
                    <span className="text-gray-900 dark:text-white">CNY, USD</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* International Transfer Example */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">International Transfer Example</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Globe className="h-12 w-12 text-green-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Wire Transfer</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Process international wire transfers with full SWIFT network integration and comprehensive compliance checking.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/payouts/international/wire`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "recipient": {
    "type": "bank_account",
    "bank_details": {
      "iban": "GB29NWBK60161331926819",
      "swift_code": "NWBKGB2L",
      "account_holder_name": "John Doe",
      "bank_name": "NatWest Bank",
      "bank_address": {
        "street": "123 High Street",
        "city": "London",
        "postal_code": "SW1A 1AA",
        "country": "GB"
      }
    },
    "address": {
      "street": "456 Oxford Street",
      "city": "London",
      "postal_code": "W1A 0AX",
      "country": "GB"
    }
  },
  "amount": 5000.00,
  "currency": "GBP",
  "source_currency": "USD",
  "purpose": "goods_payment",
  "description": "Payment for imported goods",
  "reference": "INV-UK-2024-001",
  "compliance": {
    "trade_document_id": "TD-2024-001",
    "source_of_funds": "business_revenue"
  }
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "transfer_id": "wire_intl_abc123",
  "status": "pending_compliance",
  "amount": 5000.00,
  "currency": "GBP",
  "source_amount": 6250.00,
  "source_currency": "USD",
  "exchange_rate": 0.8000,
  "fees": {
    "transfer_fee": 45.00,
    "fx_spread": 125.00,
    "total_fees": 170.00
  },
  "recipient": {
    "iban": "GB29****6819",
    "swift_code": "NWBKGB2L",
    "bank_name": "NatWest Bank"
  },
  "estimated_delivery": "2024-01-17T16:00:00Z",
  "compliance_reference": "CMP-2024-001",
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Requirements */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">International Compliance</h2>

            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Enhanced Due Diligence</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                    International transfers require additional compliance checks including purpose documentation, beneficiary verification, and sanctions screening.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount Range</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Documentation Required</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Additional Checks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Under $3,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Basic recipient info, purpose</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-3 business days</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Automated screening</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">$3,000 - $10,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">ID verification, trade documents</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2-5 business days</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Enhanced due diligence</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Over $10,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Full KYC, business registration, contracts</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">3-10 business days</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual review, regulatory reporting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* Pagination Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 dark:border-gray-800">
          <Link to="/payout/bank/local">
            <Button
              variant="ghost"
              className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start px-4 py-3"
            >
              <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
              <div className="text-left min-w-0">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
                <div className="text-sm font-medium truncate">Local Bank Transfers</div>
              </div>
            </Button>
          </Link>

          <Link to="/payout/rate">
            <Button
              variant="ghost"
              className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-end px-4 py-3"
            >
              <div className="text-right min-w-0">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                <div className="text-sm font-medium truncate">Rates & Fees</div>
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
    </div>
  );
};

export default PayoutBankForeign;