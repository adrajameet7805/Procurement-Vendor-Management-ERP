// Common Interfaces
export interface User {
  id: number;
  email: string;
  name: string;
  role: 'Admin' | 'Procurement Officer' | 'Manager' | 'Vendor';
  status: 'Active' | 'Inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Vendor {
  id: number;
  name: string;
  category: string;
  gstNumber: string;
  contact: string;
  status: 'Pending' | 'Active' | 'Rejected';
  createdAt: string;
}

export interface RFQ {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: 'Draft' | 'Published' | 'Closed';
  createdBy: number;
  items?: RFQItem[];
}

export interface RFQItem {
  id: number;
  rfqId: number;
  description: string;
  quantity: number;
  unit: string;
}

export interface Quotation {
  id: number;
  rfqId: number;
  vendorId: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedAt: string;
  items?: QuotationItem[];
}

export interface QuotationItem {
  id: number;
  quotationId: number;
  rfqItemId: number;
  unitPrice: number;
  deliveryDays: number;
}

export interface PurchaseOrder {
  id: number;
  quotationId: number;
  poNumber: string;
  status: 'Draft' | 'Issued' | 'Completed';
  issuedAt: string;
}

export interface Invoice {
  id: number;
  poId: number;
  invoiceNumber: string;
  amount: number;
  gstAmount: number;
  status: 'Pending' | 'Paid';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  limit: number;
}

// Form Input Types
export interface LoginFormInputs {
  email: string;
  password?: string;
}
