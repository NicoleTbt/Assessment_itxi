import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackScreens} from '../../Utils/Globals/ScreensNames';
import {OnBoardStackRoutes, SettingStackRoutes} from './SubStacks.model';

export type RootStackRoutes = {
  [RootStackScreens.Main]: undefined;
  [RootStackScreens.VoiceBot]: undefined;
  [RootStackScreens.OnBoard]: NavigatorScreenParams<OnBoardStackRoutes>;
  [RootStackScreens.Setting]: NavigatorScreenParams<SettingStackRoutes>;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackRoutes>;
