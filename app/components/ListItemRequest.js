import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "./Icon";

function ListItemRequest({ image, title, subtitle, body, onPress, imageSize, finish}) {
    return (
        <View style={styles.container}>
            {image && (<Image source={image} style={[styles.image, imageSize]}/>)}
            <View style={styles.textContainer}>
                {title && (<AppText style={styles.title}>{title}</AppText>)}
                {subtitle && (<AppText style={styles.subtitle}>{subtitle}</AppText>)}
                {body && (<AppText style={styles.body}>{body}</AppText>)}
            </View>
            {finish ? (<Icon name="check-circle" onPress={onPress} />) : (
                (<TouchableOpacity onPress={onPress}>
                        <Icon name="flag-checkered"  />
                    </TouchableOpacity>
                )
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: colors.cloudy,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 10,
    },
    title: {
        fontWeight: '500',
    },
    subtitle: {
        color: colors.medium,
        fontWeight: 'bold',
    },
    textContainer: {
        flexGrow: 1,
        marginLeft: 10,
    },
    body: {
        color: colors.medium,
        fontSize: 14,
    },
})

export default ListItemRequest;