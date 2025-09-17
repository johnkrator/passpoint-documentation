import {ArrowLeft, ArrowRight, Building2, BarChart3, ArrowRightLeft, CheckCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const PayoutBankLocal = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
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
                                            <CodeBlock>{`GET /api/v1/banks/domestic`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query
                                                Parameters</h4>
                                            <CodeBlock language="json">{`{
  "country": "US",
  "state": "NY",
  "supports_ach": true,
  "supports_wire": true,
  "limit": 100,
  "offset": 0
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
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
}`}</CodeBlock>
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
                                    <BarChart3 className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Account
                                        Enquiry</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Verify bank account details and check account status before processing payouts
                                        to prevent failed transactions.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST /api/v1/banks/account/enquiry`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "account_number": "1234567890",
  "routing_number": "021000021",
  "account_holder_name": "John Doe",
  "account_type": "checking"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "enquiry_id": "enq_abc123def456",
  "account_status": "active",
  "account_holder_match": "full_match",
  "bank_details": {
    "bank_name": "JPMorgan Chase Bank",
    "routing_number": "021000021",
    "account_type": "checking",
    "account_number_last_4": "7890"
  },
  "capabilities": {
    "accepts_ach": true,
    "accepts_wire": true,
    "real_time_payments": true
  },
  "verification_status": "verified",
  "timestamp": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Account Transfer - NGN */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Account
                            Transfer - NGN</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <ArrowRightLeft className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">NGN
                                        Bank Transfer</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Process domestic Nigerian Naira (NGN) bank transfers with instant settlement via
                                        the NIP (NIBSS Instant Payment) network.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST /api/v1/payouts/bank/ngn`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "recipient": {
    "account_number": "0123456789",
    "bank_code": "044",
    "account_holder_name": "John Doe",
    "phone_number": "+2348012345678"
  },
  "amount": 100000.00,
  "currency": "NGN",
  "reference": "payment_ref_001",
  "description": "Service payment",
  "callback_url": "https://yourapp.com/webhooks/payout"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "transaction_id": "txn_ngn_abc123",
  "status": "processing",
  "amount": 100000.00,
  "currency": "NGN",
  "fees": {
    "processing_fee": 52.50,
    "total_fees": 52.50
  },
  "recipient": {
    "account_number": "0123456789",
    "bank_name": "Access Bank",
    "account_holder_name": "John Doe"
  },
  "estimated_completion": "2024-01-15T14:35:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Passpoint Enquiry */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Passpoint
                            Account Enquiry</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <BarChart3 className="h-12 w-12 text-purple-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Passpoint
                                        Enquiry</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Query Passpoint wallet account details, balance, and transaction history for
                                        internal wallet-to-wallet transfers.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`GET /api/v1/wallet/enquiry/{wallet_id}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "wallet_id": "wallet_user_12345",
  "account_holder": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "verification_status": "verified"
  },
  "balance": {
    "available": 1500.00,
    "pending": 250.00,
    "currency": "USD"
  },
  "account_status": "active",
  "limits": {
    "daily_send": 5000.00,
    "daily_receive": 10000.00,
    "monthly_send": 50000.00
  },
  "created_at": "2023-06-15T10:00:00Z",
  "last_activity": "2024-01-15T12:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Passpoint Wallet Transfer */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Passpoint
                            Wallet Transfer</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <ArrowRightLeft className="h-12 w-12 text-orange-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Wallet
                                        Transfer</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Transfer funds between Passpoint wallets instantly with no fees for internal
                                        transactions within the platform.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST /api/v1/wallet/transfer`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "from_wallet_id": "wallet_sender_123",
  "to_wallet_id": "wallet_recipient_456",
  "amount": 500.00,
  "currency": "USD",
  "reference": "internal_transfer_001",
  "description": "Payment for services",
  "metadata": {
    "invoice_id": "INV-2024-001",
    "project_id": "PRJ-001"
  }
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "transfer_id": "transfer_internal_789",
  "status": "completed",
  "from_wallet": {
    "wallet_id": "wallet_sender_123",
    "new_balance": 1000.00
  },
  "to_wallet": {
    "wallet_id": "wallet_recipient_456",
    "new_balance": 1500.00
  },
  "amount": 500.00,
  "currency": "USD",
  "fees": {
    "processing_fee": 0.00,
    "total_fees": 0.00
  },
  "reference": "internal_transfer_001",
  "completed_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Processing Times & Fees */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Processing
                            Times & Fees</h2>

                        <div
                            className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
                            <div className="flex">
                                <CheckCircle
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                                <div>
                                    <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200">Same-Day
                                        Processing</h3>
                                    <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                                        Most domestic transfers complete within 4-6 hours during business days with
                                        same-day ACH.
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
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transfer
                                            Type
                                        </th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing
                                            Time
                                        </th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee</th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Daily
                                            Limit
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">Same-Day
                                            ACH
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">4-6
                                            hours
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$3.00</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$100,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">Next-Day
                                            ACH
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">1
                                            business day
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$1.50</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$250,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">Domestic
                                            Wire
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">2-4
                                            hours
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$25.00</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$1,000,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 dark:text-white">Passpoint
                                            Wallet
                                        </td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">Free</td>
                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 dark:text-gray-300">$50,000</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <div
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 dark:border-gray-800">
                    <Link to="/payout/bank">
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start px-4 py-3"
                        >
                            <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
                            <div className="text-left min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
                                <div className="text-sm font-medium truncate">Bank Payouts</div>
                            </div>
                        </Button>
                    </Link>

                    <Link to="/payout/bank/foreign">
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-end px-4 py-3"
                        >
                            <div className="text-right min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                                <div className="text-sm font-medium truncate">Foreign Bank Transfers</div>
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

export default PayoutBankLocal;