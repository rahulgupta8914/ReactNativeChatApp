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
import useScale from '../../hooks/useScale';
import BackArrowButton from '../../components/BackArrowButton';

function SignUpScreen(props) {
  const {t} = useTranslation();
  const {styles} = useStyles();
  const {horizentalScale,verticalScale} = useScale();
  // navigate
  const navigate = page => {
    props.navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <BackArrowButton onPress={() => props.navigation.goBack()} />
      <MainLogo style={{ marginTop: verticalScale(85)}}  />
      <View style={styles.formOuterwrapper}>
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
          <PrimaryTextInput
            placeholder={`${t('confirmPassword')}`}
            textContentType="password"
            secureTextEntry={true}
            autoCompleteType="password"
            autoCapitalize="none"
          />
        </View>
        <Button
          style={styles.buttons}
          onPress={() => navigate('Add Profile')}
          type="primary">
          {t('signUp')}
        </Button>
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
