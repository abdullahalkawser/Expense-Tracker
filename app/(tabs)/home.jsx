import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import ScreenWrapper from '../../components/Screenwraper';

const transactions = [
  { id: '1', bank: 'Bank ABC', amount: 1000, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', bank: 'Bank XYZ', amount: -500, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', bank: 'Bank QRS', amount: 1500, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', bank: 'City Bank', amount: -250, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: '5', bank: 'Bank Asia', amount: 800, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '6', bank: 'Dutch Bangla', amount: -1200, avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: '7', bank: 'Standard Chartered', amount: 2000, avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { id: '8', bank: 'Prime Bank', amount: -750, avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: '9', bank: 'Islami Bank', amount: 1300, avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: '10', bank: 'HSBC', amount: -650, avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: '11', bank: 'HSBC', amount: -650, avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: '12', bank: 'HSBC', amount: -650, avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
];

const Home = () => {
  const [search, setSearch] = useState('');

  const income = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const balance = income - expense;

  const filteredTransactions = transactions.filter(txn =>
    txn.bank.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScreenWrapper className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-[#4CAF50] px-4 py-5 rounded-3xl">
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center space-x-3">
            <Image
              source={{ uri: 'https://i.pravatar.cc/300' }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-white text-lg font-semibold"> Hi, Abdullah</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Logout')}>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="bg-white rounded-full px-4 py-2 flex-row items-center">
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search expenses"
            value={search}
            onChangeText={setSearch}
            className="ml-2 flex-1 text-gray-700"
          />
        </View>
      </View>

      {/* Scrollable Content */}

        {/* Balance Section */}
        <View className="mx-4 mt-6 p-5 bg-[#fff1f2] rounded-2xl shadow">
          <Text className="text-gray-600">Total Balance</Text>
          <Text className="text-2xl font-bold text-gray-800">৳ {balance}</Text>

          <View className="flex-row justify-between mt-4">
            <View className="flex-row items-center space-x-2">
              <FontAwesome5 name="arrow-up" size={20} color="green" />
              <Text className="text-green-600 font-medium">Income: ৳ {income}</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <FontAwesome5 name="arrow-down" size={20} color="red" />
              <Text className="text-red-600 font-medium">Expense: ৳ {expense}</Text>
            </View>
          </View>
        </View>

        {/* Transactions */}
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
  <View className="mx-4 mt-6">
    <Text className="text-lg font-semibold text-white mb-3">Recent Transactions</Text>
    {filteredTransactions.map((item) => (
      <View
        key={item.id}
        className="flex-row justify-between items-center bg-white rounded-xl px-4 py-3 mb-3 shadow"
      >
        <View className="flex-row items-center space-x-3">
          <Image
            source={{ uri: item.avatar }}
            style={{ width: 42, height: 42, borderRadius: 21 }}
          />
          <View>
            <Text className="text-gray-800 font-semibold">{item.bank}</Text>
            <Text className="text-gray-500 text-sm">Bank Transaction</Text>
          </View>
        </View>
        <Text
          className={`text-lg font-bold ${
            item.amount < 0 ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {item.amount < 0 ? `-৳${Math.abs(item.amount)}` : `৳${item.amount}`}
        </Text>
      </View>
    ))}
  </View>
</ScrollView>
    </ScreenWrapper>
  );
};

export default Home;
