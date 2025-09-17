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
    Shield
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

    const getUniqueKey = (item: NavItem, parentItem?: NavItem, grandparentItem?: NavItem) => {
        // Build a unique key based on the full hierarchy path
        const parts = [];
        if (grandparentItem) parts.push(grandparentItem.label);
        if (parentItem) parts.push(parentItem.label);
        parts.push(item.label);
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
                                                    icon: Globe,
                                                    label: "Get Momo Payout Network",
                                                    href: "/payout/bank/local/get-network"
                                                },
                                                {
                                                    icon: Globe,
                                                    label: "Get Momo Payout Network",
                                                    href: "/payout/bank/local/get-payout-network"
                                                },
                                                {
                                                    icon: CheckCircle,
                                                    label: "Validate Momo Msisdn",
                                                    href: "/payout/bank/local/validate-msisdn"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "Momo Transfer",
                                                    href: "/payout/bank/local/transfer"
                                                }
                                            ]
                                        },
                                        {
                                            icon: Globe,
                                            label: "Foreign",
                                            href: "/payout/bank/foreign",
                                            children: [
                                                {
                                                    icon: Globe,
                                                    label: "Get Momo Payout Network",
                                                    href: "/payout/bank/foreign/get-network"
                                                },
                                                {
                                                    icon: Globe,
                                                    label: "Get Momo Payout Network",
                                                    href: "/payout/bank/foreign/get-payout-network"
                                                },
                                                {
                                                    icon: CheckCircle,
                                                    label: "Validate Momo Msisdn",
                                                    href: "/payout/bank/foreign/validate-msisdn"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "Momo Transfer",
                                                    href: "/payout/bank/foreign/transfer"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    icon: TrendingUp,
                                    label: "Rate",
                                    href: "/payout/rate",
                                    children: [
                                        {
                                            icon: DollarSign,
                                            label: "Get Transfer Fee",
                                            href: "/payout/rate/get-transfer-fee"
                                        },
                                        {
                                            icon: TrendingUp,
                                            label: "Get Exchange Rate",
                                            href: "/payout/rate/get-exchange-rate"
                                        },
                                        {
                                            icon: Webhook,
                                            label: "Funds Transfer Callback Sample",
                                            href: "/payout/rate/funds-transfer-callback"
                                        }
                                    ]
                                },
                                {
                                    icon: History,
                                    label: "Report",
                                    href: "/payout/report",
                                    children: [
                                        {
                                            icon: History,
                                            label: "Transaction History - Payout - All Currencies",
                                            href: "/payout/report/transaction-history-all"
                                        },
                                        {
                                            icon: History,
                                            label: "Transaction History - Payout - NGN",
                                            href: "/payout/report/transaction-history-ngn"
                                        },
                                        {
                                            icon: History,
                                            label: "Transaction History - Payout - All Currencies",
                                            href: "/payout/report/transaction-history-all-2"
                                        },
                                        {
                                            icon: History,
                                            label: "Transaction History - Payout - NGN - Network",
                                            href: "/payout/report/transaction-history-ngn-network"
                                        }
                                    ]
                                },
                                {
                                    icon: RefreshCw,
                                    label: "Convert Funds",
                                    href: "/payout/convert-funds"
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
                                                    icon: Building2,
                                                    label: "Get Banks",
                                                    href: "/collection/bank/open-banking/get-banks"
                                                },
                                                {
                                                    icon: Send,
                                                    label: "Request Payment - Foreign",
                                                    href: "/collection/bank/open-banking/request-payment-foreign"
                                                },
                                                {
                                                    icon: CreditCard,
                                                    label: "Request Payment - Foreign [with Tokenization]",
                                                    href: "/collection/bank/open-banking/request-payment-foreign-tokenization"
                                                },
                                                {
                                                    icon: CreditCard,
                                                    label: "Request Payment - Foreign [with Tokenization - New Payer]",
                                                    href: "/collection/bank/open-banking/request-payment-foreign-tokenization-new-payer"
                                                }
                                            ]
                                        },
                                        {
                                            icon: Building2,
                                            label: "Direct bank options",
                                            href: "/collection/bank/direct",
                                            children: [
                                                {
                                                    icon: DollarSign,
                                                    label: "Get Collection Currency",
                                                    href: "/collection/bank/direct/get-collection-currency"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Generate NGN Static Virtual Account",
                                                    href: "/collection/bank/direct/generate-ngn-static-virtual-account"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Generate USD Virtual Account - Individual",
                                                    href: "/collection/bank/direct/generate-usd-virtual-account-individual"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Generate USD Virtual Account - Business",
                                                    href: "/collection/bank/direct/generate-usd-virtual-account-business"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "List Virtual Accounts - NGN - Paginated",
                                                    href: "/collection/bank/direct/list-virtual-accounts-ngn-paginated"
                                                },
                                                {
                                                    icon: BarChart3,
                                                    label: "Get Virtual Account",
                                                    href: "/collection/bank/direct/get-virtual-account"
                                                }
                                            ]
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
                                    label: "Wallet Credit Callback Sample",
                                    href: "/collection/wallet-credit-callback"
                                },
                                {
                                    icon: BarChart3,
                                    label: "List Countries",
                                    href: "/collection/list-countries"
                                },
                                {
                                    icon: BarChart3,
                                    label: "Transfer Status",
                                    href: "/collection/transfer-status"
                                },
                                {
                                    icon: BarChart3,
                                    label: "Payment Status Report",
                                    href: "/collection/payment-status"
                                },
                                {
                                    icon: Send,
                                    label: "Resend Single Webhook",
                                    href: "/collection/resend-single-webhook"
                                },
                                {
                                    icon: Send,
                                    label: "Resend Bulk Webhook",
                                    href: "/collection/resend-bulk-webhook"
                                },
                                {
                                    icon: CheckCircle,
                                    label: "Confirm Momo Payment",
                                    href: "/collection/confirm-momo-payment"
                                }
                            ]
                        }
                    ]
                },
                {icon: Settings, label: "Global Callback Setup", href: "/global-callback-setup"},
                {icon: FileText, label: "Virtual Card v2", href: "/virtual-card-v2"},
                {icon: BarChart3, label: "Card Acquiring", href: "/card-acquiring"},
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
                    "h-screen w-96 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800", // Increased width from w-72 to w-96
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
                <nav className="px-4 pb-4 space-y-2 h-full overflow-y-auto">
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
                                                                                                                            return (
                                                                                                                                <Link
                                                                                                                                    key={ggchild.href}
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