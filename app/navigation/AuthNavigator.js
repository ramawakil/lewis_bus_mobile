import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routeConstants from '../navigation/routes'


const Stack = createStackNavigator();

const AuthNavigator = () => (

    <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: 'dodgerblue'},
        headerTintColor: 'white',
        headerShown: false
    }}>
        <Stack.Screen name={routeConstants.WELCOME} component={WelcomeScreen}/>
        <Stack.Screen name={routeConstants.LOGIN} component={LoginScreen}/>
        <Stack.Screen name={routeConstants.REGISTER} component={RegisterScreen}/>

    </Stack.Navigator>
);

export default AuthNavigator;