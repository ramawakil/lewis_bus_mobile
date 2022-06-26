import React, {useState} from 'react';
import {Image, Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "./AppText";

function AppRatingStar({ disabled, rate = 2.5, maxRate = 5}) {
    const [rating, setRating] = useState(rate);
    const [maxRating, setMaxRating] = useState(maxRate);

    let stars = [];

    for (let i = 0; i < maxRating; i++) {
        stars.push(
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.7}
                key={i}
                onPress={() => setRating(i + 1)}
            >
                <Image style={styles.starImage}
                       source={i < rating ? (require('../assets/star_filled.png')) : (require('../assets/star_corner.png'))}  />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.MainContainer}>
            <View style={styles.childView}>{stars}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    starImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
});

export default AppRatingStar;