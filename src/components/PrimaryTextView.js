import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {colorAccent, secondaryColorAccent} from '../constants/Colors';
import {RobotoRegular} from '../constants/Fonts';
import useScale from '../hooks/useScale';

function PrimaryTextView({children, textTransform, color}) {
  const {scaleFont} = useScale();
  return (
    <Text
      style={{
        fontFamily: RobotoRegular,
        letterSpacing: 1,
        fontSize: scaleFont(13),
        fontWeight: 'bold',
        lineHeight: 20,
        textTransform,
        color,
      }}>
      {children}
    </Text>
  );
}

PrimaryTextView.defaultProps = {
  textTransform: 'none',
  color: colorAccent,
};

PrimaryTextView.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf([colorAccent, secondaryColorAccent]),
  textTransform: PropTypes.oneOf([
    'capitalize',
    'lowercase',
    'none',
    'uppercase',
  ]),
};

export default PrimaryTextView;
