import React, {useState} from 'react';
import LottieView from "lottie-react-native";
import {Rating} from "react-native-ratings";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {Modal, StyleSheet} from "react-native";


function ReviewScreen({ visible, close }) {
    const [done, setDone] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmitReview = async () => {
        close();
        setDone(true);
        console.log('submit review:', comment, rating);
    }

    return (
        <Modal visible={visible} animationType='slide'>
        <Screen style={styles.container}>
            <Rating
                type="star"
                ratingCount={5}
                imageSize={40}
                onFinishRating={(rating) => setRating(rating)}
                style={styles.rating}
            />
            {done && (<LottieView source={require('../assets/animations/success.json')} onAnimationFinish={() => console.log('hey')} />) }
            <AppTextInput
                onChangeText={(e) => setComment(e)}
                multiline
                numberOfLines={6}
                placeholder="Your review here..."
            />

            <AppButton title='Submit' onPress={handleSubmitReview} />
        </Screen>
        </Modal>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    rating: {
        flexGrow: 1,
        marginVertical: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default ReviewScreen;