import React, {createRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function AppActivityIndicator({visible = false}) {
    if (!visible) return null;
    let animation = createRef();

    useEffect(() => {
        animation.current.play();
    }, []);

    return (
        <View style={styles.overlay}>
             <LottieView source={require('../assets/animations/loader.json')} ref={animation} loop={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.8,
    }
});

export default AppActivityIndicator;