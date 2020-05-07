import React from 'react';
import {View, StyleSheet} from 'react-native';
import {bottomed} from '../../styles/style';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import {useTranslation} from 'react-i18next';
import PrimaryTextView from '../../components/PrimaryTextView';
import {spacingFromMainScreen} from '../../constants/Geometry';
import Button from '../../components/Button';

function SignInScreen(props) {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <PrimaryTextInput
          placeholder={`${t('emailPlaceHolder')}`}
          autoCapitalize="none"
          textContentType="emailAddress"
          autoCompleteType="email"
        />
      </View>
      <View style={styles.formControl}>
        <PrimaryTextInput
          placeholder={`${t('password')}`}
          textContentType="password"
          autoCompleteType="password"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.formControl}>
        <PrimaryTextView textTransform="uppercase">
          {t('forgotPassword')}
        </PrimaryTextView>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 15,
        }}>
        <Button style={{marginRight: 20}} type="primary-outline">
          Sign up
        </Button>
        <Button style={{marginLeft: 20}} type="primary">
          Sign in
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...bottomed,
    paddingLeft: spacingFromMainScreen,
    paddingRight: spacingFromMainScreen,
  },
  formControl: {
    marginBottom: spacingFromMainScreen,
  },
});

export default SignInScreen;
