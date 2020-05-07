import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet, ViewPropTypes} from 'react-native';
import {
  colorAccent,
  secondaryColorAccent,
  thirdColorAccent,
  forthColorAccent,
} from '../constants/Colors';
import {
  spacingFromMainScreen,
  inputTextOuterPadding,
  inputTextBorderRadius,
  primaryFontSize,
  primaryHeight,
  inputTextSideSpacing,
  primaryBorderWidth,
} from '../constants/Geometry';
import {RobotoRegular} from '../constants/Fonts';
function PrimaryTextInput(props) {
  return (
    <View style={[styles.textWrapper]}>
      <TextInput
        style={styles.inputBox}
        autoCapitalize={props.autoCapitalize}
        autoCompleteType={props.autoCompleteType}
        textContentType={props.textContentType}
        placeholder={props.placeholder}
        value={props.value}
        placeholderTextColor={thirdColorAccent}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    //   this wrapper is used for ios get shadow effect
    // here i'm tring to reach same effect in both devices
    paddingBottom: inputTextOuterPadding,
    paddingRight: inputTextOuterPadding,
    borderRadius: inputTextBorderRadius,
    backgroundColor: forthColorAccent, 
    shadowOpacity: .48,
    elevation: 6, // it only works in android
  },
  inputBox: {
    borderRadius: inputTextBorderRadius,
    paddingRight: inputTextSideSpacing,
    paddingLeft: inputTextSideSpacing,
    fontSize: primaryFontSize,
    color: colorAccent,
    fontFamily: RobotoRegular,
    height: primaryHeight,
    borderColor: secondaryColorAccent,
    borderWidth: primaryBorderWidth,
    backgroundColor: secondaryColorAccent,
  },
});

PrimaryTextInput.defaultProps = {
  autoCapitalize: 'none',
  textContentType: 'name',
  autoCompleteType: 'name',
};

PrimaryTextInput.propTypes = {
  style: PropTypes.objectOf(ViewPropTypes.style),
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoCompleteType: PropTypes.oneOf([
    'cc-csc',
    'cc-exp',
    'cc-exp-month',
    'cc-exp-year',
    'cc-number',
    'email',
    'name',
    'password',
    'postal-code',
    'street-address',
    'tel',
    'username',
    'off',
  ]),
  textContentType: PropTypes.oneOf([
    'none',
    'URL',
    'addressCity',
    'addressCityAndState',
    'addressState',
    'countryName',
    'creditCardNumber',
    'emailAddress',
    'familyName',
    'fullStreetAddress',
    'givenName',
    'jobTitle',
    'location',
    'middleName',
    'name',
    'namePrefix',
    'nameSuffix',
    'nickname',
    'organizationName',
    'postalCode',
    'streetAddressLine1',
    'streetAddressLine2',
    'sublocality',
    'telephoneNumber',
    'username',
    'password',
    'newPassword',
    'oneTimeCode',
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default PrimaryTextInput;
