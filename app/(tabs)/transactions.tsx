import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { Calendar, ChevronDown, Search } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@/constants/Colors';
import TransactionItem from '@/components/transactions/TransactionItem';
import { Transaction } from '@/types';

// Mock data
import { mockTransactions } from '@/data/transactionsData';

export default function TransactionsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setTransactions(mockTransactions);
      setRefreshing(false);
    }, 1000);
  };

  // Group transactions by date
  const groupedTransactions: Record<string, Transaction[]> = {};
  transactions.forEach(transaction => {
    const date = new Date(transaction.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    if (!groupedTransactions[date]) {
      groupedTransactions[date] = [];
    }
    
    groupedTransactions[date].push(transaction);
  });

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)} style={styles.header}>
        <View style={styles.filterBar}>
          <TouchableOpacity style={styles.periodSelector}>
            <Text style={styles.periodText}>Last 30 days</Text>
            <ChevronDown size={16} color={Colors.text} />
          </TouchableOpacity>
          
          <View style={styles.filterActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Calendar size={20} color={Colors.text} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconButton}>
              <Search size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.totalsContainer}>
          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total Payments</Text>
            <Text style={styles.totalAmount}>$1,248.75</Text>
          </View>
          
          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total Received</Text>
            <Text style={styles.totalAmount}>$5,000.00</Text>
          </View>
        </View>
      </Animated.View>
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.primary} />
        }
      >
        {Object.keys(groupedTransactions).length > 0 ? (
          Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
            <View key={date} style={styles.dateGroup}>
              <Text style={styles.dateHeader}>{date}</Text>
              
              <View style={styles.transactionsList}>
                {dateTransactions.map((transaction) => (
                  <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateTitle}>No transactions found</Text>
            <Text style={styles.emptyStateText}>
              You haven't made any transactions in the selected period.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
  },
  periodText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
  },
  filterActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    height: 36,
    width: 36,
    borderRadius: 10,
    backgroundColor: Colors.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  totalCard: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 12,
    padding: 16,
  },
  totalLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
  },
  dateGroup: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  transactionsList: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyState: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    minHeight: 200,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});