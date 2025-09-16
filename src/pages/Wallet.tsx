import { ArrowLeft, ArrowRight, Wallet as WalletIcon, CreditCard, Send, ArrowDownToLine, BarChart3, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wallet = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Wallet</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Manage digital wallets, balances, and transactions. Create and maintain user wallets with multi-currency support and real-time balance tracking.
        </p>

        {/* Create Wallet */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Wallet</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <WalletIcon className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Create New Wallet</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Create a new digital wallet for a user with specified currency and initial settings.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <span className="text-green-600 dark:text-green-400">POST</span> /api/v1/wallets
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "user_id": "user_1234567890",
  "currency": "USD",
  "name": "Main Wallet",
  "type": "personal",
  "metadata": {
    "department": "engineering",
    "project": "mobile-app"
  }
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "id": "wallet_9876543210",
  "user_id": "user_1234567890",
  "currency": "USD",
  "name": "Main Wallet",
  "type": "personal",
  "balance": {
    "available": 0,
    "pending": 0,
    "total": 0
  },
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "metadata": {
    "department": "engineering",
    "project": "mobile-app"
  }
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Wallet Balance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Wallet Balance</h2>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <BarChart3 className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Wallet Balance</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Retrieve current balance information for a specific wallet including available, pending, and total amounts.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                        <span className="text-blue-600 dark:text-blue-400">GET</span> /api/v1/wallets/{`{wallet_id}`}/balance
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
  "wallet_id": "wallet_9876543210",
  "currency": "USD",
  "balance": {
    "available": 1250.75,
    "pending": 100.00,
    "total": 1350.75
  },
  "last_updated": "2024-01-15T14:22:33Z",
  "transactions_count": 42
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add Funds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add Funds</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <ArrowDownToLine className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Add Funds to Wallet</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Credit funds to a wallet from various sources including bank transfers, card payments, or system credits.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <span className="text-green-600 dark:text-green-400">POST</span> /api/v1/wallets/{`{wallet_id}`}/credit
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "amount": 500.00,
  "source": "bank_transfer",
  "reference": "deposit_20240115_001",
  "description": "Monthly salary deposit",
  "metadata": {
    "payment_method": "ACH",
    "external_ref": "bank_tx_xyz789"
  }
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "transaction_id": "tx_1234567890abcdef",
  "wallet_id": "wallet_9876543210",
  "type": "credit",
  "amount": 500.00,
  "status": "completed",
  "reference": "deposit_20240115_001",
  "description": "Monthly salary deposit",
  "balance_after": {
    "available": 1750.75,
    "pending": 100.00,
    "total": 1850.75
  },
  "created_at": "2024-01-15T15:30:00Z"
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Withdraw Funds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Withdraw Funds</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Send className="h-8 w-8 text-red-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Withdraw from Wallet</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Debit funds from a wallet for payments, transfers, or withdrawals to external accounts.
                </p>

                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-4">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-3"/>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Insufficient Funds</h4>
                      <p className="text-orange-700 dark:text-orange-300 text-sm mt-1">
                        Withdrawal requests will fail if the wallet doesn't have sufficient available balance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <span className="text-green-600 dark:text-green-400">POST</span> /api/v1/wallets/{`{wallet_id}`}/debit
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "amount": 200.00,
  "destination": "bank_account",
  "reference": "withdrawal_20240115_002",
  "description": "ATM withdrawal",
  "metadata": {
    "atm_location": "Main Street Branch",
    "card_last_four": "1234"
  }
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "transaction_id": "tx_abcdef1234567890",
  "wallet_id": "wallet_9876543210",
  "type": "debit",
  "amount": 200.00,
  "status": "processing",
  "reference": "withdrawal_20240115_002",
  "description": "ATM withdrawal",
  "balance_after": {
    "available": 1550.75,
    "pending": 300.00,
    "total": 1850.75
  },
  "created_at": "2024-01-15T16:45:00Z",
  "estimated_completion": "2024-01-16T10:00:00Z"
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Transaction History</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <CreditCard className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Transaction History</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Retrieve paginated transaction history for a wallet with filtering and sorting options.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <span className="text-blue-600 dark:text-blue-400">GET</span> /api/v1/wallets/{`{wallet_id}`}/transactions
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="space-y-1">
                        <div>?limit=50&page=1</div>
                        <div>&type=credit,debit</div>
                        <div>&status=completed</div>
                        <div>&from_date=2024-01-01</div>
                        <div>&to_date=2024-01-31</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "wallet_id": "wallet_9876543210",
  "transactions": [
    {
      "id": "tx_abcdef1234567890",
      "type": "debit",
      "amount": 200.00,
      "status": "completed",
      "description": "ATM withdrawal",
      "reference": "withdrawal_20240115_002",
      "created_at": "2024-01-15T16:45:00Z",
      "completed_at": "2024-01-16T10:00:00Z"
    },
    {
      "id": "tx_1234567890abcdef",
      "type": "credit",
      "amount": 500.00,
      "status": "completed",
      "description": "Monthly salary deposit",
      "reference": "deposit_20240115_001",
      "created_at": "2024-01-15T15:30:00Z",
      "completed_at": "2024-01-15T15:30:00Z"
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 50,
    "total_pages": 3,
    "total_transactions": 142
  }
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h2>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Node.js - Create Wallet and Add Funds</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`const passpoint = require('@passpoint/sdk');

const client = new passpoint.Client({
  apiKey: process.env.PASSPOINT_API_KEY
});

async function createUserWallet(userId) {
  try {
    // Create wallet
    const wallet = await client.wallets.create({
      user_id: userId,
      currency: 'USD',
      name: 'Main Wallet',
      type: 'personal'
    });

    console.log('Wallet created:', wallet.id);

    // Add initial funds
    const credit = await client.wallets.credit(wallet.id, {
      amount: 100.00,
      source: 'promotion',
      description: 'Welcome bonus',
      reference: 'bonus_' + Date.now()
    });

    console.log('Funds added:', credit.transaction_id);
    return wallet;
  } catch (error) {
    console.error('Error:', error.message);
  }
}`}</pre>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Python - Check Balance and Withdraw</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`import requests

class PasspointWallet:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.passpoint.com/v1'

    def get_headers(self):
        return {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }

    def get_balance(self, wallet_id):
        response = requests.get(
            f'{self.base_url}/wallets/{wallet_id}/balance',
            headers=self.get_headers()
        )
        return response.json()

    def withdraw_funds(self, wallet_id, amount, description):
        # Check balance first
        balance = self.get_balance(wallet_id)
        if balance['balance']['available'] < amount:
            raise ValueError('Insufficient funds')

        # Process withdrawal
        data = {
            'amount': amount,
            'destination': 'bank_account',
            'description': description,
            'reference': f'withdraw_{int(time.time())}'
        }

        response = requests.post(
            f'{self.base_url}/wallets/{wallet_id}/debit',
            json=data,
            headers=self.get_headers()
        )

        return response.json()

# Usage
wallet = PasspointWallet(api_key='your_api_key')
result = wallet.withdraw_funds('wallet_123', 50.00, 'Coffee expense')`}</pre>
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
          <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
          <div className="text-left min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="text-sm font-medium truncate">Authentication</div>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
        >
          <div className="text-right min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="text-sm font-medium truncate">Transfer</div>
          </div>
          <ArrowRight className="h-4 w-4 flex-shrink-0"/>
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-sm">All rights reserved</p>
      </footer>
    </div>
  );
};

export default Wallet;