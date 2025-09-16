import { ArrowLeft, ArrowRight, Key, Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const Authentication = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Secure your API requests with Passpoint Payment Service's robust authentication system. All API endpoints require proper authentication using Bearer tokens to ensure secure access to payment, wallet, and transfer services.
          </p>

          {/* Bearer Token Authentication */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bearer Token Authentication</h2>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-base font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Security Notice</h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Never expose your access tokens in client-side code. Always make API calls from your secure server environment and store tokens securely.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Merchant Authentication */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Key className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Merchant Authentication</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Authenticate as a merchant to access payment services. Use your merchant credentials to obtain an access token for API requests.
                    </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST https://dev.mypasspoint.com/userapp/api/v1/merchant/auth`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "username": "your_merchant_username",
  "password": "your_merchant_password"
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Authentication successful",
  "data": {
    "success": true,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenType": "Bearer",
    "expiresIn": 3600,
    "merchantId": "MERCH_12345",
    "permissions": ["wallet:read", "wallet:write", "transfer:execute"]
  }
}`}</CodeBlock>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Making Authenticated Requests */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Shield className="h-12 w-12 text-green-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Authenticated Requests</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Include the access token in the Authorization header for all API requests to access protected endpoints.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Required Headers</h4>
                        <CodeBlock>{`Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example Request</h4>
                        <CodeBlock language="bash">{`curl -X GET https://dev.mypasspoint.com/paypass/api/v1/wallet/balance \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Successful Response</h4>
                        <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Balance retrieved successfully",
  "data": {
    "success": true,
    "balance": 1500.00,
    "currency": "USD",
    "walletId": "WLT_12345"
  }
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Token Management */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Token Management</h2>

            <div className="space-y-8">
              {/* Token Refresh */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Lock className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Token Refresh</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Access tokens expire after 1 hour. Refresh your token before it expires to maintain continuous access to the API.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Refresh Token Request</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h5>
                            <CodeBlock>{`POST https://dev.mypasspoint.com/userapp/api/v1/merchant/refresh`}</CodeBlock>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h5>
                            <CodeBlock language="json">{`{
  "refreshToken": "your_refresh_token_here"
}`}</CodeBlock>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h5>
                            <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Token refreshed successfully",
  "data": {
    "success": true,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenType": "Bearer",
    "expiresIn": 3600,
    "refreshToken": "new_refresh_token_here"
  }
}`}</CodeBlock>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication Errors */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Authentication Errors</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                  <AlertTriangle className="h-12 w-12 text-red-500 flex-shrink-0"/>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Error Handling</h3>
                </div>
                <div className="flex-1 min-w-0 lg:max-w-4xl">
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    Handle authentication errors gracefully by checking response codes and implementing proper error handling logic.
                  </p>

                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-1">
                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white mb-1">401 - Unauthorized</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Invalid or missing access token</div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white mb-1">403 - Forbidden</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Insufficient permissions for the requested operation</div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white mb-1">Token Expired</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Access token has expired, use refresh token to get a new one</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Error Response Format</h4>
                      <CodeBlock language="json">{`{
  "responseCode": "01",
  "responseDescription": "Authentication Failed",
  "responseMessage": "Invalid access token",
  "data": {
    "success": false,
    "error": "INVALID_TOKEN",
    "errorDescription": "The provided access token is invalid or has expired"
  }
}`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Best Practices</h2>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Recommendations</h3>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <div>
                    <strong>Secure Storage:</strong> Store access tokens securely using encryption and never log them in plain text
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <strong>Token Rotation:</strong> Implement automatic token refresh to handle expiration gracefully
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <div>
                    <strong>Environment Separation:</strong> Use different credentials for sandbox and production environments
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <div>
                    <strong>Error Handling:</strong> Implement proper error handling for authentication failures and retries
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>

      {/* Pagination Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 dark:border-gray-800">
        <Link to="/introduction">
          <Button
            variant="ghost"
            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start px-4 py-3"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
            <div className="text-left min-w-0">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
              <div className="text-sm font-medium truncate">Introduction</div>
            </div>
          </Button>
        </Link>

        <Link to="/wallet">
          <Button
            variant="ghost"
            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-end px-4 py-3"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
              <div className="text-sm font-medium truncate">Wallet</div>
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

export default Authentication;