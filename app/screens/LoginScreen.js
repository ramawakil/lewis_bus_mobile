import React, {useContext} from 'react';
import Screen from "../components/Screen";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import AppForm from "../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppTextButton from "../components/AppTextButton";
import AppButton from "../components/AppButton";
import AuthContext from "../auth/context";
import routeConstants from "../navigation/routes";

const ValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label('Username'),
    password: Yup.string().required().min(3).label('Password'),
})

function LoginScreen({navigation}) {
    const { setUser } = useContext(AuthContext);

    const handleLogin = () => {
        console.log('login');
    }

    const handleForgetPassword = () => {
        alert('Not implemented yet!');
        console.log('forget password');
    }

    const handleRegister = () => {
        navigation.navigate(routeConstants.REGISTER);
    }

    const handleLoginMock = () => {
        setUser({name: 123})
    }

    return (
        <>
            <Screen>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/images/daladala.png')} style={styles.logo} />
                    <AppText style={styles.tagline}>Login to Continue..</AppText>
                </View>
                <View style={styles.form}>
                    <AppForm
                        initialValues={{username: '', password: ''}}
                        onSubmit={handleLogin}
                        validationSchema={ValidationSchema}
                    >

                        <AppFormField
                            icon='account'
                            name='username'
                            placeholder='Phone Number or Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />

                        <AppFormField
                            icon='lock'
                            name='password'
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry
                        />

                        <View style={styles.btnContainer}>
                            <AppTextButton onPress={handleForgetPassword} title='Forgot Password ?' />
                            <AppTextButton onPress={handleRegister} title='Create Account' />
                        </View>

                        {/*<AppSubmitButton title='Login' />*/}
                        <AppButton title='Login' onPress={handleLoginMock} />
                    </AppForm>
                </View>


            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    tagline: {
        color: colors.secondary,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: 'flex-start',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
        shadowColor: 'black',
        shadowOpacity: 0.36,

    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    btnText: {
        color: colors.secondary,
    }

})
export default LoginScreen;