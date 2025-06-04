import {createStackNavigator} from '@react-navigation/stack';
import {SettingStackScreens} from '../../Utils/Globals/ScreensNames';
import Setting from '../Screens/Setting/Setting';
import EnterCompanyId from '../Screens/Shared/EnterCompanyId';
import PickVoice from '../Screens/Shared/PickVoice';
import SetCompanyId from '../Screens/Setting/SetCompanyId';
import {
  NavigatorsScreenOptions,
  SettingScreenOptions,
} from '../../Models/Navigation/ScreensOptions';

const SettingStack = createStackNavigator();

export const SettingStackNavigator = () => {
  return (
    <SettingStack.Navigator
      initialRouteName={SettingStackScreens.Setting}
      screenOptions={NavigatorsScreenOptions}>
      <SettingStack.Screen
        name={SettingStackScreens.Setting}
        component={Setting}
        options={SettingScreenOptions}
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
