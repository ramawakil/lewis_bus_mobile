import React from 'react';
import {useFormikContext} from "formik";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

function AppFormPicker({name, items, numberColumns, placeholder, width, PickerItemComponent}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numberColumns={numberColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                />

            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;