import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="home" size={40} color={colors.white}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        height: 80,
        width: 80,
        bottom: 30,
        borderColor: colors.white,
        borderWidth: 10,
        justifyContent: 'center',
        borderRadius: 40,
    },
});

export default NewListingButton;