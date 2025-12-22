import React from 'react';
import {
    FolderTree,
    FileText,
    Code,
    Users,
    TrendingUp,
    Activity,
} from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: React.ComponentType<{ className?: string }>;
    trend?: string;
}

const StatsCard = ({ title, value, icon: Icon, trend }: StatsCardProps) => (
    <div className='bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow'>
        <div className='flex items-center justify-between'>
            <div className='flex-1'>
                <p className='text-sm text-muted-foreground'>{title}</p>
                <p className='text-2xl md:text-3xl font-semibold mt-2'>{value}</p>
                {trend && (
                    <p className='text-sm text-brand mt-1 flex items-center gap-1'>
                        <TrendingUp className='h-3 w-3' />
                        {trend}
                    </p>
                )}
            </div>
            <div className='w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Icon className='h-6 w-6 text-brand' />
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    const stats = [
        { title: 'Total Sections', value: 6, icon: FolderTree, trend: '+2 this month' },
        { title: 'Total Pages', value: 94, icon: FileText, trend: '+12 this month' },
        { title: 'API Endpoints', value: 78, icon: Code, trend: '+8 this month' },
        { title: 'Active Users', value: 3, icon: Users },
    ];

    return (
        <div className='space-y-6 md:space-y-8'>
            <div>
                <h2 className='text-2xl md:text-3xl font-semibold text-foreground'>Dashboard</h2>
                <p className='text-muted-foreground mt-1 text-sm md:text-base'>
                    Overview of your documentation platform
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
                <div className='bg-card border border-border rounded-lg p-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <h3 className='text-lg font-semibold'>Recent Activity</h3>
                        <Activity className='h-5 w-5 text-muted-foreground' />
                    </div>
                    <div className='space-y-4'>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0' />
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm text-foreground break-words'>
                                    New page created: "Virtual Card API"
                                </p>
                                <p className='text-xs text-muted-foreground mt-1'>2 hours ago</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0' />
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm text-foreground break-words'>
                                    Section updated: "API Documentation"
                                </p>
                                <p className='text-xs text-muted-foreground mt-1'>5 hours ago</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0' />
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm text-foreground break-words'>
                                    Endpoint added: "Get Banks"
                                </p>
                                <p className='text-xs text-muted-foreground mt-1'>1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-card border border-border rounded-lg p-6'>
                    <h3 className='text-lg font-semibold mb-4'>Quick Actions</h3>
                    <div className='space-y-2'>
                        <button className='w-full text-left px-4 py-3 bg-brand/10 hover:bg-brand/20 rounded-md transition-colors'>
                            <p className='text-sm font-medium text-foreground'>Add New Section</p>
                            <p className='text-xs text-muted-foreground mt-1'>
                                Create a new documentation section
                            </p>
                        </button>
                        <button className='w-full text-left px-4 py-3 bg-brand/10 hover:bg-brand/20 rounded-md transition-colors'>
                            <p className='text-sm font-medium text-foreground'>Add New Page</p>
                            <p className='text-xs text-muted-foreground mt-1'>
                                Create a new documentation page
                            </p>
                        </button>
                        <button className='w-full text-left px-4 py-3 bg-brand/10 hover:bg-brand/20 rounded-md transition-colors'>
                            <p className='text-sm font-medium text-foreground'>Add API Endpoint</p>
                            <p className='text-xs text-muted-foreground mt-1'>
                                Document a new API endpoint
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
