import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {centered} from '../../styles/style';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import {useTranslation} from 'react-i18next';
import PrimaryTextView from '../../components/PrimaryTextView';
import Button from '../../components/Button';
import {socialIcons} from '../../constants/Images';
import SocialIcon from '../../components/SocialIcon';
import MainLogo from '../../components/MainLogo';
import useStyles from './useStyles';

function SignUpScreen(props) {
  const {t} = useTranslation();
  const {styles} = useStyles();
  // navigate
  const navigate = page => {
    props.navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <View style={{...centered, justifyContent: 'flex-start'}}>
        <MainLogo />
      </View>

      <View style={{...styles.formControl, flex: 1.5}}>
        <PrimaryTextInput
          placeholder={`${t('emailPlaceHolder')}`}
          autoCapitalize="none"
          textContentType="emailAddress"
          autoCompleteType="email"
        />
        <PrimaryTextInput
          placeholder={`${t('password')}`}
          textContentType="password"
          secureTextEntry={true}
          autoCompleteType="password"
          autoCapitalize="none"
        />
        <PrimaryTextInput
          placeholder={`${t('confirmPassword')}`}
          textContentType="password"
          secureTextEntry={true}
          autoCompleteType="password"
          autoCapitalize="none"
        />
        <PrimaryTextView textTransform="uppercase">
          {t('forgotPassword')}
        </PrimaryTextView>
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              navigate('Sign In');
            }}
            type="primary-outline">
            {t('signIn')}
          </Button>
          <Button type="primary">{t('signUp')}</Button>
        </View>
        <View style={styles.socialButtons}>
          <SocialIcon source={socialIcons.google} />
          <SocialIcon source={socialIcons.linkedin} />
          <SocialIcon source={socialIcons.facebook} />
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;