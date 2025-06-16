import React, {useEffect, useState} from 'react';
import {Linking, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {getStateFromPath, NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackNavigator} from './src/app/Presentation/Navigation/RootStack';
import SplashScreen from './src/app/Presentation/Screens/Shared/SplashScreen';
import {linkingConfig} from './src/app/Utils/Config/deepLinkingConfig';
import {RootStackScreens} from './src/app/Utils/Globals/ScreensNames';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [initialRoute, setInitialRoute] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const url = await Linking.getInitialURL();

      setInitialRoute(url ? RootStackScreens.Main : RootStackScreens.OnBoard);

      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView style={styles.gestureView}>
      <NavigationContainer linking={linkingConfig}>
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStackNavigator initialRoute={initialRoute} />
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
