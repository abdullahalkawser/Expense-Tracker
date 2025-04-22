import { View, Text, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const statsData = [
  {
    label: 'Total Posts',
    value: 124,
    icon: <FontAwesome5 name="file-alt" size={24} color="#3b82f6" />,
    bgColors: ['#bfdbfe', '#60a5fa'],
    textColor: 'text-blue-800',
  },
  {
    label: 'Followers',
    value: 890,
    icon: <MaterialIcons name="group" size={24} color="#10b981" />,
    bgColors: ['#a7f3d0', '#34d399'],
    textColor: 'text-green-800',
  },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [120, 150, 170, 180, 200, 250],
      strokeWidth: 3,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#f9fafb',
  backgroundGradientTo: '#f9fafb',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
  style: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '3',
    stroke: '#3b82f6',
  },
};

const Statistis = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4 mt-28">
      {/* Page Title */}
      <Text className="text-4xl font-bold text-gray-800 mb-6 text-center">📊 Statistics Dashboard</Text>


      {/* Stats Cards */}
      <View className="space-y-4">
        {statsData.map((stat, index) => (
          <View
            key={index}
            style={{
              backgroundColor: stat.bgColors[0],
              borderRadius: 20,
              padding: 20,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOpacity: 0.15,
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                {stat.icon}
                <Text className={`ml-4 text-xl font-semibold ${stat.textColor}`}>{stat.label}</Text>
              </View>
              <Text className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Chart Section */}
      <View className="mt-8">
        <Text className="text-2xl font-semibold text-gray-700 mb-4 text-center">📈 Growth Over Time</Text>
        <LineChart
          data={chartData}
          width={screenWidth - 32}
          height={250}
          chartConfig={chartConfig}
          bezier
          style={{
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 15,
            elevation: 5,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Statistis;
