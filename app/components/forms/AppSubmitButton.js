import React from 'react';
import AppButton from "../AppButton";
import {useFormikContext} from "formik";

function AppSubmitButton({ title, backgroundColor }) {
    const { submitForm } = useFormikContext()

    return (
        <AppButton color={backgroundColor} title={title} onPress={submitForm}/>
    );
}

export default AppSubmitButton;