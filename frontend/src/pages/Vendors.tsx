import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

interface Vendor {
  id: number;
  name: string;
  category: string;
  contact: string;
  gstNumber: string;
  status: 'Active' | 'Pending' | 'Rejected';
}

const dummyVendors: Vendor[] = [
  { id: 1, name: 'TechCorp Supplies', category: 'IT Equipment', contact: 'tech@techcorp.com', gstNumber: '29AABCU9603R1ZM', status: 'Active' },
  { id: 2, name: 'OfficePro Ltd', category: 'Office Supplies', contact: 'info@officepro.com', gstNumber: '27AADCB2230M1ZT', status: 'Active' },
  { id: 3, name: 'BuildRight Materials', category: 'Construction', contact: 'sales@buildright.in', gstNumber: '06BZAHM6385P6Z2', status: 'Pending' },
  { id: 4, name: 'CleanWave Services', category: 'Janitorial', contact: 'hello@cleanwave.com', gstNumber: '33AAGFF2194Q1ZX', status: 'Active' },
  { id: 5, name: 'FuelMax Energy', category: 'Fuel & Utilities', contact: 'ops@fuelmax.com', gstNumber: '19AAECI1681G1ZN', status: 'Rejected' },
  { id: 6, name: 'SafeGuard Security', category: 'Security', contact: 'contact@safeguard.in', gstNumber: '24AAACS8665P1ZH', status: 'Pending' },
];

const Vendors: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>(dummyVendors);
  const [search, setSearch] = useState('');

  const filtered = vendors.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      setVendors((prev) => prev.filter((v) => v.id !== id));
    }
  };

  const statusBadge = (status: Vendor['status']) => {
    const styles: Record<string, string> = {
      Active: 'bg-green-100 text-green-800',
      Pending: 'bg-yellow-100 text-yellow-800',
      Rejected: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Vendors</h1>
        <Link
          to="/vendors/new"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          Add Vendor
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search vendors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GST Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtered.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendor.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{vendor.gstNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{statusBadge(vendor.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors" title="Edit">
                      <PencilSquareIcon className="h-5 w-5 inline" />
                    </button>
                    <button
                      onClick={() => handleDelete(vendor.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                      title="Delete"
                    >
                      <TrashIcon className="h-5 w-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-sm text-gray-400">
                    No vendors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
