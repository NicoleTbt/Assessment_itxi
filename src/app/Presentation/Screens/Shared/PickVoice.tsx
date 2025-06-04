import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {RootStackScreens} from '../../../Utils/Globals/ScreensNames';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../Models/Navigation/RootStack.model';
import {colors} from '../../../Utils/Globals/colors';
import CustomButton from '../../UIComponents/CustomButton';

const PickVoice = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const navigateToMain = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: RootStackScreens.Main}],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomButton text="Dismiss" buttonAction={navigateToMain} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default PickVoice;
