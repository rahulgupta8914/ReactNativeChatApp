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
import styles from './styles';

function SignUpScreen(props) {
  const {t} = useTranslation();
  // navigate
  const navigate = page => {
    props.navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <View style={{...centered, justifyContent: 'flex-start', marginTop: 35}}>
        <MainLogo width={50} />
      </View>
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
          secureTextEntry={true}
          autoCompleteType="password"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.formControl}>
        <PrimaryTextInput
          placeholder={`${t('confirmPassword')}`}
          textContentType="password"
          secureTextEntry={true}
          autoCompleteType="password"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.formControl}>
        <PrimaryTextView textTransform="uppercase">
          {t('forgotPassword')}
        </PrimaryTextView>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => {
            navigate('Sign In');
          }}
          style={{marginRight: 20}}
          type="primary-outline">
          {t('signIn')}
        </Button>
        <Button style={{marginLeft: 20}} type="primary">
          {t('signUp')}
        </Button>
      </View>
      <View style={styles.socialButtons}>
        <SocialIcon source={socialIcons.google} />
        <SocialIcon source={socialIcons.linkedin} />
        <SocialIcon source={socialIcons.facebook} />
      </View>
    </View>
  );
}

export default SignUpScreen;
