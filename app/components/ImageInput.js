import React, { useEffect } from 'react';
import {Image, TouchableWithoutFeedback, View, StyleSheet, Alert} from "react-native";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ImageInput({ imageUri, onChangeImage, ...otherProps }) {

    useEffect( () => {
        requestPermission();
    }, []);


    const requestPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(  );
        if (status !== 'granted') {
            Alert.alert('Permission to access camera roll is required for this feature.');
        }
    };


    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        }
        else{
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                {text: 'Yes', onPress: () => onChangeImage(null)},
                {text: 'No'},
            ]);
        }
    }

    const selectImage = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                base64: true,
                quality: 0.5
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    }




    return (
        <TouchableWithoutFeedback onPress={() => handlePress()} {...otherProps}>
        <View style={styles.container}>
            { !imageUri && (<MaterialCommunityIcons color={colors.medium} name='camera' />) }
            { imageUri && (<Image
                    source={{uri: imageUri}}
                    style={styles.image}
                />) }
        </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        backgroundColor: colors.light,
        height: 100,
        width: 100,
        overflow: 'hidden',
        marginHorizontal: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    }
});

export default ImageInput;