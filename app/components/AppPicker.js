import React, {useState} from 'react';
import {Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({icon, items, numberColumns = 1, placeholder, onSelectItem, PickerItemComponent = PickerItem, selectedItem, width = '100%'}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons name={icon} style={styles.icon} size={25} color={colors.medium}/>)}
                    {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>)}
                    <MaterialCommunityIcons name='chevron-down' size={25} color={colors.medium}/>
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <Button title='Close' onPress={() => setModalVisible(!modalVisible)}/>
                <FlatList
                    numColumns={numberColumns}
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({item}) => <PickerItemComponent
                        item={item}
                        onPress={() => {
                        setModalVisible(false);
                        onSelectItem(item);
                    }}
                    />}
                />
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 15,
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        color: colors.medium,
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    },

});


export default AppPicker;