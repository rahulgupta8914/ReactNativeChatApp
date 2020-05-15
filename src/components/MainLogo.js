import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {logo} from '../constants/Images';

function MainLogo(props) {
  return (
    <Image
      resizeMode="contain"
      style={{
        resizeMode: 'contain',
        width: props.width,
      }}
      source={logo}
    />
  );
}

MainLogo.propTypes = {
  width: PropTypes.number,
};
MainLogo.defaultProps = {
  width: 100,
};

export default MainLogo;
