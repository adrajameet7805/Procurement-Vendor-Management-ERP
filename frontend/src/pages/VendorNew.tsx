import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

interface VendorFormInputs {
  name: string;
  category: string;
  contact: string;
  gstNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

const VendorNew: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<VendorFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: VendorFormInputs) => {
    setIsLoading(true);
    setServerError(null);
    try {
      await api.post('/vendors', data);
      navigate('/vendors');
    } catch (error: any) {
      setServerError(error.response?.data?.message || 'Failed to add vendor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Add New Vendor</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {serverError && (
          <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-100">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Vendor Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
            <input
              id="name"
              type="text"
              className={`block w-full rounded-md border ${errors.name ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500`}
              placeholder="e.g. TechCorp Supplies"
              {...register('name', { required: 'Vendor name is required' })}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              className={`block w-full rounded-md border ${errors.category ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500`}
              {...register('category', { required: 'Category is required' })}
            >
              <option value="">Select category</option>
              <option value="IT Equipment">IT Equipment</option>
              <option value="Office Supplies">Office Supplies</option>
              <option value="Construction">Construction</option>
              <option value="Janitorial">Janitorial</option>
              <option value="Fuel & Utilities">Fuel & Utilities</option>
              <option value="Security">Security</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>}
          </div>

          {/* Contact Email */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input
              id="contact"
              type="email"
              className={`block w-full rounded-md border ${errors.contact ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500`}
              placeholder="vendor@example.com"
              {...register('contact', { required: 'Contact email is required' })}
            />
            {errors.contact && <p className="mt-1 text-xs text-red-500">{errors.contact.message}</p>}
          </div>

          {/* GST Number */}
          <div>
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
            <input
              id="gstNumber"
              type="text"
              className={`block w-full rounded-md border ${errors.gstNumber ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-sm font-mono focus:border-blue-500 focus:ring-blue-500`}
              placeholder="22AAAAA0000A1Z5"
              {...register('gstNumber', {
                required: 'GST number is required',
                pattern: { value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, message: 'Invalid GST format' },
              })}
            />
            {errors.gstNumber && <p className="mt-1 text-xs text-red-500">{errors.gstNumber.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              id="address"
              rows={2}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Street address"
              {...register('address')}
            />
          </div>

          {/* City, State, Pincode */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                id="city"
                type="text"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('city')}
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                id="state"
                type="text"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('state')}
              />
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <input
                id="pincode"
                type="text"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('pincode')}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Save Vendor'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/vendors')}
              className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorNew;
