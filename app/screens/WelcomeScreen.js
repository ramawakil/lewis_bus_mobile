import React from 'react';
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";


function WelcomeScreen(props) {

    const handleLogin = () => {

    }

    const handleRegister = () => {

    }

    return (
        <>
            <Screen >
               <View style={styles.bottomContainer}>
                   <AppButton title='login' onPress={handleLogin}  />
                   <AppButton title='register' onPress={handleRegister}  />
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
        marginHorizontal: 10,
    }
})

export default WelcomeScreen;