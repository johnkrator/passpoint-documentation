import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Code } from 'lucide-react';
import DataTable, { type Column } from '@/admin/components/DataTable';
import { type ApiEndpoint } from '@/admin/types';

const Endpoints = () => {
    const [endpoints, setEndpoints] = useState<ApiEndpoint[]>([
        {
            _id: '1',
            pageId: '1',
            title: 'Get Banks',
            method: 'GET',
            path: '/paypass/ft-app/bank-list/NG',
            baseUrlType: 'dev',
            description: 'Lists all financial institutions',
            headers: [],
            parameters: [],
            codeSamples: [],
            order: 1,
            createdAt: new Date('2024-01-15'),
            updatedAt: new Date('2024-01-15'),
        },
    ]);

    const columns: Column<ApiEndpoint>[] = [
        { header: 'Title', accessor: 'title' },
        {
            header: 'Method',
            accessor: (endpoint) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    endpoint.method === 'GET'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : endpoint.method === 'POST'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : endpoint.method === 'PUT'
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                        : endpoint.method === 'DELETE'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                }`}>
                    {endpoint.method}
                </span>
            ),
        },
        {
            header: 'Path',
            accessor: (endpoint) => (
                <code className='text-xs bg-muted px-2 py-1 rounded'>{endpoint.path}</code>
            ),
        },
        {
            header: 'Environment',
            accessor: (endpoint) => (
                <span className='text-xs text-muted-foreground capitalize'>{endpoint.baseUrlType}</span>
            ),
        },
    ];

    const handleEdit = (endpoint: ApiEndpoint) => {
        console.log('Edit endpoint:', endpoint);
    };

    const handleDelete = (endpoint: ApiEndpoint) => {
        if (confirm(`Are you sure you want to delete "${endpoint.title}"?`)) {
            setEndpoints(endpoints.filter((e) => e._id !== endpoint._id));
        }
    };

    const handleView = (endpoint: ApiEndpoint) => {
        console.log('View endpoint:', endpoint);
    };

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold text-foreground flex items-center gap-2'>
                        <Code className='h-6 w-6 text-brand' />
                        API Endpoints
                    </h2>
                    <p className='text-muted-foreground mt-1'>
                        Manage API endpoint documentation
                    </p>
                </div>
                <Button className='gap-2'>
                    <Plus className='h-4 w-4' />
                    Add Endpoint
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={endpoints}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
            />
        </div>
    );
};

export default Endpoints;
