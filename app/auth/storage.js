import AsyncStorage from '@react-native-async-storage/async-storage';


const key = 'authToken';

const storeToken = async (authToken) => {
    try {
        const authData = JSON.stringify(authToken);
        await AsyncStorage.setItem(key, authData);
    } catch (error) {
        console.log('Error storing auth token: ', error);
    }
};

const getToken = async () => {
    try {
        const authData = await AsyncStorage.getItem(key);
        return JSON.parse(authData);
    } catch (error) {
        console.log('Error getting auth token: ', error);
    }
};


const getUser = async () => {
    const token = await getToken();
    // return (token) ? jwtDecode(token) : null;
    return token ? token : null;

}

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error removing auth token: ', error);
    }
};

export default {
    storeToken,
    getUser,
    getToken,
    removeToken
};
