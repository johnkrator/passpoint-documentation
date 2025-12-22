import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Users as UsersIcon } from 'lucide-react';
import DataTable, { type Column } from '@/admin/components/DataTable';
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

    const handleEdit = (user: User) => {
        console.log('Edit user:', user);
    };

    const handleDelete = (user: User) => {
        if (confirm(`Are you sure you want to delete user "${user.email}"?`)) {
            setUsers(users.filter((u) => u._id !== user._id));
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
                <Button className='gap-2'>
                    <Plus className='h-4 w-4' />
                    Add User
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={users}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Users;
