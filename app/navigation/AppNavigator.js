import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AccountNavigator from "./AccountNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import routeConstants from '../navigation/routes'
import HomeScreen from "../screens/HomeScreen";
import TripsNavigator from "./TripsNavigator";
import HomeScreenButton from "./HomeScreenButton";


const Tab = createBottomTabNavigator();


function AppNavigator(props) {
    // useNotifications();

    return (
        <Tab.Navigator
            initialRouteName={routeConstants.HOME}

        >
            <Tab.Screen name={routeConstants.TRIP_NAVIGATOR} component={TripsNavigator} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='history' color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={routeConstants.HOME} component={HomeScreen}
                        options={({navigation, route}) => ({
                            tabBarButton: ({}) => (
                                <HomeScreenButton onPress={() => navigation.navigate(routeConstants.HOME)}/>
                            ),
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name='home' color={color} size={size}/>
                            )
                        })}/>
            <Tab.Screen name={routeConstants.ACCOUNT_NAVIGATOR} component={AccountNavigator} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='account' color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default AppNavigator;