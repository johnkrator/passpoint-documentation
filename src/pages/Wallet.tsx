import { ArrowLeft, ArrowRight, Wallet as WalletIcon, CreditCard, Send, ArrowDownToLine, BarChart3, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Wallet</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Manage digital wallets, balances, and transactions. Create and maintain user wallets with multi-currency support and real-time balance tracking.
          </p>

          {/* Create Wallet */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Create Wallet</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <WalletIcon className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Create New Wallet</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Create a new digital wallet for a user with specified currency and initial settings.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/wallets`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "user_id": "user_1234567890",
  "currency": "USD",
  "name": "Main Wallet",
  "type": "personal",
  "metadata": {
    "department": "engineering",
    "project": "mobile-app"
  }
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Wallet Balance */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Wallet Balance</h2>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <BarChart3 className="h-12 w-12 text-green-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get Wallet Balance</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Retrieve current balance information for a specific wallet including available, pending, and total amounts.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                        <CodeBlock>{`GET /api/v1/wallets/{wallet_id}/balance`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                        <CodeBlock language="json">{`{
  "wallet_id": "wallet_9876543210",
  "currency": "USD",
  "balance": {
    "available": 1250.75,
    "pending": 100.00,
    "total": 1350.75
  },
  "last_updated": "2024-01-15T14:22:33Z",
  "transactions_count": 42
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add Funds */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Add Funds</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <ArrowDownToLine className="h-12 w-12 text-blue-500 flex-shrink-0"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Add Funds to Wallet</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Credit funds to a wallet from various sources including bank transfers, card payments, or system credits.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/wallets/{wallet_id}/credit`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "amount": 500.00,
  "source": "bank_transfer",
  "reference": "deposit_20240115_001",
  "description": "Monthly salary deposit",
  "metadata": {
    "payment_method": "ACH",
    "external_ref": "bank_tx_xyz789"
  }
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Withdraw Funds */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Withdraw Funds</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Send className="h-12 w-12 text-red-500 flex-shrink-0"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Withdraw from Wallet</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Debit funds from a wallet for payments, transfers, or withdrawals to external accounts.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 lg:p-8 mb-6 shadow-sm">
                    <div className="flex">
                      <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-4"/>
                      <div>
                        <h4 className="text-base font-semibold text-orange-800 dark:text-orange-200 mb-2">Insufficient Funds</h4>
                        <p className="text-orange-700 dark:text-orange-300">
                          Withdrawal requests will fail if the wallet doesn't have sufficient available balance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/wallets/{wallet_id}/debit`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "amount": 200.00,
  "destination": "bank_account",
  "reference": "withdrawal_20240115_002",
  "description": "ATM withdrawal",
  "metadata": {
    "atm_location": "Main Street Branch",
    "card_last_four": "1234"
  }
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transaction History */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Transaction History</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <CreditCard className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get Transaction History</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Retrieve paginated transaction history for a wallet with filtering and sorting options.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`GET /api/v1/wallets/{wallet_id}/transactions`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4>
                      <CodeBlock>{`?limit=50&page=1
&type=credit,debit
&status=completed
&from_date=2024-01-01
&to_date=2024-01-31`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Code Examples</h2>

            <div className="space-y-8">
              <CodeBlock
                title="Node.js - Create Wallet and Add Funds"
                language="javascript"
              >{`const passpoint = require('@passpoint/sdk');

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
}`}</CodeBlock>

              <CodeBlock
                title="Java - Check Balance and Withdraw"
                language="java"
              >{`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
import java.util.HashMap;
import java.time.Instant;

public class PasspointWallet {
    private final String apiKey;
    private final String baseUrl;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public PasspointWallet(String apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.passpoint.com/v1";
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }

    private HttpRequest.Builder getRequestBuilder() {
        return HttpRequest.newBuilder()
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json");
    }

    public Map<String, Object> getBalance(String walletId) throws Exception {
        HttpRequest request = getRequestBuilder()
            .uri(URI.create(baseUrl + "/wallets/" + walletId + "/balance"))
            .GET()
            .build();

        HttpResponse<String> response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString());

        return objectMapper.readValue(response.body(), Map.class);
    }

    public Map<String, Object> withdrawFunds(String walletId, double amount, String description)
            throws Exception {
        // Check balance first
        Map<String, Object> balance = getBalance(walletId);
        Map<String, Object> balanceData = (Map<String, Object>) balance.get("balance");
        double available = (Double) balanceData.get("available");

        if (available < amount) {
            throw new IllegalArgumentException("Insufficient funds");
        }

        // Process withdrawal
        Map<String, Object> data = new HashMap<>();
        data.put("amount", amount);
        data.put("destination", "bank_account");
        data.put("description", description);
        data.put("reference", "withdraw_" + Instant.now().getEpochSecond());

        String requestBody = objectMapper.writeValueAsString(data);

        HttpRequest request = getRequestBuilder()
            .uri(URI.create(baseUrl + "/wallets/" + walletId + "/debit"))
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse<String> response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString());

        return objectMapper.readValue(response.body(), Map.class);
    }

    // Usage
    public static void main(String[] args) throws Exception {
        PasspointWallet wallet = new PasspointWallet("your_api_key");
        Map<String, Object> result = wallet.withdrawFunds("wallet_123", 50.00, "Coffee expense");
        System.out.println("Withdrawal result: " + result);
    }
}`}</CodeBlock>
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
    </div>
  );
};

export default Wallet;