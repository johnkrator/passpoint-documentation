import { ArrowLeft, ArrowRight, Code, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Main content */}
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Introduction to Passpoint API</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Welcome to Passpoint's API documentation. Our comprehensive platform enables developers to integrate powerful payment processing, financial management, and business automation capabilities into their applications.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Passpoint?</h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Passpoint is a modern financial platform that helps businesses manage their spending, automate accounting processes, and optimize their financial operations. Our API provides programmatic access to these capabilities, allowing you to build custom integrations and workflows.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Bank-level security with SOC 2 compliance, encryption at rest and in transit, and comprehensive audit trails.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Processing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Instant transaction processing with real-time webhooks and sub-second response times for critical operations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Code className="h-8 w-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Developer-First</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  RESTful APIs, comprehensive SDKs, detailed documentation, and extensive testing tools for seamless integration.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dedicated support team with direct access to engineers, comprehensive documentation, and active community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core API Capabilities</h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Payment Processing</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Accept payments from multiple sources including credit cards, bank transfers, and digital wallets with global coverage.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Multi-currency support for 50+ currencies</li>
                <li>• Instant settlement and fund transfers</li>
                <li>• Advanced fraud detection and prevention</li>
                <li>• Comprehensive payment analytics</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expense Management</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Automate expense tracking, approval workflows, and reimbursement processes with intelligent categorization.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Receipt capture and OCR processing</li>
                <li>• Automated expense categorization</li>
                <li>• Policy enforcement and compliance</li>
                <li>• Real-time spending insights</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Financial Reporting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Generate detailed financial reports, track spending patterns, and integrate with popular accounting platforms.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Real-time financial dashboards</li>
                <li>• Custom report generation</li>
                <li>• QuickBooks and Xero integration</li>
                <li>• Automated reconciliation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Getting Started</h2>

          <div className="bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-4">Ready to integrate?</h3>
            <p className="text-brand-800 dark:text-brand-200 mb-4">
              Follow our step-by-step integration guide to get up and running in minutes.
            </p>
            <ol className="space-y-2 text-brand-700 dark:text-brand-300">
              <li>1. Create your Passpoint developer account</li>
              <li>2. Generate API credentials in the dashboard</li>
              <li>3. Install our SDK or use direct REST calls</li>
              <li>4. Test with our comprehensive sandbox environment</li>
              <li>5. Deploy to production with confidence</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Standards</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900 dark:text-white">
                Protocol:
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                REST over HTTPS with JSON payloads
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900 dark:text-white">
                Base URL:
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-mono">
                https://api.passpoint.com/v1
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900 dark:text-white">
                Rate Limits:
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                1,000 requests per minute per API key
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900 dark:text-white">
                SDKs:
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Available for Python, Node.js, Ruby, PHP, and Java
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pagination Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          <div className="text-left min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="text-sm font-medium truncate">Homepage</div>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
        >
          <div className="text-right min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="text-sm font-medium truncate">API Integrations</div>
          </div>
          <ArrowRight className="h-4 w-4 flex-shrink-0" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-sm">All rights reserved</p>
      </footer>
    </div>
  );
};

export default Introduction;