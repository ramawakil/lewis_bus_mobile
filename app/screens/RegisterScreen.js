import React, {useState} from 'react';
import Screen from "../components/Screen";
import {Image, StyleSheet, View} from "react-native";
import AppText from "../components/AppText";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppTextButton from "../components/AppTextButton";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import colors from "../config/colors";
import routeConstants from "../navigation/routes";
import useAuth from "../auth/useAuth";
import authApi from '../api/auth';
import AppActivityIndicator from "../components/AppActivityIndicator";




function RegisterScreen({navigation}) {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (values) => {
        setIsLoading(true);
        setError(null);
        const result = await authApi.register({
            username: values.username,
            first_name: values.name,
            password: values.password,
        })
        setIsLoading(false);
        if (!result.ok) {
            setError(result.data);
            return setErrorMessage(result.problem);
        }
        return navigation.navigate(routeConstants.LOGIN);

    }

    const handleLogin = () => {
        navigation.navigate(routeConstants.LOGIN);
    }

    return (
        <>
            <AppActivityIndicator visible={isLoading} />
            <Screen>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/images/daladala.png')} style={styles.logo}/>
                    <AppText style={styles.tagline}>Create a new account..</AppText>
                </View>
                <View style={styles.form}>
                    <AppForm
                        initialValues={{name: '', username: '', password: ''}}
                        onSubmit={handleRegister}
                        validationSchema={ValidationSchema}
                    >
                        <AppFormField
                            icon='account-box'
                            name='name'
                            placeholder='Fullname'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />

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
                            <AppTextButton onPress={handleLogin} title='Already Registered ? Login now'/>
                        </View>

                        <AppSubmitButton title='Create account'/>
                        {/*<AppButton title='Register' onPress={handleRegister} />*/}
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
        marginBottom: 5,
    },
    tagline: {
        color: colors.secondary,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 5,
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: 'flex-start',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
        shadowColor: 'black',
        shadowOpacity: 0.36,

    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    btnText: {
        color: colors.secondary,
    }
})

export default RegisterScreen;