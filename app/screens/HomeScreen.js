import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import SelectAddressScreen from "./SelectAddressScreen";

function HomeScreen(props) {
    const location = useLocation();
    const [region, setRegion] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [whereToWord, setWhereToWord] = useState('');

    const handleMapRegionChange = (region) => {

    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }



    useEffect(() => {
        if (location) {
            setRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    }, [])

    const fetchLocation = async () => {

    }

    const handleWhereToWord = (word) => {
        setWhereToWord(word);
        setOpenModal(true);
    }

    return (
        <>
            <SelectAddressScreen initialSearchWord={whereToWord} setSearchWord={setWhereToWord} visible={openModal} close={handleCloseModal} />
            <Screen>
                <View style={styles.whereTo}>
                    <TouchableOpacity onPress={handleOpenModal}>
                        <AppTextInput onChangeText={(value) => handleWhereToWord(value)} style={styles.whereToInput} icon='map-search' placeholder='Where To ?' />
                    </TouchableOpacity>
                </View>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                initialRegion={region}
                followsUserLocation={true}
            >

            </MapView>

            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    whereTo: {
        width: '100%',
        marginTop: 60,
        borderRadius: 25,
        backgroundColor: colors.light,
        zIndex: 15,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.accent,
        shadowOpacity: 0.66,
        shadowOffset: {width: 10, height: 12},
        shadowRadius: 8,
        elevation: 25,

    },
    whereToInput: {
        width: '90%',
    }

});


export default HomeScreen;