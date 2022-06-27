import React from 'react';
import {Image, View, StyleSheet} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function AppLogo(props) {
    return (
        <>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/images/daladala.png')} style={styles.logo} />

            </View>
        </>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 20,
        shadowColor: 'black',
        shadowOpacity: 0.36,

    }
})

export default AppLogo;