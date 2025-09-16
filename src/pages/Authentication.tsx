import { ArrowLeft, ArrowRight, Key, Shield, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";

const Authentication = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
            Secure your API requests with Passpoint's authentication system. Learn how to authenticate users, manage API keys, and implement secure access controls.
          </p>

          {/* API Key Authentication */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">API Key Authentication</h2>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 lg:p-8 mb-8 shadow-sm">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 mr-4"/>
                <div>
                  <h3 className="text-base font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Security Notice</h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Never expose your API keys in client-side code. Always make API calls from your server environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Generate API Key */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Key className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Generate API Key</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Create a new API key for authentication. Each key can be scoped to specific permissions and environments.
                    </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                      <CodeBlock>{`POST /api/v1/auth/api-keys`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                      <CodeBlock language="json">{`{
  "name": "Production API Key",
  "permissions": ["read", "write"],
  "environment": "live",
  "expires_at": "2024-12-31T23:59:59Z"
}`}</CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                      <CodeBlock language="json">{`{
  "id": "key_1234567890",
  "name": "Production API Key",
  "key": "sk_live_1234567890abcdef",
  "permissions": ["read", "write"],
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "expires_at": "2024-12-31T23:59:59Z"
}`}</CodeBlock>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verify API Key */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Shield className="h-12 w-12 text-green-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Verify API Key</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Validate an API key and retrieve its permissions and metadata.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                        <CodeBlock>{`GET /api/v1/auth/verify`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                        <CodeBlock>{`Authorization: Bearer sk_live_1234567890abcdef`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                        <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OAuth 2.0 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">OAuth 2.0</h2>

            <div className="space-y-8">
              {/* Authorization Code Flow */}
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                    <Lock className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Authorization Code Flow</h3>
                  </div>
                  <div className="flex-1 min-w-0 lg:max-w-4xl">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      Implement OAuth 2.0 authorization code flow for secure user authentication.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 1: Authorization Request</h4>
                        <CodeBlock>{`GET https://auth.passpoint.com/oauth/authorize?client_id=your_client_id&response_type=code&redirect_uri=https://yourapp.com/callback&scope=read+write&state=random_state_string`}</CodeBlock>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Step 2: Exchange Code for Token</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h5>
                            <CodeBlock>{`POST /oauth/token`}</CodeBlock>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h5>
                            <CodeBlock language="json">{`{
  "grant_type": "authorization_code",
  "code": "auth_code_from_step_1",
  "redirect_uri": "https://yourapp.com/callback",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}`}</CodeBlock>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h5>
                            <CodeBlock language="json">{`{
  "access_token": "at_1234567890abcdef",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "rt_1234567890abcdef",
  "scope": "read write"
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

          {/* Code Examples */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Code Examples</h2>

            <div className="space-y-8">
              <CodeBlock
                title="Node.js - API Key Authentication"
                language="javascript"
              >{`const axios = require('axios');

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
}`}</CodeBlock>

            <CodeBlock
              title="Java - OAuth Token Refresh"
              language="java"
            >{`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
import java.util.HashMap;

public class PasspointAuth {
    private final HttpClient httpClient = HttpClient.newHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public Map<String, Object> refreshAccessToken(String refreshToken, String clientId, String clientSecret)
            throws Exception {
        String url = "https://auth.passpoint.com/oauth/token";

        String requestBody = String.format(
            "grant_type=refresh_token&refresh_token=%s&client_id=%s&client_secret=%s",
            refreshToken, clientId, clientSecret
        );

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/x-www-form-urlencoded")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse<String> response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 200) {
            return objectMapper.readValue(response.body(), Map.class);
        } else {
            throw new Exception("Token refresh failed: " + response.body());
        }
    }

    // Usage
    public static void main(String[] args) {
        try {
            PasspointAuth auth = new PasspointAuth();
            Map<String, Object> newTokens = auth.refreshAccessToken(
                "rt_1234567890abcdef",
                "your_client_id",
                "your_client_secret"
            );
            System.out.println("New access token: " + newTokens.get("access_token"));
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
    </div>
  );
};

export default Authentication;