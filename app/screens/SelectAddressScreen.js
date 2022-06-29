import React from 'react';
import {Modal, View, StyleSheet, TouchableOpacity, VirtualizedList} from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import Icon from "../components/Icon";

function SelectAddressScreen({ visible, close, initialSearchWord, setSearchWord, data }) {
    return (
        <>
            <Modal visible={visible} >
                <Screen>
                <View style={styles.upperPart}>
                    <TouchableOpacity onPress={close}>
                        <Icon name="close" size={40} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.whereTo}>
                    <AppTextInput value={initialSearchWord} onChangeText={(value) => setSearchWord(value)} style={styles.whereToInput} icon='map-search' placeholder='From To ?' />
                </View>

                </View>
                    {/*<VirtualizedList */}
                    {/*    data={data}*/}
                    {/*    */}
                    {/*/>*/}
                    <View>
                        <View>

                        </View>

                    </View>
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperPart: {
      padding: 20,
    },
    whereTo: {
        marginTop: 60,
        borderRadius: 25,
        backgroundColor: colors.light,
        zIndex: 15,
        position: 'relative',
        justifyContent: 'space-around',
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