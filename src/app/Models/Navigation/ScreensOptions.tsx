import {StackNavigationOptions, TransitionSpecs} from '@react-navigation/stack';

export const NavigatorsScreenOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
};

export const RootOnBoardStackOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export const OnBoardEnterIsScreenOptions: StackNavigationOptions = {
  title: 'Enter Company Id',
};

export const RootSettingStackOptions: StackNavigationOptions = {
  headerShown: false,
  presentation: 'modal',
  gestureEnabled: true,
  gestureDirection: 'vertical',
};

export const SettingScreenOptions: StackNavigationOptions = {
  headerLeft: () => null,
};

export const SettingSetIdScreenOptions: StackNavigationOptions = {
  title: 'Set Company Id',
};

export const SettingEnterIdScreenOptions: StackNavigationOptions = {
  title: 'Enter Company Id',
};

export const SettingPickVoiceScreenOptions: StackNavigationOptions = {
  title: 'PickVoice',
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
