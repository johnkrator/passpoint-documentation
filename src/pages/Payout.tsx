import { ArrowLeft, ArrowRight, DollarSign, CreditCard, Banknote, Clock, CheckCircle, AlertTriangle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const Payout = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Payout</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Process secure payouts to bank accounts, cards, and digital wallets. Manage single and batch payouts with comprehensive compliance and fraud protection.
        </p>

        {/* Create Payout */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Payout</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <DollarSign className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Create New Payout</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Initiate a payout to various destination types including bank accounts, debit cards, and digital wallets with real-time validation.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <CodeBlock>{`POST /api/v1/payouts`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payout Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payout Methods</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Bank Account Payout */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-blue-500 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bank Account</h3>
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
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 text-green-500 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Debit Card</h3>
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
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Banknote className="h-8 w-8 text-purple-500 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digital Wallet</h3>
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payout Status</h2>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Payout Status</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Track payout progress including compliance checks, processing updates, and delivery confirmation.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`GET /api/v1/payouts/{payout_id}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
  "compliance_checks": {
    "aml_status": "approved",
    "sanctions_status": "clear",
    "fraud_score": 0.12,
    "completed_at": "2024-01-15T14:45:00Z"
  },
  "status_history": [
    {
      "status": "pending_compliance",
      "timestamp": "2024-01-15T14:30:00Z",
      "note": "Payout created, compliance checks initiated"
    },
    {
      "status": "approved",
      "timestamp": "2024-01-15T14:45:00Z",
      "note": "Compliance checks passed, payout approved"
    },
    {
      "status": "processing",
      "timestamp": "2024-01-15T15:00:00Z",
      "note": "Payout sent to banking network"
    },
    {
      "status": "completed",
      "timestamp": "2024-01-17T16:22:00Z",
      "note": "Payout delivered successfully"
    }
  ],
  "created_at": "2024-01-15T14:30:00Z",
  "completed_at": "2024-01-17T16:22:00Z"
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
                  <span className="font-semibold text-yellow-800 dark:text-yellow-200">pending_compliance</span>
                </div>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">Compliance and fraud checks in progress</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"/>
                  <span className="font-semibold text-blue-800 dark:text-blue-200">approved</span>
                </div>
                <p className="text-blue-700 dark:text-blue-300 text-sm">Compliance passed, ready for processing</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2"/>
                  <span className="font-semibold text-purple-800 dark:text-purple-200">processing</span>
                </div>
                <p className="text-purple-700 dark:text-purple-300 text-sm">Payout sent to recipient's bank</p>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2"/>
                  <span className="font-semibold text-green-800 dark:text-green-200">completed</span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm">Payout delivered successfully</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Payouts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bulk Payouts</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <DollarSign className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Process Bulk Payouts</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Execute multiple payouts in a single batch operation with comprehensive compliance checking and error handling.
                </p>

                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5 mr-3"/>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Batch Limits</h4>
                      <p className="text-orange-700 dark:text-orange-300 text-sm mt-1">
                        Maximum 500 payouts per batch. Each payout subject to individual compliance checks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <CodeBlock>{`POST /api/v1/payouts/bulk`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <CodeBlock language="json">{`{
  "batch_reference": "marketplace_payouts_202401_15",
  "description": "Weekly marketplace seller payouts",
  "payouts": [
    {
      "recipient": {
        "type": "bank_account",
        "bank_details": {
          "account_number": "1234567890",
          "routing_number": "021000021",
          "account_holder_name": "Alice Johnson",
          "bank_name": "Wells Fargo"
        }
      },
      "amount": 850.00,
      "currency": "USD",
      "purpose": "marketplace_payout",
      "description": "Weekly sales commission",
      "reference": "seller_alice_week_03"
    },
    {
      "recipient": {
        "type": "debit_card",
        "card_details": {
          "card_number": "4111111111111111",
          "cardholder_name": "Bob Smith"
        }
      },
      "amount": 1200.00,
      "currency": "USD",
      "purpose": "marketplace_payout",
      "description": "Weekly sales commission",
      "reference": "seller_bob_week_03"
    }
  ],
  "callback_url": "https://yourapp.com/webhooks/bulk-payout"
}`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <CodeBlock language="json">{`{
  "batch_id": "batch_payout_def456ghi789",
  "batch_reference": "marketplace_payouts_202401_15",
  "status": "processing",
  "total_payouts": 2,
  "total_amount": 2050.00,
  "currency": "USD",
  "payouts": [
    {
      "id": "payout_001",
      "reference": "seller_alice_week_03",
      "amount": 850.00,
      "status": "pending_compliance",
      "recipient_type": "bank_account"
    },
    {
      "id": "payout_002",
      "reference": "seller_bob_week_03",
      "amount": 1200.00,
      "status": "pending_compliance",
      "recipient_type": "debit_card"
    }
  ],
  "estimated_completion": "2024-01-17T18:00:00Z",
  "created_at": "2024-01-15T16:30:00Z"
}`}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compliance Requirements</h2>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <div className="flex">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 mr-3"/>
              <div>
                <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Compliance Notice</h3>
                <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                  All payouts are subject to anti-money laundering (AML) and sanctions screening. Large amounts may require additional documentation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Payout Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Documentation Required</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Additional Checks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Under $1,000</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Basic recipient info</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Instant - 3 days</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Automated screening</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">$1,000 - $10,000</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">ID verification, purpose</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1-5 business days</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Enhanced due diligence</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Over $10,000</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Full KYC, source of funds</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">3-7 business days</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual review required</td>
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
              title="Node.js - Create Payout with Compliance Tracking"
              language="javascript"
            >{`const passpoint = require('@passpoint/sdk');

const client = new passpoint.Client({
  apiKey: process.env.PASSPOINT_API_KEY
});

async function createPayoutWithCompliance(payoutData) {
  try {
    // Create payout
    const payout = await client.payouts.create({
      recipient: {
        type: 'bank_account',
        bank_details: {
          account_number: payoutData.accountNumber,
          routing_number: payoutData.routingNumber,
          account_holder_name: payoutData.holderName,
          bank_name: payoutData.bankName
        },
        address: payoutData.address
      },
      amount: payoutData.amount,
      currency: 'USD',
      purpose: payoutData.purpose,
      description: payoutData.description,
      reference: payoutData.reference,
      compliance: {
        source_of_funds: payoutData.sourceOfFunds,
        business_purpose: payoutData.businessPurpose
      },
      callback_url: 'https://yourapp.com/webhooks/payout'
    });

    console.log('Payout created:', payout.id);

    // Monitor compliance and processing status
    const monitorPayout = async () => {
      const status = await client.payouts.get(payout.id);
      console.log(\`Payout \${payout.id} status: \${status.status}\`);

      if (status.status === 'pending_compliance') {
        console.log('Compliance checks in progress...');
        console.log('AML Status:', status.compliance_checks.aml_status);
        console.log('Fraud Score:', status.compliance_checks.fraud_score);
      }

      if (['completed', 'failed', 'rejected'].includes(status.status)) {
        console.log('Payout finished:', status);
        return status;
      }

      // Continue monitoring every 60 seconds
      setTimeout(monitorPayout, 60000);
    };

    // Start monitoring
    setTimeout(monitorPayout, 60000);

    return payout;
  } catch (error) {
    console.error('Payout creation failed:', error.message);
    throw error;
  }
}

// Usage
createPayoutWithCompliance({
  accountNumber: '1234567890',
  routingNumber: '021000021',
  holderName: 'John Doe',
  bankName: 'Chase Bank',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    postal_code: '10001',
    country: 'US'
  },
  amount: 2500.00,
  purpose: 'freelancer_payment',
  description: 'Website development project',
  reference: 'project_001_payment',
  sourceOfFunds: 'business_revenue',
  businessPurpose: 'contractor_payment'
});`}</CodeBlock>

            <CodeBlock
              title="Java - Bulk Payout Processing"
              language="java"
            >{`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.*;
import java.util.concurrent.TimeUnit;

public class PasspointPayout {
    private final String apiKey;
    private final String baseUrl;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public PasspointPayout(String apiKey) {
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

    public Map<String, Object> createBulkPayout(List<Map<String, Object>> payouts, String batchReference)
            throws Exception {
        Map<String, Object> data = new HashMap<>();
        data.put("batch_reference", batchReference);
        data.put("description", "Bulk payout batch " + batchReference);
        data.put("payouts", payouts);
        data.put("callback_url", "https://yourapp.com/webhooks/bulk-payout");

        String requestBody = objectMapper.writeValueAsString(data);

        HttpRequest request = getRequestBuilder()
            .uri(URI.create(baseUrl + "/payouts/bulk"))
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse<String> response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 200) {
            return objectMapper.readValue(response.body(), Map.class);
        } else {
            throw new Exception("Bulk payout failed: " + response.body());
        }
    }

    public Map<String, Object> monitorBulkPayoutStatus(String batchId) throws Exception {
        while (true) {
            HttpRequest request = getRequestBuilder()
                .uri(URI.create(baseUrl + "/payouts/bulk/" + batchId))
                .GET()
                .build();

            HttpResponse<String> response = httpClient.send(request,
                HttpResponse.BodyHandlers.ofString());

            Map<String, Object> batch = objectMapper.readValue(response.body(), Map.class);
            String status = (String) batch.get("status");

            System.out.println("Batch " + batchId + " status: " + status);

            // Check individual payout statuses
            List<Map<String, Object>> payouts = (List<Map<String, Object>>) batch.get("payouts");
            for (Map<String, Object> payout : payouts) {
                System.out.println("  Payout " + payout.get("id") + ": " + payout.get("status"));
            }

            if (Arrays.asList("completed", "failed", "partially_completed").contains(status)) {
                return batch;
            }

            TimeUnit.MINUTES.sleep(1); // Check every minute
        }
    }

    public boolean validatePayoutCompliance(double amount, String purpose, String recipientCountry) {
        // Check if payout meets compliance requirements
        if (amount > 10000) {
            System.out.println("Warning: Large amount requires manual review");
            return false;
        }

        List<String> restrictedCountries = Arrays.asList("XX", "YY"); // Example restricted countries
        if (restrictedCountries.contains(recipientCountry)) {
            System.out.println("Error: Payouts to " + recipientCountry + " are restricted");
            return false;
        }

        return true;
    }

    // Usage
    public static void main(String[] args) throws Exception {
        PasspointPayout payoutClient = new PasspointPayout("your_api_key");

        // Prepare marketplace payouts
        List<Map<String, Object>> marketplacePayouts = Arrays.asList(
            Map.of(
                "recipient", Map.of(
                    "type", "bank_account",
                    "bank_details", Map.of(
                        "account_number", "1234567890",
                        "routing_number", "021000021",
                        "account_holder_name", "Alice Johnson",
                        "bank_name", "Wells Fargo"
                    )
                ),
                "amount", 850.00,
                "currency", "USD",
                "purpose", "marketplace_payout",
                "description", "Weekly sales commission",
                "reference", "seller_alice_week_03"
            ),
            Map.of(
                "recipient", Map.of(
                    "type", "debit_card",
                    "card_details", Map.of(
                        "card_number", "4111111111111111",
                        "cardholder_name", "Bob Smith"
                    )
                ),
                "amount", 1200.00,
                "currency", "USD",
                "purpose", "marketplace_payout",
                "description", "Weekly sales commission",
                "reference", "seller_bob_week_03"
            )
        );

        try {
            // Validate compliance for each payout
            for (Map<String, Object> payout : marketplacePayouts) {
                String recipientCountry = "US"; // Get from recipient data
                double amount = (Double) payout.get("amount");
                String purpose = (String) payout.get("purpose");

                if (!payoutClient.validatePayoutCompliance(amount, purpose, recipientCountry)) {
                    continue;
                }
            }

            // Create bulk payout
            Map<String, Object> batch = payoutClient.createBulkPayout(
                marketplacePayouts,
                "marketplace_202401_15"
            );

            System.out.println("Bulk payout created: " + batch.get("batch_id"));

            // Monitor completion
            Map<String, Object> finalStatus = payoutClient.monitorBulkPayoutStatus(
                (String) batch.get("batch_id"));
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
        <Link to="/transfer">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
            <div className="text-left min-w-0">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
              <div className="text-sm font-medium truncate">Transfer</div>
            </div>
          </Button>
        </Link>

        <Link to="/transfer/collection">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
              <div className="text-sm font-medium truncate">Collection</div>
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
  );
};

export default Payout;