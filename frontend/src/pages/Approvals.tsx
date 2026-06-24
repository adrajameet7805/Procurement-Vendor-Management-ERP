import React, { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ApprovalRow {
  id: number;
  type: 'Quotation' | 'Purchase Order';
  reference: string;
  requestedBy: string;
  amount: number;
  date: string;
}

const dummyApprovals: ApprovalRow[] = [
  { id: 1, type: 'Quotation', reference: 'Server Room UPS – FuelMax Energy', requestedBy: 'Amit Sharma', amount: 185000, date: '2026-06-22' },
  { id: 2, type: 'Quotation', reference: 'Server Room UPS – TechCorp', requestedBy: 'Amit Sharma', amount: 192000, date: '2026-06-22' },
  { id: 3, type: 'Purchase Order', reference: 'PO-2026-005 (Stationery)', requestedBy: 'Priya Patel', amount: 78500, date: '2026-06-23' },
  { id: 4, type: 'Quotation', reference: 'Cafeteria Supplies – CleanWave', requestedBy: 'Priya Patel', amount: 45000, date: '2026-06-24' },
];

const Approvals: React.FC = () => {
  const [items, setItems] = useState<ApprovalRow[]>(dummyApprovals);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  const handleApprove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    // In real app: await api.post(`/approvals/${id}/approve`)
  };

  const handleReject = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    // In real app: await api.post(`/approvals/${id}/reject`)
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Pending Approvals</h1>

      {items.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
          <CheckIcon className="h-12 w-12 mx-auto text-green-400" />
          <p className="mt-3 text-sm text-gray-500">All caught up! No pending approvals.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 flex items-center justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.type === 'Quotation' ? 'bg-indigo-100 text-indigo-800' : 'bg-blue-100 text-blue-800'}`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{item.reference}</p>
                <p className="text-xs text-gray-500 mt-0.5">Requested by {item.requestedBy} · {formatCurrency(item.amount)}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => handleApprove(item.id)}
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <CheckIcon className="h-4 w-4" />
                  Approve
                </button>
                <button
                  onClick={() => handleReject(item.id)}
                  className="inline-flex items-center gap-1.5 bg-white text-red-600 border border-red-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  <XMarkIcon className="h-4 w-4" />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Approvals;
