import React from 'react';
import {View} from 'react-native';
import {centered} from '../../styles/style';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import {useTranslation} from 'react-i18next';
import PrimaryTextView from '../../components/PrimaryTextView';
import Button from '../../components/Button';
import {socialIcons} from '../../constants/Images';
import SocialIcon from '../../components/SocialIcon';
import MainLogo from '../../components/MainLogo';
import {spacingFromMainScreen} from '../../constants/Geometry';
import useStyles from './useStyles';
import useScale from '../../hooks/useScale';

function SignInScreen(props) {
  const {t} = useTranslation();
  const {styles} = useStyles();
  const {horizentalScale} = useScale();
  // navigate
  const navigate = page => {
    props.navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          ...centered,
          justifyContent: 'flex-start',
        }}>
        <MainLogo />
      </View>

      <View style={styles.formControl}>
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
        <PrimaryTextView textTransform="uppercase">
          {t('forgotPassword')}
        </PrimaryTextView>
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              navigate('Sign Up');
            }}
            type="primary-outline">
            {t('signUp')}
          </Button>
          <Button type="primary">{t('signIn')}</Button>
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

export default SignInScreen;
