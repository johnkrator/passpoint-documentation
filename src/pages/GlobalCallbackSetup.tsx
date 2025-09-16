import { ArrowLeft, ArrowRight, Webhook, Globe, Shield, Settings, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const GlobalCallbackSetup = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Global Callback Setup</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Configure global webhook endpoints to receive real-time notifications for all Passpoint events. Set up secure callback URLs with authentication, retry logic, and comprehensive event filtering.
          </p>

          {/* Create Global Webhook */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Create Global Webhook</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <Webhook className="h-12 w-12 text-brand-500"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Create Global Webhook Endpoint</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
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
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Events</h2>

            <div className="space-y-6">
              {/* Payment Events */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
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
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
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
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
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
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Security</h2>

            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 lg:p-8 shadow-sm mb-6">
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
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Shield className="h-12 w-12 text-brand-500"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Signature Verification</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Verify webhook authenticity using HMAC-SHA256 signatures included in request headers.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Signature Header</h4>
                        <CodeBlock>{`X-Passpoint-Signature: t=1642676400,v1=a2114d57b48eac39b9ad189dd8316235a7b4a8d21a10bd27519666489c69b503`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Verification Example (Node.js)</h4>
                        <CodeBlock language="javascript">{`const crypto = require('crypto');

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
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Management</h2>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Settings className="h-12 w-12 text-brand-500"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Update Webhook Configuration</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
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
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Clock className="h-12 w-12 text-brand-500"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Webhook Delivery Monitoring</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
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
    </div>
  );
};

export default GlobalCallbackSetup;