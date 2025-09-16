import { ArrowLeft, ArrowRight, Webhook, Globe, Shield, Settings, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GlobalCallbackSetup = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Global Callback Setup</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Configure global webhook endpoints to receive real-time notifications for all Passpoint events. Set up secure callback URLs with authentication, retry logic, and comprehensive event filtering.
        </p>

        {/* Create Global Webhook */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Global Webhook</h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Webhook className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Create Global Webhook Endpoint</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Register a global webhook endpoint that will receive notifications for all events across your Passpoint account.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <span className="text-green-600 dark:text-green-400">POST</span> /api/v1/webhooks/global
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "url": "https://yourapp.com/webhooks/passpoint",
  "description": "Main webhook endpoint for all Passpoint events",
  "events": [
    "payment.created",
    "payment.succeeded",
    "payment.failed",
    "transfer.created",
    "transfer.completed",
    "transfer.failed",
    "payout.created",
    "payout.completed",
    "payout.failed",
    "wallet.created",
    "wallet.balance_updated",
    "subscription.created",
    "subscription.cancelled",
    "compliance.review_required",
    "fraud.alert_created"
  ],
  "filters": {
    "amount_threshold": {
      "min": 0,
      "max": 50000
    },
    "currencies": ["USD", "EUR", "GBP"],
    "environments": ["live", "test"],
    "risk_levels": ["low", "medium", "high"]
  },
  "security": {
    "signature_verification": true,
    "ip_whitelist": [
      "203.0.113.0/24",
      "198.51.100.0/24"
    ],
    "authentication": {
      "type": "bearer_token",
      "token": "your_webhook_auth_token"
    }
  },
  "retry_config": {
    "max_attempts": 5,
    "backoff_strategy": "exponential",
    "timeout_seconds": 30
  },
  "metadata": {
    "environment": "production",
    "team": "backend",
    "priority": "high"
  }
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-900 dark:text-gray-100">{`{
  "id": "webhook_global_abc123def456",
  "url": "https://yourapp.com/webhooks/passpoint",
  "description": "Main webhook endpoint for all Passpoint events",
  "status": "active",
  "events": [
    "payment.created",
    "payment.succeeded",
    "payment.failed",
    "transfer.created",
    "transfer.completed",
    "transfer.failed",
    "payout.created",
    "payout.completed",
    "payout.failed",
    "wallet.created",
    "wallet.balance_updated",
    "subscription.created",
    "subscription.cancelled",
    "compliance.review_required",
    "fraud.alert_created"
  ],
  "secret_key": "whsec_1234567890abcdef",
  "verification_url": "https://yourapp.com/webhooks/passpoint/verify",
  "deliveries": {
    "total": 0,
    "successful": 0,
    "failed": 0,
    "pending": 0
  },
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webhook Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Webhook Events</h2>

          <div className="space-y-6">
            {/* Payment Events */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Events</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">payment.created</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Payment initiated by customer</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">payment.succeeded</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Payment completed successfully</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">payment.failed</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Payment declined or failed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">payment.refunded</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Payment refunded to customer</div>
                </div>
              </div>
            </div>

            {/* Transfer Events */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-500 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transfer Events</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">transfer.created</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Transfer initiated</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">transfer.processing</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Transfer in progress</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">transfer.completed</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Transfer delivered successfully</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">transfer.failed</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Transfer failed, funds returned</div>
                </div>
              </div>
            </div>

            {/* Compliance Events */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-500 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance & Security Events</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">compliance.review_required</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Manual compliance review needed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">fraud.alert_created</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Suspicious activity detected</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">kyc.verification_required</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Customer verification needed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">account.suspended</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Account temporarily suspended</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webhook Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Webhook Security</h2>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <div className="flex">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 mr-3"/>
              <div>
                <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Security Notice</h3>
                <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                  Always verify webhook signatures to ensure requests are from Passpoint. Implement proper authentication and use HTTPS endpoints only.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Signature Verification</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Verify webhook authenticity using HMAC-SHA256 signatures included in request headers.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Signature Header</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                        <div className="text-brand-600 dark:text-brand-400">X-Passpoint-Signature: t=1642676400,v1=a2114d57b48eac39b9ad189dd8316235a7b4a8d21a10bd27519666489c69b503</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Verification Example (Node.js)</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const elements = signature.split(',');
  const timestamp = elements[0].split('=')[1];
  const signatures = elements.slice(1);

  // Create expected signature
  const signedPayload = timestamp + '.' + payload;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(signedPayload, 'utf8')
    .digest('hex');

  // Verify signature
  for (const sig of signatures) {
    const [version, signature] = sig.split('=');
    if (version === 'v1' && crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(signature, 'hex')
    )) {
      return true;
    }
  }

  return false;
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webhook Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Webhook Management</h2>

          <div className="space-y-8">
            {/* Update Webhook */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Settings className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Update Webhook Configuration</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Modify webhook settings, event subscriptions, and security configurations without recreating the webhook.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                        <span className="text-orange-600 dark:text-orange-400">PUT</span> /api/v1/webhooks/global/{`{webhook_id}`}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
  "url": "https://yourapp.com/webhooks/passpoint-v2",
  "description": "Updated webhook endpoint with enhanced security",
  "events": [
    "payment.created",
    "payment.succeeded",
    "payment.failed",
    "transfer.completed",
    "payout.completed",
    "compliance.review_required"
  ],
  "filters": {
    "amount_threshold": {
      "min": 100,
      "max": 25000
    },
    "currencies": ["USD", "EUR"]
  },
  "security": {
    "signature_verification": true,
    "ip_whitelist": [
      "203.0.113.0/24"
    ]
  }
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Webhook Monitoring */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Webhook Delivery Monitoring</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Monitor webhook delivery status, retry attempts, and failure reasons with detailed logs.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                        <span className="text-blue-600 dark:text-blue-400">GET</span> /api/v1/webhooks/global/{`{webhook_id}`}/deliveries
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
  "webhook_id": "webhook_global_abc123def456",
  "deliveries": [
    {
      "id": "delivery_xyz789",
      "event_type": "payment.succeeded",
      "event_id": "payment_abc123",
      "status": "delivered",
      "attempts": 1,
      "response_code": 200,
      "response_time_ms": 245,
      "delivered_at": "2024-01-15T14:22:30Z",
      "created_at": "2024-01-15T14:22:25Z"
    },
    {
      "id": "delivery_def456",
      "event_type": "transfer.failed",
      "event_id": "transfer_xyz789",
      "status": "failed",
      "attempts": 3,
      "last_error": "Connection timeout",
      "response_code": 0,
      "next_retry_at": "2024-01-15T14:30:00Z",
      "created_at": "2024-01-15T14:20:15Z"
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 50,
    "total_pages": 5,
    "total_deliveries": 247
  },
  "statistics": {
    "total_deliveries": 1000,
    "successful_deliveries": 987,
    "failed_deliveries": 13,
    "success_rate": 98.7,
    "average_response_time_ms": 156
  }
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Payload Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Payload Examples</h2>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Payment Succeeded Event</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`{
  "id": "evt_1234567890abcdef",
  "type": "payment.succeeded",
  "data": {
    "object": {
      "id": "payment_xyz789abc123",
      "amount": 149.99,
      "currency": "USD",
      "status": "succeeded",
      "customer": {
        "email": "customer@example.com",
        "name": "John Doe"
      },
      "payment_method": {
        "type": "card",
        "card": {
          "brand": "visa",
          "last_four": "1111"
        }
      },
      "created_at": "2024-01-15T14:22:00Z",
      "captured_at": "2024-01-15T14:22:01Z"
    }
  },
  "created": 1642676525,
  "livemode": true,
  "pending_webhooks": 1,
  "request": {
    "id": "req_abc123def456",
    "idempotency_key": "payment_20240115_001"
  }
}`}</pre>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Transfer Completed Event</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`{
  "id": "evt_abcdef1234567890",
  "type": "transfer.completed",
  "data": {
    "object": {
      "id": "transfer_def456ghi789",
      "amount": 2500.00,
      "currency": "USD",
      "status": "completed",
      "source": {
        "type": "wallet",
        "id": "wallet_1234567890"
      },
      "destination": {
        "type": "bank_account",
        "account_number": "****7890"
      },
      "created_at": "2024-01-15T10:30:00Z",
      "completed_at": "2024-01-17T16:22:00Z"
    }
  },
  "created": 1642850520,
  "livemode": true,
  "pending_webhooks": 1,
  "request": {
    "id": "req_xyz789abc123",
    "idempotency_key": "transfer_payroll_20240115"
  }
}`}</pre>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Compliance Review Required Event</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`{
  "id": "evt_compliance_789abc",
  "type": "compliance.review_required",
  "data": {
    "object": {
      "id": "review_req_456def",
      "transaction_id": "payout_xyz789abc123",
      "transaction_type": "payout",
      "amount": 15000.00,
      "currency": "USD",
      "reason": "large_amount_threshold_exceeded",
      "priority": "high",
      "required_documents": [
        "source_of_funds_verification",
        "recipient_identification"
      ],
      "deadline": "2024-01-20T23:59:59Z",
      "created_at": "2024-01-15T16:30:00Z"
    }
  },
  "created": 1642697400,
  "livemode": true,
  "pending_webhooks": 1,
  "request": {
    "id": "req_compliance_review",
    "idempotency_key": "compliance_20240115_001"
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h2>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Node.js - Express Webhook Handler</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`const express = require('express');
const crypto = require('crypto');
const app = express();

// Middleware to capture raw body for signature verification
app.use('/webhooks/passpoint', express.raw({ type: 'application/json' }));

// Webhook endpoint
app.post('/webhooks/passpoint', (req, res) => {
  const signature = req.headers['x-passpoint-signature'];
  const payload = req.body;
  const webhookSecret = process.env.PASSPOINT_WEBHOOK_SECRET;

  try {
    // Verify webhook signature
    if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
      console.log('Invalid webhook signature');
      return res.status(401).send('Unauthorized');
    }

    // Parse the event
    const event = JSON.parse(payload);
    console.log('Received webhook event:', event.type);

    // Handle different event types
    switch (event.type) {
      case 'payment.succeeded':
        handlePaymentSucceeded(event.data.object);
        break;

      case 'payment.failed':
        handlePaymentFailed(event.data.object);
        break;

      case 'transfer.completed':
        handleTransferCompleted(event.data.object);
        break;

      case 'payout.completed':
        handlePayoutCompleted(event.data.object);
        break;

      case 'compliance.review_required':
        handleComplianceReview(event.data.object);
        break;

      case 'fraud.alert_created':
        handleFraudAlert(event.data.object);
        break;

      default:
        console.log(\`Unhandled event type: \${event.type}\`);
    }

    // Always respond with 200 to acknowledge receipt
    res.status(200).send('OK');

  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).send('Internal Server Error');
  }
});

function verifyWebhookSignature(payload, signature, secret) {
  const elements = signature.split(',');
  const timestamp = elements[0].split('=')[1];
  const signatures = elements.slice(1);

  // Check timestamp to prevent replay attacks (allow 5 minute tolerance)
  const currentTime = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTime - parseInt(timestamp)) > 300) {
    console.log('Webhook timestamp too old');
    return false;
  }

  // Create expected signature
  const signedPayload = timestamp + '.' + payload;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(signedPayload, 'utf8')
    .digest('hex');

  // Verify signature
  for (const sig of signatures) {
    const [version, signature] = sig.split('=');
    if (version === 'v1' && crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(signature, 'hex')
    )) {
      return true;
    }
  }

  return false;
}

function handlePaymentSucceeded(payment) {
  console.log(\`Payment succeeded: \${payment.id} for $\${payment.amount}\`);

  // Update your database
  // Send confirmation email
  // Trigger fulfillment process
  // Update analytics
}

function handleTransferCompleted(transfer) {
  console.log(\`Transfer completed: \${transfer.id} for $\${transfer.amount}\`);

  // Notify recipient
  // Update accounting records
  // Generate receipt
}

function handleComplianceReview(review) {
  console.log(\`Compliance review required: \${review.id}\`);

  // Notify compliance team
  // Pause related transactions
  // Prepare required documentation
  // Set up review workflow
}

function handleFraudAlert(alert) {
  console.log(\`Fraud alert: \${alert.id}\`);

  // Immediate security response
  // Notify security team
  // Temporarily suspend account if high risk
  // Trigger additional verification
}

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}</pre>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Python - Flask Webhook Handler with Database Integration</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`from flask import Flask, request, jsonify
import hmac
import hashlib
import time
import json
import logging
from sqlalchemy import create_engine, text
from datetime import datetime

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Database connection
engine = create_engine('postgresql://user:password@localhost/database')

@app.route('/webhooks/passpoint', methods=['POST'])
def handle_webhook():
    try:
        # Get signature and payload
        signature = request.headers.get('X-Passpoint-Signature')
        payload = request.get_data()

        if not verify_webhook_signature(payload, signature):
            logger.warning('Invalid webhook signature')
            return jsonify({'error': 'Unauthorized'}), 401

        # Parse event
        event = json.loads(payload)
        event_type = event['type']
        event_data = event['data']['object']

        logger.info(f'Processing webhook event: {event_type}')

        # Store webhook event for audit trail
        store_webhook_event(event)

        # Route to appropriate handler
        handlers = {
            'payment.succeeded': handle_payment_succeeded,
            'payment.failed': handle_payment_failed,
            'transfer.completed': handle_transfer_completed,
            'payout.completed': handle_payout_completed,
            'compliance.review_required': handle_compliance_review,
            'fraud.alert_created': handle_fraud_alert,
            'subscription.created': handle_subscription_created,
            'subscription.cancelled': handle_subscription_cancelled
        }

        handler = handlers.get(event_type)
        if handler:
            handler(event_data, event)
        else:
            logger.warning(f'No handler for event type: {event_type}')

        return jsonify({'status': 'success'}), 200

    except Exception as e:
        logger.error(f'Webhook processing error: {str(e)}')
        return jsonify({'error': 'Internal server error'}), 500

def verify_webhook_signature(payload, signature):
    webhook_secret = 'your_webhook_secret'

    try:
        elements = signature.split(',')
        timestamp = int(elements[0].split('=')[1])
        signatures = elements[1:]

        # Check timestamp (5 minute tolerance)
        current_time = int(time.time())
        if abs(current_time - timestamp) > 300:
            logger.warning('Webhook timestamp too old')
            return False

        # Create expected signature
        signed_payload = f'{timestamp}.{payload.decode()}'
        expected_signature = hmac.new(
            webhook_secret.encode(),
            signed_payload.encode(),
            hashlib.sha256
        ).hexdigest()

        # Verify against provided signatures
        for sig in signatures:
            version, provided_sig = sig.split('=')
            if version == 'v1' and hmac.compare_digest(expected_signature, provided_sig):
                return True

        return False

    except Exception as e:
        logger.error(f'Signature verification error: {str(e)}')
        return False

def store_webhook_event(event):
    """Store webhook event for audit trail and debugging"""
    with engine.connect() as conn:
        conn.execute(text(\"\"\"
            INSERT INTO webhook_events (
                event_id, event_type, processed_at, payload
            ) VALUES (
                :event_id, :event_type, :processed_at, :payload
            )
        \"\"\"), {
            'event_id': event['id'],
            'event_type': event['type'],
            'processed_at': datetime.utcnow(),
            'payload': json.dumps(event)
        })
        conn.commit()

def handle_payment_succeeded(payment, event):
    \"\"\"Handle successful payment\"\"\"
    logger.info('Payment succeeded: %s for $%s', payment["id"], payment["amount"])

    with engine.connect() as conn:
        # Update payment status in database
        conn.execute(text(\"\"\"
            UPDATE payments
            SET status = 'completed',
                completed_at = :completed_at,
                updated_at = :updated_at
            WHERE external_id = :payment_id
        \"\"\"), {
            'payment_id': payment['id'],
            'completed_at': payment.get('captured_at'),
            'updated_at': datetime.utcnow()
        })

        # Trigger order fulfillment
        conn.execute(text(\"\"\"
            INSERT INTO fulfillment_queue (
                payment_id, customer_email, amount, created_at
            ) VALUES (
                :payment_id, :customer_email, :amount, :created_at
            )
        \"\"\"), {
            'payment_id': payment['id'],
            'customer_email': payment['customer']['email'],
            'amount': payment['amount'],
            'created_at': datetime.utcnow()
        })

        conn.commit()

    # Send notification (async recommended)
    send_payment_confirmation_email(payment)

def handle_compliance_review(review, event):
    \"\"\"Handle compliance review requirement\"\"\"
    logger.warning(f'Compliance review required: {review["id"]}')

    with engine.connect() as conn:
        # Store compliance review record
        conn.execute(text(\"\"\"
            INSERT INTO compliance_reviews (
                review_id, transaction_id, transaction_type,
                amount, reason, priority, deadline, created_at
            ) VALUES (
                :review_id, :transaction_id, :transaction_type,
                :amount, :reason, :priority, :deadline, :created_at
            )
        \"\"\"), {
            'review_id': review['id'],
            'transaction_id': review['transaction_id'],
            'transaction_type': review['transaction_type'],
            'amount': review['amount'],
            'reason': review['reason'],
            'priority': review['priority'],
            'deadline': review['deadline'],
            'created_at': datetime.utcnow()
        })

        # Pause related transactions if high priority
        if review['priority'] == 'high':
            conn.execute(text(\"\"\"
                UPDATE transactions
                SET status = 'on_hold', hold_reason = 'compliance_review'
                WHERE id = :transaction_id
            \"\"\"), {
                'transaction_id': review['transaction_id']
            })

        conn.commit()

    # Notify compliance team
    notify_compliance_team(review)

def handle_fraud_alert(alert, event):
    \"\"\"Handle fraud alert\"\"\"
    logger.error(f'Fraud alert: {alert["id"]}')

    # Immediate security response
    with engine.connect() as conn:
        # Log security incident
        conn.execute(text(\"\"\"
            INSERT INTO security_incidents (
                alert_id, transaction_id, risk_score,
                alert_type, created_at, status
            ) VALUES (
                :alert_id, :transaction_id, :risk_score,
                :alert_type, :created_at, 'active'
            )
        \"\"\"), {
            'alert_id': alert['id'],
            'transaction_id': alert.get('transaction_id'),
            'risk_score': alert.get('risk_score'),
            'alert_type': alert.get('type'),
            'created_at': datetime.utcnow()
        })

        conn.commit()

    # Notify security team immediately
    notify_security_team(alert)

def send_payment_confirmation_email(payment):
    \"\"\"Send payment confirmation email (implement with your email service)\"\"\"
    pass

def notify_compliance_team(review):
    \"\"\"Notify compliance team of review requirement\"\"\"
    pass

def notify_security_team(alert):
    \"\"\"Notify security team of fraud alert\"\"\"
    pass

if __name__ == '__main__':
    app.run(debug=False, port=5000)`}</pre>
            </div>
          </div>
        </section>
      </div>

      {/* Pagination Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
        <Link to="/transfer/collection">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
            <div className="text-left min-w-0">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
              <div className="text-sm font-medium truncate">Collection</div>
            </div>
          </Button>
        </Link>

        <Link to="/virtual-card-v2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
              <div className="text-sm font-medium truncate">Virtual Card v2</div>
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

export default GlobalCallbackSetup;