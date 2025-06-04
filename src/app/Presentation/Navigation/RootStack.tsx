import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {RootStackScreens} from '../../Utils/Globals/ScreensNames';
import {SettingStackNavigator} from './SettingStack';
import {OnBoardStackNavigator} from './OnBoardStack';
import Main from '../Screens/Root/Main';
import VoiceBot from '../Screens/Root/VoiceBot';
import {
  MainScreenOptions,
  NavigatorsScreenOptions,
  RootOnBoardStackOptions,
  RootSettingStackOptions,
} from '../../Models/Navigation/ScreensOptions';

const RootStack = createStackNavigator();

export const RootStackNavigator = ({
  initialRoute,
}: {
  initialRoute: 'OnBoardStack';
}) => {
  return (
    <RootStack.Navigator
      screenOptions={NavigatorsScreenOptions}
      initialRouteName={initialRoute}>
      <RootStack.Screen
        name={RootStackScreens.OnBoard}
        component={OnBoardStackNavigator}
        options={RootOnBoardStackOptions}
      />
      <RootStack.Screen
        name={RootStackScreens.Main}
        component={Main}
        options={MainScreenOptions}
      />
      <RootStack.Screen name={RootStackScreens.VoiceBot} component={VoiceBot} />
      <RootStack.Screen
        name={RootStackScreens.Setting}
        component={SettingStackNavigator}
        options={RootSettingStackOptions}
      />
    </RootStack.Navigator>
  );
};
