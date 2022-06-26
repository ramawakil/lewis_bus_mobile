import { Alert } from 'react-native';

const appAlert = (title, message, rightBtn, onPressRight, leftBtn, onPressLeft, cancelable = true) => {

    Alert.alert(
        title,
        message,
        [
          {text: leftBtn, onPress: onPressLeft, style: 'cancel'},
          {text: 'OK', onPress: onPressRight},
        ],
        { cancelable }
      )

}

function currencyFormat(num) {
    return '' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


export default {
    appAlert,
    currencyFormat,
}