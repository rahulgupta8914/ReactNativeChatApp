import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import {activeOpacity} from '../constants/Geometry';

function SocialIcon({source, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
      }}
      activeOpacity={activeOpacity}>
      <Image source={source} />
    </TouchableOpacity>
  );
}

SocialIcon.propTypes = {
  source: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SocialIcon;
