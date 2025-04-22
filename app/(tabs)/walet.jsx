import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Wallet = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Wallet</Text>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Balance:</Text>
        <Text style={styles.amountText}>$3,200.50</Text>
      </View>

      {/* Transaction History Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('View Transactions')}>
        <Text style={styles.buttonText}>View Transactions</Text>
      </TouchableOpacity>

      {/* Add Funds Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Add Funds')}>
        <Text style={styles.buttonText}>Add Funds</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    margin: 60,
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 18,
    color: '#555',
  },
  amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Wallet;
