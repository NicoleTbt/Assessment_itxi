import {TextStyle, ViewStyle} from 'react-native';

export interface ICustomButtonProps {
  text: string;
  buttonAction: (any: any) => any;
  customButtonStyle?: ViewStyle;
  customTextStyle?: TextStyle;
}
