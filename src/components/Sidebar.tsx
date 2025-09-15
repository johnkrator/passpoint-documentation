import React, {useState} from "react";
import {ChevronDown, ChevronRight, Home, Book, Users, BarChart3, FileText, Settings, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useLocation} from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavSection {
    title: string;
    items: {
        icon: React.ComponentType<{ className?: string }>;
        label: string;
        href: string;
        isActive?: boolean;
    }[];
}

const Sidebar = ({isOpen, onClose}: SidebarProps) => {
    const location = useLocation();
    const [openSections, setOpenSections] = useState<string[]>(["GUIDES", "GETTING STARTED"]);

    const toggleSection = (section: string) => {
        setOpenSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const navSections: NavSection[] = [
        {
            title: "GUIDES",
            items: [
                {icon: BarChart3, label: "API Rate Limits", href: "/api-rate-limits"},
                {icon: Book, label: "Quick Guides", href: "/quick-guides"},
                {icon: FileText, label: "Transaction Dynamics on Passpoint", href: "/transaction-dynamics"},
            ]
        },
        {
            title: "GETTING STARTED",
            items: [
                {icon: Home, label: "Homepage", href: "/"},
                {icon: FileText, label: "Introduction", href: "/introduction"},
                {icon: Settings, label: "API Integrations", href: "/api-integrations"},
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
                    "h-screen w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800",
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
                                        return (
                                            <a
                                                key={item.href}
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                                    isActive
                                                        ? "bg-brand-500 text-white"
                                                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                                )}
                                            >
                                                <item.icon className="h-4 w-4"/>
                                                <span className="truncate">{item.label}</span>
                                            </a>
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