import { Layout } from '@/components/layout/Layout';
import { Header } from '@/components/layout/Header';
import { Plus, Search, Edit, Trash, ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';

// Sample user data with South Indian names from Andhra Pradesh
const userData = [
  { id: 1, username: 'keshav.reddy', fullName: 'Keshav Reddy', status: 'Active', group: 'Admin', lastLogin: '2023-05-01 10:23:45' },
  { id: 2, username: 'venkat.naidu', fullName: 'Venkat Naidu', status: 'Active', group: 'Staff', lastLogin: '2023-05-02 08:15:32' },
  { id: 3, username: 'suresh.babu', fullName: 'Suresh Babu', status: 'Inactive', group: 'Guest', lastLogin: '2023-04-28 14:45:12' },
  { id: 4, username: 'lakshmi.devi', fullName: 'Lakshmi Devi', status: 'Active', group: 'Staff', lastLogin: '2023-05-02 16:30:22' },
  { id: 5, username: 'ravi.teja', fullName: 'Ravi Teja', status: 'Locked', group: 'Guest', lastLogin: '2023-04-15 09:10:05' },
  { id: 6, username: 'ramya.krishna', fullName: 'Ramya Krishna', status: 'Active', group: 'Admin', lastLogin: '2023-05-01 17:22:18' },
  { id: 7, username: 'prasad.varma', fullName: 'Prasad Varma', status: 'Active', group: 'Staff', lastLogin: '2023-05-02 12:05:33' },
  { id: 8, username: 'sita.anand', fullName: 'Sita Anand', status: 'Inactive', group: 'Guest', lastLogin: '2023-04-20 11:18:45' }
];

const UsersPage = () => {
  const [sortField, setSortField] = useState('username');
  const [sortDirection, setSortDirection] = useState('asc');
  
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const sortedUsers = [...userData].sort((a, b) => {
    // @ts-ignore - We're accessing dynamic properties
    const aValue = a[sortField];
    // @ts-ignore - We're accessing dynamic properties
    const bValue = b[sortField];
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
  };

  return (
    <Layout activeItem="users">
      <Header 
        title="User Management" 
        subtitle="View and manage user accounts" 
      />
      
      <div className="bg-white rounded-lg border border-blue-100 shadow-sm">
        <div className="p-4 border-b border-blue-100">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-400" />
              <input
                type="search"
                placeholder="Search users..."
                className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 pl-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <select className="rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <option value="all">All Groups</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="guest">Guest</option>
              </select>
              <select className="rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="locked">Locked</option>
              </select>
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                <Plus size={16} />
                <span>Add User</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-100 bg-blue-50">
                <th className="text-left p-4 font-medium text-blue-700 text-sm cursor-pointer" onClick={() => handleSort('username')}>
                  <div className="flex items-center gap-1">
                    Username
                    {getSortIcon('username')}
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-blue-700 text-sm cursor-pointer" onClick={() => handleSort('fullName')}>
                  <div className="flex items-center gap-1">
                    Full Name
                    {getSortIcon('fullName')}
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-blue-700 text-sm cursor-pointer" onClick={() => handleSort('status')}>
                  <div className="flex items-center gap-1">
                    Status
                    {getSortIcon('status')}
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-blue-700 text-sm cursor-pointer" onClick={() => handleSort('group')}>
                  <div className="flex items-center gap-1">
                    Group
                    {getSortIcon('group')}
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-blue-700 text-sm cursor-pointer" onClick={() => handleSort('lastLogin')}>
                  <div className="flex items-center gap-1">
                    Last Login
                    {getSortIcon('lastLogin')}
                  </div>
                </th>
                <th className="text-right p-4 font-medium text-blue-700 text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr key={user.id} className="border-b border-blue-50 hover:bg-blue-50/50">
                  <td className="p-4">
                    <div className="font-medium text-blue-800">{user.username}</div>
                  </td>
                  <td className="p-4 text-blue-700">{user.fullName}</td>
                  <td className="p-4">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      user.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </div>
                  </td>
                  <td className="p-4 text-blue-700">{user.group}</td>
                  <td className="p-4 text-blue-700">{user.lastLogin}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 hover:bg-blue-100 rounded">
                        <Edit size={16} className="text-blue-600" />
                      </button>
                      <button className="p-1 hover:bg-red-100 rounded">
                        <Trash size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-blue-100 flex items-center justify-between">
          <div className="text-sm text-blue-600">
            Showing <strong>1-8</strong> of <strong>8</strong> users
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 border border-blue-200 rounded hover:bg-blue-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">
              1
            </button>
            <button className="px-2 py-1 border border-blue-200 rounded hover:bg-blue-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;
