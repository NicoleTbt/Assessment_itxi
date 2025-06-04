import {createStackNavigator} from '@react-navigation/stack';
import {SettingStackScreens} from '../../Utils/Globals/ScreensNames';
import Setting from '../Screens/Setting/Setting';
import EnterCompanyId from '../Screens/Shared/EnterCompanyId';
import PickVoice from '../Screens/Shared/PickVoice';
import SetCompanyId from '../Screens/Setting/SetCompanyId';

const SettingStack = createStackNavigator();

export const SettingStackNavigator = () => {
  return (
    <SettingStack.Navigator
      initialRouteName={SettingStackScreens.Setting}
      screenOptions={{
        headerShown: false,
      }}>
      <SettingStack.Screen
        name={SettingStackScreens.Setting}
        component={Setting}
      />
      <SettingStack.Screen
        name={SettingStackScreens.SetCompanyId}
        component={SetCompanyId}
      />
      <SettingStack.Screen
        name={SettingStackScreens.EnterCompanyId}
        component={EnterCompanyId}
      />
      <SettingStack.Screen
        name={SettingStackScreens.PickVoice}
        component={PickVoice}
      />
    </SettingStack.Navigator>
  );
};
