import { LoanProduct } from '@/types';

export const mockLoanProducts: LoanProduct[] = [
  {
    id: '1',
    name: 'Business Loan',
    description: 'Finance your business growth with flexible repayment terms',
    minAmount: 2000,
    maxAmount: 50000,
    interestRate: 12,
    minDuration: 6,
    maxDuration: 36,
    requirements: [
      'Business license',
      'Financial statements',
      'Bank statements',
      'Business plan'
    ],
    processingFee: 2,
    processingTime: '3-5 business days',
  },
  {
    id: '2',
    name: 'Education Loan',
    description: 'Invest in your future with affordable education financing',
    minAmount: 500,
    maxAmount: 10000,
    interestRate: 8,
    minDuration: 6,
    maxDuration: 24,
    requirements: [
      'Admission letter',
      'Fee structure',
      'ID document',
      'Proof of address'
    ],
    processingFee: 1.5,
    processingTime: '2-3 business days',
  },
  {
    id: '3',
    name: 'Emergency Loan',
    description: 'Quick funds for unexpected expenses with minimal paperwork',
    minAmount: 200,
    maxAmount: 2000,
    interestRate: 15,
    minDuration: 1,
    maxDuration: 6,
    requirements: [
      'ID document',
      'Proof of income',
      'Bank statement'
    ],
    processingFee: 3,
    processingTime: '24 hours',
  },
  {
    id: '4',
    name: 'Agriculture Loan',
    description: 'Support for farmers with seasonal repayment options',
    minAmount: 1000,
    maxAmount: 20000,
    interestRate: 10,
    minDuration: 3,
    maxDuration: 24,
    requirements: [
      'Land ownership documents',
      'Farming activity details',
      'ID document',
      'Proof of address'
    ],
    processingFee: 2,
    processingTime: '3-5 business days',
  },
];