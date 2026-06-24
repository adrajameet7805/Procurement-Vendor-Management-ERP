import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Vendors', value: '24', icon: BuildingOfficeIcon, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Active RFQs', value: '12', icon: DocumentTextIcon, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
    { name: 'Pending Approvals', value: '3', icon: CheckCircleIcon, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { name: 'Total POs', value: '8', icon: ShoppingCartIcon, color: 'text-green-600', bgColor: 'bg-green-100' },
  ];

  const recentActivity = [
    { id: 1, action: 'Vendor Onboarded', entity: 'TechCorp Supplies', date: '2026-06-24', status: 'Completed' },
    { id: 2, action: 'RFQ Published', entity: 'Office Laptops (Q3)', date: '2026-06-23', status: 'Pending' },
    { id: 3, action: 'Quotation Approved', entity: 'Office Laptops - Dell', date: '2026-06-22', status: 'Completed' },
    { id: 4, action: 'PO Issued', entity: 'PO-2026-004', date: '2026-06-21', status: 'Issued' },
    { id: 5, action: 'Invoice Received', entity: 'INV-99812', date: '2026-06-20', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Welcome back, {user?.name || 'User'}!</h2>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your procurement processes today.
          </p>
        </div>
      </div>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
            <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {activity.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.entity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${activity.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {activity.status}
                    </span>
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

export default Dashboard;
