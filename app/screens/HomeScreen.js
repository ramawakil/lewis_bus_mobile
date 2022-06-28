import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import {StyleSheet, View} from "react-native";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import SelectAddressScreen from "./SelectAddressScreen";

function HomeScreen(props) {
    const location = useLocation();
    const [region, setRegion] = useState(null);

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

    return (
        <>
            <SelectAddressScreen visible={true} />
            <Screen>
                <View style={styles.whereTo}>
                    <AppTextInput style={styles.whereToInput} icon='map-search' placeholder='Where To ?' />
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