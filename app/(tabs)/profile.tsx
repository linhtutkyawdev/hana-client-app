import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Settings, CreditCard, Shield, BellRing, HelpCircle, LogOut, ChevronRight, Edit2 } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { User } from '@/types';

// Mock user data
const mockUser: User = {
  id: '1',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@example.com',
  phoneNumber: '+1 (555) 123-4567',
  address: '123 Main St, Anytown, CA 12345',
  occupation: 'Software Developer',
  idNumber: 'ID12345678',
  joinDate: '2022-03-15',
  profilePicture: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState<User>(mockUser);

  const MenuOption = ({ 
    icon, 
    title, 
    subtitle,
    iconBg,
    onPress 
  }: { 
    icon: React.ReactNode; 
    title: string; 
    subtitle?: string;
    iconBg: string;
    onPress?: () => void; 
  }) => (
    <TouchableOpacity style={styles.menuOption} onPress={onPress}>
      <View style={[styles.menuIcon, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      <ChevronRight size={20} color={Colors.textSecondary} />
    </TouchableOpacity>
  );

  const handleLogout = () => {
    // Implement logout logic
    router.replace('/(auth)');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: user.profilePicture }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Edit2 size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.profileName}>{user.firstName} {user.lastName}</Text>
        <Text style={styles.profileDetails}>{user.email}</Text>
        <Text style={styles.profileDetails}>{user.phoneNumber}</Text>
        
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <View style={styles.menuOptions}>
          <MenuOption 
            icon={<Settings size={22} color={Colors.primary} />}
            title="Account Settings"
            subtitle="Personal information, security"
            iconBg={Colors.primaryLight}
          />
          
          <MenuOption 
            icon={<CreditCard size={22} color={Colors.secondary} />}
            title="Payment Methods"
            subtitle="Connected cards and accounts"
            iconBg={Colors.secondaryLight}
          />
          
          <MenuOption 
            icon={<Shield size={22} color="#FF9800" />}
            title="Security"
            subtitle="Password, biometrics, 2FA"
            iconBg="#FFF4DE"
          />
          
          <MenuOption 
            icon={<BellRing size={22} color="#F43F5E" />}
            title="Notifications"
            subtitle="Payment, application, system alerts"
            iconBg="#FFE2E6"
          />
        </View>
      </View>
      
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <View style={styles.menuOptions}>
          <MenuOption 
            icon={<HelpCircle size={22} color="#7C3AED" />}
            title="Help Center"
            subtitle="FAQs and support articles"
            iconBg="#F3E8FF"
          />
          
          <MenuOption 
            icon={<Settings size={22} color="#059669" />}
            title="App Settings"
            subtitle="Language, theme, permissions"
            iconBg="#ECFDF5"
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color={Colors.error} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
      
      <Text style={styles.versionText}>Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  profileHeader: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  profileImageContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  profileName: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 4,
  },
  profileDetails: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  editProfileButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.backgroundSecondary,
  },
  editProfileText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  menuSection: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
    marginBottom: 16,
  },
  menuOptions: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text,
  },
  menuSubtitle: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 24,
    backgroundColor: '#FFF1F1',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.error,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textTertiary,
    marginTop: 24,
  },
});