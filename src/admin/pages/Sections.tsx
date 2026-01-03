import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, FolderTree } from 'lucide-react';
import DataTable, { type Column } from '@/admin/components/DataTable';
import SectionFormModal from '@/admin/components/SectionFormModal';
import DeleteConfirmModal from '@/admin/components/DeleteConfirmModal';
import { type Section } from '@/admin/types';

const Sections = () => {
    const [sections, setSections] = useState<Section[]>([
        {
            _id: '1',
            title: 'Getting Started',
            slug: 'getting-started',
            icon: 'Home',
            order: 1,
            parentId: null,
            isVisible: true,
            children: [],
            createdAt: new Date('2024-01-10'),
            updatedAt: new Date('2024-01-10'),
        },
        {
            _id: '2',
            title: 'API Documentation',
            slug: 'api-documentation',
            icon: 'Book',
            order: 2,
            parentId: null,
            isVisible: true,
            children: [],
            createdAt: new Date('2024-01-10'),
            updatedAt: new Date('2024-01-10'),
        },
    ]);

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState<Section | null>(null);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

    const columns: Column<Section>[] = [
        { header: 'Title', accessor: 'title' },
        { header: 'Slug', accessor: 'slug', className: 'text-muted-foreground' },
        { header: 'Icon', accessor: 'icon' },
        { header: 'Order', accessor: 'order' },
        {
            header: 'Status',
            accessor: (section) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${section.isVisible ? 'bg-brand/10 text-brand' : 'bg-muted text-muted-foreground'}`}>
                    {section.isVisible ? 'Visible' : 'Hidden'}
                </span>
            ),
        },
    ];

    const handleAdd = () => {
        setModalMode('create');
        setSelectedSection(null);
        setIsFormModalOpen(true);
    };

    const handleEdit = (section: Section) => {
        setModalMode('edit');
        setSelectedSection(section);
        setIsFormModalOpen(true);
    };

    const handleDeleteClick = (section: Section) => {
        setSelectedSection(section);
        setIsDeleteModalOpen(true);
    };

    const handleFormSubmit = (data: Partial<Section>) => {
        if (modalMode === 'create') {
            const newSection: Section = {
                _id: String(Date.now()),
                ...data as any,
                parentId: null,
                children: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            setSections([...sections, newSection]);
        } else if (selectedSection) {
            setSections(sections.map(s => 
                s._id === selectedSection._id 
                    ? { ...s, ...data, updatedAt: new Date() }
                    : s
            ));
        }
    };

    const handleDeleteConfirm = () => {
        if (selectedSection) {
            setSections(sections.filter((s) => s._id !== selectedSection._id));
            setIsDeleteModalOpen(false);
            setSelectedSection(null);
        }
    };

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold text-foreground flex items-center gap-2'>
                        <FolderTree className='h-6 w-6 text-brand' />
                        Sections
                    </h2>
                    <p className='text-muted-foreground mt-1'>
                        Manage documentation sections and navigation structure
                    </p>
                </div>
                <Button className='gap-2' onClick={handleAdd}>
                    <Plus className='h-4 w-4' />
                    Add Section
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={sections}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
            />

            <SectionFormModal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                onSubmit={handleFormSubmit}
                section={selectedSection}
                mode={modalMode}
            />

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title='Delete Section'
                message={`Are you sure you want to delete "${selectedSection?.title}"?`}
            />
        </div>
    );
};

export default Sections;
