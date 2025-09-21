import {Building2, ArrowRightLeft, CheckCircle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const PayoutBankLocal = () => {
    const getBanksEndpointCode = () => {
        return `GET /api/v1/banks/domestic`;
    };

    const getBanksQueryParamsCode = () => {
        return `{
  "country": "US",
  "state": "NY",
  "supports_ach": true,
  "supports_wire": true,
  "limit": 100,
  "offset": 0
}`;
    };

    const getBanksResponseCode = () => {
        return `{
  "banks": [
    {
      "bank_id": "bank_chase_us",
      "name": "JPMorgan Chase Bank",
      "routing_number": "021000021",
      "country": "US",
      "state": "NY",
      "capabilities": {
        "ach_same_day": true,
        "ach_next_day": true,
        "wire_domestic": true,
        "rtp": true
      },
      "processing_times": {
        "ach_same_day": "4-6 hours",
        "ach_next_day": "1 business day",
        "wire": "2-4 hours"
      },
      "fees": {
        "ach": 1.50,
        "wire": 25.00
      },
      "status": "active"
    }
  ],
  "total_count": 8547,
  "has_more": true
}`;
    };

    const getAccountEnquiryEndpointCode = () => {
        return `POST /api/v1/banks/domestic/verify-account`;
    };

    const getAccountEnquiryRequestBodyCode = () => {
        return `{
  "account_number": "1234567890",
  "routing_number": "021000021",
  "account_type": "checking",
  "account_holder_name": "John Doe"
}`;
    };

    const getAccountEnquiryResponseCode = () => {
        return `{
  "verification_id": "verify_abc123",
  "status": "verified",
  "account_details": {
    "account_number": "****7890",
    "routing_number": "021000021",
    "account_type": "checking",
    "account_holder_name": "John Doe",
    "bank_name": "JPMorgan Chase Bank"
  },
  "verification_methods": ["micro_deposits", "instant_verification"],
  "verified_at": "2024-01-15T14:30:00Z"
}`;
    };

    const getLocalTransferEndpointCode = () => {
        return `POST /api/v1/payouts/domestic/bank-transfer`;
    };

    const getLocalTransferRequestBodyCode = () => {
        return `{
  "recipient": {
    "account_number": "1234567890",
    "routing_number": "021000021",
    "account_type": "checking",
    "account_holder_name": "John Doe"
  },
  "amount": 1500.00,
  "currency": "USD",
  "transfer_method": "ach_same_day",
  "description": "Freelancer payment",
  "reference": "invoice_12345",
  "callback_url": "https://yourapp.com/webhooks/payout"
}`;
    };

    const getLocalTransferResponseCode = () => {
        return `{
  "transfer_id": "transfer_local_abc123",
  "status": "processing",
  "recipient": {
    "account_number": "****7890",
    "routing_number": "021000021",
    "account_holder_name": "John Doe",
    "bank_name": "JPMorgan Chase Bank"
  },
  "amount": 1500.00,
  "currency": "USD",
  "transfer_method": "ach_same_day",
  "fees": {
    "processing_fee": 1.50,
    "total_fees": 1.50
  },
  "estimated_delivery": "2024-01-15T20:00:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Local Bank
                        Transfers</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Process domestic bank transfers with same-day ACH, wire transfers, and real-time payment
                        networks. Lower fees and faster processing for domestic recipients.
                    </p>

                    {/* Get Banks */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Supported
                            Banks</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Building2 className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get
                                        Banks</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve a list of supported domestic banks with their routing numbers,
                                        processing capabilities, and current status.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getBanksEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{getBanksQueryParamsCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getBanksResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Account Enquiry */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Account
                            Enquiry</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CheckCircle className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Verify
                                        Account</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Verify bank account ownership and validity before processing transfers to reduce
                                        failed payments and fraud.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getAccountEnquiryEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getAccountEnquiryRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getAccountEnquiryResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Local Bank Transfer */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Local Bank
                            Transfer</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <ArrowRightLeft className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Process
                                        Transfer</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Execute domestic bank transfers with same-day ACH, next-day ACH, or wire
                                        transfer options based on urgency and cost preferences.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getLocalTransferEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getLocalTransferRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getLocalTransferResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Transfer Methods Comparison */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transfer
                            Methods Comparison</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Method</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing
                                            Time
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Limit</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Best
                                            For
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ACH
                                            Same-Day
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">4-6 hours
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$1.50</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$1M per
                                            transaction
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Urgent
                                            payroll
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ACH
                                            Next-Day
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1 business
                                            day
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$0.75</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$1M per
                                            transaction
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Regular
                                            payments
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Wire
                                            Transfer
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2-4 hours
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$25.00</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$10M per
                                            transaction
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">High-value
                                            transfers
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Bank Payouts",
                        href: "/payout/bank"
                    }}
                    nextPage={{
                        title: "Foreign Bank Transfers",
                        href: "/payout/bank/foreign"
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

export default PayoutBankLocal;