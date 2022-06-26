import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import colors from "../config/colors";
import AppText from "./AppText";


const AppCard = ({title, subtitle, imageUrl, onPress, thumbnailUrl}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image uri={imageUrl} style={styles.img} preview={{ uri: thumbnailUrl }} tint='light' />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: 300,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover'
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subtitle: {
        color: colors.green,
        fontWeight: 'bold',
    }
});

export default AppCard;
