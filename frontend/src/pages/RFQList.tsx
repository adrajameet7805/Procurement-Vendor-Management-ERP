import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

interface RFQRow {
  id: number;
  title: string;
  deadline: string;
  itemCount: number;
  status: 'Draft' | 'Published' | 'Closed';
  createdBy: string;
}

const dummyRFQs: RFQRow[] = [
  { id: 1, title: 'Office Laptops (Q3 2026)', deadline: '2026-07-15', itemCount: 3, status: 'Published', createdBy: 'Amit Sharma' },
  { id: 2, title: 'Server Room UPS Upgrade', deadline: '2026-07-01', itemCount: 2, status: 'Published', createdBy: 'Amit Sharma' },
  { id: 3, title: 'Annual Stationery Procurement', deadline: '2026-08-01', itemCount: 12, status: 'Draft', createdBy: 'Priya Patel' },
  { id: 4, title: 'Security Camera Installation', deadline: '2026-06-28', itemCount: 5, status: 'Closed', createdBy: 'Amit Sharma' },
  { id: 5, title: 'Cafeteria Supplies Q3', deadline: '2026-07-20', itemCount: 8, status: 'Published', createdBy: 'Priya Patel' },
];

const RFQList: React.FC = () => {
  const statusBadge = (status: RFQRow['status']) => {
    const styles: Record<string, string> = {
      Draft: 'bg-gray-100 text-gray-800',
      Published: 'bg-blue-100 text-blue-800',
      Closed: 'bg-red-100 text-red-800',
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
        <h1 className="text-2xl font-bold text-gray-900">Request for Quotations</h1>
        <Link
          to="/rfq/new"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          Create RFQ
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyRFQs.map((rfq) => (
                <tr key={rfq.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">RFQ-{String(rfq.id).padStart(4, '0')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rfq.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rfq.itemCount} items</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rfq.deadline}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rfq.createdBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{statusBadge(rfq.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RFQList;
