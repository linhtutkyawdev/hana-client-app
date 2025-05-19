import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { MessageSquare, PhoneCall, Mail, MapPin, ChevronRight, Search } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.textSecondary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search support topics"
            placeholderTextColor={Colors.textTertiary}
          />
        </View>
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          
          <View style={styles.contactOptions}>
            <TouchableOpacity style={styles.contactOption}>
              <View style={[styles.contactIcon, { backgroundColor: Colors.primaryLight }]}>
                <PhoneCall size={24} color={Colors.primary} />
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactTitle}>Call Support</Text>
                <Text style={styles.contactSubtitle}>24/7 Customer Service</Text>
              </View>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contactOption}>
              <View style={[styles.contactIcon, { backgroundColor: Colors.secondaryLight }]}>
                <MessageSquare size={24} color={Colors.secondary} />
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactTitle}>Live Chat</Text>
                <Text style={styles.contactSubtitle}>Chat with an agent</Text>
              </View>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contactOption}>
              <View style={[styles.contactIcon, { backgroundColor: '#FFF4DE' }]}>
                <Mail size={24} color="#FF9800" />
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactTitle}>Email Support</Text>
                <Text style={styles.contactSubtitle}>support@hanamicro.com</Text>
              </View>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contactOption}>
              <View style={[styles.contactIcon, { backgroundColor: '#FFE2E6' }]}>
                <MapPin size={24} color="#F43F5E" />
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactTitle}>Visit a Branch</Text>
                <Text style={styles.contactSubtitle}>Find nearest location</Text>
              </View>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          <View style={styles.faqList}>
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqQuestion}>How do I apply for a loan?</Text>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqQuestion}>What are the loan requirements?</Text>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqQuestion}>How long does loan approval take?</Text>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqQuestion}>How can I make repayments?</Text>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqQuestion}>What happens if I miss a payment?</Text>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreText}>View all FAQs</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help Topics</Text>
          
          <View style={styles.helpTopics}>
            <TouchableOpacity style={styles.helpTopic}>
              <Text style={styles.helpTopicText}>Loan Application</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.helpTopic}>
              <Text style={styles.helpTopicText}>Repayments</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.helpTopic}>
              <Text style={styles.helpTopicText}>Account Management</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.helpTopic}>
              <Text style={styles.helpTopicText}>Technical Issues</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.helpTopic}>
              <Text style={styles.helpTopicText}>Loan Products</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.helpTopic}>
              <Text style={styles.helpTopicText}>Security</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 16,
  },
  contactOptions: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactDetails: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 4,
  },
  contactSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  faqList: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  faqQuestion: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
    flex: 1,
    paddingRight: 16,
  },
  viewMoreButton: {
    padding: 16,
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.primary,
  },
  helpTopics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  helpTopic: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: '47%',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  helpTopicText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
  },
});