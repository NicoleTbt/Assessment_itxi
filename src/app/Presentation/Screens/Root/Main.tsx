import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import SettingIcon from '../../../Utils/Assets/SettingIcon';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../Models/Navigation/RootStack.model';
import {RootStackScreens} from '../../../Utils/Globals/ScreensNames';
import CustomButton from '../../UIComponents/CustomButton';

const Main = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const navigateToSettings = () => {
    navigation.navigate(RootStackScreens.Setting);
  };

  const navigateToVoiceBot = () => {
    navigation.navigate(RootStackScreens.VoiceBot);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        hitSlop={5}
        onPress={navigateToSettings}
        style={styles.settingButton}>
        <SettingIcon width="30" height="30" />
      </TouchableOpacity>

      <CustomButton text="VoiceBot" buttonAction={navigateToVoiceBot} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    gap: 30,
  },
  settingButton: {
    margin: 10,
    alignSelf: 'flex-start',
  },
});

export default Main;
