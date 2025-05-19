import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { Loan, LoanStatus } from '@/types';
import Colors from '@/constants/Colors';

interface LoanCardProps {
  loan: Loan;
}

export default function LoanCard({ loan }: LoanCardProps) {
  const getStatusColor = (status: LoanStatus) => {
    switch (status) {
      case 'active':
        return Colors.success;
      case 'pending':
        return Colors.warning;
      case 'completed':
        return Colors.primary;
      case 'overdue':
        return Colors.error;
      case 'rejected':
        return Colors.error;
      default:
        return Colors.textSecondary;
    }
  };

  const getStatusLabel = (status: LoanStatus) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'pending':
        return 'Pending Approval';
      case 'completed':
        return 'Completed';
      case 'overdue':
        return 'Overdue';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  };

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.header}>
        <Text style={styles.loanName}>{loan.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(loan.status) + '20' }]}>
          <Text style={[styles.statusText, { color: getStatusColor(loan.status) }]}>
            {getStatusLabel(loan.status)}
          </Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Amount</Text>
          <Text style={styles.detailValue}>${loan.amount.toLocaleString()}</Text>
        </View>
        
        <View style={styles.detailDivider} />
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Interest</Text>
          <Text style={styles.detailValue}>{loan.interest}%</Text>
        </View>
        
        <View style={styles.detailDivider} />
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Duration</Text>
          <Text style={styles.detailValue}>{loan.duration} months</Text>
        </View>
      </View>
      
      {loan.status === 'active' && (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.progressTrack}>
              <View style={[styles.progressBar, { width: `${loan.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{loan.progress}% Repaid</Text>
          </View>
          
          <View style={styles.paymentSection}>
            <View>
              <Text style={styles.paymentLabel}>Next Payment</Text>
              <Text style={styles.paymentAmount}>${loan.nextPaymentAmount?.toLocaleString()}</Text>
              <Text style={styles.paymentDate}>Due on {loan.nextPaymentDate}</Text>
            </View>
            
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      
      <TouchableOpacity style={styles.viewDetailsButton}>
        <Text style={styles.viewDetailsText}>View Details</Text>
        <ArrowRight size={16} color={Colors.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  loanName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  details: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  detailDivider: {
    width: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 12,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressTrack: {
    height: 8,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    marginBottom: 16,
  },
  paymentLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  paymentAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 2,
  },
  paymentDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  payButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  payButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
  },
  viewDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  viewDetailsText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.primary,
  },
});