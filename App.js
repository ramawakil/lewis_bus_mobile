import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet} from 'react-native';
import OfflineNotice from "./app/components/OfflineNotice";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import {useState} from "react";
import AuthContext from "./app/auth/context";
import AppLoading from "expo-app-loading";
import authStorage from "./app/auth/storage";


export default function App() {
    const [user, setUser] = useState(true);
    const [isReady, setIsReady] = useState(false);


    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) setUser(user);
    }

    if (!isReady) return (
        <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={() => console.warn()}/>
    )


    return (
        <>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}/>
            <AuthContext.Provider value={{user, setUser}}>
                <OfflineNotice/>
                <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                    {user ? (<AppNavigator/>) : (<AuthNavigator/>)}
                    {/*<AppNavigator />*/}
                </NavigationContainer>
            </AuthContext.Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
