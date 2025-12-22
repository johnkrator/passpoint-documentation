import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, FileText } from 'lucide-react';
import DataTable, { type Column } from '@/admin/components/DataTable';
import { type Page } from '@/admin/types';

const Pages = () => {
    const [pages, setPages] = useState<Page[]>([
        {
            _id: '1',
            sectionId: '1',
            title: 'Introduction',
            slug: 'introduction',
            description: 'Get started with Passpoint API',
            content: [],
            order: 1,
            isPublished: true,
            metaKeywords: ['api', 'intro'],
            metaAliases: ['start'],
            createdAt: new Date('2024-01-12'),
            updatedAt: new Date('2024-01-12'),
        },
    ]);

    const columns: Column<Page>[] = [
        { header: 'Title', accessor: 'title' },
        { header: 'Slug', accessor: 'slug', className: 'text-muted-foreground' },
        {
            header: 'Description',
            accessor: (page) => (
                <span className='text-sm text-muted-foreground truncate max-w-xs block'>
                    {page.description}
                </span>
            ),
        },
        { header: 'Order', accessor: 'order' },
        {
            header: 'Status',
            accessor: (page) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${page.isPublished ? 'bg-brand/10 text-brand' : 'bg-muted text-muted-foreground'}`}>
                    {page.isPublished ? 'Published' : 'Draft'}
                </span>
            ),
        },
    ];

    const handleEdit = (page: Page) => {
        console.log('Edit page:', page);
    };

    const handleDelete = (page: Page) => {
        if (confirm(`Are you sure you want to delete "${page.title}"?`)) {
            setPages(pages.filter((p) => p._id !== page._id));
        }
    };

    const handleView = (page: Page) => {
        console.log('View page:', page);
    };

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold text-foreground flex items-center gap-2'>
                        <FileText className='h-6 w-6 text-brand' />
                        Pages
                    </h2>
                    <p className='text-muted-foreground mt-1'>
                        Manage documentation pages and content
                    </p>
                </div>
                <Button className='gap-2'>
                    <Plus className='h-4 w-4' />
                    Add Page
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={pages}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
            />
        </div>
    );
};

export default Pages;
