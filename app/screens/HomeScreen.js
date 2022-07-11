import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import SelectAddressScreen from "./SelectAddressScreen";
import AppText from "../components/AppText";
import AppIconButton from "../components/AppIconButton";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ReviewScreen from "./ReviewScreen";


const BusStops = [
    { id: 1, title: 'Makumbusho' },
    { id: 2, title: 'Kigamboni' },
    { id: 3, title: 'M/Complex' },
    { id: 4, title: 'Gerezani' },
    { id: 5, title: 'Mabibo' },
    { id: 6, title: 'Buza' }
]

const busStopsRoutes = [
    { id: 1, title: 'Makumbusho - Kigamboni', stops: [ 'makumbusho', 'M/complex', 'Kigamboni' ], images: ['1.png', '2.png'], fare: 'Tsh 1250' },
    { id: 2, title: 'Kigamboni - Mabibo', stops: ['kigamboni', 'Gerezani', 'Mabibo'], images:  ['2.png', '3.png'], fare: 'Tsh 1200' },
    { id: 3, title: 'Buza - Kigamboni', stops: ['buza', 'm/complex', 'kigamboni'], images:  ['4.png', '2.png'], fare: 'Tsh 1250' },
    { id: 4, title: 'Buza - Mabibo', stops: ['buza', 'm/complex', 'gerezani', 'mabibo'], images:  ['4.png', '3.png'], fare: 'Tsh 1500' },

]

function HomeScreen(props) {
    const location = useLocation();
    const [region, setRegion] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [from, setFrom] = useState(null);
    const [whereTo, setWhereTo] = useState(null);
    const [whereToWord, setWhereToWord] = useState('');
    const [data, setData] = useState(busStopsRoutes);
    const [filteredData, setFilteredData] = useState(data);
    const [whereToPlaced, setWhereToPlaced] = useState(false);
    const [fromToPlaced, setFromToPlaced] = useState(false);
    const [visible, setVisible] = useState(false);

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

    useEffect(() => {
        if (whereToWord) {
            const filtered = data.filter(item => item.title.toLowerCase().includes(whereToWord.toLowerCase()));
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [whereToWord])

    const setLocationAddresses = (address) => {
        console.log(address);
        if (from) {
            setWhereTo(address);
            setWhereToPlaced(true);
        } else {
            setFrom(address);
            setFromToPlaced(true);
        }
        console.log(from);
    }

    const cancelAll = () => {
        setWhereTo(null);
        setWhereToPlaced(false);
        setFrom(null);
        setFromToPlaced(false);
    }


    const finishAll = () => {
        setVisible(true);
        setWhereTo(null);
        setWhereToPlaced(false);
        setFrom(null);
        setFromToPlaced(false);
    }


    return (
        <>
            <ReviewScreen visible={visible} close={() => setVisible(false)}  />
            <SelectAddressScreen cancelAll={cancelAll} fromTo={from} whereTo={whereTo} whereToBool={whereToPlaced} fromBool={fromToPlaced} initialSearchWord={whereToWord} setSearchWord={setWhereToWord} visible={openModal}
                                 close={handleCloseModal} data={filteredData} onAddressSelect={setLocationAddresses} />
            <Screen>
                { !(whereToPlaced && fromToPlaced) ? (<View style={styles.whereTo}>
                    <TouchableOpacity onPress={handleOpenModal}>
                        <AppTextInput onChangeText={(value) => handleWhereToWord(value)} style={styles.whereToInput}
                                      icon='map-search' placeholder='Where To ?'/>
                    </TouchableOpacity>
                </View>) : (
                    <>
                        <View style={styles.whereTo}>
                            <View style={{
                                padding: 10,
                            }}>
                                <View style={styles.stacks}>
                                    <Icon size={50} name='bus-stop-uncovered' backgroundColor={colors.secondary}  />
                                    <AppText style={{ marginLeft: 30 }}>{from.title}</AppText>
                                </View>
                                <AppText>Stands - {whereTo.fare}</AppText>
                                { whereTo.stops.map((stop) =>
                                    <AppText key={stop}>- {stop}</AppText>
                                ) }


                            </View>
                        </View>
                    </>
                )}

                { (whereToPlaced && fromToPlaced) && (
                    <View style={styles.actionBtns}>
                        <AppIconButton  name='check' backgroundColor={colors.primary} size={60} onPress={() => finishAll()} />
                        <AppIconButton name='close' backgroundColor={colors.danger} size={60} onPress={cancelAll} />
                    </View>
                )}

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
        width: "100%",
        marginTop: 60,
        paddingHorizontal: 10,
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
    },
    stacks: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtns: {
        zIndex: 15,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40,
        right: 10
    },
    btn: {
        marginTop: 10,
        shadowColor: colors.accent,
        shadowOpacity: 0.66,
        shadowOffset: {width: 10, height: 12},
        shadowRadius: 8,
        elevation: 25,
    }

});


export default HomeScreen;