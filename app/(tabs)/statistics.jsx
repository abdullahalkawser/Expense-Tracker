import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = [
  { name: 'Education', amount: 94, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Beauty & Care', amount: 45.65, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Child', amount: 34.9, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Food', amount: 12.54, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 14 },
];

const ExpenseChartScreen = () => {
  return (
    <View className="flex-1 bg-white mt-1">
      <ScrollView className="pt-10 mb-20">

        {/* Header */}
        <View className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-b-3xl mb-6 shadow-md">
          <Text className="text-3xl font-bold text-center pt-2 ">My Expenses</Text>
          <Text className="text-sm text-white opacity-80 mt-1">Summary (private)</Text>
          <View className="flex-row items-center mt-2">
            <Text className="text-sm text-white mr-2">07 Feb, 2019</Text>
            <Text className="text-xs text-white opacity-80">18% more than last month</Text>
          </View>
        </View>

        {/* Pie Chart Section */}
        <Text className="text-xl font-semibold text-gray-800 px-4 mb-2">Categories</Text>
        <View className="bg-white rounded-2xl mx-4 px-2 py-4 shadow-lg mb-8">
          <PieChart
            data={data.map(item => ({
              name: item.name,
              population: item.amount,
              color: item.color,
              legendFontColor: item.legendFontColor,
              legendFontSize: item.legendFontSize,
            }))}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          <Text className="text-lg font-semibold text-gray-800 text-center mt-4">12 Expenses</Text>
        </View>

        {/* Category List */}
        <View className="mx-4 px-4 py-4 bg-gray-100 rounded-2xl mb-6 shadow-sm">
          {data.map((item, index) => (
            <View key={index} className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <View style={{ backgroundColor: item.color }} className="w-4 h-4 rounded-full mr-3" />
                <Text className="text-base text-gray-700">{item.name}</Text>
              </View>
              <Text className="text-base text-gray-600 font-medium">
                {item.amount.toFixed(2)} USD - {Math.round((item.amount / 177.09) * 100)}%
              </Text>
            </View>
          ))}
        </View>

        {/* RGB Bar Chart */}
        <Text className="text-xl font-semibold text-gray-800 px-4 mb-2">RGB Chart</Text>
        <View className="bg-white mx-4 px-4 py-4 rounded-2xl shadow-lg mb-12">
          <BarChart
            data={{
              labels: data.map(item => item.name),
              datasets: [
                {
                  data: data.map(item => item.amount),
                },
              ],
            }}
            width={screenWidth - 60}
            height={220}
            fromZero
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(75,192,192,${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForBackgroundLines: {
                strokeDasharray: '',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default ExpenseChartScreen;
