import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackNavigator} from './src/app/Presentation/Navigation/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={styles.gestureView}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 5,
  },
});

export default App;
