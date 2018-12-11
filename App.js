/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Root from "./app/moduleCommon/Root";

export default class App extends Component {
    render() {
        return (
            <Root/>
        );
    }
}

const styles = StyleSheet.create({

});
// import React, {Component} from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     SectionList,
//     Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
// } from 'react-native';
//
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//         'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//
//     _onPressButton() {
//         Alert.alert('You tapped the button!')
//     }
//
//     _onLongPressButton() {
//         Alert.alert('You long-pressed the button!')
//     }
//
//     render() {
//
//         let aa = Math.max(...[1, 2, 3]);
//         const cA = 'xxx';
//         // good
//         const a = 'foobar';
//         const b = `foo${a}bar`;
//         console.log("===", aa);
//
//
//
//
//         return (
//             <View style={styles.container}>
//                 <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableHighlightXXX</Text>
//                     </View>
//                 </TouchableHighlight>
//                 <TouchableOpacity onPress={this._onPressButton}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableOpacityXGCDF</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableNativeFeedback
//                     onPress={this._onPressButton}
//                     background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//                     </View>
//                 </TouchableNativeFeedback>
//                 <TouchableWithoutFeedback
//                     onPress={this._onPressButton}
//                 >
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//                     </View>
//                 </TouchableWithoutFeedback>
//                 <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
//                                     underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>Touchable with Long Press</Text>
//                     </View>
//                 </TouchableHighlight>
//                 <Text style={styles.welcome}>
//                     Welcome to React Native!
//                 </Text>
//                 <Text style={styles.instructions}>
//                     To get started, edit App.js
//                 </Text>
//                 <Text style={styles.instructions}>
//                     {instructions}
//                 </Text>
//
//
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//     button: {
//         marginBottom: 30,
//         width: 260,
//         alignItems: 'center',
//         backgroundColor: '#2196F3'
//     },
//     buttonText: {
//         padding: 20,
//         color: 'white'
//     }
// });
