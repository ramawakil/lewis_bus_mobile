import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from "react-native";

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    view: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default Screen;