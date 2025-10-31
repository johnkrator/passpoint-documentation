import {Users, Shield, Settings, Key, Lock, CheckCircle, XCircle, AlertTriangle} from "lucide-react";
import CodeBlock from "@/components/CodeBlock.tsx";

const UserRoles = () => {
    const getRoleCheckExampleCode = () => {
        return `// Example: Checking user roles in your application
async function checkUserPermissions(userId, requiredRole) {
  const user = await getUserById(userId);

  // Role hierarchy: ADMINISTRATOR > MANAGER > EMPLOYEE
  const roleHierarchy = {
    'ADMINISTRATOR': 3,
    'MANAGER': 2,
    'EMPLOYEE': 1
  };

  const userRoleLevel = roleHierarchy[user.role];
  const requiredRoleLevel = roleHierarchy[requiredRole];

  return userRoleLevel >= requiredRoleLevel;
}

// Usage example
if (await checkUserPermissions(currentUserId, 'MANAGER')) {
  // User has manager or administrator privileges
  allowAccessToFinancialReports();
} else {
  throw new Error('Insufficient permissions');
}`;
    };

    const getApiKeyPermissionsCode = () => {
        return `// API key permissions example
const apiKeyConfig = {
  keyId: 'pk_live_abc123',
  merchantId: 'merchant_xyz',
  permissions: {
    'wallet:read': true,
    'wallet:write': true,
    'transfer:create': true,
    'transfer:read': true,
    'settings:modify': false,  // Restricted
    'users:manage': false      // Restricted
  },
  scope: 'LIMITED_WRITE',  // READ_ONLY | LIMITED_WRITE | FULL_ACCESS
  createdBy: 'user_manager_001',
  expiresAt: '2024-12-31T23:59:59Z'
};

// Validate API key permissions before operation
function validateOperation(apiKey, operation) {
  if (!apiKey.permissions[operation]) {
    throw new Error(\`API key lacks permission: \${operation}\`);
  }
  return true;
}`;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="max-w-none">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-6">User Roles and
                        Permissions</h1>

                    <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl">
                        Passpoint provides a robust role-based access control (RBAC) system to manage user permissions
                        and API access. This guide explains the available roles, their permissions, and how to implement
                        access control in your integration.
                    </p>

                    {/* Role Types Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">User Role
                            Types</h2>

                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Passpoint implements three primary user roles with hierarchical permissions. Each role is
                            designed
                            for specific use cases and provides appropriate access levels for security and operational
                            efficiency.
                        </p>

                        <div className="space-y-6">
                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Shield className="h-12 w-12 text-red-500"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Administrator</h3>
                                    </div>
                                    <div className="flex-1">
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            Complete control over the Passpoint merchant account with unrestricted
                                            access to all features, settings, and sensitive operations.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Full user management and role assignment</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Unrestricted financial data access</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">API key and webhook configuration</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Account settings and billing management</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Audit logs and security monitoring</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Transaction approval and reversal rights</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Users className="h-12 w-12 text-brand-500"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Manager</h3>
                                    </div>
                                    <div className="flex-1">
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            Supervisory role with access to team operations, financial oversight, and
                                            limited user management for operational efficiency.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Transaction approval workflows</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Team financial reporting access</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Limited team member management</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Spending analytics and insights</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Transaction limit configuration</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-500 dark:text-gray-400">Cannot manage API keys or webhooks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div
                                        className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-0 lg:w-48 flex-shrink-0">
                                        <Settings className="h-12 w-12 text-green-500"/>
                                        <h3 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white lg:mt-3">Employee</h3>
                                    </div>
                                    <div className="flex-1">
                                        <p className="md:text-lg text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            Basic operational access for individual contributors with permissions
                                            limited to personal transactions and assigned resources.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Submit and track personal transactions</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">View personal transaction history</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Access assigned virtual cards/wallets</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-700 dark:text-gray-300">Update profile and preferences</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-500 dark:text-gray-400">No access to team data or reports</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"/>
                                                <span className="text-gray-500 dark:text-gray-400">Cannot manage users or settings</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Permission Matrix Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Permission
                            Matrix</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            This comprehensive matrix shows which operations each role can perform in the Passpoint
                            system.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
                                <thead
                                    className="bg-gray-50 dark:bg-gray-900/50 border-b-2 border-gray-200 dark:border-gray-700">
                                <tr>
                                    <th className="px-4 py-4 text-left font-semibold text-gray-900 dark:text-white">Feature
                                        / Operation
                                    </th>
                                    <th className="px-4 py-4 text-center font-semibold text-gray-900 dark:text-white">Employee</th>
                                    <th className="px-4 py-4 text-center font-semibold text-gray-900 dark:text-white">Manager</th>
                                    <th className="px-4 py-4 text-center font-semibold text-gray-900 dark:text-white">Administrator</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">View Personal
                                        Transactions
                                    </td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Submit
                                        Transactions
                                    </td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">View Team
                                        Transactions & Reports
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Approve/Reject
                                        Transactions
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Set
                                        Transaction Limits
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Manage Team
                                        Members (Limited)
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><AlertTriangle
                                        className="h-5 w-5 text-yellow-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Access
                                        Financial Analytics
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Manage API
                                        Keys
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Configure
                                        Webhooks
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Manage All
                                        Users & Roles
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Modify
                                        Account Settings
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">Access Audit
                                        Logs
                                    </td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><XCircle
                                        className="h-5 w-5 text-gray-400 mx-auto"/></td>
                                    <td className="px-4 py-3 text-center"><CheckCircle
                                        className="h-5 w-5 text-green-500 mx-auto"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 flex items-start gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500"/>
                                <span className="text-gray-600 dark:text-gray-400">Full Access</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-yellow-500"/>
                                <span className="text-gray-600 dark:text-gray-400">Limited Access</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-gray-400"/>
                                <span className="text-gray-600 dark:text-gray-400">No Access</span>
                            </div>
                        </div>
                    </section>

                    {/* API Key Permissions Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">API Key
                            Permission Levels</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            In addition to dashboard user roles, Passpoint supports granular API key permissions for
                            programmatic
                            access control. This allows you to create API keys with specific scopes tailored to your
                            integration needs.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div
                                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="h-8 w-8 text-green-600 dark:text-green-400"/>
                                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">Read-Only
                                        Keys</h3>
                                </div>
                                <p className="text-green-800 dark:text-green-200 mb-4 text-sm leading-relaxed">
                                    Can retrieve data but cannot create or modify resources. Ideal for analytics,
                                    reporting, and monitoring integrations.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-green-800 dark:text-green-200">View wallet balances</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                        <span
                                            className="text-green-800 dark:text-green-200">Check transaction status</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-green-800 dark:text-green-200">Generate reports</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-gray-600 dark:text-gray-400">No write operations</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Key className="h-8 w-8 text-yellow-600 dark:text-yellow-400"/>
                                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100">Limited
                                        Write Keys</h3>
                                </div>
                                <p className="text-yellow-800 dark:text-yellow-200 mb-4 text-sm leading-relaxed">
                                    Can create transactions and manage wallets but cannot modify account settings,
                                    webhooks, or user permissions.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"/>
                                        <span
                                            className="text-yellow-800 dark:text-yellow-200">Create transactions</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-yellow-800 dark:text-yellow-200">Manage wallets</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-yellow-800 dark:text-yellow-200">Initiate payouts</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-gray-600 dark:text-gray-400">No settings changes</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-8 w-8 text-red-600 dark:text-red-400"/>
                                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">Full Access
                                        Keys</h3>
                                </div>
                                <p className="text-red-800 dark:text-red-200 mb-4 text-sm leading-relaxed">
                                    Complete API access equivalent to administrator-level permissions. Use with extreme
                                    caution and proper security measures.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                        <span
                                            className="text-red-800 dark:text-red-200">All transaction operations</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-red-800 dark:text-red-200">Manage webhooks</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle
                                            className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-red-800 dark:text-red-200">Modify account settings</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <AlertTriangle
                                            className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"/>
                                        <span className="text-red-800 dark:text-red-200">Requires secure storage</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CodeBlock language="javascript" title="API Key Permission Validation Example">
                            {getApiKeyPermissionsCode()}
                        </CodeBlock>
                    </section>

                    {/* Implementation Example Section */}
                    <section className="mb-16">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white mb-8">Implementation
                            Example</h2>

                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                            Here's how to implement role-based access control in your application when integrating with
                            Passpoint:
                        </p>

                        <CodeBlock language="javascript" title="Role-Based Access Control Example">
                            {getRoleCheckExampleCode()}
                        </CodeBlock>

                        <div
                            className="mt-8 bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-3">Best
                                Practices</h3>
                            <ul className="space-y-2 text-brand-800 dark:text-brand-200">
                                <li>• Follow the principle of least privilege - grant users only the permissions they
                                    need
                                </li>
                                <li>• Use Limited Write API keys for production integrations instead of Full Access
                                    keys
                                </li>
                                <li>• Regularly audit user roles and API key permissions to maintain security</li>
                                <li>• Implement session management to handle role changes in real-time</li>
                                <li>• Store API keys securely using environment variables or secret management systems
                                </li>
                                <li>• Rotate API keys periodically and immediately after any security incident</li>
                                <li>• Document which team members have which roles for compliance and auditing
                                    purposes
                                </li>
                                <li>• Immediately revoke access when team members change roles or leave the
                                    organization
                                </li>
                            </ul>
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

export default UserRoles;
