import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ArrowRightOnRectangleIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Topbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* You can add a mobile menu toggle button here if needed */}
        <h2 className="text-xl font-semibold text-gray-800 capitalize">
          {/* We can use location hooks to dynamically set the title, for now it's static */}
          Overview
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <UserCircleIcon className="h-8 w-8 text-gray-400" />
          <div className="text-sm">
            <p className="font-medium text-gray-700">{user?.name || 'Guest'}</p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors bg-red-50 hover:bg-red-100 px-3 py-2 rounded-md"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
