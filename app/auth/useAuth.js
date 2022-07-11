import AuthContext from "./context";
import {useContext} from "react";
import authStorage from "./storage";


let useAuth;
export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const logOut = async () => {
        setUser(null);
        await authStorage.removeToken();
    }

    const logIn = async (authToken) => {
        // the auth token here refers to the user object,
        // but we should not bloat this with all the user
        // data just the necessary ones
        setUser(authToken);
        await authStorage.storeToken(authToken);
    }


    return {
        user,
        setUser,
        logOut,
        logIn,
    };
};
