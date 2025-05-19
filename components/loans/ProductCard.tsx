import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { LoanProduct } from '@/types';
import Colors from '@/constants/Colors';

interface ProductCardProps {
  product: LoanProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Interest Rate</Text>
          <Text style={styles.detailValue}>{product.interestRate}%</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Loan Amount</Text>
          <Text style={styles.detailValue}>
            ${product.minAmount.toLocaleString()} - ${product.maxAmount.toLocaleString()}
          </Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Term</Text>
          <Text style={styles.detailValue}>
            {product.minDuration} - {product.maxDuration} months
          </Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply Now</Text>
        <ArrowRight size={16} color={Colors.white} />
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
    width: 280,
  },
  productName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  details: {
    gap: 12,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  applyText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
  },
});