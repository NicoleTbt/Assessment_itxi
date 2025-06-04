import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const VoiceBot = () => {
  return <SafeAreaView style={styles.safeArea}></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
  },
  settingButton: {
    margin: 10,
    alignSelf: 'flex-start',
  },
});

export default VoiceBot;
