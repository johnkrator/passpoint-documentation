import { ArrowLeft, ArrowRight, Webhook, Globe, Shield, Settings, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

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
                    <CodeBlock>{`POST /api/v1/webhooks/global`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                    <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                    <CodeBlock language="json">{`{
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
}`}</CodeBlock>
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
                      <CodeBlock>{`X-Passpoint-Signature: t=1642676400,v1=a2114d57b48eac39b9ad189dd8316235a7b4a8d21a10bd27519666489c69b503`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Verification Example (Node.js)</h4>
                      <CodeBlock
                        title="Verification Example (Node.js)"
                        language="javascript"
                      >{`const crypto = require('crypto');

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
}`}</CodeBlock>
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
                      <CodeBlock>{`PUT /api/v1/webhooks/global/{webhook_id}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
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
                      <CodeBlock>{`GET /api/v1/webhooks/global/{webhook_id}/deliveries`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
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
}`}</CodeBlock>
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
            <CodeBlock
              title="Payment Succeeded Event"
              language="json"
            >{`{
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
}`}</CodeBlock>

            <CodeBlock
              title="Transfer Completed Event"
              language="json"
            >{`{
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
}`}</CodeBlock>

            <CodeBlock
              title="Compliance Review Required Event"
              language="json"
            >{`{
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
}`}</CodeBlock>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h2>

          <div className="space-y-6">
            <CodeBlock
              title="Node.js - Express Webhook Handler"
              language="javascript"
            >{`const express = require('express');
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
});`}</CodeBlock>

            <CodeBlock
              title="Java - Spring Boot Webhook Handler with Database Integration"
              language="java"
            >{`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.security.MessageDigest;
import java.util.*;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.logging.Logger;

@SpringBootApplication
@RestController
public class PasspointWebhookHandler {

    private static final Logger logger = Logger.getLogger(PasspointWebhookHandler.class.getName());
    private static final String WEBHOOK_SECRET = "your_webhook_secret";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    public static void main(String[] args) {
        SpringApplication.run(PasspointWebhookHandler.class, args);
    }

    @PostMapping("/webhooks/passpoint")
    public ResponseEntity<Map<String, String>> handleWebhook(
            @RequestBody String payload,
            @RequestHeader("X-Passpoint-Signature") String signature) {

        try {
            // Verify webhook signature
            if (!verifyWebhookSignature(payload, signature)) {
                logger.warning("Invalid webhook signature");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Unauthorized"));
            }

            // Parse event
            Map<String, Object> event = objectMapper.readValue(payload, Map.class);
            String eventType = (String) event.get("type");
            Map<String, Object> eventData = (Map<String, Object>)
                ((Map<String, Object>) event.get("data")).get("object");

            logger.info("Processing webhook event: " + eventType);

            // Store webhook event for audit trail
            storeWebhookEvent(event);

            // Route to appropriate handler
            switch (eventType) {
                case "payment.succeeded":
                    handlePaymentSucceeded(eventData, event);
                    break;
                case "payment.failed":
                    handlePaymentFailed(eventData, event);
                    break;
                case "transfer.completed":
                    handleTransferCompleted(eventData, event);
                    break;
                case "payout.completed":
                    handlePayoutCompleted(eventData, event);
                    break;
                case "compliance.review_required":
                    handleComplianceReview(eventData, event);
                    break;
                case "fraud.alert_created":
                    handleFraudAlert(eventData, event);
                    break;
                case "subscription.created":
                    handleSubscriptionCreated(eventData, event);
                    break;
                case "subscription.cancelled":
                    handleSubscriptionCancelled(eventData, event);
                    break;
                default:
                    logger.warning("No handler for event type: " + eventType);
            }

            return ResponseEntity.ok(Map.of("status", "success"));

        } catch (Exception e) {
            logger.severe("Webhook processing error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Internal server error"));
        }
    }

    private boolean verifyWebhookSignature(String payload, String signature) {
        try {
            String[] elements = signature.split(",");
            long timestamp = Long.parseLong(elements[0].split("=")[1]);
            List<String> signatures = Arrays.asList(Arrays.copyOfRange(elements, 1, elements.length));

            // Check timestamp (5 minute tolerance)
            long currentTime = Instant.now().getEpochSecond();
            if (Math.abs(currentTime - timestamp) > 300) {
                logger.warning("Webhook timestamp too old");
                return false;
            }

            // Create expected signature
            String signedPayload = timestamp + "." + payload;
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(WEBHOOK_SECRET.getBytes(), "HmacSHA256");
            mac.init(secretKeySpec);
            byte[] hash = mac.doFinal(signedPayload.getBytes());
            String expectedSignature = bytesToHex(hash);

            // Verify against provided signatures
            for (String sig : signatures) {
                String[] parts = sig.split("=");
                if (parts.length == 2 && "v1".equals(parts[0])) {
                    if (MessageDigest.isEqual(expectedSignature.getBytes(), parts[1].getBytes())) {
                        return true;
                    }
                }
            }

            return false;

        } catch (Exception e) {
            logger.severe("Signature verification error: " + e.getMessage());
            return false;
        }
    }

    private String bytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }

    private void storeWebhookEvent(Map<String, Object> event) {
        try {
            String sql = "INSERT INTO webhook_events (event_id, event_type, processed_at, payload) VALUES (?, ?, ?, ?)";
            jdbcTemplate.update(sql,
                event.get("id"),
                event.get("type"),
                LocalDateTime.now(),
                objectMapper.writeValueAsString(event)
            );
        } catch (Exception e) {
            logger.severe("Failed to store webhook event: " + e.getMessage());
        }
    }

    private void handlePaymentSucceeded(Map<String, Object> payment, Map<String, Object> event) {
        logger.info("Payment succeeded: " + payment.get("id") + " for $" + payment.get("amount"));

        try {
            // Update payment status in database
            String updateSql = "UPDATE payments SET status = 'completed', completed_at = ?, updated_at = ? WHERE external_id = ?";
            jdbcTemplate.update(updateSql,
                payment.get("captured_at"),
                LocalDateTime.now(),
                payment.get("id")
            );

            // Trigger order fulfillment
            String insertSql = "INSERT INTO fulfillment_queue (payment_id, customer_email, amount, created_at) VALUES (?, ?, ?, ?)";
            Map<String, Object> customer = (Map<String, Object>) payment.get("customer");
            jdbcTemplate.update(insertSql,
                payment.get("id"),
                customer.get("email"),
                payment.get("amount"),
                LocalDateTime.now()
            );

            // Send notification (async recommended)
            sendPaymentConfirmationEmail(payment);

        } catch (Exception e) {
            logger.severe("Failed to handle payment success: " + e.getMessage());
        }
    }

    private void handleComplianceReview(Map<String, Object> review, Map<String, Object> event) {
        logger.warning("Compliance review required: " + review.get("id"));

        try {
            // Store compliance review record
            String insertSql = "INSERT INTO compliance_reviews (review_id, transaction_id, transaction_type, amount, reason, priority, deadline, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(insertSql,
                review.get("id"),
                review.get("transaction_id"),
                review.get("transaction_type"),
                review.get("amount"),
                review.get("reason"),
                review.get("priority"),
                review.get("deadline"),
                LocalDateTime.now()
            );

            // Pause related transactions if high priority
            if ("high".equals(review.get("priority"))) {
                String updateSql = "UPDATE transactions SET status = 'on_hold', hold_reason = 'compliance_review' WHERE id = ?";
                jdbcTemplate.update(updateSql, review.get("transaction_id"));
            }

            // Notify compliance team
            notifyComplianceTeam(review);

        } catch (Exception e) {
            logger.severe("Failed to handle compliance review: " + e.getMessage());
        }
    }

    private void handleFraudAlert(Map<String, Object> alert, Map<String, Object> event) {
        logger.severe("Fraud alert: " + alert.get("id"));

        try {
            // Log security incident
            String insertSql = "INSERT INTO security_incidents (alert_id, transaction_id, risk_score, alert_type, created_at, status) VALUES (?, ?, ?, ?, ?, 'active')";
            jdbcTemplate.update(insertSql,
                alert.get("id"),
                alert.get("transaction_id"),
                alert.get("risk_score"),
                alert.get("type"),
                LocalDateTime.now()
            );

            // Notify security team immediately
            notifySecurityTeam(alert);

        } catch (Exception e) {
            logger.severe("Failed to handle fraud alert: " + e.getMessage());
        }
    }

    // Placeholder methods for other handlers
    private void handlePaymentFailed(Map<String, Object> payment, Map<String, Object> event) { /* Implementation */ }
    private void handleTransferCompleted(Map<String, Object> transfer, Map<String, Object> event) { /* Implementation */ }
    private void handlePayoutCompleted(Map<String, Object> payout, Map<String, Object> event) { /* Implementation */ }
    private void handleSubscriptionCreated(Map<String, Object> subscription, Map<String, Object> event) { /* Implementation */ }
    private void handleSubscriptionCancelled(Map<String, Object> subscription, Map<String, Object> event) { /* Implementation */ }

    // Notification methods (implement with your notification service)
    private void sendPaymentConfirmationEmail(Map<String, Object> payment) { /* Implementation */ }
    private void notifyComplianceTeam(Map<String, Object> review) { /* Implementation */ }
    private void notifySecurityTeam(Map<String, Object> alert) { /* Implementation */ }
}`}</CodeBlock>
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