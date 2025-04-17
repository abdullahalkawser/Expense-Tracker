import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  View,
} from 'react-native'

export default function ScreenWrapper({ children, scrollable = false, style }) {
  const Wrapper = scrollable ? ScrollView : View

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000" // স্ট্যাটাস বার কালার (Android)
      />
      <Wrapper contentContainerStyle={[styles.container, style]}>
        {children}
      </Wrapper>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
backgroundColor: '#1E293B',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})
