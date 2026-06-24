import React from 'react';

interface InvoiceRow {
  id: number;
  invoiceNumber: string;
  poNumber: string;
  vendor: string;
  amount: number;
  gstAmount: number;
  totalAmount: number;
  date: string;
  status: 'Pending' | 'Paid';
}

const dummyInvoices: InvoiceRow[] = [
  { id: 1, invoiceNumber: 'INV-99810', poNumber: 'PO-2026-001', vendor: 'TechCorp Supplies', amount: 360169, gstAmount: 64831, totalAmount: 425000, date: '2026-06-22', status: 'Paid' },
  { id: 2, invoiceNumber: 'INV-99811', poNumber: 'PO-2026-002', vendor: 'OfficePro Ltd', amount: 66525, gstAmount: 11975, totalAmount: 78500, date: '2026-06-23', status: 'Paid' },
  { id: 3, invoiceNumber: 'INV-99812', poNumber: 'PO-2026-003', vendor: 'BuildRight Materials', amount: 271186, gstAmount: 48814, totalAmount: 320000, date: '2026-06-20', status: 'Pending' },
  { id: 4, invoiceNumber: 'INV-99813', poNumber: 'PO-2026-004', vendor: 'CleanWave Services', amount: 38136, gstAmount: 6864, totalAmount: 45000, date: '2026-06-24', status: 'Pending' },
];

const Invoices: React.FC = () => {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  const statusBadge = (status: InvoiceRow['status']) => {
    const styles: Record<string, string> = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Paid: 'bg-green-100 text-green-800',
    };
    return (
      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PO #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Base Amount</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">GST</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">{inv.invoiceNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{inv.poNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inv.vendor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(inv.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(inv.gstAmount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">{formatCurrency(inv.totalAmount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inv.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{statusBadge(inv.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
