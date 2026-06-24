import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ScaleIcon,
  CheckCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const role = user?.role;

  // Define full menu
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: HomeIcon, roles: ['Admin', 'Procurement Officer', 'Manager', 'Vendor'] },
    { name: 'Vendors', path: '/vendors', icon: BuildingOfficeIcon, roles: ['Admin', 'Procurement Officer'] },
    { name: 'RFQs', path: '/rfq', icon: DocumentTextIcon, roles: ['Admin', 'Procurement Officer', 'Vendor'] },
    { name: 'Quotations', path: '/quotations', icon: ScaleIcon, roles: ['Admin', 'Procurement Officer', 'Manager', 'Vendor'] },
    { name: 'Approvals', path: '/approvals', icon: CheckCircleIcon, roles: ['Admin', 'Manager'] },
    { name: 'Purchase Orders', path: '/purchase-orders', icon: ShoppingCartIcon, roles: ['Admin', 'Procurement Officer', 'Manager'] },
    { name: 'Invoices', path: '/invoices', icon: CreditCardIcon, roles: ['Admin', 'Vendor'] },
    { name: 'Reports', path: '/reports', icon: ChartBarIcon, roles: ['Admin', 'Manager'] },
  ];

  // Filter based on role
  const filteredMenu = menuItems.filter(item => role && item.roles.includes(role));

  return (
    <div className="flex flex-col w-64 bg-gray-900 h-full text-white">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wider text-blue-400">ProcureFlow</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {filteredMenu.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
