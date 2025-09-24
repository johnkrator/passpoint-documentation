import {Webhook, Globe, Shield, Settings, CheckCircle, AlertTriangle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const GlobalCallbackSetup = () => {
    const getCreateGlobalWebhookEndpointCode = () => {
        return `POST /api/v1/webhooks/global`;
    };

    const getCreateGlobalWebhookRequestBodyCode = () => {
        return `{
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
}`;
    };

    const getCreateGlobalWebhookResponseCode = () => {
        return `{
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
  "filters": {
    "amount_threshold": {
      "min": 0,
      "max": 50000
    },
    "currencies": ["USD", "EUR", "GBP"],
    "environments": ["live", "test"],
    "risk_levels": ["low", "medium", "high"]
  },
  "created_at": "2024-01-15T10:30:00Z",
  "last_triggered": null,
  "success_count": 0,
  "failure_count": 0
}`;
    };

    const getWebhookPayloadExampleCode = () => {
        return `{
  "id": "evt_abc123def456",
  "type": "payment.succeeded",
  "data": {
    "object": {
      "id": "payment_xyz789",
      "amount": 1500.00,
      "currency": "USD",
      "status": "succeeded",
      "created_at": "2024-01-15T10:30:00Z",
      "merchant_id": "merchant_123",
      "customer": {
        "id": "customer_456",
        "email": "customer@example.com"
      },
      "metadata": {
        "order_id": "order_789",
        "invoice_number": "INV-2024-001"
      }
    },
    "previous_attributes": {
      "status": "processing"
    }
  },
  "created": 1642248600,
  "livemode": true,
  "pending_webhooks": 1,
  "request": {
    "id": "req_abc123",
    "idempotency_key": "idem_xyz789"
  }
}`;
    };

    const getSignatureVerificationCode = () => {
        return `const crypto = require('crypto');
const express = require('express');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload, 'utf8');
  const expectedSignature = 'sha256=' + hmac.digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

app.post('/webhooks/passpoint', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-passpoint-signature'];
  const payload = req.body;
  
  if (!verifyWebhookSignature(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = JSON.parse(payload);
  
  // Process the webhook event
  switch (event.type) {
    case 'payment.succeeded':
      handlePaymentSucceeded(event.data.object);
      break;
    case 'transfer.completed':
      handleTransferCompleted(event.data.object);
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }
  
  res.status(200).send('OK');
});`;
    };

    const getUpdateWebhookEndpointCode = () => {
        return `PUT /api/v1/webhooks/global/{webhook_id}`;
    };

    const getUpdateWebhookRequestBodyCode = () => {
        return `{
  "url": "https://yourapp.com/webhooks/passpoint-v2",
  "description": "Updated webhook endpoint with enhanced filtering",
  "events": [
    "payment.created",
    "payment.succeeded",
    "payment.failed",
    "transfer.completed",
    "payout.completed",
    "fraud.alert_created"
  ],
  "filters": {
    "amount_threshold": {
      "min": 100,
      "max": 25000
    },
    "currencies": ["USD", "EUR"],
    "risk_levels": ["medium", "high"]
  },
  "status": "active"
}`;
    };

    const getDeleteWebhookEndpointCode = () => {
        return `DELETE /api/v1/webhooks/global/{webhook_id}`;
    };

    const getListWebhooksEndpointCode = () => {
        return `GET /api/v1/webhooks/global`;
    };

    const getListWebhooksResponseCode = () => {
        return `{
  "webhooks": [
    {
      "id": "webhook_global_abc123",
      "url": "https://yourapp.com/webhooks/passpoint",
      "description": "Main webhook endpoint",
      "status": "active",
      "events_count": 15,
      "success_count": 1250,
      "failure_count": 3,
      "last_triggered": "2024-01-15T10:30:00Z",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 1,
  "has_more": false
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Global Callback
                        Setup</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Configure global webhook endpoints to receive real-time notifications for all Passpoint events.
                        Set up secure callback URLs with authentication, retry logic, and comprehensive event filtering.
                    </p>

                    {/* Create Global Webhook */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Create Global
                            Webhook</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Webhook className="h-12 w-12 text-brand-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Create
                                        Global Webhook Endpoint</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Register a global webhook endpoint that will receive notifications for all
                                        events across your Passpoint account.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{getCreateGlobalWebhookEndpointCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock
                                                language="json">{getCreateGlobalWebhookRequestBodyCode()}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock
                                                language="json">{getCreateGlobalWebhookResponseCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Webhook Event Payload */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook Event
                            Payload</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Globe className="h-12 w-12 text-blue-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Event
                                        Structure</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        All webhook events follow a consistent structure with event metadata, data
                                        objects, and contextual information.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example
                                                Event Payload</h4>
                                            <CodeBlock language="json">{getWebhookPayloadExampleCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Security and Verification */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Security and
                            Verification</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <Shield className="h-12 w-12 text-green-500"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Signature
                                        Verification</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Verify webhook authenticity using HMAC signatures to ensure events are genuinely
                                        from Passpoint.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Node.js
                                                Example</h4>
                                            <CodeBlock
                                                language="javascript">{getSignatureVerificationCode()}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Webhook Management */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Webhook
                            Management</h2>

                        <div className="space-y-8">
                            {/* Update Webhook */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Settings className="h-12 w-12 text-purple-500"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Update
                                            Webhook</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Modify existing webhook configurations including URL, events, and filtering
                                            criteria.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getUpdateWebhookEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                    Body</h4>
                                                <CodeBlock
                                                    language="json">{getUpdateWebhookRequestBodyCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Delete Webhook */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <AlertTriangle className="h-12 w-12 text-red-500"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Delete
                                            Webhook</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Permanently remove a webhook endpoint. This action cannot be undone.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getDeleteWebhookEndpointCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* List Webhooks */}
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <CheckCircle className="h-12 w-12 text-green-500"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">List
                                            Webhooks</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Retrieve all configured webhook endpoints with their current status and
                                            statistics.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{getListWebhooksEndpointCode()}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{getListWebhooksResponseCode()}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GlobalCallbackSetup;
