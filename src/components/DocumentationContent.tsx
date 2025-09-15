import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentationContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Main content */}
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-white mb-6">Quick Guides</h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Quick guides help developers get started quickly. You'll find step-by-step instructions to integrate Ramp APIs, from setting up authentication to processing transactions.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Transaction Dynamics on Ramp</h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Understanding how transactions flow through the Ramp platform is crucial for effective integration and troubleshooting. This guide outlines the lifecycle of a transaction, from initiation to completion, and highlights key statuses and webhook events.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">1. Transaction Lifecycle</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Every transaction on Ramp follows a structured process:
              </p>

              <ul className="space-y-3 text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Initiation:</span>
                  <span>A transaction begins when a user initiates a payment through your application or website.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Processing:</span>
                  <span>Ramp processes the payment, interacting with relevant financial institutions or payment gateways.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Completion:</span>
                  <span>The transaction concludes with a definitive status indicating success, failure, or pending state.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">2. Transaction Statuses</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ramp categorizes transaction outcomes into distinct statuses:
              </p>

              <ul className="space-y-3 text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Successful:</span>
                  <span>The transaction was completed without issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Pending:</span>
                  <span>The transaction is in progress and awaiting confirmation.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Failed:</span>
                  <span>The transaction could not be completed due to an error.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Cancelled:</span>
                  <span>The transaction was intentionally terminated before completion.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Refunded:</span>
                  <span>The transaction amount was returned to the payer.</span>
                </li>
              </ul>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Understanding these statuses helps in monitoring transaction outcomes and implementing appropriate business logic.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">3. Webhook Notifications</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ramp utilizes webhooks to notify your system about transaction events:
              </p>

              <ul className="space-y-3 text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Transaction Created:</span>
                  <span>Triggered when a new transaction is initiated.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Transaction Updated:</span>
                  <span>Triggered when there's a change in the transaction status.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Transaction Completed:</span>
                  <span>Triggered upon successful completion of a transaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Transaction Failed:</span>
                  <span>Triggered when a transaction fails.</span>
                </li>
              </ul>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Ensure your webhook endpoint is configured to handle these events appropriately. Refer to the Webhook Setup Guide for detailed instructions.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">4. Best Practices</h3>

              <ul className="space-y-3 text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Idempotency:</span>
                  <span>Implement idempotent operations to handle duplicate webhook events gracefully.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Logging:</span>
                  <span>Maintain logs of all transaction events for auditing and troubleshooting.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-white mr-2">Security:</span>
                  <span>Verify the authenticity of webhook events using Ramp's provided signatures.</span>
                </li>
              </ul>

              <p className="text-gray-300 mt-4 leading-relaxed">
                By adhering to these practices, you can ensure a robust and reliable transaction handling mechanism within your application.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Pagination Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-800">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          <div className="text-left min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="text-sm font-medium truncate">API Rate Limits</div>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800 justify-end"
        >
          <div className="text-right min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="text-sm font-medium truncate">Status responses and their meanings</div>
          </div>
          <ArrowRight className="h-4 w-4 flex-shrink-0" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">All rights reserved</p>
      </footer>
    </div>
  );
};

export default DocumentationContent;