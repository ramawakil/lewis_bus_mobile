import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AppTextButton({title, onPress, color = colors.white, style = {}, width = '100%'}) {
    return (
        <TouchableOpacity style={[styles.button, {color: colors[color]}, {...style}]} onPress={onPress}>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 15,
    },
    text: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    }
});


export default AppTextButton;