import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";


function OfflineNotice(props) {
    const netInfo = useNetInfo();

    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No internet connection</AppText>
            </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        top: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
        width: '100%',
        zIndex: 1,

    },
    text: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        padding: 2,
    }
});

export default OfflineNotice;