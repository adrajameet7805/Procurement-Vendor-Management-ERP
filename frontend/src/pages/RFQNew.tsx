import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import api from '../api/axios';
import { useState } from 'react';

interface LineItem {
  description: string;
  quantity: number;
  unit: string;
}

interface RFQFormInputs {
  title: string;
  description: string;
  deadline: string;
  items: LineItem[];
}

const RFQNew: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<RFQFormInputs>({
    defaultValues: {
      items: [{ description: '', quantity: 1, unit: 'pcs' }],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: RFQFormInputs) => {
    setIsLoading(true);
    setServerError(null);
    try {
      await api.post('/rfqs', data);
      navigate('/rfq');
    } catch (error: any) {
      setServerError(error.response?.data?.message || 'Failed to create RFQ.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Create New RFQ</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {serverError && (
          <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-100">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">RFQ Title</label>
            <input
              id="title"
              type="text"
              className={`block w-full rounded-md border ${errors.title ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500`}
              placeholder="e.g. Office Laptops Q3 2026"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              rows={3}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Brief description of the procurement requirement..."
              {...register('description')}
            />
          </div>

          {/* Deadline */}
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">Submission Deadline</label>
            <input
              id="deadline"
              type="date"
              className={`block w-full rounded-md border ${errors.deadline ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500`}
              {...register('deadline', { required: 'Deadline is required' })}
            />
            {errors.deadline && <p className="mt-1 text-xs text-red-500">{errors.deadline.message}</p>}
          </div>

          {/* Line Items */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Line Items</label>
              <button
                type="button"
                onClick={() => append({ description: '', quantity: 1, unit: 'pcs' })}
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <PlusIcon className="h-4 w-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-3">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-start gap-3 bg-gray-50 p-3 rounded-md border border-gray-200">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Item description"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register(`items.${index}.description` as const, { required: true })}
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="number"
                      placeholder="Qty"
                      min={1}
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register(`items.${index}.quantity` as const, { required: true, valueAsNumber: true })}
                    />
                  </div>
                  <div className="w-24">
                    <select
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register(`items.${index}.unit` as const)}
                    >
                      <option value="pcs">pcs</option>
                      <option value="kg">kg</option>
                      <option value="ltrs">ltrs</option>
                      <option value="sets">sets</option>
                      <option value="boxes">boxes</option>
                    </select>
                  </div>
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 hover:text-red-700 mt-1"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating...' : 'Create RFQ'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/rfq')}
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

export default RFQNew;
