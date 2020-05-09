import React from 'react';
import PropTypes from 'prop-types';
import PrimaryTextView from './PrimaryTextView';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  inputTextBorderRadius,
  primaryHeight,
  activeOpacity,
} from '../constants/Geometry';
import {
  colorAccent,
  secondaryColorAccent,
  windowBackground,
  forthColorAccent,
} from '../constants/Colors';
import {centered} from '../styles/style';
import useScale from '../hooks/useScale';

function Button({children, type, color, style, onPress}) {
  const {verticalScale} = useScale();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={{
        borderRadius: inputTextBorderRadius,
        height: verticalScale(primaryHeight),
        ...centered,
        ...style,
        flex: 0,
        width: '45%',
        elevation: 5,
        shadowOffset: {
          width: 1,
          height: 4,
        },
        shadowColor: forthColorAccent,
        shadowOpacity: 0.48,
        shadowRadius: 5,
        backgroundColor: type === 'primary' ? colorAccent : windowBackground,
        borderColor: type === 'primary' ? 0 : colorAccent,
        borderWidth: type === 'primary' ? 0 : 3,
      }}>
      <PrimaryTextView
        color={type === 'primary' ? secondaryColorAccent : colorAccent}
        textTransform="uppercase">
        {children}
      </PrimaryTextView>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  type: 'primary',
  color: secondaryColorAccent,
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'primary-outline']),
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf([colorAccent, secondaryColorAccent]),
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default Button;
