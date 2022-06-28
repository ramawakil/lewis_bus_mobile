import React from 'react';
import {Modal, View, StyleSheet} from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";

function SelectAddressScreen({ visible }) {
    return (
        <>
            <Modal visible={visible} >
                <View style={styles.container}><View style={styles.whereTo}>
                    <AppTextInput style={styles.whereToInput} icon='map-search' placeholder='Where To ?' />
                </View>
                    <View style={styles.whereTo}>
                        <AppTextInput style={styles.whereToInput} icon='map-search' placeholder='Where To ?' />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    whereTo: {
        width: '100%',
        marginTop: 60,
        borderRadius: 25,
        backgroundColor: colors.light,
        zIndex: 15,
        position: 'relative',
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

})

export default SelectAddressScreen;