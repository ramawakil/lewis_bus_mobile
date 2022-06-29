import React from 'react';
import {TouchableOpacity, StyleSheet} from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";

function AppIconButton({name, onPress, color = 'white', backgroundColor, size,  ...otherProps}) {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.container} {...otherProps}>
                <Icon backgroundColor={backgroundColor} name={name} iconColor={color} size={size} />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        shadowColor: colors.accent,
        shadowOpacity: 0.66,
        shadowOffset: {width: 10, height: 12},
        shadowRadius: 8,
        elevation: 25,
    }
});

export default AppIconButton;