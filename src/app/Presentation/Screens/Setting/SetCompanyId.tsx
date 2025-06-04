import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SettingStackNavigationProp} from '../../../Models/Navigation/SubStacks.model';
import {SettingStackScreens} from '../../../Utils/Globals/ScreensNames';
import CustomButton from '../../UIComponents/CustomButton';

const SetCompanyId = () => {
  const navigation = useNavigation<SettingStackNavigationProp>();

  const navigateToEnterCompanyId = () => {
    navigation.navigate(SettingStackScreens.EnterCompanyId);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomButton
        text="Set Other Company Id"
        buttonAction={navigateToEnterCompanyId}
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
export default SetCompanyId;
