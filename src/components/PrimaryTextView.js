import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { colorAccent, secondaryColorAccent } from '../constants/Colors';
import { RobotoRegular } from '../constants/Fonts';

function PrimaryTextView({children, textTransform, color}) {
    return (
        <Text style={{...styles.font,textTransform,color}}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: RobotoRegular,
        letterSpacing: 1,
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 20,
    }
})

PrimaryTextView.defaultProps = {
    textTransform: "none",
    color: colorAccent
}

PrimaryTextView.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.oneOf([colorAccent,secondaryColorAccent]),
    textTransform: PropTypes.oneOf(["capitalize","lowercase", "none", "uppercase"])
}

export default PrimaryTextView

