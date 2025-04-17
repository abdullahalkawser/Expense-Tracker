import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/Screenwraper';
import { Link } from 'expo-router';

const Welcome = () => {
  return (
    <ScreenWrapper className="flex-1 justify-center items-center bg-gray-900">
      {/* Header */}
      <View className="mt-10 px-4 w-full">
        <Text className="text-white text-right text-xl font-semibold">
          <Link href={'/signup'}>Sign Up</Link>
        </Text>
      </View>

      {/* Image + Main Text */}
      <View className="mt-20 w-full items-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          className="mb-6 w-full "
          resizeMode="contain"
        />
      </View>

      {/* New Section with Background Color */}
      <View className="bg-black p-6 rounded-2xl h-screen shadow-lg">
        <Text className="text-white text-3xl font-bold text-center mb-2">
          Always take control of your Finances
        </Text>
        <Text className="text-gray-300 text-center text-base px-4 mb-8 mt-5">
          Start your journey with us. Let's make something amazing together.
        </Text>

        {/* Action Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#4CAF50',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8,
          }}
          onPress={() => console.log('Button Pressed')}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
