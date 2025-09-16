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
            The Authentication section contains APIs responsible for retrieving user credentials and tokens. This comprehensive guide covers merchant authentication, credential management, and access token generation for secure API access.
          </p>

          {/* Authentication Overview */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Authentication Overview</h2>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                The Authentication folder contains APIs responsible for retrieving user credentials and tokens. These endpoints enable secure access to Passpoint Payment Service by managing merchant authentication and access token generation.
              </p>
            </div>

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

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">Token Expiry Notice</h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    <strong>Development Environment:</strong> Bearer tokens are active for 10 minutes<br/>
                    <strong>Production Environment:</strong> Bearer tokens are active for 1 hour<br/>
                    Plan your token refresh strategy accordingly to maintain uninterrupted API access.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Authenticate Client */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Key className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Authenticate Client</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      This endpoint enables the merchant to get an access token whose duration in seconds is contained in the response field expiresIn. The merchant supplies merchant ID and API key to retrieve access token for subsequent requests.
                    </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "merchantId": "string",
  "apiKey": "string"
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4>
                      <CodeBlock language="bash">{`curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/get-auth-token' \
--data '{
    "merchantId":"string",
    "apiKey":"string"
}'`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
                      <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Client token obtained successful",
  "data": {
    "accessToken": "string",
    "expiresIn": 0
  }
}`}</CodeBlock>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Credentials */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Shield className="h-12 w-12 text-green-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get Credentials</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      This endpoint retrieves the API key for the merchant. The merchant supplies its merchant ID to get the necessary credentials.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                        <CodeBlock>{`POST https://dev.mypasspoint.com/userapp/merchant-app/init-credentials`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                        <CodeBlock language="json">{`{
  "merchantId": "0f66a8ce-497e-483e-9a32-04f00ffb3bc4"
}`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4>
                        <CodeBlock language="bash">{`curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/init-credentials' \
--data '{
    "merchantId":"string"
}'`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
                        <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "Merchant credential reset successful",
  "data": {
    "apiKey": "string"
  }
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Whitelisted IPs */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Lock className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Get Whitelisted IPs</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      This endpoint retrieves all whitelisted IP addresses for the merchant. Requires proper authentication headers including Bearer token and merchant information.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                        <CodeBlock>{`GET https://dev.mypasspoint.com/userapp/merchant-app/get-all-whitelisted-ip`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Required Headers</h4>
                        <CodeBlock>{`Authorization: Bearer YOUR_ACCESS_TOKEN
x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: YOUR_MERCHANT_ID`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL Example</h4>
                        <CodeBlock language="bash">{`curl --location 'https://dev.mypasspoint.com/userapp/merchant-app/get-all-whitelisted-ip' \
--header 'x-channel-id: 3' \
--header 'x-channel-code: legacy-api-user' \
--header 'x-merchant-id: e0b157a2-9245-40b9-8117-d25cadfdcfaa'`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
                        <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "1 ip address(es) found",
  "data": [
    "127.0.0.1"
  ]
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Parameters Summary */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API Parameters Summary</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Summary of key parameters used across the authentication endpoints for quick reference.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Parameter</th>
                      <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Type</th>
                      <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Description</th>
                      <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Used In</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-4 font-mono text-xs">merchantId</td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Unique identifier for the merchant</td>
                      <td className="py-3 px-4">All endpoints</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-4 font-mono text-xs">apiKey</td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Merchant API key for authentication</td>
                      <td className="py-3 px-4">Authenticate Client</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-4 font-mono text-xs">accessToken</td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Bearer token for API authorization</td>
                      <td className="py-3 px-4">Response from auth endpoints</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-xs">expiresIn</td>
                      <td className="py-3 px-4">number</td>
                      <td className="py-3 px-4">Token expiration time in seconds</td>
                      <td className="py-3 px-4">Auth token response</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Bearer Token Usage */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Bearer Token Usage</h2>

            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                All authenticated requests to Passpoint Payment Service APIs require a valid Bearer token in the Authorization header.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Required Headers for Authenticated Requests</h4>
                  <CodeBlock>{`Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
x-channel-id: 3
x-channel-code: legacy-api-user
x-merchant-id: YOUR_MERCHANT_ID`}</CodeBlock>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Example Authenticated Request</h4>
                  <CodeBlock language="bash">{`curl --location 'https://dev.mypasspoint.com/paypass/api/v1/wallet/balance' \
--header 'Authorization: Bearer your_access_token_here' \
--header 'Content-Type: application/json' \
--header 'x-channel-id: 3' \
--header 'x-channel-code: legacy-api-user' \
--header 'x-merchant-id: your_merchant_id'`}</CodeBlock>
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