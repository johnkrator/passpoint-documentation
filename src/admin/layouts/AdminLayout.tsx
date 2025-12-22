import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/admin/components/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='min-h-screen bg-background'>
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className='lg:pl-64'>
                <header className='h-16 border-b border-border bg-card sticky top-0 z-30 flex items-center px-4 lg:px-6'>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='lg:hidden mr-2'
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className='h-5 w-5' />
                    </Button>
                    <div className='flex-1 flex items-center justify-between'>
                        <div>
                            <h1 className='text-lg font-semibold text-foreground'>
                                Passpoint Documentation Admin
                            </h1>
                        </div>
                    </div>
                </header>

                {/* Centered main content with max-width and responsive padding */}
                <main className='w-full'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
