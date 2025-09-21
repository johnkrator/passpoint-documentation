import {DollarSign, CreditCard, Banknote, Clock, CheckCircle, Building} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PaginationNavigation from "@/components/PaginationNavigation";

const Payout = () => {
    const getCreatePayoutEndpointCode = () => {
        return `POST /api/v1/payouts`;
    };

    const getCreatePayoutRequestBodyCode = () => {
        return `{
  "recipient": {
    "type": "bank_account",
    "bank_details": {
      "account_number": "1234567890",
      "routing_number": "021000021",
      "account_type": "checking",
      "account_holder_name": "John Doe",
      "bank_name": "Chase Bank"
    },
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "postal_code": "10001",
      "country": "US"
    }
  },
  "amount": 2500.00,
  "currency": "USD",
  "purpose": "freelancer_payment",
  "description": "Website development project completion",
  "reference": "project_001_final_payment",
  "metadata": {
    "project_id": "PRJ001",
    "contractor_id": "CONT123",
    "invoice_number": "INV-2024-001"
  },
  "compliance": {
    "source_of_funds": "business_revenue",
    "business_purpose": "contractor_payment"
  },
  "callback_url": "https://yourapp.com/webhooks/payout"
}`;
    };

    const getCreatePayoutResponseCode = () => {
        return `{
  "id": "payout_xyz789abc123",
  "status": "pending_compliance",
  "recipient": {
    "type": "bank_account",
    "bank_details": {
      "account_number": "****7890",
      "routing_number": "021000021",
      "account_holder_name": "John Doe",
      "bank_name": "Chase Bank"
    }
  },
  "amount": 2500.00,
  "currency": "USD",
  "purpose": "freelancer_payment",
  "description": "Website development project completion",
  "reference": "project_001_final_payment",
  "fees": {
    "processing_fee": 15.00,
    "fx_fee": 0.00,
    "total_fees": 15.00
  },
  "compliance_checks": {
    "aml_status": "pending",
    "sanctions_status": "clear",
    "fraud_score": 0.12
  },
  "estimated_delivery": "2024-01-17T16:00:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`;
    };

    const getPayoutStatusEndpointCode = () => {
        return `GET /api/v1/payouts/{payout_id}`;
    };

    const getPayoutStatusResponseCode = () => {
        return `{
  "id": "payout_xyz789abc123",
  "status": "completed",
  "recipient": {
    "type": "bank_account",
    "bank_details": {
      "account_number": "****7890",
      "routing_number": "021000021",
      "account_holder_name": "John Doe",
      "bank_name": "Chase Bank"
    }
  },
  "amount": 2500.00,
  "currency": "USD",
  "purpose": "freelancer_payment",
  "description": "Website development project completion",
  "reference": "project_001_final_payment",
  "fees": {
    "processing_fee": 15.00,
    "fx_fee": 0.00,
    "total_fees": 15.00
  },
  "status_history": [
    {
      "status": "pending_compliance",
      "timestamp": "2024-01-15T14:30:00Z",
      "note": "Compliance review initiated"
    },
    {
      "status": "approved",
      "timestamp": "2024-01-15T15:45:00Z",
      "note": "Compliance checks passed"
    },
    {
      "status": "processing",
      "timestamp": "2024-01-16T09:00:00Z",
      "note": "Payment processing started"
    },
    {
      "status": "completed",
      "timestamp": "2024-01-17T14:22:00Z",
      "note": "Payout completed successfully"
    }
  ],
  "created_at": "2024-01-15T14:30:00Z",
  "completed_at": "2024-01-17T14:22:00Z"
}`;
    };

    const getBatchPayoutEndpointCode = () => {
        return `POST /api/v1/payouts/batch`;
    };

    const getBatchPayoutRequestBodyCode = () => {
        return `{
  "batch_reference": "payroll_batch_202401_15",
  "description": "Monthly contractor payments",
  "payouts": [
    {
      "recipient": {
        "type": "bank_account",
        "bank_details": {
          "account_number": "1234567890",
          "routing_number": "021000021",
          "account_holder_name": "John Doe"
        }
      },
      "amount": 2500.00,
      "reference": "contractor_payment_john_doe"
    },
    {
      "recipient": {
        "type": "debit_card",
        "card_details": {
          "card_number": "4111111111111111",
          "card_holder_name": "Jane Smith"
        }
      },
      "amount": 1800.00,
      "reference": "contractor_payment_jane_smith"
    }
  ],
  "currency": "USD",
  "callback_url": "https://yourapp.com/webhooks/batch-payout"
}`;
    };

    const getBatchPayoutResponseCode = () => {
        return `{
  "batch_id": "batch_abc123def456",
  "batch_reference": "payroll_batch_202401_15",
  "status": "processing",
  "total_payouts": 2,
  "total_amount": 4300.00,
  "currency": "USD",
  "payouts": [
    {
      "id": "payout_123abc",
      "status": "pending_compliance",
      "amount": 2500.00,
      "reference": "contractor_payment_john_doe"
    },
    {
      "id": "payout_456def",
      "status": "pending_compliance",
      "amount": 1800.00,
      "reference": "contractor_payment_jane_smith"
    }
  ],
  "estimated_completion": "2024-01-17T16:00:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Payout</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Process secure payouts to bank accounts, cards, and digital wallets. Manage single and batch
                        payouts with comprehensive compliance and fraud protection.
                    </p>

                    {/* Create Payout */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Create
                            Payout</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <DollarSign className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Create
                                        New Payout</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Initiate a payout to various destination types including bank accounts, debit
                                        cards, and digital wallets with real-time validation.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getCreatePayoutEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getCreatePayoutRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getCreatePayoutResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payout Methods */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Payout
                            Methods</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Bank Account Payout */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Building className="h-12 w-12 text-blue-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Bank
                                        Account</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Direct bank transfers via ACH or wire transfer with 1-3 business day delivery.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">1-3 business days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">$5.00 - $25.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Limit:</span>
                                        <span className="text-gray-900 dark:text-white">$100,000/day</span>
                                    </div>
                                </div>
                            </div>

                            {/* Debit Card Payout */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <CreditCard className="h-12 w-12 text-green-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Debit
                                        Card</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Instant payouts to Visa or Mastercard debit cards with real-time delivery.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">Instant</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">1.5% + $0.50</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Limit:</span>
                                        <span className="text-gray-900 dark:text-white">$5,000/day</span>
                                    </div>
                                </div>
                            </div>

                            {/* Digital Wallet Payout */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <Banknote className="h-12 w-12 text-purple-500 mr-3"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">Digital
                                        Wallet</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                                    Payouts to PayPal, Venmo, and other digital wallet providers.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Processing Time:</span>
                                        <span className="text-gray-900 dark:text-white">30 minutes</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                                        <span className="text-gray-900 dark:text-white">2.0% + $0.30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Limit:</span>
                                        <span className="text-gray-900 dark:text-white">$10,000/day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Payout Status */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Payout
                            Status</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Clock className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Check
                                        Payout Status</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve the current status and details of a payout including compliance checks
                                        and delivery confirmation.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getPayoutStatusEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getPayoutStatusResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Batch Payout */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Batch
                            Payout</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <CheckCircle className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Batch
                                        Processing</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Process multiple payouts in a single batch operation with atomic processing and
                                        comprehensive error handling.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getBatchPayoutEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getBatchPayoutRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getBatchPayoutResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pagination Navigation */}
                <PaginationNavigation
                    previousPage={{
                        title: "Transfer",
                        href: "/transfer"
                    }}
                    nextPage={{
                        title: "Wallet",
                        href: "/wallet"
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

export default Payout;
