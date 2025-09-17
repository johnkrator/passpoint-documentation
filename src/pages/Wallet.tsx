import {ArrowLeft, ArrowRight, Wallet as WalletIcon, BarChart3, AlertCircle, History, FileText} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";

const Wallet = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Wallet
                        Management</h1>

                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">
                        Comprehensive wallet management APIs for the Passpoint Payment Service. Access wallet balances,
                        transaction history, and detailed statements across multiple currencies with real-time updates.
                    </p>

                    {/* Important Notice */}
                    <div
                        className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 lg:p-8 mb-12 shadow-sm">
                        <div className="flex">
                            <AlertCircle
                                className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5 mr-4"/>
                            <div>
                                <h4 className="text-base font-semibold text-amber-800 dark:text-amber-200 mb-2">Important
                                    Authentication Notice</h4>
                                <div className="text-amber-700 dark:text-amber-300 space-y-2">
                                    <p><strong>Token Expiry:</strong> Development tokens expire after 10 minutes,
                                        production tokens after 1 hour.</p>
                                    <p><strong>Dashboard Access:</strong> Get your merchant credentials and API keys
                                        from the Passpoint dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Get Wallet Balance */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Wallet
                            Balance</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <WalletIcon className="h-12 w-12 text-brand-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Balance
                                        All Currencies</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Retrieve merchant wallet balance across all supported currencies in a single
                                        request.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`GET https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-balance/all`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock language="bash">{`x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{`curl -X GET "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-balance/all" \
  -H "x-channel-id: 2" \
  -H "x-channel-code: passpoint-merchant-user" \
  -H "x-merchant-id: your-merchant-id" \
  -H "Authorization: Bearer your-access-token"`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Operation completed successfully",
  "data": {
    "success": true,
    "status": "00",
    "balances": [
      {
        "currency": "USD",
        "balance": 15420.50,
        "available": 15420.50
      },
      {
        "currency": "EUR",
        "balance": 8930.25,
        "available": 8930.25
      }
    ]
  }
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Wallet Details */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Wallet
                            Details</h2>

                        <div className="space-y-8">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <BarChart3 className="h-12 w-12 text-green-500 flex-shrink-0"/>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Wallet
                                            Details</h3>
                                    </div>
                                    <div className="flex-1 min-w-0 lg:max-w-4xl">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                            Get detailed wallet information across all currencies including balances,
                                            currency details, and account information.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                                <CodeBlock>{`GET https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-details`}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                                <CodeBlock language="bash">{`x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]`}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                    Example</h4>
                                                <CodeBlock language="bash">{`curl -X GET "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-details" \
  -H "x-channel-id: 2" \
  -H "x-channel-code: passpoint-merchant-user" \
  -H "x-merchant-id: your-merchant-id" \
  -H "Authorization: Bearer your-access-token"`}</CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                                <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Operation completed successfully",
  "data": {
    "success": true,
    "status": "00",
    "wallets": [
      {
        "currency": "USD",
        "balance": 15420.50,
        "currencySymbol": "$",
        "accountNumber": "1234567890",
        "accountName": "Merchant USD Wallet"
      },
      {
        "currency": "EUR",
        "balance": 8930.25,
        "currencySymbol": "€",
        "accountNumber": "0987654321",
        "accountName": "Merchant EUR Wallet"
      }
    ]
  }
}`}</CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Wallet History */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Wallet
                            History</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <History className="h-12 w-12 text-blue-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Transaction
                                        History</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Get paginated transaction history for all currencies or filter by specific
                                        currency with date range support.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST https://dev.mypasspoint.com/paypass/wallet-app/wallet-history?type=all`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock language="bash">{`x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]
