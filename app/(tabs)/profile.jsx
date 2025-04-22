import React, { useEffect, useState } from 'react';
import { Text, View, Alert, TouchableOpacity, Image, Pressable, ActivityIndicator, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const scrollY = new Animated.Value(3); // Initialize scroll animation value

  const user = {
    name: 'Abdullah JH',
    email: 'abdullajh@example.com',
    phone: '+880 1234 567890',
    address: 'Dhaka, Bangladesh',
    bio: 'Student | CSE | Dreamer',
    avatar: 'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png',
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Animated.ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
      style={{ transform: [{ translateY: scrollY.interpolate({ inputRange: [0, 100], outputRange: [0, -20], extrapolate: 'clamp' }) }] }} // Adding scroll animation effect
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
    >
      <View className="flex-1 items-center bg-gray-100 px-6 pt-16 mb-40">
        {/* Header */}
        <View className="flex-row items-center mb-6 w-full">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <MaterialIcons name="arrow-back" size={24} color="blue" />
          </TouchableOpacity>
          <Text className="text-3xl font-bold flex-1 text-center">Profile</Text>
        </View>

        {/* Avatar */}
        <View className="relative mb-6">
          <Image
            source={{ uri: user.avatar }}
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          />
          <Pressable
            onPress={() => router.push('editposts')}
            className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full"
          >
            <MaterialIcons name="edit" size={24} color="white" />
          </Pressable>
        </View>

        {/* User Info */}
        <Text className="text-2xl font-semibold mb-2">Welcome, {user.name}!</Text>
        <Text className="text-md text-gray-600 mb-4">Email: {user.email}</Text>

        {/* Info Cards */}
        <View className="w-full bg-white rounded-2xl p-4 mb-6 shadow">
          <View className="flex-row items-center bg-blue-100 rounded-full p-4 mb-3">
            <FontAwesome name="info-circle" size={28} color="#1e88e5" />
            <Text className="ml-4 text-lg text-blue-700">{user.bio}</Text>
          </View>

          <View className="flex-row items-center bg-lime-100 rounded-full p-4 mb-3">
            <MaterialIcons name="phone" size={28} color="#689f38" />
            <Text className="ml-4 text-lg text-lime-700">{user.phone}</Text>
          </View>
          

          <View className="flex-row items-center bg-orange-100 rounded-full p-4">
            <MaterialIcons name="home" size={28} color="#f57c00" />
            <Text className="ml-4 text-lg text-orange-700">{user.address}</Text>
          </View>
        </View>

        {/* Settings */}
        <View className="w-full mb-6">
          {[{ icon: 'edit', label: 'Edit Profile', color: 'text-blue-700' },
            { icon: 'settings', label: 'Settings', color: 'text-gray-700' },
            { icon: 'policy', label: 'Privacy Policy', color: 'text-purple-700' },
            { icon: 'notifications', label: 'Notifications', color: 'text-orange-700' }].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center bg-white p-4 rounded-full mb-3 shadow-sm"
              onPress={() => alert(`${item.label} pressed`)}
            >
              <MaterialIcons name={item.icon} size={26} color="#333" />
              <Text className={`ml-4 text-[17px] font-medium ${item.color}`}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={() => Alert.alert('Logout', 'Are you sure you want to logout?')}
          className="flex-row items-center bg-red-500 px-7 py-3 rounded-full"
        >
          <MaterialIcons name="exit-to-app" size={24} color="white" />
          <Text className="text-white font-semibold text-base ml-2">Logout</Text>
        </TouchableOpacity>
      </View>
    </Animated.ScrollView>
  );
};

export default Profile;
