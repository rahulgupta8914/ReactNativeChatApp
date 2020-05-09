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
import { spacingFromMainScreen } from '../../constants/Geometry';
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
        <PrimaryTextView textTransform="uppercase">
          {t('forgotPassword')}
        </PrimaryTextView>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => {
            navigate('Sign Up');
          }}
          style={{marginRight: horizentalScale(20)}}
          type="primary-outline">
          {t('signUp')}
        </Button>
        <Button style={{marginLeft: horizentalScale(20)}} type="primary">
          {t('signIn')}
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

export default SignInScreen;
