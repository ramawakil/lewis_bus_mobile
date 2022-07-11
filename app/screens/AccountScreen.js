import React, {useContext} from 'react';
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AuthContext from "../auth/context";
import {View, StyleSheet} from "react-native";
import AppTextButton from "../components/AppTextButton";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import routeConstants from "../navigation/routes";

function AccountScreen({navigation}) {
    const { setUser, user } = useContext(AuthContext);
    const { userData } = user;

    const handleLogout = () => {
        setUser(null);
    }

    console.log(user);

    return (
        <>
            <Screen>
                <View style={styles.upperAction}>
                    <AppTextButton title='Edit' color='primary'  onPress={() => navigation.navigate(routeConstants.ACCOUNT_EDIT)} />
                </View>
                <View style={styles.container}>
                    <ListItem
                        title={userData ? userData.first_name : ''}
                        subtitle={userData?.username ? userData?.username : ''}
                        image={user.image ? {uri: user.image} : null }
                        iconComponent={user.image ? null : <Icon name='account' backgroundColor={colors.medium} size={70} />}
                    />
                </View>
                <ListItem
                    title='Log out'
                    iconComponent={<Icon name='logout' backgroundColor={colors.primary}/>}
                    onPress={() => handleLogout()}
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 15,
    },
    upperAction: {
        marginHorizontal: 15,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
});


export default AccountScreen;