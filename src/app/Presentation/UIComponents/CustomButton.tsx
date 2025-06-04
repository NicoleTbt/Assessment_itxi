import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/Globals/colors';
import {ICustomButtonProps} from '../../Models/UIComponents/UIComponents.model';

const CustomButton = ({
  text,
  buttonAction,
  customButtonStyle,
  customTextStyle,
}: ICustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={buttonAction}
      style={[styles.button, customButtonStyle]}>
      <Text style={[styles.buttonText, customTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    borderRadius: 10,
    height: 45,
    backgroundColor: colors.midnightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
});

export default CustomButton;
