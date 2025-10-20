import React, {useState} from "react";
import {
    ChevronDown,
    ChevronRight,
    Home,
    Book,
    Users,
    BarChart3,
    FileText,
    Settings,
    X,
    Send,
    ArrowDownToLine,
    ArrowUpToLine,
    Globe,
    DollarSign,
    TrendingUp,
    History,
    MessageSquare,
    Webhook,
    CheckCircle,
    Building2,
    RefreshCw,
    MapPin,
    CreditCard,
    Shield,
    Code
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useLocation, Link} from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
    isActive?: boolean;
    children?: NavItem[];
}

interface NavSection {
    title: string;
    items: NavItem[];
}

const Sidebar = ({isOpen, onClose}: SidebarProps) => {
    const location = useLocation();
    const [openSections, setOpenSections] = useState<string[]>(["GETTING STARTED"]);
    const [openNavItems, setOpenNavItems] = useState<string[]>([]);

    const toggleSection = (section: string) => {
        setOpenSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const toggleNavItem = (itemLabel: string) => {
        console.log("Toggling:", itemLabel);
        setOpenNavItems(prev => {
            const newState = prev.includes(itemLabel)
                ? prev.filter(s => s !== itemLabel)
                : [...prev, itemLabel];
            console.log("Open items:", newState);
            return newState;
        });
    };

    const getUniqueKey = (...items: (NavItem | undefined)[]) => {
        // Build a unique key based on the full hierarchy path
        const parts = items.filter(item => item !== undefined).map(item => item!.label);
        return parts.join("-");
    };

    const navSections: NavSection[] = [
        {
            title: "GETTING STARTED",
            items: [
                {icon: Home, label: "Homepage", href: "/"},
                {icon: FileText, label: "Introduction", href: "/introduction"},
                {icon: Settings, label: "API Integrations", href: "/api-integrations"},
            ]
        },
        {
            title: "API DOCUMENTATION",
            items: [
                {icon: Settings, label: "Authentication", href: "/authentication"},
                {icon: BarChart3, label: "Wallet", href: "/wallet"},
                {
                    icon: Send,
                    label: "Transfer",
                    href: "/transfer",
                    children: [
                        {
                            icon: ArrowUpToLine,
                            label: "Payout",
                            href: "/payout",
                            children: [
                                {
                                    icon: MessageSquare,
                                    label: "Momo",
                                    href: "/payout/momo",
                                    children: [
                                        {
                                            icon: Globe,
                                            label: "Get Momo Payout Network",
                                            href: "/payout/momo/get-network"
                                        },
                                        {
                                            icon: Globe,
                                            label: "Get Momo Payout Currency",
                                            href: "/payout/momo/get-payout-network"
                                        },
                                        {
                                            icon: CheckCircle,
                                            label: "Validate Momo Msisdn",
                                            href: "/payout/momo/validate-msisdn"
                                        },
                                        {icon: Send, label: "Momo Transfer", href: "/payout/momo/transfer"}
                                    ]
                                },
                                {
                                    icon: Building2,
                                    label: "Bank",
                                    href: "/payout/bank",
                                    children: [
                                        {
                                            icon: MapPin,
                                            label: "Local",
                                            href: "/payout/bank/local",
                                            children: [
                                                {
                                                    icon: Building2,
                                                    label: "Get Banks",
                                                    href: "/payout/bank/local/get-banks"
                                                },
                                                {
                                                    icon: CheckCircle,
                                                    label: "Account Enquiry",
                                                    href: "/payout/bank/local/account-enquiry"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "Account Transfer - NGN",
                                                    href: "/payout/bank/local/account-transfer-ngn"
                                                },
                                                {
                                                    icon: CheckCircle,
                                                    label: "Passpoint Enquiry",
                                                    href: "/payout/bank/local/passpoint-enquiry"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "Passpoint Wallet Transfer",
                                                    href: "/payout/bank/local/passpoint-wallet-transfer"
                                                }
                                            ]
                                        },
                                        {
                                            icon: Globe,
                                            label: "Foreign",
                                            href: "/payout/bank/foreign",
                                            children: [
                                                {
                                                    icon: FileText,
                                                    label: "API Summary",
                                                    href: "/payout/bank/foreign/summary"
                                                },
                                                {
                                                    icon: Globe,
                                                    label: "Get Available Countries",
                                                    href: "/payout/bank/foreign/get-available-countries"
                                                },
                                                {
                                                    icon: CreditCard,
                                                    label: "Get Payment Methods",
                                                    href: "/payout/bank/foreign/get-payment-methods"
                                                },
                                                {
                                                    icon: DollarSign,
                                                    label: "ACH - USD",
                                                    href: "/payout/bank/foreign/ach-usd"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "WIRE - USD",
                                                    href: "/payout/bank/foreign/wire-usd"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "RTP - USD",
                                                    href: "/payout/bank/foreign/rtp-usd"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "FEDNOW - USD",
                                                    href: "/payout/bank/foreign/fednow-usd"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Account Deposit - USD",
                                                    href: "/payout/bank/foreign/account-deposit-usd"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Account Deposit - GBP",
                                                    href: "/payout/bank/foreign/account-deposit-gbp"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Account Deposit - EUR",
                                                    href: "/payout/bank/foreign/account-deposit-eur"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Account Deposit - CNY",
                                                    href: "/payout/bank/foreign/account-deposit-cny"
                                                },
                                                {
                                                    icon: MessageSquare,
                                                    label: "Momo Deposit - CNY",
                                                    href: "/payout/bank/foreign/momo-deposit-cny"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "B2B Transfer - CNY",
                                                    href: "/payout/bank/foreign/b2b-transfer-cny"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "B2C Transfer - CNY",
                                                    href: "/payout/bank/foreign/b2c-transfer-cny"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "B2B Transfer - USD",
                                                    href: "/payout/bank/foreign/b2b-transfer-usd"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    icon: TrendingUp,
                                    label: "Rate",
                                    href: "/payout/rate"
                                },
                                {
                                    icon: History,
                                    label: "Report",
                                    href: "/payout/report"
                                },

                                {
                                    icon: RefreshCw,
                                    label: "Convert Funds",
                                    href: "/payout/convert-funds"
                                },
                                {
                                    icon: Webhook,
                                    label: "Fund Transfer Callback Sample",
                                    href: "/payout/funds-transfer-callback-sample"
                                }
                            ]
                        },
                        {
                            icon: ArrowDownToLine,
                            label: "Collection",
                            href: "/collection",
                            children: [
                                {
                                    icon: MessageSquare,
                                    label: "Momo",
                                    href: "/collection/momo",
                                    children: [
                                        {
                                            icon: Globe,
                                            label: "Get Momo Collection Currency",
                                            href: "/collection/momo/get-currency"
                                        },
                                        {
                                            icon: Globe,
                                            label: "Get Momo Collection Network",
                                            href: "/collection/momo/get-network"
                                        },
                                        {
                                            icon: Send,
                                            label: "Momo Request to Pay",
                                            href: "/collection/momo/request-to-pay"
                                        }
                                    ]
                                },
                                {
                                    icon: Building2,
                                    label: "Bank",
                                    href: "/collection/bank",
                                    children: [
                                        {
                                            icon: Shield,
                                            label: "Open Banking",
                                            href: "/collection/bank/open-banking",
                                            children: [
                                                {
                                                    icon: MapPin,
                                                    label: "Preselect",
                                                    href: "/collection/bank/open-banking/preselect",
                                                    children: [
                                                        {
                                                            icon: Building2,
                                                            label: "Get Banks",
                                                            href: "/collection/bank/open-banking/preselect/get-banks"
                                                        },
                                                        {
                                                            icon: Globe,
                                                            label: "Get Countries",
                                                            href: "/collection/bank/open-banking/preselect/get-countries"
                                                        },
                                                        {
                                                            icon: Send,
                                                            label: "Request payment - foreign [with bank preselect]",
                                                            href: "/collection/bank/open-banking/preselect/request-payment-foreign-with-bank-preselect"
                                                        }
                                                    ]
                                                },
                                                {
                                                    icon: Send,
                                                    label: "Request payment - foreign",
                                                    href: "/collection/bank/open-banking/request-payment-foreign"
                                                }
                                            ]
                                        },
                                        {
                                            icon: DollarSign,
                                            label: "Get collection currency",
                                            href: "/collection/bank/get-collection-currency"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Generate NGN static virtual account",
                                            href: "/collection/bank/generate-ngn-static-virtual-account"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Generate NGN dynamic virtual account",
                                            href: "/collection/bank/generate-ngn-dynamic-virtual-account"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Generate NGN dynamic virtual account - with other info",
                                            href: "/collection/bank/generate-ngn-dynamic-virtual-account-with-other-info"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Generate USD virtual account - individual",
                                            href: "/collection/bank/generate-usd-virtual-account-individual"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Generate USD virtual account - business",
                                            href: "/collection/bank/generate-usd-virtual-account-business"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "List virtual accounts - NGN - paginated",
                                            href: "/collection/bank/list-virtual-accounts-ngn-paginated"
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Get virtual account",
                                            href: "/collection/bank/get-virtual-account"
                                        }
                                    ]
                                },
                                {
                                    icon: History,
                                    label: "Report",
                                    href: "/collection/report"
                                },
                                {
                                    icon: Webhook,
                                    label: "Wallet credit callback sample",
                                    href: "/collection/wallet-credit-callback-sample"
                                }
                            ]
                        },
                        {
                            icon: BarChart3,
                            label: "List countries",
                            href: "/transfer/list-countries"
                        },
                        {
                            icon: BarChart3,
                            label: "Transfer status",
                            href: "/transfer/transfer-status"
                        },
                        {
                            icon: BarChart3,
                            label: "Payment status report",
                            href: "/transfer/payment-status-report"
                        },
                        {
                            icon: Send,
                            label: "Resend single webhook",
                            href: "/transfer/resend-single-webhook"
                        },
                        {
                            icon: Send,
                            label: "Resend bulk webhook",
                            href: "/transfer/resend-bulk-webhook"
                        },
                        {
                            icon: CheckCircle,
                            label: "Confirm momo payment",
                            href: "/transfer/confirm-momo-payment"
                        }
                    ]
                },
                {
                    icon: Settings,
                    label: "Global Callback Setup",
                    href: "/global-callback-setup",
                    children: [
                        {
                            icon: Settings,
                            label: "Update Merchant Callback Url",
                            href: "/global-callback-setup/update-merchant-callback-url"
                        }
                    ]
                },
                {
                    icon: FileText,
                    label: "Virtual Card v2",
                    href: "/virtual-card-v2",
                    children: [
                        {
                            icon: FileText,
                            label: "Card Introduction",
                            href: "/virtual-card-v2/card-introduction"
                        },
                        {
                            icon: Send,
                            label: "Issue Card (Default Billing Details)",
                            href: "/virtual-card-v2/issue-card-default-billing"
                        },
                        {
                            icon: Send,
                            label: "Issue Card (Client Billing Details)",
                            href: "/virtual-card-v2/issue-card-client-billing"
                        },
                        {
                            icon: Send,
                            label: "Issue And Fund Card (Client Billing Details)",
                            href: "/virtual-card-v2/issue-and-fund-card-client-billing"
                        },
                        {
                            icon: FileText,
                            label: "Card Details",
                            href: "/virtual-card-v2/card-details"
                        },
                        {
                            icon: FileText,
                            label: "Card Full Pan",
                            href: "/virtual-card-v2/card-full-pan"
                        },
                        {
                            icon: DollarSign,
                            label: "Card Balance",
                            href: "/virtual-card-v2/card-balance"
                        },
                        {
                            icon: CheckCircle,
                            label: "Card Profile Status",
                            href: "/virtual-card-v2/card-profile-status"
                        },
                        {
                            icon: Settings,
                            label: "Freeze Card",
                            href: "/virtual-card-v2/freeze-card"
                        },
                        {
                            icon: Settings,
                            label: "Unfreeze Card",
                            href: "/virtual-card-v2/unfreeze-card"
                        },
                        {
                            icon: Send,
                            label: "Fund Card",
                            href: "/virtual-card-v2/fund-card"
                        },
                        {
                            icon: ArrowUpToLine,
                            label: "Withdraw from Card",
                            href: "/virtual-card-v2/withdraw-from-card"
                        },
                        {
                            icon: History,
                            label: "Card Transaction",
                            href: "/virtual-card-v2/card-transaction"
                        },
                        {
                            icon: History,
                            label: "Card Transactions List",
                            href: "/virtual-card-v2/card-transactions-list"
                        },
                        {
                            icon: Settings,
                            label: "Terminate Card",
                            href: "/virtual-card-v2/terminate-card"
                        },
                        {
                            icon: Settings,
                            label: "Update Card Callback Details",
                            href: "/virtual-card-v2/update-card-callback-details"
                        },
                        {
                            icon: FileText,
                            label: "Card Statement",
                            href: "/virtual-card-v2/card-statement"
                        },
                        {
                            icon: FileText,
                            label: "Card Statement by Transaction Id",
                            href: "/virtual-card-v2/card-statement-by-transaction-id"
                        },
                        {
                            icon: CheckCircle,
                            label: "Realtime Authorization Decision Maker",
                            href: "/virtual-card-v2/realtime-authorization-decision-maker"
                        }
                    ]
                },
                {
                    icon: BarChart3,
                    label: "Card Acquiring",
                    href: "/card-acquiring",
                    children: [
                        {
                            icon: Send,
                            label: "Initiate Payment (New Customer)",
                            href: "/card-acquiring/initiate-payment-new-customer"
                        },
                        {
                            icon: Send,
                            label: "Initiate Payment (Existing Customer)",
                            href: "/card-acquiring/initiate-payment-existing-customer"
                        }
                    ]
                },
            ]
        },
        {
            title: "GUIDES",
            items: [
                {icon: BarChart3, label: "API Rate Limits", href: "/api-rate-limits"},
                {icon: Book, label: "Quick Guides", href: "/quick-guides"},
                {icon: FileText, label: "Transaction Dynamics on Passpoint", href: "/transaction-dynamics"},
            ]
        },
        {
            title: "LEARN MORE",
            items: [
                {icon: Users, label: "Manage User Roles and Permissions", href: "/user-roles"},
                {icon: BarChart3, label: "Status responses and their meanings", href: "/status-responses"},
                {icon: Code, label: "Sandbox Playground", href: "/sandbox-playground"},
            ]
        }
    ];

    return (
        <>
            {/* Overlay for mobile and small screens */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "h-screen w-96 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800", // Increased width from w-72 to w-96
                    // Mobile: fixed position with slide animation
                    "lg:sticky lg:top-0 lg:transform-none lg:transition-none",
                    "fixed left-0 top-0 z-50 transform transition-transform duration-200 ease-in-out lg:z-auto",
                    // Mobile slide behavior
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    // Desktop show/hide behavior
                    "lg:translate-x-0",
                    isOpen ? "lg:block" : "lg:hidden"
                )}
            >
                {/* Mobile close button */}
                <div className="lg:hidden flex justify-end p-4">
                    <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-900 dark:text-white">
                        <X className="h-4 w-4"/>
                    </Button>
                </div>

                {/* Navigation */}
                <nav className="px-4 pb-4 space-y-2 h-full overflow-y-auto scrollbar-hide">
                    {navSections.map((section) => (
                        <div key={section.title} className="space-y-1">
                            {/* Section header */}
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="flex items-center justify-between w-full px-2 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            >
                                <span>{section.title}</span>
                                {openSections.includes(section.title) ? (
                                    <ChevronDown className="h-3 w-3"/>
                                ) : (
                                    <ChevronRight className="h-3 w-3"/>
                                )}
                            </button>

                            {/* Section items */}
                            {openSections.includes(section.title) && (
                                <div className="space-y-1 ml-2">
                                    {section.items.map((item) => {
                                        const isActive = location.pathname === item.href;
                                        const hasChildren = item.children && item.children.length > 0;
                                        const isExpanded = openNavItems.includes(item.label);

                                        return (
                                            <div key={item.href} className="space-y-1">
                                                {hasChildren ? (
                                                    <div>
                                                        {/* Expandable nav item */}
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => toggleNavItem(item.label)}
                                                                className={cn(
                                                                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors flex-1 text-left",
                                                                    isActive
                                                                        ? "bg-brand-500 text-white"
                                                                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                )}
                                                            >
                                                                <item.icon className="h-4 w-4"/>
                                                                <span className="truncate">{item.label}</span>
                                                                <span className="ml-auto">
                                                                    {isExpanded ? (
                                                                        <ChevronDown className="h-3 w-3"/>
                                                                    ) : (
                                                                        <ChevronRight className="h-3 w-3"/>
                                                                    )}
                                                                </span>
                                                            </button>
                                                        </div>

                                                        {/* Child items */}
                                                        {isExpanded && (
                                                            <div className="ml-6 space-y-1 mt-1">
                                                                {item.children!.map((child) => {
                                                                    const isChildActive = location.pathname === child.href;
                                                                    const hasGrandchildren = child.children && child.children.length > 0;
                                                                    const childKey = getUniqueKey(child, item);
                                                                    const isChildExpanded = openNavItems.includes(childKey);

                                                                    return (
                                                                        <div key={child.href} className="space-y-1">
                                                                            {hasGrandchildren ? (
                                                                                <div>
                                                                                    <div className="flex items-center">
                                                                                        <button
                                                                                            onClick={() => toggleNavItem(childKey)}
                                                                                            className={cn(
                                                                                                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors flex-1 text-left",
                                                                                                isChildActive
                                                                                                    ? "bg-brand-500 text-white"
                                                                                                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                            )}
                                                                                        >
                                                                                            <child.icon
                                                                                                className="h-4 w-4"/>
                                                                                            <span
                                                                                                className="truncate">{child.label}</span>
                                                                                            <span className="ml-auto">
                                                                                                {isChildExpanded ? (
                                                                                                    <ChevronDown
                                                                                                        className="h-3 w-3"/>
                                                                                                ) : (
                                                                                                    <ChevronRight
                                                                                                        className="h-3 w-3"/>
                                                                                                )}
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                    {/* Grandchildren */}
                                                                                    {isChildExpanded && (
                                                                                        <div
                                                                                            className="ml-6 space-y-1 mt-1">
                                                                                            {child.children!.map((grandchild) => {
                                                                                                const isGrandchildActive = location.pathname === grandchild.href;
                                                                                                const hasGreatGrandchildren = grandchild.children && grandchild.children.length > 0;
                                                                                                const grandchildKey = getUniqueKey(grandchild, child, item);
                                                                                                const isGrandchildExpanded = openNavItems.includes(grandchildKey);

                                                                                                return (
                                                                                                    <div
                                                                                                        key={grandchild.href}
                                                                                                        className="space-y-1">
                                                                                                        {hasGreatGrandchildren ? (
                                                                                                            <div>
                                                                                                                <div
                                                                                                                    className="flex items-center">
                                                                                                                    <button
                                                                                                                        onClick={() => toggleNavItem(grandchildKey)}
                                                                                                                        className={cn(
                                                                                                                            "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors flex-1 text-left",
                                                                                                                            isGrandchildActive
                                                                                                                                ? "bg-brand-500 text-white"
                                                                                                                                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                        )}
                                                                                                                    >
                                                                                                                        <grandchild.icon
                                                                                                                            className="h-4 w-4"/>
                                                                                                                        <span
                                                                                                                            className="truncate">{grandchild.label}</span>
                                                                                                                        <span
                                                                                                                            className="ml-auto">
                                                                                                                            {isGrandchildExpanded ? (
                                                                                                                                <ChevronDown
                                                                                                                                    className="h-3 w-3"/>
                                                                                                                            ) : (
                                                                                                                                <ChevronRight
                                                                                                                                    className="h-3 w-3"/>
                                                                                                                            )}
                                                                                                                        </span>
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                                {/* Great-grandchildren */}
                                                                                                                {isGrandchildExpanded && (
                                                                                                                    <div
                                                                                                                        className="ml-6 space-y-1 mt-1">
                                                                                                                        {grandchild.children!.map((ggchild) => {
                                                                                                                            const isGGChildActive = location.pathname === ggchild.href;
                                                                                                                            const hasGGGrandchildren = ggchild.children && ggchild.children.length > 0;
                                                                                                                            const ggchildKey = getUniqueKey(ggchild, grandchild, child, item);
                                                                                                                            const isGGChildExpanded = openNavItems.includes(ggchildKey);

                                                                                                                            return (
                                                                                                                                <div
                                                                                                                                    key={ggchild.href}
                                                                                                                                    className="space-y-1">
                                                                                                                                    {hasGGGrandchildren ? (
                                                                                                                                        <div>
                                                                                                                                            <div
                                                                                                                                                className="flex items-center">
                                                                                                                                                <button
                                                                                                                                                    onClick={() => toggleNavItem(ggchildKey)}
                                                                                                                                                    className={cn(
                                                                                                                                                        "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors flex-1 text-left",
                                                                                                                                                        isGGChildActive
                                                                                                                                                            ? "bg-brand-500 text-white"
                                                                                                                                                            : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                                                    )}
                                                                                                                                                >
                                                                                                                                                    <ggchild.icon
                                                                                                                                                        className="h-4 w-4"/>
                                                                                                                                                    <span
                                                                                                                                                        className="truncate">{ggchild.label}</span>
                                                                                                                                                    <span
                                                                                                                                                        className="ml-auto">
                                                                                                                                                        {isGGChildExpanded ? (
                                                                                                                                                            <ChevronDown
                                                                                                                                                                className="h-3 w-3"/>
                                                                                                                                                        ) : (
                                                                                                                                                            <ChevronRight
                                                                                                                                                                className="h-3 w-3"/>
                                                                                                                                                        )}
                                                                                                                                                    </span>
                                                                                                                                                </button>
                                                                                                                                            </div>
                                                                                                                                            {/* Great-great-grandchildren */}
                                                                                                                                            {isGGChildExpanded && (
                                                                                                                                                <div
                                                                                                                                                    className="ml-6 space-y-1 mt-1">
                                                                                                                                                    {ggchild.children!.map((gggchild) => {
                                                                                                                                                        const isGGGChildActive = location.pathname === gggchild.href;
                                                                                                                                                        const hasGGGGrandchildren = gggchild.children && gggchild.children.length > 0;
                                                                                                                                                        const gggchildKey = getUniqueKey(gggchild, ggchild, grandchild, child, item);
                                                                                                                                                        const isGGGChildExpanded = openNavItems.includes(gggchildKey);

                                                                                                                                                        return (
                                                                                                                                                            <div
                                                                                                                                                                key={gggchild.href}
                                                                                                                                                                className="space-y-1">
                                                                                                                                                                {hasGGGGrandchildren ? (
                                                                                                                                                                    <div>
                                                                                                                                                                        <div
                                                                                                                                                                            className="flex items-center">
                                                                                                                                                                            <button
                                                                                                                                                                                onClick={() => toggleNavItem(gggchildKey)}
                                                                                                                                                                                className={cn(
                                                                                                                                                                                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors flex-1 text-left",
                                                                                                                                                                                    isGGGChildActive
                                                                                                                                                                                        ? "bg-brand-500 text-white"
                                                                                                                                                                                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                                                                                )}
                                                                                                                                                                            >
                                                                                                                                                                                <gggchild.icon
                                                                                                                                                                                    className="h-4 w-4"/>
                                                                                                                                                                                <span
                                                                                                                                                                                    className="truncate">{gggchild.label}</span>
                                                                                                                                                                                <span
                                                                                                                                                                                    className="ml-auto">
                                                                                                                                                                                    {isGGGChildExpanded ? (
                                                                                                                                                                                        <ChevronDown
                                                                                                                                                                                            className="h-3 w-3"/>
                                                                                                                                                                                    ) : (
                                                                                                                                                                                        <ChevronRight
                                                                                                                                                                                            className="h-3 w-3"/>
                                                                                                                                                                                    )}
                                                                                                                                                                                </span>
                                                                                                                                                                            </button>
                                                                                                                                                                        </div>
                                                                                                                                                                        {/* Great-great-great-grandchildren */}
                                                                                                                                                                        {isGGGChildExpanded && (
                                                                                                                                                                            <div
                                                                                                                                                                                className="ml-6 space-y-1 mt-1">
                                                                                                                                                                                {gggchild.children!.map((ggggchild) => {
                                                                                                                                                                                    const isGGGGChildActive = location.pathname === ggggchild.href;
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Link
                                                                                                                                                                                            key={ggggchild.href}
                                                                                                                                                                                            to={ggggchild.href}
                                                                                                                                                                                            onClick={() => {
                                                                                                                                                                                                if (window.innerWidth < 1024) {
                                                                                                                                                                                                    onClose();
                                                                                                                                                                                                }
                                                                                                                                                                                            }}
                                                                                                                                                                                            className={cn(
                                                                                                                                                                                                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                                                                                                                                                                isGGGGChildActive
                                                                                                                                                                                                    ? "bg-brand-500 text-white"
                                                                                                                                                                                                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                                                                                            )}
                                                                                                                                                                                        >
                                                                                                                                                                                            <ggggchild.icon
                                                                                                                                                                                                className="h-4 w-4"/>
                                                                                                                                                                                            <span
                                                                                                                                                                                                className="truncate">{ggggchild.label}</span>
                                                                                                                                                                                        </Link>
                                                                                                                                                                                    );
                                                                                                                                                                                })}
                                                                                                                                                                            </div>
                                                                                                                                                                        )}
                                                                                                                                                                    </div>
                                                                                                                                                                ) : (
                                                                                                                                                                    <Link
                                                                                                                                                                        key={gggchild.href}
                                                                                                                                                                        to={gggchild.href}
                                                                                                                                                                        onClick={() => {
                                                                                                                                                                            if (window.innerWidth < 1024) {
                                                                                                                                                                                onClose();
                                                                                                                                                                            }
                                                                                                                                                                        }}
                                                                                                                                                                        className={cn(
                                                                                                                                                                            "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                                                                                                                                            isGGGChildActive
                                                                                                                                                                                ? "bg-brand-500 text-white"
                                                                                                                                                                                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                                                                        )}
                                                                                                                                                                    >
                                                                                                                                                                        <gggchild.icon
                                                                                                                                                                            className="h-4 w-4"/>
                                                                                                                                                                        <span
                                                                                                                                                                            className="truncate">{gggchild.label}</span>
                                                                                                                                                                    </Link>
                                                                                                                                                                )}
                                                                                                                                                            </div>
                                                                                                                                                        );
                                                                                                                                                    })}
                                                                                                                                                </div>
                                                                                                                                            )}
                                                                                                                                        </div>
                                                                                                                                    ) : (
                                                                                                                                        <Link
                                                                                                                                            to={ggchild.href}
                                                                                                                                            onClick={() => {
                                                                                                                                                if (window.innerWidth < 1024) {
                                                                                                                                                    onClose();
                                                                                                                                                }
                                                                                                                                            }}
                                                                                                                                            className={cn(
                                                                                                                                                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                                                                                                                isGGChildActive
                                                                                                                                                    ? "bg-brand-500 text-white"
                                                                                                                                                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                                            )}
                                                                                                                                        >
                                                                                                                                            <ggchild.icon
                                                                                                                                                className="h-4 w-4"/>
                                                                                                                                            <span
                                                                                                                                                className="truncate">{ggchild.label}</span>
                                                                                                                                        </Link>
                                                                                                                                    )}
                                                                                                                                </div>
                                                                                                                            );
                                                                                                                        })}
                                                                                                                    </div>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        ) : (
                                                                                                            <Link
                                                                                                                to={grandchild.href}
                                                                                                                onClick={() => {
                                                                                                                    if (window.innerWidth < 1024) {
                                                                                                                        onClose();
                                                                                                                    }
                                                                                                                }}
                                                                                                                className={cn(
                                                                                                                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                                                                                    isGrandchildActive
                                                                                                                        ? "bg-brand-500 text-white"
                                                                                                                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                                                )}
                                                                                                            >
                                                                                                                <grandchild.icon
                                                                                                                    className="h-4 w-4"/>
                                                                                                                <span
                                                                                                                    className="truncate">{grandchild.label}</span>
                                                                                                            </Link>
                                                                                                        )}
                                                                                                    </div>
                                                                                                );
                                                                                            })}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            ) : (
                                                                                <Link
                                                                                    to={child.href}
                                                                                    onClick={() => {
                                                                                        if (window.innerWidth < 1024) {
                                                                                            onClose();
                                                                                        }
                                                                                    }}
                                                                                    className={cn(
                                                                                        "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                                                        isChildActive
                                                                                            ? "bg-brand-500 text-white"
                                                                                            : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                                                    )}
                                                                                >
                                                                                    <child.icon className="h-4 w-4"/>
                                                                                    <span
                                                                                        className="truncate">{child.label}</span>
                                                                                </Link>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    /* Regular nav item */
                                                    <Link
                                                        to={item.href}
                                                        onClick={() => {
                                                            // Only close sidebar on mobile/tablet (lg breakpoint and below)
                                                            if (window.innerWidth < 1024) {
                                                                onClose();
                                                            }
                                                        }}
                                                        className={cn(
                                                            "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                            isActive
                                                                ? "bg-brand-500 text-white"
                                                                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                        )}
                                                    >
                                                        <item.icon className="h-4 w-4"/>
                                                        <span className="truncate">{item.label}</span>
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;

