import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface PORow {
  id: number;
  poNumber: string;
  vendor: string;
  rfqTitle: string;
  amount: number;
  issuedAt: string;
  status: 'Draft' | 'Issued' | 'Completed';
}

const dummyPOs: PORow[] = [
  { id: 1, poNumber: 'PO-2026-001', vendor: 'TechCorp Supplies', rfqTitle: 'Office Laptops (Q3 2026)', amount: 425000, issuedAt: '2026-06-20', status: 'Issued' },
  { id: 2, poNumber: 'PO-2026-002', vendor: 'OfficePro Ltd', rfqTitle: 'Annual Stationery Procurement', amount: 78500, issuedAt: '2026-06-21', status: 'Completed' },
  { id: 3, poNumber: 'PO-2026-003', vendor: 'BuildRight Materials', rfqTitle: 'Warehouse Shelving', amount: 320000, issuedAt: '2026-06-18', status: 'Completed' },
  { id: 4, poNumber: 'PO-2026-004', vendor: 'CleanWave Services', rfqTitle: 'Cafeteria Supplies Q3', amount: 45000, issuedAt: '2026-06-23', status: 'Draft' },
];

const PurchaseOrders: React.FC = () => {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  const statusBadge = (status: PORow['status']) => {
    const styles: Record<string, string> = {
      Draft: 'bg-gray-100 text-gray-800',
      Issued: 'bg-blue-100 text-blue-800',
      Completed: 'bg-green-100 text-green-800',
    };
    return (
      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const handleExportPDF = (poNumber: string) => {
    // In a real app, this would call the backend to generate a PDF
    alert(`Exporting ${poNumber} as PDF… (backend integration pending)`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Purchase Orders</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PO Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RFQ</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issued</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Export</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyPOs.map((po) => (
                <tr key={po.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">{po.poNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{po.vendor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{po.rfqTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">{formatCurrency(po.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{po.issuedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{statusBadge(po.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      onClick={() => handleExportPDF(po.poNumber)}
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4" />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrders;
