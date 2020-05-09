import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SignInScreen from '../views/authScreens/SignInScreen';
import SignUpScreen from '../views/authScreens/SignUpScreen';
import WelcomeScreen from '../views/WelcomeScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {windowBackground, colorPrimaryDark} from '../constants/Colors';

const Stack = createStackNavigator();

/* For refernce: https://reactnavigation.org/docs/themes/ */
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: windowBackground,
    // primary: ""
  },
};

function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={colorPrimaryDark}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: windowBackground}}>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default Navigation;

// We will have a loding checkpoint when app will start, where we will render Welcome Screen,
// Later we can implement redux or context api, to get if user is logged in or not
// and depending on the authentication value will render Other Routes
// Just like react-router-dom
