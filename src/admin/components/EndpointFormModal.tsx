import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Button } from '@/components/ui/button';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import { type ApiEndpoint } from '@/admin/types';

interface EndpointFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (endpoint: Partial<ApiEndpoint>) => void;
    endpoint?: ApiEndpoint | null;
    mode: 'create' | 'edit';
}

const EndpointFormModal = ({ isOpen, onClose, onSubmit, endpoint, mode }: EndpointFormModalProps) => {
    const [formData, setFormData] = useState({
        pageId: '',
        title: '',
        method: 'GET' as 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        path: '',
        baseUrlType: 'dev' as 'dev' | 'production',
        description: '',
        order: 1,
    });

    useEffect(() => {
        if (endpoint && mode === 'edit') {
            setFormData({
                pageId: endpoint.pageId,
                title: endpoint.title,
                method: endpoint.method,
                path: endpoint.path,
                baseUrlType: endpoint.baseUrlType,
                description: endpoint.description,
                order: endpoint.order,
            });
        } else {
            setFormData({
                pageId: '',
                title: '',
                method: 'GET',
                path: '',
                baseUrlType: 'dev',
                description: '',
                order: 1,
            });
        }
    }, [endpoint, mode, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={mode === 'create' ? 'Add New Endpoint' : 'Edit Endpoint'}
            size='lg'
        >
            <form onSubmit={handleSubmit} className='space-y-4'>
                <FormInput
                    label='Page ID'
                    value={formData.pageId}
                    onChange={(e) => setFormData({ ...formData, pageId: e.target.value })}
                    required
                    placeholder='1'
                    helperText='ID of the parent page'
                />

                <FormInput
                    label='Title'
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder='Get Banks'
                />

                <FormSelect
                    label='HTTP Method'
                    value={formData.method}
                    onChange={(e) => setFormData({ ...formData, method: e.target.value as typeof formData.method })}
                    required
                    options={[
                        { value: 'GET', label: 'GET' },
                        { value: 'POST', label: 'POST' },
                        { value: 'PUT', label: 'PUT' },
                        { value: 'DELETE', label: 'DELETE' },
                        { value: 'PATCH', label: 'PATCH' },
                    ]}
                />

                <FormInput
                    label='Path'
                    value={formData.path}
                    onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                    required
                    placeholder='/paypass/ft-app/bank-list/NG'
                    helperText='API endpoint path'
                />

                <FormSelect
                    label='Environment'
                    value={formData.baseUrlType}
                    onChange={(e) => setFormData({ ...formData, baseUrlType: e.target.value as typeof formData.baseUrlType })}
                    required
                    options={[
                        { value: 'dev', label: 'Development' },
                        { value: 'production', label: 'Production' },
                    ]}
                />

                <FormTextarea
                    label='Description'
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    placeholder='Lists all financial institutions'
                    rows={3}
                />

                <FormInput
                    label='Order'
                    type='number'
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    required
                    min={1}
                />

                <div className='flex justify-end gap-3 pt-4 border-t border-border'>
                    <Button type='button' variant='outline' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type='submit'>
                        {mode === 'create' ? 'Create Endpoint' : 'Save Changes'}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default EndpointFormModal;
