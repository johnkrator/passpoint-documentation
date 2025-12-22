import React from 'react';
import {
    LayoutDashboard,
    FolderTree,
    FileText,
    Code,
    Users,
    Settings,
    LogOut,
    Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
    const location = useLocation();

    const navItems: NavItem[] = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
        { icon: FolderTree, label: 'Sections', href: '/admin/sections' },
        { icon: FileText, label: 'Pages', href: '/admin/pages' },
        { icon: Code, label: 'API Endpoints', href: '/admin/endpoints' },
        { icon: Users, label: 'Users', href: '/admin/users' },
        { icon: Settings, label: 'Settings', href: '/admin/settings' },
    ];

    const isActive = (href: string) => {
        if (href === '/admin') {
            return location.pathname === href;
        }
        return location.pathname.startsWith(href);
    };

    return (
        <>
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black/50 z-40 lg:hidden'
                    onClick={onClose}
                />
            )}

            <aside
                className={cn(
                    'fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col',
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                {/* Header */}
                <div className='h-16 border-b border-border flex items-center justify-between px-6 flex-shrink-0'>
                    <Link to='/admin' className='flex items-center gap-2'>
                        <div className='w-8 h-8 bg-brand rounded-md flex items-center justify-center'>
                            <span className='text-white font-bold text-sm'>PP</span>
                        </div>
                        <span className='font-semibold text-foreground'>Admin Panel</span>
                    </Link>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='lg:hidden'
                        onClick={onClose}
                    >
                        <Menu className='h-5 w-5' />
                    </Button>
                </div>

                {/* Navigation - Scrollable */}
                <nav className='flex-1 overflow-y-auto p-4 space-y-1'>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => {
                                    if (window.innerWidth < 1024) {
                                        onClose();
                                    }
                                }}
                                className={cn(
                                    'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                                    active
                                        ? 'bg-brand text-white'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                )}
                            >
                                <Icon className='h-5 w-5 flex-shrink-0' />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer - Fixed at bottom */}
                <div className='flex-shrink-0 p-4 border-t border-border'>
                    <Button
                        variant='outline'
                        className='w-full justify-start gap-3'
                        onClick={() => {
                            console.log('Logout clicked');
                        }}
                    >
                        <LogOut className='h-5 w-5' />
                        <span>Logout</span>
                    </Button>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
