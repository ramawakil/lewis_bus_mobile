import React from 'react';
import {TouchableOpacity} from "react-native";
import Icon from "./Icon";

function AppIconButton({name, onPress, color = 'white', backgroundColor, size,  ...otherProps}) {
    return (
        <>
            <TouchableOpacity onPress={onPress} {...otherProps}>
                <Icon backgroundColor={backgroundColor} name={name} iconColor={color} size={size} />
            </TouchableOpacity>
        </>
    );
}

export default AppIconButton;