import { User as PrismaUser } from '@prisma/client';

export type User = PrismaUser;

export interface Vendor {
  id: number;
  name: string;
  category: string;
  gstNumber: string;
  contact: string;
  status: 'Pending' | 'Active' | 'Rejected';
  createdAt: Date;
}

export interface RFQ {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  status: 'Draft' | 'Published' | 'Closed';
  createdBy: number;
}

export interface Quotation {
  id: number;
  rfqId: number;
  vendorId: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedAt: Date;
}

export interface PurchaseOrder {
  id: number;
  quotationId: number;
  poNumber: string;
  status: 'Draft' | 'Issued' | 'Completed';
  issuedAt: Date;
}

export interface Invoice {
  id: number;
  poId: number;
  invoiceNumber: string;
  amount: number;
  gstAmount: number;
  status: 'Pending' | 'Paid';
}

export interface AuthPayload {
  id: number;
  role: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
