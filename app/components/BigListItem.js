import React from 'react';
import {StyleSheet} from 'react-native';
import ListItemRequest from "./ListItemRequest";

function BigListItem({
                         title1,
                         subtitle1,
                         body1,
                         image1,
                         title2,
                         subtitle2,
                         body2,
                         image2,
                         onPress,
                         imageSize,
                         foodPicked,
                         foodDelivered
                     }) {
    return (
        <>

            <ListItemRequest
                title={title1}
                subtitle={subtitle1}
                body={body1}
                image={image1}
                onPress={onPress}
                imageSize={imageSize}
                finish={foodPicked}
            />
            <ListItemRequest
                title={title2}
                subtitle={subtitle2}
                body={body2}
                image={image2}
                onPress={onPress}
                imageSize={imageSize}
                finish={foodDelivered}
            />
        </>
    );
}

const styles = StyleSheet.create({});

export default BigListItem;