import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreens} from '../../Utils/Globals/ScreensNames';
import {SettingStackNavigator} from './SettingStack';
import {OnBoardStackNavigator} from './OnBoardStack';
import Main from '../Screens/Root/Main';
import VoiceBot from '../Screens/Root/VoiceBot';

const RootStack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={RootStackScreens.OnBoard}>
      <RootStack.Screen
        name={RootStackScreens.OnBoard}
        component={OnBoardStackNavigator}
      />
      <RootStack.Screen name={RootStackScreens.Main} component={Main} />
      <RootStack.Screen name={RootStackScreens.VoiceBot} component={VoiceBot} />
      <RootStack.Screen
        name={RootStackScreens.Setting}
        component={SettingStackNavigator}
      />
    </RootStack.Navigator>
  );
};
