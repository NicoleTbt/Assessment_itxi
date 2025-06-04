import {StackNavigationOptions, TransitionSpecs} from '@react-navigation/stack';

export const NavigatorsScreenOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
};

export const SettingScreenOptions: StackNavigationOptions = {
  headerLeft: () => null,
};

export const RootOnBoardStackOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export const MainScreenOptions: StackNavigationOptions = {
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {duration: 300},
    },
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, layouts}) => {
    const translateY = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-layouts.screen.height, 0],
    });
    return {
      cardStyle: {
        transform: [{translateY}],
      },
    };
  },
};

export const RootSettingStackOptions: StackNavigationOptions = {
  headerShown: false,
  presentation: 'modal',
  gestureEnabled: true,
  gestureDirection: 'vertical',
};
