import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { ArrowRight } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function WelcomeScreen() {
  const router = useRouter();

  const features = [
    {
      title: 'Easy Loan Applications',
      description: 'Apply for loans directly from your phone with minimal documentation',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Smart Savings',
      description: 'Build your savings with competitive interest rates and flexible terms',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Financial Education',
      description: 'Access free resources to improve your financial literacy',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
          
          <Animated.View style={styles.heroContent} entering={FadeInDown.delay(200).duration(1000)}>
            <View style={styles.logoWrapper}>
              <Text style={styles.logoText}>Hana</Text>
              <Text style={styles.logoSubText}>Microfinance</Text>
            </View>
            <Text style={styles.heroTitle}>Empowering Your Financial Journey</Text>
            <Text style={styles.heroSubtitle}>
              Join thousands of people who trust Hana for their financial needs
            </Text>
          </Animated.View>
        </View>

        <View style={styles.content}>
          <Animated.View entering={FadeInUp.delay(400).duration(1000)}>
            <Text style={styles.sectionTitle}>Why Choose Hana?</Text>
            
            <View style={styles.features}>
              {features.map((feature, index) => (
                <View key={index} style={styles.featureCard}>
                  <Image source={{ uri: feature.image }} style={styles.featureImage} />
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </Animated.View>

          <Animated.View style={styles.statsSection} entering={FadeInUp.delay(600).duration(1000)}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>50K+</Text>
              <Text style={styles.statLabel}>Active Users</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>$10M+</Text>
              <Text style={styles.statLabel}>Loans Disbursed</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>98%</Text>
              <Text style={styles.statLabel}>Satisfaction</Text>
            </View>
          </Animated.View>

          <Animated.View style={styles.ctaSection} entering={FadeInUp.delay(800).duration(1000)}>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push('/register')}
              activeOpacity={0.8}
            >
              <Text style={styles.ctaButtonText}>Get Started</Text>
              <ArrowRight size={20} color={Colors.white} />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push('/login')}
              activeOpacity={0.8}
            >
              <Text style={styles.loginButtonText}>I already have an account</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    height: 500,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroContent: {
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    height: '100%',
  },
  logoWrapper: {
    height: 100,
    width: 100,
    backgroundColor: Colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
  },
  logoSubText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.textSecondary,
  },
  heroTitle: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: Colors.white,
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: Colors.white,
    opacity: 0.9,
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 24,
  },
  features: {
    gap: 20,
  },
  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  featureImage: {
    width: '100%',
    height: 200,
  },
  featureContent: {
    padding: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  statsSection: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 16,
    padding: 24,
    marginTop: 40,
    marginBottom: 40,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 16,
  },
  ctaSection: {
    gap: 16,
  },
  ctaButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
  },
  loginButton: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
});