Content-Type: application/json`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "currency": "USD",
  "pageNumber": 1,
  "pageSize": 20,
  "fromDate": "2024-01-01",
  "toDate": "2024-01-31"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{`curl -X POST "https://dev.mypasspoint.com/paypass/wallet-app/wallet-history?type=all" \
  -H "x-channel-id: 2" \
  -H "x-channel-code: passpoint-merchant-user" \
  -H "x-merchant-id: your-merchant-id" \
  -H "Authorization: Bearer your-access-token" \
  -H "Content-Type: application/json" \
  -d '{
    "currency": "USD",
    "pageNumber": 1,
    "pageSize": 20,
    "fromDate": "2024-01-01",
    "toDate": "2024-01-31"
  }'`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Success",
  "responseMessage": "Transaction history retrieved successfully",
  "data": {
    "success": true,
    "status": "00",
    "transactions": [
      {
        "id": "tx_1234567890",
        "amount": 500.00,
        "type": "credit",
        "description": "Payment received",
        "date": "2024-01-15T10:30:00Z",
        "currency": "USD",
        "reference": "PAY_12345"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "pageSize": 20,
      "totalPages": 5,
      "totalRecords": 98
    }
  }
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Wallet Statement */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Wallet
                            Statement</h2>

                        <div
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-none">
                                <div
                                    className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                    <FileText className="h-12 w-12 text-purple-500 flex-shrink-0"/>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white lg:mt-3">Detailed
                                        Statement</h3>
                                </div>
                                <div className="flex-1 min-w-0 lg:max-w-4xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                        Get comprehensive wallet statement with detailed transaction information,
                                        running balances, and transaction modes.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Endpoint</h4>
                                            <CodeBlock>{`POST https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-statement`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
                                            <CodeBlock language="bash">{`x-channel-id: 2
x-channel-code: passpoint-merchant-user
x-merchant-id: [your-merchant-id]
Authorization: Bearer [your-access-token]
Content-Type: application/json`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request
                                                Body</h4>
                                            <CodeBlock language="json">{`{
  "currency": "USD",
  "pageNumber": 1,
  "pageSize": 20,
  "fromDate": "2024-01-01",
  "toDate": "2024-01-31"
}`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">cURL
                                                Example</h4>
                                            <CodeBlock language="bash">{`curl -X POST "https://dev.mypasspoint.com/paypass/wallet-app/get-wallet-statement" \
  -H "x-channel-id: 2" \
  -H "x-channel-code: passpoint-merchant-user" \
  -H "x-merchant-id: your-merchant-id" \
  -H "Authorization: Bearer your-access-token" \
  -H "Content-Type: application/json" \
  -d '{
    "currency": "USD",
    "pageNumber": 1,
    "pageSize": 20,
    "fromDate": "2024-01-01",
    "toDate": "2024-01-31"
  }'`}</CodeBlock>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                                            <CodeBlock language="json">{`{
  "responseCode": "00",
  "responseDescription": "Successful",
  "responseMessage": "12 wallet statement item(s) found.",
  "totalCount": 12,
  "currentBalance": 54015.77,
  "pageCount": 1,
  "pageSize": 20,
  "currentPage": 1,
  "data": [
    {
      "accountName": "Merchant USD Wallet",
      "currency": "USD",
      "transactionId": "TXN_2024011512345",
      "runningBalance": 54015.77,
      "narration": "Payment received from customer",
      "amount": 500.00,
      "transactionType": "Credit",
      "transactionDate": "2024-01-15T14:30:00Z",
      "debit": false,
      "credit": true,
      "transMode": "Online Payment"
    },
    {
      "accountName": "Merchant USD Wallet",
      "currency": "USD",
      "transactionId": "TXN_2024011512346",
      "runningBalance": 53515.77,
      "narration": "Transfer to partner account",
      "amount": 500.00,
      "transactionType": "Debit",
      "transactionDate": "2024-01-15T16:45:00Z",
      "debit": true,
      "credit": false,
      "transMode": "Wallet Transfer"
    }
  ]
}`}</CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Code Examples */}
                    <section className="mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Integration
                            Examples</h2>

                        <div className="space-y-8">
                            <CodeBlock
                                title="Node.js - Get Wallet Balance"
                                language="javascript"
                            >{`const axios = require('axios');

class PasspointWallet {
  constructor(merchantId, accessToken) {
    this.merchantId = merchantId;
    this.accessToken = accessToken;
    this.baseUrl = 'https://dev.mypasspoint.com/paypass';
  }

  getHeaders() {
    return {
      'x-channel-id': '2',
      'x-channel-code': 'passpoint-merchant-user',
      'x-merchant-id': this.merchantId,
      'Authorization': \`Bearer \${this.accessToken}\`,
      'Content-Type': 'application/json'
    };
  }

  async getWalletBalance() {
    try {
      const response = await axios.get(
        \`\${this.baseUrl}/wallet-app/get-wallet-balance/all\`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching wallet balance:', error.response?.data || error.message);
      throw error;
    }
  }

  async getWalletStatement(currency, pageNumber = 1, pageSize = 20, fromDate, toDate) {
    try {
      const requestBody = {
        currency,
        pageNumber,
        pageSize,
        fromDate,
        toDate
      };

      const response = await axios.post(
        \`\${this.baseUrl}/wallet-app/get-wallet-statement\`,
        requestBody,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching wallet statement:', error.response?.data || error.message);
      throw error;
    }
  }
}

// Usage
const wallet = new PasspointWallet('your-merchant-id', 'your-access-token');

// Get balance for all currencies
wallet.getWalletBalance()
  .then(balance => console.log('Wallet Balance:', balance))
  .catch(err => console.error('Balance Error:', err));

// Get USD wallet statement for January 2024
wallet.getWalletStatement('USD', 1, 20, '2024-01-01', '2024-01-31')
  .then(statement => console.log('Wallet Statement:', statement))
  .catch(err => console.error('Statement Error:', err));`}</CodeBlock>

                            <CodeBlock
                                title="Python - Wallet Operations"
                                language="python"
                            >{`import requests
import json
from datetime import datetime

class PasspointWallet:
    def __init__(self, merchant_id: str, access_token: str):
        self.merchant_id = merchant_id
        self.access_token = access_token
        self.base_url = "https://dev.mypasspoint.com/paypass"

    def get_headers(self) -> dict:
        return {
            "x-channel-id": "2",
            "x-channel-code": "passpoint-merchant-user",
            "x-merchant-id": self.merchant_id,
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }

    def get_wallet_details(self) -> dict:
        """Get wallet details for all currencies"""
        url = f"{self.base_url}/wallet-app/get-wallet-details"

        try:
            response = requests.get(url, headers=self.get_headers())
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching wallet details: {e}")
            raise

    def get_wallet_history(self, currency: str, page_number: int = 1,
                          page_size: int = 20, from_date: str = None,
                          to_date: str = None) -> dict:
        """Get wallet transaction history"""
        url = f"{self.base_url}/wallet-app/wallet-history?type=all"

        payload = {
            "currency": currency,
            "pageNumber": page_number,
            "pageSize": page_size
        }

        if from_date:
            payload["fromDate"] = from_date
        if to_date:
            payload["toDate"] = to_date

        try:
            response = requests.post(url,
                                   headers=self.get_headers(),
                                   json=payload)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching wallet history: {e}")
            raise

# Usage example
if __name__ == "__main__":
    wallet = PasspointWallet("your-merchant-id", "your-access-token")

    # Get wallet details
    try:
        details = wallet.get_wallet_details()
        print("Wallet Details:", json.dumps(details, indent=2))

        # Get USD transaction history
        history = wallet.get_wallet_history(
            currency="USD",
            page_number=1,
            page_size=10,
            from_date="2024-01-01",
            to_date="2024-01-31"
        )
        print("Transaction History:", json.dumps(history, indent=2))

    except Exception as e:
        print(f"Operation failed: {e}")`}</CodeBlock>
                        </div>
                    </section>

                </div>

                {/* Pagination Navigation */}
                <div
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 dark:border-gray-800">
                    <Link to="/authentication">
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-start px-4 py-3"
                        >
                            <ArrowLeft className="h-4 w-4 flex-shrink-0"/>
                            <div className="text-left min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
                                <div className="text-sm font-medium truncate">Authentication</div>
                            </div>
                        </Button>
                    </Link>

                    <Link to="/transfer">
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 justify-between sm:justify-end px-4 py-3"
                        >
                            <div className="text-right min-w-0">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
                                <div className="text-sm font-medium truncate">Transfer</div>
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

export default Wallet;