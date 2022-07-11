import React, {useContext} from 'react';
import Screen from "../components/Screen";
import {StyleSheet, View} from "react-native";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from 'yup';
import AuthContext from "../auth/context";
import routeConstants from "../navigation/routes";



const validationSchema = Yup.object().shape({
    fullName: Yup.string().required().min(2, 'Name must be at least 2 characters').label('Name'),
})


function AccountEditScreen({ navigation }) {
    const { setUser, user } = useContext(AuthContext);


    const handleSubmit = async (values) => {
        setUser({...user, ...values});
        navigation.navigate(routeConstants.ACCOUNT);

    }

    return (
        <>
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{images: [user.image], fullName: user.name, phone: user.phone}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <AppFormField name='fullName' icon='account'/>

                    <View style={styles.submitBtn}>
                        <AppSubmitButton title='Save Changes' backgroundColor='secondary'/>
                    </View>


                </AppForm>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    submitBtn: {
        marginTop: 45,
    }
});

export default AccountEditScreen;