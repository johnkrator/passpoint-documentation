import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, FileText } from 'lucide-react';
import DataTable, { type Column } from '@/admin/components/DataTable';
import PageFormModal from '@/admin/components/PageFormModal';
import DeleteConfirmModal from '@/admin/components/DeleteConfirmModal';
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

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState<Page | null>(null);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

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

    const handleAdd = () => {
        setModalMode('create');
        setSelectedPage(null);
        setIsFormModalOpen(true);
    };

    const handleEdit = (page: Page) => {
        setModalMode('edit');
        setSelectedPage(page);
        setIsFormModalOpen(true);
    };

    const handleDeleteClick = (page: Page) => {
        setSelectedPage(page);
        setIsDeleteModalOpen(true);
    };

    const handleView = (page: Page) => {
        console.log('View page:', page);
    };

    const handleFormSubmit = (data: Partial<Page>) => {
        if (modalMode === 'create') {
            const newPage: Page = {
                _id: String(Date.now()),
                ...data as any,
                content: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            setPages([...pages, newPage]);
        } else if (selectedPage) {
            setPages(pages.map(p => 
                p._id === selectedPage._id 
                    ? { ...p, ...data, updatedAt: new Date() }
                    : p
            ));
        }
    };

    const handleDeleteConfirm = () => {
        if (selectedPage) {
            setPages(pages.filter((p) => p._id !== selectedPage._id));
            setIsDeleteModalOpen(false);
            setSelectedPage(null);
        }
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
                <Button className='gap-2' onClick={handleAdd}>
                    <Plus className='h-4 w-4' />
                    Add Page
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={pages}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
                onView={handleView}
            />

            <PageFormModal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                onSubmit={handleFormSubmit}
                page={selectedPage}
                mode={modalMode}
            />

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title='Delete Page'
                message={`Are you sure you want to delete "${selectedPage?.title}"?`}
            />
        </div>
    );
};

export default Pages;
