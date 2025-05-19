import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ArrowUpRight, Plus, TrendingUp, Clock, Wallet } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Colors from '@/constants/Colors';

export default function SavingsScreen() {
  const [activeTab, setActiveTab] = useState<'accounts' | 'goals'>('accounts');

  const savingsAccounts = [
    {
      id: '1',
      name: 'Regular Savings',
      balance: 2500.00,
      interestRate: 3.5,
      lastTransaction: '2025-07-01',
      type: 'regular',
    },
    {
      id: '2',
      name: 'Fixed Deposit',
      balance: 10000.00,
      interestRate: 5.5,
      maturityDate: '2026-01-01',
      type: 'fixed',
    }
  ];

  const savingsGoals = [
    {
      id: '1',
      name: 'Emergency Fund',
      target: 5000,
      current: 3500,
      deadline: '2025-12-31',
      image: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      name: 'New Car',
      target: 15000,
      current: 5000,
      deadline: '2026-06-30',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)} style={styles.header}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'accounts' && styles.activeTab]}
            onPress={() => setActiveTab('accounts')}
          >
            <Text style={[styles.tabText, activeTab === 'accounts' && styles.activeTabText]}>
              Accounts
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'goals' && styles.activeTab]}
            onPress={() => setActiveTab('goals')}
          >
            <Text style={[styles.tabText, activeTab === 'goals' && styles.activeTabText]}>
              Goals
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Plus size={20} color={Colors.white} />
          <Text style={styles.addButtonText}>
            {activeTab === 'accounts' ? 'New Account' : 'New Goal'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'accounts' ? (
          <>
            <View style={styles.totalBalance}>
              <Text style={styles.totalBalanceLabel}>Total Savings</Text>
              <Text style={styles.totalBalanceAmount}>$12,500.00</Text>
              <View style={styles.interestInfo}>
                <TrendingUp size={16} color={Colors.success} />
                <Text style={styles.interestText}>Earning up to 5.5% p.a.</Text>
              </View>
            </View>

            <View style={styles.accountsList}>
              {savingsAccounts.map((account) => (
                <TouchableOpacity key={account.id} style={styles.accountCard}>
                  <View style={styles.accountHeader}>
                    <View style={styles.accountType}>
                      <Wallet size={20} color={Colors.primary} />
                      <Text style={styles.accountName}>{account.name}</Text>
                    </View>
                    <ArrowUpRight size={20} color={Colors.textSecondary} />
                  </View>

                  <Text style={styles.accountBalance}>
                    ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </Text>

                  <View style={styles.accountDetails}>
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Interest Rate</Text>
                      <Text style={styles.detailValue}>{account.interestRate}% p.a.</Text>
                    </View>

                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>
                        {account.type === 'fixed' ? 'Matures On' : 'Last Transaction'}
                      </Text>
                      <Text style={styles.detailValue}>
                        {account.type === 'fixed' ? account.maturityDate : account.lastTransaction}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.goalsList}>
            {savingsGoals.map((goal) => (
              <TouchableOpacity key={goal.id} style={styles.goalCard}>
                <Image source={{ uri: goal.image }} style={styles.goalImage} />
                
                <View style={styles.goalContent}>
                  <View style={styles.goalHeader}>
                    <Text style={styles.goalName}>{goal.name}</Text>
                    <ArrowUpRight size={20} color={Colors.textSecondary} />
                  </View>

                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill,
                        { width: `${(goal.current / goal.target) * 100}%` }
                      ]} 
                    />
                  </View>

                  <View style={styles.goalProgress}>
                    <Text style={styles.goalAmount}>
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </Text>
                    <Text style={styles.goalPercentage}>
                      {Math.round((goal.current / goal.target) * 100)}%
                    </Text>
                  </View>

                  <View style={styles.goalDeadline}>
                    <Clock size={16} color={Colors.textSecondary} />
                    <Text style={styles.deadlineText}>Target date: {goal.deadline}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
    paddingVertical: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
  },
  activeTabText: {
    color: Colors.text,
  },
  addButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
  },
  addButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  totalBalance: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  totalBalanceLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  totalBalanceAmount: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 8,
  },
  interestInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  interestText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.success,
  },
  accountsList: {
    gap: 16,
  },
  accountCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  accountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  accountType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  accountName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  accountBalance: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 16,
  },
  accountDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
  },
  goalsList: {
    gap: 16,
  },
  goalCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  goalImage: {
    width: '100%',
    height: 150,
  },
  goalContent: {
    padding: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  goalProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalAmount: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  goalPercentage: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
  },
  goalDeadline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  deadlineText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
});