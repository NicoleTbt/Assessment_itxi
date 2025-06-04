import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../Utils/Globals/colors';
import {useNavigation} from '@react-navigation/native';
import {OnBoardStackNavigationProp} from '../../../Models/Navigation/SubStacks.model';
import {OnBoardStackScreens} from '../../../Utils/Globals/ScreensNames';
import CustomButton from '../../UIComponents/CustomButton';

const EnterCompanyId = () => {
  const navigation = useNavigation<OnBoardStackNavigationProp>();
  const [error, setError] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState('');

  const navigateToPickVoice = () => {
    navigation.push(OnBoardStackScreens.PickVoice);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>{error}</Text>
        <TextInput
          style={styles.input}
          value={companyId}
          onChangeText={setCompanyId}
          placeholder="Enter Company ID"
        />

        <CustomButton
          text="Continue"
          buttonAction={navigateToPickVoice}
          customButtonStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '80%',
    marginTop: '20%',
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: colors.defaultBorderColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: colors.defaultBackgroundColor,
  },
  button: {
    width: '100%',
  },
});

export default EnterCompanyId;
