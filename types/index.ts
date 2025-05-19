export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePicture?: string;
  address?: string;
  occupation?: string;
  idNumber?: string;
  joinDate: string;
}

export type LoanStatus = 'pending' | 'approved' | 'active' | 'completed' | 'rejected' | 'overdue';

export interface Loan {
  id: string;
  name: string;
  amount: number;
  interest: number;
  duration: number; // In months
  status: LoanStatus;
  startDate?: string;
  endDate?: string;
  purpose: string;
  paymentFrequency: 'weekly' | 'biweekly' | 'monthly';
  nextPaymentDate?: string;
  nextPaymentAmount?: number;
  totalPaid: number;
  remainingAmount: number;
  progress: number; // 0-100
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'payment' | 'disbursement' | 'fee';
  description: string;
  reference: string;
  loanId?: string;
}

export interface LoanProduct {
  id: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  minDuration: number;
  maxDuration: number;
  requirements: string[];
  processingFee: number;
  processingTime: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'payment' | 'loan' | 'account' | 'general';
}