import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import {activeOpacity} from '../constants/Geometry';
import useScale from '../hooks/useScale';

function SocialIcon({source, onPress}) {
  const {verticalScale} = useScale();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingTop: verticalScale(15),
        paddingBottom: verticalScale(15),
        paddingLeft: 10,
        paddingRight: 10,
      }}
      activeOpacity={activeOpacity}>
      <Image source={source} style={{resizeMode: 'contain',width:verticalScale(45)}} />
    </TouchableOpacity>
  );
}

SocialIcon.propTypes = {
  source: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SocialIcon;
