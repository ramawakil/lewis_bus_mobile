import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import ImageInput from "./ImageInput";
import colors from "../config/colors";
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from "@expo/vector-icons";


function ImageInputList({imageUris, max = 100, onRemoveImage, onAddImage}) {

    const [refreshing, setRefreshing] = useState(false);

    const selectImage = async () => {
        if (imageUris.length < max) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });
            if (!result.cancelled) {
                onAddImage(result.uri);
                setRefreshing(true);
            }
        } else {
            alert('You can only Add ' + max + ' images');
        }

    };

    const scrollView = useRef();


    return (
        <View>
            <ScrollView ref={scrollView} horizontal
                        onContentSizeChange={() => scrollView.current.scrollToEnd({animated: true})}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput imageUri={uri} key={uri} onChangeImage={() => onRemoveImage(uri)}/>
                        </View>
                    ))}
                    { (imageUris.length < max) && (<View style={styles.camera}>
                        <TouchableOpacity onPress={selectImage}>
                            <MaterialCommunityIcons
                                name="camera"
                                size={60}
                                color={colors.medium}
                            />
                        </TouchableOpacity>
                    </View>)}

                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10,
    },
    list: {},
    camera: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.light,
        width: 100,
        height: 100,
        borderRadius: 15,
        marginHorizontal: 10,
    },


});

export default ImageInputList;