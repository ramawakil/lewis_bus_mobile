import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import routeConstants from '../navigation/routes'
import AccountEditScreen from "../screens/AccountEditScreen";


const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name={routeConstants.ACCOUNT} component={AccountScreen}/>
            <Stack.Screen name={routeConstants.ACCOUNT_EDIT} component={AccountEditScreen}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;