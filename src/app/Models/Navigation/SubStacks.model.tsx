import {StackNavigationProp} from '@react-navigation/stack';
import {
  OnBoardStackScreens,
  SettingStackScreens,
} from '../../Utils/Globals/ScreensNames';

export type OnBoardStackRoutes = {
  [OnBoardStackScreens.Welcome]: undefined;
  [OnBoardStackScreens.EnterCompanyId]: undefined;
  [OnBoardStackScreens.PickVoice]: undefined;
};

export type SettingStackRoutes = {
  [SettingStackScreens.Setting]: undefined;
  [SettingStackScreens.SetCompanyId]: undefined;
  [SettingStackScreens.EnterCompanyId]: undefined;
  [SettingStackScreens.PickVoice]: undefined;
};

export type OnBoardStackNavigationProp =
  StackNavigationProp<OnBoardStackRoutes>;

export type SettingStackNavigationProp =
  StackNavigationProp<SettingStackRoutes>;
