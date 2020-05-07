import React from 'react'
import PropTypes from 'prop-types'
import { Image, useWindowDimensions } from 'react-native'
import { logo } from '../constants/Images';

function MainLogo(props) {
    const windowWidth = useWindowDimensions().width;
    return (
        <Image resizeMode='contain' style={{
            resizeMode:"contain",
            width: windowWidth * (props.width/100),
        }} source={logo} />
    )
}

MainLogo.propTypes = {
    width: PropTypes.number
}
MainLogo.defaultProps = {
    width: 50,
}

export default MainLogo

