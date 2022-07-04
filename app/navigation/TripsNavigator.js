import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import routeConstants from '../navigation/routes'
import TripScreen from "../screens/TripScreen";


const Stack = createStackNavigator();

const EarningNavigator = () => {
    return (
        <Stack.Navigator mode='modal' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={routeConstants.TRIPS} component={TripScreen}/>
            {/*<Stack.Screen name={routeConstants.TRIPS_DETAILS} component={TripsDetailsScreen}/>*/}
        </Stack.Navigator>
    );
};

export default EarningNavigator;