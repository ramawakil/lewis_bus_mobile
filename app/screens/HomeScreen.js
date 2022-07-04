import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import SelectAddressScreen from "./SelectAddressScreen";
import AppText from "../components/AppText";
import AppIconButton from "../components/AppIconButton";
import Icon from "../components/Icon";


const BusStops = [
    {id: 1, title: 'Mbagala Kizuiani', road: 'Ali Hassan Mwingi Road'},
    {id: 2, title: 'Terminal Ubungo', road: 'Ali Hassan Mwingi Road'},
    {id: 3, title: 'Kwa zoo', road: 'Ali Hassan Mwingi Road'},
    {id: 4, title: 'Sheli mpya', road: 'Ali Hassan Mwingi Road'},
    {id: 5, title: 'Chalinze', road: 'Ali Hassan Mwingi Road'},
    {id: 6, title: 'Mombasa', road: 'Ali Hassan Mwingi Road'},
    {id: 7, title: 'Gongo la mboto', road: 'Ali Hassan Mwingi Road'},
    {id: 8, title: 'Madafu', road: 'Ali Hassan Mwingi Road'},
    {id: 9, title: 'Sinza Kizuiani', road: 'Ali Hassan Mwingi Road'},
    {id: 10, title: 'Tandale', road: 'Ali Hassan Mwingi Road'},

]

function HomeScreen(props) {
    const location = useLocation();
    const [region, setRegion] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [from, setFrom] = useState(null);
    const [whereTo, setWhereTo] = useState(null);
    const [whereToWord, setWhereToWord] = useState('');
    const [data, setData] = useState(BusStops);
    const [filteredData, setFilteredData] = useState(data);
    const [whereToPlaced, setWhereToPlaced] = useState(false);
    const [fromToPlaced, setFromToPlaced] = useState(false);

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

    return (
        <>
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
                                <View style={styles.stacks}>
                                    <Icon size={50} name='flag-checkered' backgroundColor={colors.awesome} />
                                    <AppText style={{ marginLeft: 30 }}>{whereTo.title}</AppText>
                                </View>
                            </View>
                        </View>
                    </>
                )}

                { (whereToPlaced && fromToPlaced) && (
                    <View style={styles.actionBtns}>
                        <AppIconButton  name='check' backgroundColor={colors.primary} size={60} onPress={() => console.log('done')} />
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