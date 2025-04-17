import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const Signin = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#1E293B]">
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.push('/welcome')}
        className="absolute top-16 left-4 z-10"
      >
        <Icon name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Greeting */}
      <View className="mt-32 px-6">
        <Text className="text-white text-4xl font-bold">
          Hey{'\n'}
          Welcome back
        </Text>
        <Text className="text-gray-400 text-base mt-4">
        Create your credentials
        </Text>
      </View>

      {/* Login Form */}
      <View className="mt-12 w-11/12 self-center">

   

        {/* Input Fields */}
        <View className="mb-5">
          {/* Name Input */}
          <View className="flex-row items-center bg-black/50 rounded-2xl px-4 py-4 shadow-lg mb-6">
            <Icon name="person-outline" size={22} color="#a3a3a3" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#a3a3a3"
              className="ml-3 flex-1 text-white text-base bg-transparent"
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center bg-black/50 rounded-2xl px-4 py-4 shadow-lg mb-6">
            <Icon name="mail-outline" size={22} color="#a3a3a3" />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#a3a3a3"
              className="ml-3 flex-1 text-white text-base bg-transparent"
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-black/50 rounded-2xl px-4 py-4 shadow-lg mb-6">
            <Icon name="lock-closed-outline" size={22} color="#a3a3a3" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#a3a3a3"
              className="ml-3 flex-1 text-white text-base bg-transparent"
              secureTextEntry
            />
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className="bg-lime-500 mt-8 py-4 rounded-full items-center shadow-xl shadow-lime-700/40"
          onPress={() => console.log('Login Pressed')}
        >
          <Text className="text-white text-lg font-bold">Login</Text>
        </TouchableOpacity>

        {/* Signup Redirect */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-400">You don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/signin')}>
            <Text className="text-lime-400 font-semibold underline">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signin;
