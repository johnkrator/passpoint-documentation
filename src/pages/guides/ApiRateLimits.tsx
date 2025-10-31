import {Clock, AlertTriangle, CheckCircle, TrendingUp, Shield, Zap} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const ApiRateLimits = () => {
    const getRateLimitHeadersCode = () => {
        return `X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
Retry-After: 60`;
    };

    const get429ResponseCode = () => {
        return `{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please retry after 60 seconds.",
  "retryAfter": 60
}`;
    };

    const getBackoffImplementationCode = () => {
        return `async function makeRequestWithBackoff(url, options, maxRetries = 3) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(url, options);

      // Check rate limit headers
      const remaining = parseInt(response.headers.get('X-RateLimit-Remaining'));
      const limit = parseInt(response.headers.get('X-RateLimit-Limit'));

      // Warn if approaching limit
      if (remaining < limit * 0.1) {
        console.warn(\`Approaching rate limit: \${remaining}/\${limit} requests remaining\`);
      }

      // Handle rate limit
      if (response.status === 429) {
        const retryAfter = parseInt(response.headers.get('Retry-After')) || 60;
        const jitter = Math.random() * 1000; // Add jitter (0-1s)
        const delay = (retryAfter * 1000) + jitter;

        console.log(\`Rate limited. Retrying after \${retryAfter}s...\`);
        await sleep(delay);
        retries++;
        continue;
      }

      return response;

    } catch (error) {
      // Exponential backoff for network errors
      const delay = Math.min(1000 * Math.pow(2, retries), 30000);
      console.error(\`Request failed, retrying in \${delay}ms\`, error);
      await sleep(delay);
      retries++;
    }
  }

  throw new Error('Max retries exceeded');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}`;
    };

    const getRateLimitMonitoringCode = () => {
        return `class RateLimitMonitor {
  constructor() {
    this.limits = {};
  }

  updateFromHeaders(apiKey, headers) {
    this.limits[apiKey] = {
      limit: parseInt(headers.get('X-RateLimit-Limit')),
      remaining: parseInt(headers.get('X-RateLimit-Remaining')),
      reset: parseInt(headers.get('X-RateLimit-Reset')),
      timestamp: Date.now()
    };
  }

  canMakeRequest(apiKey, threshold = 0.1) {
    const limit = this.limits[apiKey];
    if (!limit) return true;

    // Check if limit has reset
    if (Date.now() / 1000 > limit.reset) {
      return true;
    }

    // Check if we have enough remaining requests
    return limit.remaining > (limit.limit * threshold);
  }

  getWaitTime(apiKey) {
    const limit = this.limits[apiKey];
    if (!limit) return 0;

    const now = Date.now() / 1000;
    return Math.max(0, limit.reset - now);
  }
}

// Usage
const monitor = new RateLimitMonitor();

async function apiCall(url, options) {
  const apiKey = options.headers['x-api-key'];

  // Check if we should wait
  if (!monitor.canMakeRequest(apiKey)) {
    const waitTime = monitor.getWaitTime(apiKey);
    console.log(\`Waiting \${waitTime}s before making request\`);
    await sleep(waitTime * 1000);
  }

  const response = await fetch(url, options);
  monitor.updateFromHeaders(apiKey, response.headers);

  return response;
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">API Rate
                        Limits</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Understanding and managing API rate limits is crucial for building robust, production-ready
                        integrations with
                        Passpoint. This comprehensive guide explains how rate limiting works, best practices for
                        handling limits, and
                        strategies for optimal API usage.
                    </p>

                    {/* Rate Limit Overview Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Rate Limit
                            Structure</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Passpoint implements rate limiting using a token bucket algorithm to ensure fair usage and
                            maintain optimal
                            performance for all users. Rate limits are applied per API key and reset every minute.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <Zap className="h-10 w-10 text-brand-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white">Standard
                                        API</h3>
                                </div>
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">1,000</div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">requests per minute per API key</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Covers all standard API operations including wallet management, transfers, and
                                    transaction queries.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <Shield className="h-10 w-10 text-purple-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white">Webhooks</h3>
                                </div>
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100</div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">webhook deliveries per minute per
                                    endpoint</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Limits the rate of webhook events sent to your configured endpoints to prevent
                                    overwhelming your servers.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <TrendingUp className="h-10 w-10 text-yellow-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white">File
                                        Uploads</h3>
                                </div>
                                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">50</div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">file uploads per minute per API
                                    key</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Applies to document uploads, receipt attachments, and other file-based operations.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <Clock className="h-10 w-10 text-green-500"/>
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white">Bulk
                                        Operations</h3>
                                </div>
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10</div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">bulk operations per minute per API
                                    key</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Batch operations like bulk transfers or mass wallet creation have stricter limits
                                    due to resource intensity.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Response Headers Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Rate Limit
                            Response Headers</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Every API response includes rate limit information in the headers. Monitor these headers to
                            implement
                            proactive rate limit management in your application.
                        </p>

                        <CodeBlock language="http" title="Rate Limit Headers">
                            {getRateLimitHeadersCode()}
                        </CodeBlock>

                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                            <div
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">X-RateLimit-Limit</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    The maximum number of requests allowed in the current time window (typically 1
                                    minute).
                                </p>
                            </div>

                            <div
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">X-RateLimit-Remaining</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    The number of requests remaining in the current time window. Use this to avoid
                                    hitting the limit.
                                </p>
                            </div>

                            <div
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">X-RateLimit-Reset</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Unix timestamp (seconds) indicating when the rate limit window resets and your quota
                                    refreshes.
                                </p>
                            </div>

                            <div
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Retry-After</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Number of seconds to wait before retrying. Only included in 429 Too Many Requests
                                    responses.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 429 Response Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Handling Rate
                            Limit Errors</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            When you exceed the rate limit, Passpoint returns a 429 Too Many Requests response. Your
                            application
                            must handle this gracefully and implement retry logic with exponential backoff.
                        </p>

                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                            <div className="flex items-start gap-3 mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                <div>
                                    <h3 className="md:text-base text-sm font-semibold text-red-900 dark:text-red-100 mb-2">HTTP
                                        429 Too Many Requests</h3>
                                    <p className="text-red-800 dark:text-red-200 text-sm">
                                        This response indicates you've exceeded your rate limit. Always respect the
                                        Retry-After header
                                        and implement exponential backoff to avoid being blocked.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <CodeBlock language="json" title="429 Error Response">
                            {get429ResponseCode()}
                        </CodeBlock>

                        <div className="mt-8">
                            <CodeBlock language="javascript" title="Exponential Backoff Implementation">
                                {getBackoffImplementationCode()}
                            </CodeBlock>
                        </div>
                    </section>

                    {/* Monitoring Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Rate Limit
                            Monitoring</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Implement proactive monitoring to track your rate limit usage and prevent hitting limits.
                            This class-based
                            approach helps you manage rate limits across multiple API keys.
                        </p>

                        <CodeBlock language="javascript" title="Rate Limit Monitoring Class">
                            {getRateLimitMonitoringCode()}
                        </CodeBlock>
                    </section>

                    {/* Best Practices Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Best
                            Practices</h2>

                        <div className="space-y-4">
                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Monitor
                                            Rate Limit Headers</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Always check X-RateLimit-Remaining in responses. Implement warnings when
                                            you're approaching
                                            the limit (e.g., when remaining requests drop below 10% of the limit).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Implement
                                            Exponential Backoff with Jitter</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Use exponential backoff with random jitter (0-1 second) to avoid thundering
                                            herd problems
                                            when multiple clients retry simultaneously after rate limit resets.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Use Bulk
                                            Endpoints When Available</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Batch multiple operations into a single bulk request instead of making
                                            individual calls.
                                            This reduces API call volume and improves efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Implement
                                            Client-Side Caching</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Cache frequently accessed data (like wallet balances, transaction lists) to
                                            minimize
                                            redundant API calls. Use appropriate TTLs based on your use case.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Prefer
                                            Webhooks Over Polling</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Use webhooks for real-time transaction updates instead of polling the status
                                            endpoint
                                            repeatedly. This significantly reduces API call volume.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Distribute
                                            Load Across Multiple API Keys</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            For high-volume applications, create separate API keys for different
                                            services or
                                            microservices to distribute the rate limit load.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle
                                        className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Log and
                                            Alert on Rate Limit Events</h4>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Set up monitoring and alerts when you receive 429 responses or when
                                            remaining requests
                                            drop below a threshold. This helps you identify and address usage patterns
                                            proactively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Troubleshooting
                            Rate Limits</h2>

                        <div className="space-y-6">
                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                    Problem: Frequently hitting rate limits
                                </h3>
                                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    If you're consistently exceeding rate limits, consider these solutions:
                                </p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li>• Review your integration architecture - are you polling when you could use
                                        webhooks?
                                    </li>
                                    <li>• Implement caching to reduce redundant API calls</li>
                                    <li>• Use bulk endpoints to batch operations</li>
                                    <li>• Consider using multiple API keys to distribute load</li>
                                    <li>• Contact Passpoint support to discuss increasing your rate limits for
                                        production use
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                    Problem: Unexpected 429 responses
                                </h3>
                                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    If you receive unexpected rate limit errors:
                                </p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li>• Check if multiple services are using the same API key</li>
                                    <li>• Verify you're not making parallel requests that exceed the limit</li>
                                    <li>• Review logs to identify which endpoints are consuming your quota</li>
                                    <li>• Ensure retry logic isn't creating a feedback loop of failed requests</li>
                                </ul>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                                <h3 className="md:text-base text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                    Problem: Rate limit resets not matching expectations
                                </h3>
                                <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    Rate limits are calculated per minute with sliding windows:
                                </p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li>• Check the X-RateLimit-Reset header for the exact reset time</li>
                                    <li>• Ensure your system clock is synchronized (use NTP)</li>
                                    <li>• Remember that the limit is per API key, not per IP address</li>
                                    <li>• Verify you're converting Unix timestamps correctly (seconds, not
                                        milliseconds)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default ApiRateLimits;
