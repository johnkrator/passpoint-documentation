import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ApiRateLimits = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Main content */}
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">API Rate Limits</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Understanding and managing API rate limits is crucial for building robust integrations with Passpoint. This guide explains how rate limiting works, best practices for handling limits, and strategies for optimal API usage.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Rate Limit Overview</h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Passpoint implements rate limiting to ensure fair usage and maintain optimal performance for all users. Our rate limits are designed to accommodate typical usage patterns while protecting against abuse.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Rate Limit Structure</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Passpoint uses a token bucket algorithm with the following limits:
              </p>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Standard API:</span>
                  <span>1,000 requests per minute per API key</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Webhooks:</span>
                  <span>100 webhook deliveries per minute per endpoint</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">File Uploads:</span>
                  <span>50 file uploads per minute per API key</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Bulk Operations:</span>
                  <span>10 bulk operations per minute per API key</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Response Headers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Every API response includes rate limit information in the headers:
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-900 dark:text-gray-100">
                  <div>X-RateLimit-Limit: 1000</div>
                  <div>X-RateLimit-Remaining: 999</div>
                  <div>X-RateLimit-Reset: 1640995200</div>
                  <div>Retry-After: 60</div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 ml-6 mt-4">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">X-RateLimit-Limit:</span>
                  <span>Maximum requests allowed in the time window</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">X-RateLimit-Remaining:</span>
                  <span>Number of requests remaining in the current window</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">X-RateLimit-Reset:</span>
                  <span>Unix timestamp when the rate limit resets</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Retry-After:</span>
                  <span>Seconds to wait before retrying (included when rate limited)</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Handling Rate Limits</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                When you exceed the rate limit, you'll receive a 429 Too Many Requests response:
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm mb-4">
                <div className="text-red-600 dark:text-red-400">
                  <div>HTTP/1.1 429 Too Many Requests</div>
                  <div>Content-Type: application/json</div>
                  <div>Retry-After: 60</div>
                  <div>{`{`}</div>
                  <div className="ml-4">"error": "Rate limit exceeded",</div>
                  <div className="ml-4">"message": "Too many requests. Please retry after 60 seconds."</div>
                  <div>{`}`}</div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Implement exponential backoff and respect the Retry-After header to handle rate limits gracefully.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Best Practices</h3>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Monitor Headers:</span>
                  <span>Always check rate limit headers in responses to prevent hitting limits</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Implement Backoff:</span>
                  <span>Use exponential backoff with jitter for retry logic</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Batch Requests:</span>
                  <span>Use bulk endpoints when available to reduce API call volume</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Cache Data:</span>
                  <span>Cache frequently accessed data to minimize API calls</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Use Webhooks:</span>
                  <span>Prefer webhooks over polling for real-time data updates</span>
                </li>
              </ul>
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
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          <div className="text-left min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="text-sm font-medium truncate">Introduction</div>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
        >
          <div className="text-right min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="text-sm font-medium truncate">Quick Guides</div>
          </div>
          <ArrowRight className="h-4 w-4 flex-shrink-0" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-sm">All rights reserved</p>
      </footer>
    </div>
  );
};

export default ApiRateLimits;