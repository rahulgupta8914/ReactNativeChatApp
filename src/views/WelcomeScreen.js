import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import MainLogo from '../components/MainLogo';
import { centered } from '../styles/style';

function WelcomeScreen(props) {
    const windowHeight = useWindowDimensions().height;
    setTimeout(() => {
        props.navigation.navigate("Sign In");
    }, 2000);
    return (
        <View style={centered}>
            <View style={{
                marginBottom: windowHeight * 0.6
            }}>
                <MainLogo width={50} />
            </View>
        </View>
    )
}

export default WelcomeScreen

