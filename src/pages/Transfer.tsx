import { ArrowLeft, ArrowRight, Send, ArrowRightLeft, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";

const Transfer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="prose prose-invert max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Transfer</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Process secure fund transfers between wallets, bank accounts, and external payment systems. Manage both internal and external transfers with real-time status tracking.
        </p>

        {/* Create Transfer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Transfer</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Send className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Create New Transfer</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Initiate a transfer between wallets, bank accounts, or external payment providers with comprehensive validation and fraud detection.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <CodeBlock>{`POST /api/v1/transfers`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Transfer Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Transfer Status</h2>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Transfer Status</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Check the current status and details of a transfer including processing updates and completion information.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`GET /api/v1/transfers/{transfer_id}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Values */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2"/>
                  <span className="font-semibold text-yellow-800 dark:text-yellow-200">pending</span>
                </div>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">Transfer created, awaiting processing</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <ArrowRightLeft className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"/>
                  <span className="font-semibold text-blue-800 dark:text-blue-200">processing</span>
                </div>
                <p className="text-blue-700 dark:text-blue-300 text-sm">Funds secured, transfer in progress</p>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2"/>
                  <span className="font-semibold text-green-800 dark:text-green-200">completed</span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm">Transfer completed successfully</p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2"/>
                  <span className="font-semibold text-red-800 dark:text-red-200">failed</span>
                </div>
                <p className="text-red-700 dark:text-red-300 text-sm">Transfer failed, funds returned</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Transfer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bulk Transfer</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <ArrowRightLeft className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Process Bulk Transfers</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Execute multiple transfers in a single batch operation with atomic processing and comprehensive error handling.
                </p>

                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-3"/>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Batch Limits</h4>
                      <p className="text-orange-700 dark:text-orange-300 text-sm mt-1">
                        Maximum 100 transfers per batch. Total batch amount cannot exceed $50,000 USD.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <CodeBlock>{`POST /api/v1/transfers/bulk`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <CodeBlock language="json">{`{
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
      "amount": 3500.00,
      "reference": "salary_jane_smith_202401"
    }
  ],
  "callback_url": "https://yourapp.com/webhooks/bulk-transfer"
}`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <CodeBlock language="json">{`{
  "batch_id": "batch_xyz789abc123",
  "batch_reference": "payroll_batch_202401_15",
  "status": "processing",
  "total_transfers": 2,
  "total_amount": 6500.00,
  "currency": "USD",
  "transfers": [
    {
      "id": "transfer_001",
      "reference": "salary_john_doe_202401",
      "amount": 3000.00,
      "status": "pending"
    },
    {
      "id": "transfer_002",
      "reference": "salary_jane_smith_202401",
      "amount": 3500.00,
      "status": "pending"
    }
  ],
  "estimated_completion": "2024-01-16T16:00:00Z",
  "created_at": "2024-01-15T14:30:00Z"
}`}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer Fees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Transfer Fees</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transfer Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee Structure</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Daily Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Wallet to Wallet</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Free</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$100,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Wallet to Bank (ACH)</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-3 business days</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$5.00 flat fee</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$25,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Wallet to Bank (Wire)</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Same day</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$25.00 flat fee</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$100,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">International Transfer</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2-5 business days</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">3.5% + $15.00</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">$50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h2>

          <div className="space-y-6">
            <CodeBlock
              title="Node.js - Create Transfer with Status Tracking"
              language="javascript"
            >{`const passpoint = require('@passpoint/sdk');

const client = new passpoint.Client({
  apiKey: process.env.PASSPOINT_API_KEY
});

async function createTransferWithTracking(transferData) {
  try {
    // Create transfer
    const transfer = await client.transfers.create({
      source: {
        type: 'wallet',
        id: transferData.sourceWalletId
      },
      destination: {
        type: 'bank_account',
        account_number: transferData.accountNumber,
        routing_number: transferData.routingNumber,
        account_holder_name: transferData.holderName
      },
      amount: transferData.amount,
      currency: 'USD',
      description: transferData.description,
      reference: transferData.reference,
      callback_url: 'https://yourapp.com/webhooks/transfer'
    });

    console.log('Transfer created:', transfer.id);

    // Poll for status updates
    const pollStatus = async () => {
      const status = await client.transfers.get(transfer.id);
      console.log(\`Transfer \${transfer.id} status: \${status.status}\`);

      if (['completed', 'failed', 'cancelled'].includes(status.status)) {
        console.log('Transfer finished:', status);
        return status;
      }

      // Continue polling every 30 seconds
      setTimeout(pollStatus, 30000);
    };

    // Start status polling
    setTimeout(pollStatus, 30000);

    return transfer;
  } catch (error) {
    console.error('Transfer creation failed:', error.message);
    throw error;
  }
}

// Usage
createTransferWithTracking({
  sourceWalletId: 'wallet_1234567890',
  accountNumber: '1234567890',
  routingNumber: '021000021',
  holderName: 'John Doe',
  amount: 1500.00,
  description: 'Monthly salary transfer',
  reference: 'payroll_202401_001'
});`}</CodeBlock>

            <CodeBlock
              title="Java - Bulk Transfer Processing"
              language="java"
            >{`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.*;
import java.time.Instant;
import java.util.concurrent.TimeUnit;

public class PasspointTransfer {
    private final String apiKey;
    private final String baseUrl;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public PasspointTransfer(String apiKey) {
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

    public Map<String, Object> createBulkTransfer(List<Map<String, Object>> transfers, String batchReference)
            throws Exception {
        Map<String, Object> data = new HashMap<>();
        data.put("batch_reference", batchReference);
        data.put("description", "Bulk transfer batch " + batchReference);
        data.put("transfers", transfers);
        data.put("callback_url", "https://yourapp.com/webhooks/bulk-transfer");

        String requestBody = objectMapper.writeValueAsString(data);

        HttpRequest request = getRequestBuilder()
            .uri(URI.create(baseUrl + "/transfers/bulk"))
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse<String> response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 200) {
            return objectMapper.readValue(response.body(), Map.class);
        } else {
            throw new Exception("Bulk transfer failed: " + response.body());
        }
    }

    public Map<String, Object> monitorBatchStatus(String batchId, int maxWaitTimeSeconds)
            throws Exception {
        long startTime = System.currentTimeMillis();
        long maxWaitTimeMillis = maxWaitTimeSeconds * 1000L;

        while (System.currentTimeMillis() - startTime < maxWaitTimeMillis) {
            HttpRequest request = getRequestBuilder()
                .uri(URI.create(baseUrl + "/transfers/bulk/" + batchId))
                .GET()
                .build();

            HttpResponse<String> response = httpClient.send(request,
                HttpResponse.BodyHandlers.ofString());

            Map<String, Object> batch = objectMapper.readValue(response.body(), Map.class);
            String status = (String) batch.get("status");

            System.out.println("Batch " + batchId + " status: " + status);

            if (Arrays.asList("completed", "failed", "partially_completed").contains(status)) {
                return batch;
            }

            TimeUnit.SECONDS.sleep(30); // Wait 30 seconds before next check
        }

        throw new RuntimeException("Batch " + batchId + " did not complete within " + maxWaitTimeSeconds + " seconds");
    }

    // Usage
    public static void main(String[] args) throws Exception {
        PasspointTransfer transferClient = new PasspointTransfer("your_api_key");

        // Prepare transfers
        List<Map<String, Object>> payrollTransfers = Arrays.asList(
            Map.of(
                "source", Map.of("type", "wallet", "id", "company_wallet_main"),
                "destination", Map.of(
                    "type", "bank_account",
                    "account_number", "1234567890",
                    "routing_number", "021000021",
                    "account_holder_name", "John Doe"
                ),
                "amount", 3000.00,
                "reference", "salary_john_202401"
            ),
            Map.of(
                "source", Map.of("type", "wallet", "id", "company_wallet_main"),
                "destination", Map.of(
                    "type", "bank_account",
                    "account_number", "9876543210",
                    "routing_number", "021000021",
                    "account_holder_name", "Jane Smith"
                ),
                "amount", 3500.00,
                "reference", "salary_jane_202401"
            )
        );

        try {
            // Create bulk transfer
            Map<String, Object> batch = transferClient.createBulkTransfer(
                payrollTransfers,
                "payroll_202401_15"
            );

            System.out.println("Bulk transfer created: " + batch.get("batch_id"));

            // Monitor completion
            Map<String, Object> finalStatus = transferClient.monitorBatchStatus(
                (String) batch.get("batch_id"), 3600);
            System.out.println("Batch completed with status: " + finalStatus.get("status"));

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
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
            <div className="text-sm font-medium truncate">Wallet</div>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
        >
          <div className="text-right min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="text-sm font-medium truncate">Payout</div>
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

export default Transfer;