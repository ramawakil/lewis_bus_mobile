import React from 'react';
import Screen from "../components/Screen";
import colors from "../config/colors";
import {Image, StyleSheet, View} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import routeConstants from "../navigation/routes";


function WelcomeScreen({ navigation }) {

    const handleLogin = () => {
        console.log('login');
        navigation.navigate(routeConstants.LOGIN);
    }

    const handleRegister = () => {
        console.log('register');
        navigation.navigate(routeConstants.REGISTER);
    }

    return (
        <>
            <Screen>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/images/daladala.png')} style={styles.logo} />
                    <AppText style={styles.tagline}>Dar Routes Guider</AppText>
                </View>
                <View style={styles.bottomContainer}>
                    <AppButton title='login' onPress={handleLogin}/>
                    <AppButton title='register' color='secondary' onPress={handleRegister}/>
                </View>
            </Screen>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.light,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagline: {
        color: colors.secondary,
        fontSize: 25,
        textAlign: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: 'flex-start',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
        shadowColor: 'black',
        shadowOpacity: 0.36,

    }
})

export default WelcomeScreen;