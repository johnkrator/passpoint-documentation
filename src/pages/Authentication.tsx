import { ArrowLeft, ArrowRight, Key, Shield, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Authentication = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Secure your API requests with Passpoint's authentication system. Learn how to authenticate users, manage API keys, and implement secure access controls.
        </p>

        {/* API Key Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Key Authentication</h2>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <div className="flex">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-3"/>
              <div>
                <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Security Notice</h3>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                  Never expose your API keys in client-side code. Always make API calls from your server environment.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Generate API Key */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Key className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Generate API Key</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Create a new API key for authentication. Each key can be scoped to specific permissions and environments.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                        <span className="text-green-600 dark:text-green-400">POST</span> /api/v1/auth/api-keys
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
  "name": "Production API Key",
  "permissions": ["read", "write"],
  "environment": "live",
  "expires_at": "2024-12-31T23:59:59Z"
}`}</pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
  "id": "key_1234567890",
  "name": "Production API Key",
  "key": "sk_live_1234567890abcdef",
  "permissions": ["read", "write"],
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "expires_at": "2024-12-31T23:59:59Z"
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verify API Key */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Verify API Key</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Validate an API key and retrieve its permissions and metadata.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                        <span className="text-blue-600 dark:text-blue-400">GET</span> /api/v1/auth/verify
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <div className="text-brand-600 dark:text-brand-400">Authorization: Bearer sk_live_1234567890abcdef</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-900 dark:text-gray-100">{`{
  "valid": true,
  "key_id": "key_1234567890",
  "permissions": ["read", "write"],
  "environment": "live",
  "user": {
    "id": "user_9876543210",
    "email": "developer@company.com"
  },
  "rate_limit": {
    "limit": 1000,
    "remaining": 999,
    "reset": 1642680000
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

        {/* OAuth 2.0 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">OAuth 2.0</h2>

          <div className="space-y-8">
            {/* Authorization Code Flow */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Lock className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Authorization Code Flow</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Implement OAuth 2.0 authorization code flow for secure user authentication.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 1: Authorization Request</h4>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <div className="break-all">
                          <span className="text-blue-600 dark:text-blue-400">GET</span> https://auth.passpoint.com/oauth/authorize?
                          <br />client_id=your_client_id&
                          <br />response_type=code&
                          <br />redirect_uri=https://yourapp.com/callback&
                          <br />scope=read+write&
                          <br />state=random_state_string
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 2: Exchange Code for Token</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h5>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                            <span className="text-green-600 dark:text-green-400">POST</span> /oauth/token
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h5>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                            <pre className="text-gray-900 dark:text-gray-100">{`{
  "grant_type": "authorization_code",
  "code": "auth_code_from_step_1",
  "redirect_uri": "https://yourapp.com/callback",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}`}</pre>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h5>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                            <pre className="text-gray-900 dark:text-gray-100">{`{
  "access_token": "at_1234567890abcdef",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "rt_1234567890abcdef",
  "scope": "read write"
}`}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h2>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Node.js - API Key Authentication</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`const axios = require('axios');

const passpoint = axios.create({
  baseURL: 'https://api.passpoint.com/v1',
  headers: {
    'Authorization': 'Bearer ' + process.env.PASSPOINT_API_KEY,
    'Content-Type': 'application/json'
  }
});

// Make authenticated request
async function getUser() {
  try {
    const response = await passpoint.get('/user');
    console.log('User data:', response.data);
  } catch (error) {
    console.error('Authentication failed:', error.response.data);
  }
}`}</pre>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Python - OAuth Token Refresh</div>
              <pre className="text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">{`import requests
import json

def refresh_access_token(refresh_token, client_id, client_secret):
    url = 'https://auth.passpoint.com/oauth/token'

    data = {
        'grant_type': 'refresh_token',
        'refresh_token': refresh_token,
        'client_id': client_id,
        'client_secret': client_secret
    }

    response = requests.post(url, data=data)

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f'Token refresh failed: {response.text}')

# Usage
try:
    new_tokens = refresh_access_token(
        refresh_token='rt_1234567890abcdef',
        client_id='your_client_id',
        client_secret='your_client_secret'
    )
    print('New access token:', new_tokens['access_token'])
except Exception as e:
    print('Error:', e)`}</pre>
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
          <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
          <div className="text-left min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="text-sm font-medium truncate">API Integrations</div>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-end"
        >
          <div className="text-right min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="text-sm font-medium truncate">Wallet</div>
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

export default Authentication;