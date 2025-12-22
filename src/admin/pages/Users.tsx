import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Users as UsersIcon } from 'lucide-react';
import DataTable, { type Column } from '@/admin/components/DataTable';
import UserFormModal from '@/admin/components/UserFormModal';
import DeleteConfirmModal from '@/admin/components/DeleteConfirmModal';
import { type User } from '@/admin/types';

const Users = () => {
    const [users, setUsers] = useState<User[]>([
        {
            _id: '1',
            email: 'admin@passpoint.com',
            role: 'admin',
            isActive: true,
            createdAt: new Date('2024-01-15'),
            updatedAt: new Date('2024-01-15'),
        },
        {
            _id: '2',
            email: 'editor@passpoint.com',
            role: 'editor',
            isActive: true,
            createdAt: new Date('2024-02-20'),
            updatedAt: new Date('2024-02-20'),
        },
    ]);

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

    const columns: Column<User>[] = [
        { header: 'Email', accessor: 'email' },
        {
            header: 'Role',
            accessor: (user) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.role === 'admin'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                        : user.role === 'editor'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                }`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
            ),
        },
        {
            header: 'Status',
            accessor: (user) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.isActive ? 'bg-brand/10 text-brand' : 'bg-muted text-muted-foreground'}`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                </span>
            ),
        },
    ];

    const handleAdd = () => {
        setModalMode('create');
        setSelectedUser(null);
        setIsFormModalOpen(true);
    };

    const handleEdit = (user: User) => {
        setModalMode('edit');
        setSelectedUser(user);
        setIsFormModalOpen(true);
    };

    const handleDeleteClick = (user: User) => {
        setSelectedUser(user);
        setIsDeleteModalOpen(true);
    };

    const handleFormSubmit = (data: Partial<User> & { password?: string }) => {
        if (modalMode === 'create') {
            const newUser: User = {
                _id: String(Date.now()),
                email: data.email!,
                role: data.role!,
                isActive: data.isActive!,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            setUsers([...users, newUser]);
        } else if (selectedUser) {
            setUsers(users.map(u => 
                u._id === selectedUser._id 
                    ? { ...u, ...data, updatedAt: new Date() }
                    : u
            ));
        }
    };

    const handleDeleteConfirm = () => {
        if (selectedUser) {
            setUsers(users.filter((u) => u._id !== selectedUser._id));
            setIsDeleteModalOpen(false);
            setSelectedUser(null);
        }
    };

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold text-foreground flex items-center gap-2'>
                        <UsersIcon className='h-6 w-6 text-brand' />
                        Users
                    </h2>
                    <p className='text-muted-foreground mt-1'>
                        Manage admin users and permissions
                    </p>
                </div>
                <Button className='gap-2' onClick={handleAdd}>
                    <Plus className='h-4 w-4' />
                    Add User
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={users}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
            />

            <UserFormModal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                onSubmit={handleFormSubmit}
                user={selectedUser}
                mode={modalMode}
            />

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title='Delete User'
                message={`Are you sure you want to delete user "${selectedUser?.email}"?`}
            />
        </div>
    );
};

export default Users;
