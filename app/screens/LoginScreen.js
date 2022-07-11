import React, {useContext, useState} from 'react';
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
import authApi from '../api/auth';
import axios from "axios";
import useAuth from "../auth/useAuth";
import AppActivityIndicator from "../components/AppActivityIndicator";



const ValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label('Username'),
    password: Yup.string().required().min(3).label('Password'),
})

function LoginScreen({navigation}) {
    const auth = useAuth();
    const { setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (values) => {
        setIsLoading(true);
        setError(null);
        setErrorMessage('');
        const result = await authApi.login({
            username: values.username,
            password: values.password,
        });
        setIsLoading(false);
        console.log(result);
        if (!result.ok) {
            setError(result.data);
            if (result.status === 401) {
              return setErrorMessage('Invalid username or password');
            }
            return setErrorMessage(result.problem);
        }

        const userData = await axios.get('http://dar-best-route1.herokuapp.com/auth/users/me/', {
            headers: {
                Authorization: `JWT ${result.data.access}`
            }
        });

        const userObj = {
            userData: userData.data,
            access: result.data.access,
            refresh: result.data.refresh,
        }

        setTimeout(() => {
            auth.logIn(userObj);
        }, 1000);

    }

    const handleForgetPassword = () => {
        alert('Contact system Administrator');
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
            <AppActivityIndicator visible={isLoading} />
            <Screen>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/images/daladala.png')} style={styles.logo} />
                    <AppText style={styles.tagline}>Login to Continue..</AppText>
                </View>
                <View style={styles.form}>
                    <AppText style={{ color: colors.danger, textAlign: 'center' }}>{errorMessage}</AppText>
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

                        <AppSubmitButton title='Login' />
                        {/*<AppButton title='Login' onPress={handleLoginMock} />*/}
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