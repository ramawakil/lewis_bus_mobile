import React from 'react';
import {Keyboard, Alert, View} from "react-native";
import messagesApi from '../api/messages';
import * as Notifications from "expo-notifications";
import AppButton from "./AppButton";

function ContactSellerForm({listing}) {
    const handleSubmit = async () => {
        // const result = await messagesApi.send(message, listing.id);

        // if (!result.ok) {
        //     console.log('Error sending message', result);
        //     return Alert.alert("Error", "Could not send the message to the seller");
        // }
        //
        // resetForm();
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Awesome",
                body: "Your message has been sent to the seller"
            },
            trigger: null,
        });
    }

    return (
        <View>
            <AppButton onPress={handleSubmit} title='Contact Seller' width='50%'/>
        </View>
    );
}

export default ContactSellerForm;