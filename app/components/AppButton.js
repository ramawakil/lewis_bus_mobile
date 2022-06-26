import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from '../config/colors';

const AppButton = ({title, onPress, width = '100%', color = 'primary', ...otherProps}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color], width: width}]} onPress={onPress} {...otherProps}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

export default AppButton;
