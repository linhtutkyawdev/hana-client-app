import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ArrowDownLeft, ArrowUpRight, Receipt } from 'lucide-react-native';
import { Transaction } from '@/types';
import Colors from '@/constants/Colors';

interface TransactionItemProps {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const getIcon = () => {
    switch (transaction.type) {
      case 'payment':
        return <ArrowUpRight size={20} color={Colors.success} />;
      case 'disbursement':
        return <ArrowDownLeft size={20} color={Colors.secondary} />;
      case 'fee':
        return <Receipt size={20} color={Colors.warning} />;
    }
  };

  const getTypeLabel = () => {
    switch (transaction.type) {
      case 'payment':
        return 'Loan Payment';
      case 'disbursement':
        return 'Loan Disbursement';
      case 'fee':
        return 'Processing Fee';
    }
  };

  const getIconBackground = () => {
    switch (transaction.type) {
      case 'payment':
        return Colors.primaryLight;
      case 'disbursement':
        return Colors.secondaryLight;
      case 'fee':
        return '#FFF4DE';
    }
  };

  const getAmountColor = () => {
    switch (transaction.type) {
      case 'payment':
        return Colors.error; // Outgoing money
      case 'disbursement':
        return Colors.success; // Incoming money
      case 'fee':
        return Colors.error; // Outgoing money
    }
  };

  const getAmountPrefix = () => {
    switch (transaction.type) {
      case 'payment':
        return '-';
      case 'disbursement':
        return '+';
      case 'fee':
        return '-';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: getIconBackground() }]}>
        {getIcon()}
      </View>
      
      <View style={styles.details}>
        <Text style={styles.title}>{getTypeLabel()}</Text>
        <Text style={styles.reference}>{transaction.reference}</Text>
      </View>
      
      <View style={styles.amountContainer}>
        <Text style={[styles.amount, { color: getAmountColor() }]}>
          {getAmountPrefix()}${transaction.amount}
        </Text>
        <Text style={styles.time}>
          {new Date(transaction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 4,
  },
  reference: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
});