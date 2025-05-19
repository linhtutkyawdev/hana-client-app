import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Bell, ArrowRight, Info, ShieldCheck, Plus } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import Colors from '@/constants/Colors';
import { Loan } from '@/types';

// Mock data to simulate API response
import { mockActiveLoans } from '@/data/loansData';
import { mockLoanProducts } from '@/data/productsData';
import LoanCard from '@/components/loans/LoanCard';
import ProductCard from '@/components/loans/ProductCard';

export default function HomeScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeLoans, setActiveLoans] = useState<Loan[]>([]);
  const [greeting, setGreeting] = useState('Good morning');

  useEffect(() => {
    // Set appropriate greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    // Simulate API call to get active loans
    setActiveLoans(mockActiveLoans);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setActiveLoans(mockActiveLoans);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Animated.View
          entering={FadeInDown.delay(100).duration(800)}
          style={styles.headerTop}
        >
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.name}>Jane Doe</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color={Colors.white} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).duration(800)}
          style={styles.balanceCard}
        >
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Total Loans</Text>
            <Text style={styles.balanceAmount}>$12,500.00</Text>
            <Text style={styles.balanceSubtext}>Across 2 active loans</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Next Payment</Text>
            <Text style={styles.balanceAmount}>$347.25</Text>
            <Text style={styles.balanceSubtext}>Due on Jul 15, 2025</Text>
          </View>
        </Animated.View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={Colors.primary}
          />
        }
      >
        {/* Active Loans Section */}
        <Animated.View
          entering={FadeInUp.delay(300).duration(800)}
          style={styles.section}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Loans</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => router.push('/loans')}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <ArrowRight size={16} color={Colors.primary} />
            </TouchableOpacity>
          </View>

          {activeLoans.length > 0 ? (
            <View style={styles.loansList}>
              {activeLoans.map((loan) => (
                <LoanCard key={loan.id} loan={loan} />
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                You have no active loans
              </Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply for a Loan</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>

        {/* Loan Products Section */}
        <Animated.View
          entering={FadeInUp.delay(400).duration(800)}
          style={styles.section}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Loan Products</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ArrowRight size={16} color={Colors.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productScroll}
          >
            {mockLoanProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollView>
        </Animated.View>

        {/* Quick Actions Section */}
        <Animated.View
          entering={FadeInUp.delay(500).duration(800)}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionCard}>
              <View
                style={[
                  styles.actionIcon,
                  { backgroundColor: Colors.primaryLight },
                ]}
              >
                <Plus size={24} color={Colors.primary} />
              </View>
              <Text style={styles.actionTitle}>Apply for Loan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <View
                style={[
                  styles.actionIcon,
                  { backgroundColor: Colors.secondaryLight },
                ]}
              >
                <ShieldCheck size={24} color={Colors.secondary} />
              </View>
              <Text style={styles.actionTitle}>Insurance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#FFF4DE' }]}>
                <Info size={24} color="#FF9800" />
              </View>
              <Text style={styles.actionTitle}>Loan Calculator</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
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
    backgroundColor: Colors.primary,
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.white,
    opacity: 0.9,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: Colors.white,
  },
  notificationButton: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.error,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  balanceCard: {
    marginHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
  },
  balanceSection: {
    flex: 1,
  },
  balanceLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    opacity: 0.8,
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: Colors.white,
    marginBottom: 4,
  },
  balanceSubtext: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.white,
    opacity: 0.7,
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 24,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
  },
  loansList: {
    gap: 12,
  },
  emptyState: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  applyButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
  },
  productScroll: {
    paddingRight: 24,
    gap: 12,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  actionCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  actionIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
    textAlign: 'center',
  },
});
