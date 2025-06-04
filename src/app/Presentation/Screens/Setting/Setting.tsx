import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../UIComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {SettingStackNavigationProp} from '../../../Models/Navigation/SubStacks.model';
import {SettingStackScreens} from '../../../Utils/Globals/ScreensNames';

const Setting = () => {
  const navigation = useNavigation<SettingStackNavigationProp>();

  const navigateToSetCompanyId = () => {
    navigation.navigate(SettingStackScreens.SetCompanyId);
  };
  const navigateToPickVoice = () => {
    navigation.navigate(SettingStackScreens.PickVoice);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomButton text="Go To PickVoice" buttonAction={navigateToPickVoice} />

      <CustomButton
        text="Go To Set Company Id"
        buttonAction={navigateToSetCompanyId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});

export default Setting;
