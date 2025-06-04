import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {OnBoardStackScreens} from '../../../Utils/Globals/ScreensNames';
import {useNavigation} from '@react-navigation/native';
import {OnBoardStackNavigationProp} from '../../../Models/Navigation/SubStacks.model';
import CustomButton from '../../UIComponents/CustomButton';
const Welcome = () => {
  const navigation = useNavigation<OnBoardStackNavigationProp>();

  const navigateToEnterCompanyId = () => {
    navigation.push(OnBoardStackScreens.EnterCompanyId);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomButton
        text="Get Started"
        buttonAction={navigateToEnterCompanyId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
