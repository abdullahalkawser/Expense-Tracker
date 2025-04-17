import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E293B' }}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.push('/welcome')}
        className="absolute top-16 left-4 z-10"
      >
        <Icon name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <View className="mt-12 w-11/12">
        {/* Title Section */}
        <View className="mb-8 items-center">
          <Text className="text-white text-4xl font-bold text-center">Sign Up</Text>
          <Text className="text-gray-400 text-base text-center mt-2">
            Create an account to get started
          </Text>
        </View>

        {/* Input Fields */}
        <View className="mb-5">
          {/* Name Input */}
          <View className="flex-row items-center bg-gray-800 rounded-2xl px-4 py-4 shadow-md shadow-black/30 mb-5">
            <Icon name="person-outline" size={22} color="#a3a3a3" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#a3a3a3"
              className="ml-3 flex-1 text-white text-base"
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center bg-gray-800 rounded-2xl px-4 py-4 shadow-md shadow-black/30 mb-5">
            <Icon name="mail-outline" size={22} color="#a3a3a3" />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#a3a3a3"
              className="ml-3 flex-1 text-white text-base"
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-gray-800 rounded-2xl px-4 py-4 shadow-md shadow-black/30 mb-6">
            <Icon name="lock-closed-outline" size={22} color="#a3a3a3" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#a3a3a3"
              className="ml-3 flex-1 text-white text-base"
              secureTextEntry
            />
          </View>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          className="bg-lime-500 mt-8 py-4 rounded-full items-center shadow-xl shadow-lime-700/40"
          onPress={() => console.log('Sign Up Pressed')}
        >
          <Text className="text-white text-lg font-bold">Sign Up</Text>
        </TouchableOpacity>

        {/* Login Redirect */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-400">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/signin')}>
            <Text className="text-lime-400 font-semibold underline">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
