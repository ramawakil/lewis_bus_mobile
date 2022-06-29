import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View, VirtualizedList} from "react-native";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import Icon from "../components/Icon";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/ListItemSeparator";
import AppButton from "../components/AppButton";

function SelectAddressScreen({visible, close, initialSearchWord, setSearchWord, data, onAddressSelect, whereToBool, fromBool, whereTo, from, cancelAll}) {

    const handleReturnHomeScreen = () => {
        close();
    }

    return (
        <>
            <Modal visible={visible} animationType='slide'>
                <View style={styles.upperPart}>
                    <TouchableOpacity onPress={close}>
                        <Icon name="close" size={40} color={colors.primary}/>
                    </TouchableOpacity>
                </View>

                {
                    fromBool && (<AppText>From: {from?.title}</AppText>)
                }

                {
                    whereToBool && (<AppText>To: {whereTo?.title}</AppText>)
                }


                { !(whereToBool && fromBool) && <View style={styles.container}>
                    <View style={styles.whereTo}>
                        <AppTextInput value={initialSearchWord} onChangeText={(value) => setSearchWord(value)}
                                      style={styles.whereToInput} icon='map-search'
                                      placeholder={`${fromBool ? 'Where To:' : 'From: '} ? `}/>
                    </View>

                </View>}
                { !( whereToBool && fromBool ) && <VirtualizedList
                    style={styles.virtualizedList}
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => onAddressSelect(item)}>
                            <View style={styles.listContainer}>
                                <View style={styles.innerContainer}>
                                    <Icon name='bus-stop' size={50} backgroundColor={colors.light}
                                          iconColor={colors.primary}/>
                                    <AppText>{item.title}</AppText>
                                </View>
                                <AppText style={{color: colors.accent}}>{item.road}</AppText>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    getItem={(data, index) => data[index]}
                    getItemCount={(data) => data.length}
                    ItemSeparatorComponent={ListItemSeparator}
                />
                }

                { ( whereToBool && fromBool ) && (
                    <View style={styles.actionBtnsContainer}>
                        <AppButton title='Start Trip' color={'secondary'} onPress={handleReturnHomeScreen} />
                        <AppButton title='Cancel all' onPress={cancelAll} color={'accent'} />
                    </View>
                )}
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    upperPart: {
        width: '10%',
        marginTop: 20,
        padding: 20,
    },
    whereTo: {
        marginTop: 10,
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
    },
    listContainer: {
        padding: 10,
        margin: 15,
        backgroundColor: colors.light,
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: colors.accent,
        shadowOpacity: 0.26,
        shadowOffset: {width: 5, height: 6},

    },
    innerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    virtualizedList: {
        flex: 1,
        marginTop: 30,
        width: '100%',
    },
    actionBtnsContainer: {
        marginTop: 130,
        padding: 10,

    }

})

export default SelectAddressScreen;