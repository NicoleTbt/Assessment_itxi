import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackNavigator} from './src/app/Presentation/Navigation/RootStack';
import SplashScreen from './src/app/Presentation/Screens/Shared/SplashScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView style={styles.gestureView}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
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
    backgroundColor: '#ffff',
  },
});

export default App;
