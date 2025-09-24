import {Send, ArrowRightLeft, Clock, CheckCircle, XCircle, AlertTriangle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";
import PaginationNavigation from "@/components/PaginationNavigation.tsx";

const Transfer = () => {
    const getCreateTransferEndpointCode = () => {
        return `POST /api/v1/transfers`;
    };

    const getCreateTransferRequestBodyCode = () => {
        return `{
  "source": {
    "type": "wallet",
    "id": "wallet_1234567890"
  },
  "destination": {
    "type": "bank_account",
    "id": "bank_acc_9876543210",
    "account_number": "1234567890",
    "routing_number": "021000021",
    "account_holder_name": "John Doe"
  },
  "amount": 1500.00,
  "currency": "USD",
  "description": "Monthly salary transfer",
  "reference": "payroll_202401_001",
  "metadata": {
    "employee_id": "EMP001",
    "department": "Engineering",
    "transfer_type": "salary"
  },
  "callback_url": "https://yourapp.com/webhooks/transfer"
}`;
    };

    const getCreateTransferResponseCode = () => {
        return `{
  "id": "transfer_abcdef123456",
  "status": "pending",
  "source": {
    "type": "wallet",
    "id": "wallet_1234567890",
    "balance_after": 2500.00
  },
  "destination": {
    "type": "bank_account",
    "id": "bank_acc_9876543210",
    "account_number": "****7890"
  },
  "amount": 1500.00,
  "currency": "USD",
  "description": "Monthly salary transfer",
  "reference": "payroll_202401_001",
  "fees": {
    "processing_fee": 5.00,
    "total_deducted": 1505.00
  },
  "estimated_completion": "2024-01-16T14:00:00Z",
  "created_at": "2024-01-15T10:30:00Z"
}`;
    };

    const getTransferStatusEndpointCode = () => {
        return `GET /api/v1/transfers/{transfer_id}`;
    };

    const getTransferStatusResponseCode = () => {
        return `{
  "id": "transfer_abcdef123456",
  "status": "completed",
  "source": {
    "type": "wallet",
    "id": "wallet_1234567890"
  },
  "destination": {
    "type": "bank_account",
    "id": "bank_acc_9876543210",
    "account_number": "****7890"
  },
  "amount": 1500.00,
  "currency": "USD",
  "description": "Monthly salary transfer",
  "reference": "payroll_202401_001",
  "fees": {
    "processing_fee": 5.00,
    "total_deducted": 1505.00
  },
  "status_history": [
    {
      "status": "pending",
      "timestamp": "2024-01-15T10:30:00Z",
      "note": "Transfer initiated"
    },
    {
      "status": "processing",
      "timestamp": "2024-01-15T10:35:00Z",
      "note": "Funds secured from source"
    },
    {
      "status": "completed",
      "timestamp": "2024-01-16T14:22:00Z",
      "note": "Transfer completed successfully"
    }
  ],
  "created_at": "2024-01-15T10:30:00Z",
  "completed_at": "2024-01-16T14:22:00Z"
}`;
    };

    const getBulkTransferEndpointCode = () => {
        return `POST /api/v1/transfers/bulk`;
    };

    const getBulkTransferRequestBodyCode = () => {
        return `{
  "batch_reference": "payroll_batch_202401_15",
  "description": "Monthly payroll batch",
  "transfers": [
    {
      "source": {
        "type": "wallet",
        "id": "company_wallet_main"
      },
      "destination": {
        "type": "bank_account",
        "account_number": "1234567890",
        "routing_number": "021000021",
        "account_holder_name": "John Doe"
      },
      "amount": 3000.00,
      "reference": "salary_john_doe_202401"
    },
    {
      "source": {
        "type": "wallet",
        "id": "company_wallet_main"
      },
      "destination": {
        "type": "bank_account",
        "account_number": "9876543210",
        "routing_number": "021000021",
        "account_holder_name": "Jane Smith"
      },
      "amount": 2800.00,
      "reference": "salary_jane_smith_202401"
    }
  ],
  "currency": "USD",
  "callback_url": "https://yourapp.com/webhooks/bulk-transfer"
}`;
    };

    const getBulkTransferResponseCode = () => {
        return `{
  "batch_id": "batch_xyz789abc123",
  "batch_reference": "payroll_batch_202401_15",
  "status": "processing",
  "total_transfers": 2,
  "total_amount": 5800.00,
  "currency": "USD",
  "transfers": [
    {
      "id": "transfer_def456ghi789",
      "status": "pending",
      "amount": 3000.00,
      "reference": "salary_john_doe_202401"
    },
    {
      "id": "transfer_jkl012mno345",
      "status": "pending",
      "amount": 2800.00,
      "reference": "salary_jane_smith_202401"
    }
  ],
  "estimated_completion": "2024-01-16T16:00:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Transfer</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Process secure fund transfers between wallets, bank accounts, and external payment systems.
                        Manage both internal and external transfers with real-time status tracking.
                    </p>

                    {/* Create Transfer */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Create Transfer
                        </h2>
                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Send className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Create New Transfer
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Initiate a transfer between wallets, bank accounts, or external payment
                                        providers with comprehensive validation and fraud detection.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getCreateTransferEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getCreateTransferRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getCreateTransferResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Transfer Status */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transfer
                            Status</h2>

                        <div className="space-y-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Clock className="h-12 w-12 text-blue-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                            Get Transfer Status
                                        </h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Check the current status and details of a transfer including processing
                                            updates and completion information.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getTransferStatusEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getTransferStatusResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Values */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <div
                                    className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-4"/>
                                        <span
                                            className="font-semibold text-yellow-800 dark:text-yellow-200">pending</span>
                                    </div>
                                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">Transfer created,
                                        awaiting processing</p>
                                </div>

                                <div
                                    className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <ArrowRightLeft className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4"/>
                                        <span
                                            className="font-semibold text-blue-800 dark:text-blue-200">processing</span>
                                    </div>
                                    <p className="text-blue-700 dark:text-blue-300 text-sm">Funds secured, transfer in
                                        progress</p>
                                </div>

                                <div
                                    className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 lg:p-8 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-4"/>
                                        <span
                                            className="font-semibold text-green-800 dark:text-green-200">completed</span>
                                    </div>
                                    <p className="text-green-700 dark:text-green-300 text-sm">Transfer completed
                                        successfully</p>
                                </div>

                                <div
                                    className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 lg:p-8 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 mr-4"/>
                                        <span className="font-semibold text-red-800 dark:text-red-200">failed</span>
                                    </div>
                                    <p className="text-red-700 dark:text-red-300 text-sm">Transfer failed, funds
                                        returned</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bulk Transfer */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Bulk Transfer
                        </h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <ArrowRightLeft className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">
                                        Process Bulk Transfers
                                    </h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Execute multiple transfers in a single batch operation with atomic processing
                                        and comprehensive error handling.
                                    </p>

                                    <div
                                        className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 lg:p-8 shadow-sm mb-4">
                                        <div className="flex">
                                            <AlertTriangle
                                                className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-4"/>
                                            <div>
                                                <h4 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Batch
                                                    Limits</h4>
                                                <p className="text-orange-700 dark:text-orange-300 text-sm mt-1">
                                                    Maximum 100 transfers per batch. Total batch amount cannot exceed
                                                    $50,000 USD.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getBulkTransferEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{getBulkTransferRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{getBulkTransferResponseCode()}</CodeBlock>
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
                        title: "Payout",
                        href: "/payout"
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

export default Transfer;

