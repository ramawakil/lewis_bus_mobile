import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../config/colors";

function AppTextButton({ title, onPress, color = colors.white, style = {}, width = '100%' }) {
    return (
        <TouchableOpacity style={[styles.button, {color: colors[color], width: width}, {...style}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 15
    },
    text: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    }
});


export default AppTextButton;