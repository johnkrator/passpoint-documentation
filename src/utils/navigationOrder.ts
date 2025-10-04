interface NavItem {
    icon: any;
    label: string;
    href: string;
    children?: NavItem[];
}

interface NavSection {
    title: string;
    items: NavItem[];
}

interface NavigationPage {
    title: string;
    href: string;
}

// This mirrors the exact structure from Sidebar.tsx
const getNavigationSections = (): NavSection[] => [
    {
        title: "GETTING STARTED",
        items: [
            { icon: null, label: "Homepage", href: "/" },
            { icon: null, label: "Introduction", href: "/introduction" },
            { icon: null, label: "API Integrations", href: "/api-integrations" },
        ]
    },
    {
        title: "API DOCUMENTATION",
        items: [
            { icon: null, label: "Authentication", href: "/authentication" },
            { icon: null, label: "Wallet", href: "/wallet" },
            {
                icon: null,
                label: "Transfer",
                href: "/transfer",
                children: [
                    {
                        icon: null,
                        label: "Payout",
                        href: "/payout",
                children: [
                    {
                        icon: null,
                        label: "Momo",
                        href: "/payout/momo",
                        children: [
                            { icon: null, label: "Get Momo Payout Network", href: "/payout/momo/get-network" },
                            { icon: null, label: "Get Momo Payout Currency", href: "/payout/momo/get-payout-network" },
                            { icon: null, label: "Validate Momo Msisdn", href: "/payout/momo/validate-msisdn" },
                            { icon: null, label: "Momo Transfer", href: "/payout/momo/transfer" }
                        ]
                    },
                    {
                        icon: null,
                        label: "Bank",
                        href: "/payout/bank",
                        children: [
                            {
                                icon: null,
                                label: "Local",
                                href: "/payout/bank/local",
                                children: [
                                    { icon: null, label: "Get Banks", href: "/payout/bank/local/get-banks" },
                                    { icon: null, label: "Account Enquiry", href: "/payout/bank/local/account-enquiry" },
                                    { icon: null, label: "Account Transfer - NGN", href: "/payout/bank/local/account-transfer-ngn" },
                                    { icon: null, label: "Passpoint Enquiry", href: "/payout/bank/local/passpoint-enquiry" },
                                    { icon: null, label: "Passpoint Wallet Transfer", href: "/payout/bank/local/passpoint-wallet-transfer" }
                                ]
                            },
                            {
                                icon: null,
                                label: "Foreign",
                                href: "/payout/bank/foreign",
                                children: [
                                    { icon: null, label: "API Summary", href: "/payout/bank/foreign/summary" },
                                    { icon: null, label: "Get Available Countries", href: "/payout/bank/foreign/get-available-countries" },
                                    { icon: null, label: "Get Payment Methods", href: "/payout/bank/foreign/get-payment-methods" },
                                    { icon: null, label: "ACH - USD", href: "/payout/bank/foreign/ach-usd" },
                                    { icon: null, label: "WIRE - USD", href: "/payout/bank/foreign/wire-usd" },
                                    { icon: null, label: "RTP - USD", href: "/payout/bank/foreign/rtp-usd" },
                                    { icon: null, label: "FEDNOW - USD", href: "/payout/bank/foreign/fednow-usd" },
                                    { icon: null, label: "Account Deposit - USD", href: "/payout/bank/foreign/account-deposit-usd" },
                                    { icon: null, label: "Account Deposit - GBP", href: "/payout/bank/foreign/account-deposit-gbp" },
                                    { icon: null, label: "Account Deposit - EUR", href: "/payout/bank/foreign/account-deposit-eur" },
                                    { icon: null, label: "Account Deposit - CNY", href: "/payout/bank/foreign/account-deposit-cny" },
                                    { icon: null, label: "Momo Deposit - CNY", href: "/payout/bank/foreign/momo-deposit-cny" },
                                    { icon: null, label: "B2B Transfer - CNY", href: "/payout/bank/foreign/b2b-transfer-cny" },
                                    { icon: null, label: "B2C Transfer - CNY", href: "/payout/bank/foreign/b2c-transfer-cny" },
                                    { icon: null, label: "B2B Transfer - USD", href: "/payout/bank/foreign/b2b-transfer-usd" }
                                ]
                            }
                        ]
                    },
                    { icon: null, label: "Rate", href: "/payout/rate" },
                    { icon: null, label: "Report", href: "/payout/report" },
                    { icon: null, label: "Convert Funds", href: "/payout/convert-funds" }
                ]
            },
            {
                icon: null,
                label: "Collection",
                href: "/collection",
                children: [
                    {
                        icon: null,
                        label: "Momo",
                        href: "/collection/momo",
                        children: [
                            { icon: null, label: "Get Momo Collection Currency", href: "/collection/momo/get-currency" },
                            { icon: null, label: "Get Momo Collection Network", href: "/collection/momo/get-network" },
                            { icon: null, label: "Momo Request to Pay", href: "/collection/momo/request-to-pay" }
                        ]
                    },
                    {
                        icon: null,
                        label: "Bank",
                        href: "/collection/bank",
                        children: [
                            {
                                icon: null,
                                label: "Open Banking",
                                href: "/collection/bank/open-banking",
                                children: [
                                    { icon: null, label: "Request payment - foreign", href: "/collection/bank/open-banking/request-payment-foreign" },
                                    { icon: null, label: "Request payment - foreign [with tokenization]", href: "/collection/bank/open-banking/request-payment-foreign-tokenization" },
                                    { icon: null, label: "Request payment - foreign [with tokenization - new payer]", href: "/collection/bank/open-banking/request-payment-foreign-tokenization-new-payer" },
                                    {
                                        icon: null,
                                        label: "Preselect",
                                        href: "/collection/bank/open-banking/preselect",
                                        children: [
                                            { icon: null, label: "Get Banks", href: "/collection/bank/open-banking/preselect/get-banks" },
                                            { icon: null, label: "Get Countries", href: "/collection/bank/open-banking/preselect/get-countries" },
                                            { icon: null, label: "Request payment - foreign [with bank preselect]", href: "/collection/bank/open-banking/preselect/request-payment-foreign-with-bank-preselect" }
                                        ]
                                    }
                                ]
                            },
                            { icon: null, label: "Get collection currency", href: "/collection/bank/get-collection-currency" },
                            { icon: null, label: "Generate NGN static virtual account", href: "/collection/bank/generate-ngn-static-virtual-account" },
                            { icon: null, label: "Generate USD virtual account - individual", href: "/collection/bank/generate-usd-virtual-account-individual" },
                            { icon: null, label: "Generate USD virtual account - business", href: "/collection/bank/generate-usd-virtual-account-business" },
                            { icon: null, label: "List virtual accounts - NGN - paginated", href: "/collection/bank/list-virtual-accounts-ngn-paginated" },
                            { icon: null, label: "Get virtual account", href: "/collection/bank/get-virtual-account" }
                        ]
                    },
                    { icon: null, label: "Report", href: "/collection/report" },
                    { icon: null, label: "Wallet credit callback sample", href: "/collection/wallet-credit-callback-sample" },
                    { icon: null, label: "List countries", href: "/collection/list-countries" },
                    { icon: null, label: "Transfer status", href: "/collection/transfer-status" },
                    { icon: null, label: "Payment status report", href: "/collection/payment-status-report" },
                    { icon: null, label: "Resend single webhook", href: "/collection/resend-single-webhook" },
                    { icon: null, label: "Resend bulk webhook", href: "/collection/resend-bulk-webhook" },
                    { icon: null, label: "Confirm momo payment", href: "/collection/confirm-momo-payment" }
                ]
                    }
                ]
            },
            {
                icon: null,
                label: "Global Callback Setup",
                href: "/global-callback-setup",
                children: [
                    { icon: null, label: "Update Merchant Callback Url", href: "/global-callback-setup/update-merchant-callback-url" }
                ]
            },
            {
                icon: null,
                label: "Virtual Card v2",
                href: "/virtual-card-v2",
                children: [
                    { icon: null, label: "Issue Card (Default Billing Details)", href: "/virtual-card-v2/issue-card-default-billing" },
                    { icon: null, label: "Issue Card (Client Billing Details)", href: "/virtual-card-v2/issue-card-client-billing" },
                    { icon: null, label: "Issue And Fund Card (Client Billing Details)", href: "/virtual-card-v2/issue-and-fund-card-client-billing" },
                    { icon: null, label: "Card Details", href: "/virtual-card-v2/card-details" },
                    { icon: null, label: "Card Full Pan", href: "/virtual-card-v2/card-full-pan" },
                    { icon: null, label: "Card Balance", href: "/virtual-card-v2/card-balance" },
                    { icon: null, label: "Card Profile Status", href: "/virtual-card-v2/card-profile-status" },
                    { icon: null, label: "Freeze Card", href: "/virtual-card-v2/freeze-card" },
                    { icon: null, label: "Unfreeze Card", href: "/virtual-card-v2/unfreeze-card" },
                    { icon: null, label: "Fund Card", href: "/virtual-card-v2/fund-card" },
                    { icon: null, label: "Withdraw from Card", href: "/virtual-card-v2/withdraw-from-card" },
                    { icon: null, label: "Card Transaction", href: "/virtual-card-v2/card-transaction" },
                    { icon: null, label: "Card Transactions List", href: "/virtual-card-v2/card-transactions-list" },
                    { icon: null, label: "Terminate Card", href: "/virtual-card-v2/terminate-card" },
                    { icon: null, label: "Update Card Callback Details", href: "/virtual-card-v2/update-card-callback-details" },
                    { icon: null, label: "Card Statement", href: "/virtual-card-v2/card-statement" },
                    { icon: null, label: "Card Statement by Transaction Id", href: "/virtual-card-v2/card-statement-by-transaction-id" },
                    { icon: null, label: "Realtime Authorization Decision Maker", href: "/virtual-card-v2/realtime-authorization-decision-maker" }
                ]
            },
            {
                icon: null,
                label: "Card Acquiring",
                href: "/card-acquiring",
                children: [
                    { icon: null, label: "Initiate Payment (New Customer)", href: "/card-acquiring/initiate-payment-new-customer" },
                    { icon: null, label: "Initiate Payment (Existing Customer)", href: "/card-acquiring/initiate-payment-existing-customer" }
                ]
            }
        ]
    },
    {
        title: "GUIDES",
        items: [
            { icon: null, label: "API Rate Limits", href: "/api-rate-limits" },
            { icon: null, label: "Quick Guides", href: "/quick-guides" },
            { icon: null, label: "Transaction Dynamics on Passpoint", href: "/transaction-dynamics" }
        ]
    },
    {
        title: "LEARN MORE",
        items: [
            { icon: null, label: "Manage User Roles and Permissions", href: "/user-roles" },
            { icon: null, label: "Status responses and their meanings", href: "/status-responses" }
        ]
    }
];

// Flatten the navigation structure into a sequential list
const flattenNavigation = (sections: NavSection[]): NavigationPage[] => {
    const pages: NavigationPage[] = [];
    
    const processItems = (items: NavItem[]) => {
        items.forEach(item => {
            pages.push({
                title: item.label,
                href: item.href
            });
            
            if (item.children) {
                processItems(item.children);
            }
        });
    };
    
    sections.forEach(section => {
        processItems(section.items);
    });
    
    return pages;
};

// Get the ordered list of all pages
const getOrderedPages = (): NavigationPage[] => {
    return flattenNavigation(getNavigationSections());
};

// Get previous and next pages for a given current page
export const getNavigationInfo = (currentHref: string): { previousPage?: NavigationPage; nextPage?: NavigationPage } => {
    const pages = getOrderedPages();
    const currentIndex = pages.findIndex(page => page.href === currentHref);
    
    if (currentIndex === -1) {
        return {};
    }
    
    const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : undefined;
    const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : undefined;
    
    return { previousPage, nextPage };
};

// Export for debugging/testing
export { getOrderedPages };