import React from 'react';

interface QuotationRow {
  id: number;
  rfqTitle: string;
  vendorName: string;
  totalAmount: number;
  deliveryDays: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedAt: string;
}

const dummyQuotations: QuotationRow[] = [
  { id: 1, rfqTitle: 'Office Laptops (Q3 2026)', vendorName: 'TechCorp Supplies', totalAmount: 425000, deliveryDays: 14, status: 'Approved', submittedAt: '2026-06-20' },
  { id: 2, rfqTitle: 'Office Laptops (Q3 2026)', vendorName: 'OfficePro Ltd', totalAmount: 460000, deliveryDays: 21, status: 'Rejected', submittedAt: '2026-06-21' },
  { id: 3, rfqTitle: 'Server Room UPS Upgrade', vendorName: 'FuelMax Energy', totalAmount: 185000, deliveryDays: 10, status: 'Pending', submittedAt: '2026-06-22' },
  { id: 4, rfqTitle: 'Server Room UPS Upgrade', vendorName: 'TechCorp Supplies', totalAmount: 192000, deliveryDays: 7, status: 'Pending', submittedAt: '2026-06-22' },
  { id: 5, rfqTitle: 'Annual Stationery Procurement', vendorName: 'OfficePro Ltd', totalAmount: 78500, deliveryDays: 5, status: 'Pending', submittedAt: '2026-06-23' },
];

const Quotations: React.FC = () => {
  const statusBadge = (status: QuotationRow['status']) => {
    const styles: Record<string, string> = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Approved: 'bg-green-100 text-green-800',
      Rejected: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Quotation Comparison</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RFQ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery (Days)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyQuotations.map((q) => (
                <tr key={q.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{q.rfqTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{q.vendorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">{formatCurrency(q.totalAmount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{q.deliveryDays}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{q.submittedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{statusBadge(q.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Quotations;
