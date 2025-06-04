import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
