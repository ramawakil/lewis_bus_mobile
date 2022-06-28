import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import { StyleSheet } from "react-native";

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
        console.log(location);
    }, [])

    const fetchLocation = async () => {

    }

    return (
        <>
            <Screen>
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
    }
});


export default HomeScreen;