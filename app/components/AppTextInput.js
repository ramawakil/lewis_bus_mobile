import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import AppStyles from "../config/styles";

function AppTextInput({icon, width = '100%', ...otherProps}) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && (<MaterialCommunityIcons name={icon} style={styles.icon} size={25} color={colors.medium}/>) }
            <TextInput style={[AppStyles.text, {width: '100%'}]} {...otherProps} placeholderTextColor={colors.medium} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 15,
        alignSelf: 'center',
    },

});

export default AppTextInput;