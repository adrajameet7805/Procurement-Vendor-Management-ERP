import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Welcome back, {user?.name}!</h2>
        <p className="mt-1 text-sm text-gray-500">
          This is your ProcureFlow dashboard. Additional widgets and overview cards will be placed here.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Placeholder cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Active Vendors</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Pending RFQs</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Purchase Orders</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
