import {Users, Shield, Settings} from "lucide-react";

const UserRoles = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="prose prose-invert max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Manage User Roles and
                    Permissions</h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    Control access to your Passpoint account with granular user roles and permissions. Set up team
                    members with appropriate access levels to maintain security while enabling productivity.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Role Types</h2>

                    <div className="space-y-6">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <Shield className="h-8 w-8 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Administrator</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Full access to all account features, settings, and user management capabilities.
                                    </p>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Manage all users and permissions</li>
                                        <li>• Access financial data and reports</li>
                                        <li>• Configure API keys and webhooks</li>
                                        <li>• Modify account settings and billing</li>
                                        <li>• View audit logs and security events</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <Users className="h-8 w-8 text-brand-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Manager</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Oversight privileges with access to team management and financial reporting.
                                    </p>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Approve transactions and expenses</li>
                                        <li>• View team spending and reports</li>
                                        <li>• Manage team member permissions</li>
                                        <li>• Access to spending analytics</li>
                                        <li>• Configure spending limits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <Settings className="h-8 w-8 text-green-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Employee</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Standard access for day-to-day operations and expense submission.
                                    </p>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Submit expenses and receipts</li>
                                        <li>• View personal spending history</li>
                                        <li>• Access assigned payment methods</li>
                                        <li>• Update personal profile information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Permission Matrix</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 dark:border-gray-800 rounded-lg">
                            <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white break-words">Feature</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">Admin</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">Manager</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">Employee</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                            <tr className="bg-white dark:bg-gray-950">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white break-words">Create
                                    Transactions
                                </td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">✅</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-900">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white break-words">Approve
                                    Expenses
                                </td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">❌</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-950">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white break-words">View
                                    Financial Reports
                                </td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-900">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white break-words">Manage API
                                    Keys
                                </td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">❌</td>
                                <td className="px-4 py-3 text-center">❌</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-950">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white break-words">User
                                    Management
                                </td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">🔶</td>
                                <td className="px-4 py-3 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-900">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white break-words">Billing &
                                    Settings
                                </td>
                                <td className="px-4 py-3 text-center">✅</td>
                                <td className="px-4 py-3 text-center">❌</td>
                                <td className="px-4 py-3 text-center">❌</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        🔶 Limited access (team members only)
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Access Control</h2>

                    <div
                        className="bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-3">API Key
                            Permissions</h3>
                        <p className="text-brand-800 dark:text-brand-200 mb-4">
                            API keys inherit permissions from the user who created them. Restrict API access by
                            assigning keys to users with appropriate roles.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Read-Only Keys</h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Can only retrieve data, perfect for reporting and analytics integrations.
                            </p>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Limited Write Keys</h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Can create transactions but cannot modify account settings or user permissions.
                            </p>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full Access Keys</h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Complete API access equivalent to administrator privileges. Use with caution.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>

                    <div className="space-y-4">
                        <div
                            className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <Shield className="h-5 w-5 text-green-600 dark:text-green-400"/>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-green-800 dark:text-green-200">Principle
                                        of Least Privilege</h3>
                                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                                        Grant users the minimum permissions necessary to perform their job functions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <Settings className="h-5 w-5 text-yellow-600 dark:text-yellow-400"/>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Regular
                                        Access Reviews</h3>
                                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                                        Periodically review user permissions and revoke unnecessary access.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <Users className="h-5 w-5 text-red-600 dark:text-red-400"/>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Offboarding
                                        Process</h3>
                                    <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                                        Immediately revoke access when team members leave the organization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-gray-500 text-sm">All rights reserved</p>
            </footer>
        </div>
    );
};

export default UserRoles;