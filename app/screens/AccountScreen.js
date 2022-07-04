import React, {useContext} from 'react';
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AuthContext from "../auth/context";

function AccountScreen(props) {
    const { setUser } = useContext(AuthContext);

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <>
            <Screen>
                <AppButton title='Logout' onPress={handleLogout} />

            </Screen>
        </>
    );
}

export default AccountScreen;