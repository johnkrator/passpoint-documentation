import { Building2, MapPin, Globe, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBank = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Bank Payouts</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Process secure bank transfers for both local and international recipients. Support for ACH, wire transfers, and real-time payment networks with comprehensive compliance and fraud protection.
          </p>

          {/* Bank Payout Overview */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bank Transfer Methods</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Local Bank Transfers */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="h-12 w-12 text-blue-500 mr-3"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Local Bank Transfers</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Fast, low-cost transfers to domestic bank accounts via ACH and wire networks with same-day processing options.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                    <span className="text-gray-900 dark:text-white">Same day - 3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                    <span className="text-gray-900 dark:text-white">$1.00 - $25.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Daily Limit:</span>
                    <span className="text-gray-900 dark:text-white">$250,000</span>
                  </div>
                </div>
                <Link to="/payout/bank/local">
                  <Button className="w-full">
                    View Local Bank Options
                  </Button>
                </Link>
              </div>

              {/* Foreign Bank Transfers */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Globe className="h-12 w-12 text-green-500 mr-3"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">International Transfers</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Global payment network supporting wire transfers, RTP, FedNow, and local payment methods across 200+ countries.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                    <span className="text-gray-900 dark:text-white">Instant - 5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                    <span className="text-gray-900 dark:text-white">$15.00 - $50.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Daily Limit:</span>
                    <span className="text-gray-900 dark:text-white">$100,000</span>
                  </div>
                </div>
                <Link to="/payout/bank/foreign">
                  <Button className="w-full">
                    View International Options
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Bank Verification */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bank Account Verification</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Shield className="h-12 w-12 text-brand-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Verify Bank Account</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Verify bank account ownership before processing payouts to prevent fraud and ensure compliance with regulatory requirements.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/bank-accounts/verify`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "account_number": "1234567890",
  "routing_number": "021000021",
  "account_holder_name": "John Doe",
  "account_type": "checking",
  "verification_method": "micro_deposits"
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "verification_id": "verify_abc123",
  "status": "pending",
  "verification_method": "micro_deposits",
  "estimated_completion": "2024-01-17T12:00:00Z",
  "next_steps": {
    "instructions": "Two small deposits will be made to your account within 1-2 business days",
    "action_required": "Verify deposit amounts via API or dashboard"
  }
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Countries */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Supported Countries & Currencies</h2>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200">Global Coverage</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                    Bank payouts supported in 200+ countries with 40+ major currencies and local payment methods.
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Countries</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Primary Currencies</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">North America</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">USA, Canada, Mexico</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">USD, CAD, MXN</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Same day - 3 days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Europe</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">EU, UK, Switzerland, Norway</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">EUR, GBP, CHF, NOK</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-2 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asia Pacific</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Japan, Australia, Singapore, Hong Kong</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">JPY, AUD, SGD, HKD</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-3 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Emerging Markets</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">India, Brazil, South Africa, China</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">INR, BRL, ZAR, CNY</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2-5 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Compliance & Security */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Compliance & Security</h2>

            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Regulatory Requirements</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                    All bank payouts are subject to AML, KYC, and sanctions screening. Cross-border transfers may require additional documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                <Shield className="h-8 w-8 text-blue-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bank-Grade Security</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  256-bit SSL encryption, PCI DSS compliance, and secure API authentication protect all transactions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                <CheckCircle className="h-8 w-8 text-green-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Screening</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Automated AML and sanctions screening with fraud detection algorithms for every transaction.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                <Building2 className="h-8 w-8 text-purple-500 mb-4"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Regulatory Compliance</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Licensed money transmitter with SOX, GDPR, and local regulatory compliance in all supported jurisdictions.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Pagination Navigation */}
        <PaginationNavigation
          previousPage={{
            title: "Momo Payouts",
            href: "/payout/momo"
          }}
          nextPage={{
            title: "Rates & Fees",
            href: "/payout/rate"
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

export default PayoutBank;