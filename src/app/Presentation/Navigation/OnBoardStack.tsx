import {createStackNavigator} from '@react-navigation/stack';
import {OnBoardStackScreens} from '../../Utils/Globals/ScreensNames';
import Welcome from '../Screens/OnBoard/Welcome';
import EnterCompanyId from '../Screens/Shared/EnterCompanyId';
import PickVoice from '../Screens/Shared/PickVoice';
import {NavigatorsScreenOptions} from '../../Models/Navigation/ScreensOptions';

const OnBoardStack = createStackNavigator();

export const OnBoardStackNavigator = () => {
  return (
    <OnBoardStack.Navigator
      initialRouteName={OnBoardStackScreens.Welcome}
      screenOptions={NavigatorsScreenOptions}>
      <OnBoardStack.Screen
        name={OnBoardStackScreens.Welcome}
        component={Welcome}
      />
      <OnBoardStack.Screen
        name={OnBoardStackScreens.EnterCompanyId}
        component={EnterCompanyId}
      />
      <OnBoardStack.Screen
        name={OnBoardStackScreens.PickVoice}
        component={PickVoice}
      />
    </OnBoardStack.Navigator>
  );
};
