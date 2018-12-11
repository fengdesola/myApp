import React, {Component} from 'react';
import Toast from 'react-native-root-toast';

export default class ToastUtil extends React.Component {

    static showShort(text, callBack) {
        ToastUtil.show(text, undefined, callBack);
    }

    static showLong(text, callBack) {
        ToastUtil.show(text, 4000, callBack);
    }

    static show(text, duration, callBack) {

        if (!text){
            return;
        }

        if (duration === undefined) {
            duration = 2000;
        }
        return Toast.show(text, {
            position: Toast.positions.CENTER,
            duration: duration,
            onHidden: () => {
                if (callBack) {
                    callBack();
                }
            }
        });
    }

    static hide(toast) {
        Toast.hide(toast);
    }
}
// import { Alert, ToastAndroid, Platform } from 'react-native';
//
// const showShort = (content, isAlert) => {
//   if (!content) {
//     return;
//   }
//   if (isAlert || Platform.OS === 'ios') {
//     Alert.alert('提示', content.toString());
//   } else {
//     ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
//   }
// };
//
// const showLong = (content, isAlert) => {
//   if (isAlert || Platform.OS === 'ios') {
//     Alert.alert('提示', content.toString());
//   } else {
//     ToastAndroid.show(content.toString(), ToastAndroid.LONG);
//   }
// };
//
// export default {
//   showShort,
//   showLong
// };


