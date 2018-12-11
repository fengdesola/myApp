import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";

export default class HomePage extends React.Component {

    static navigationOptions = {
        title: 'home home',
        headerBackImage: <Image
                                source={require('../../img/common/arrow_left.png')}></Image>,
    }

    render() {
        return (
            <View style={{flexDirection: 'column', backgroundColor: '#e4e4e4', flex: 1, justifyContent: 'space-around',}}>
                <View style={styles.container}>
                    <Text style={{backgroundColor: 'red'}}>添加用药记录</Text>
                    <Text >sss</Text>
                    <Text >ko koi ko</Text>

                </View>
                <View style={styles.container}>
                    <Text style={{backgroundColor: 'red'}}>1</Text>
                    <Text >2</Text>
                    <Text >3</Text>

                </View>
                <View style={styles.container_wrap}>
                    <View style={styles.view_black}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.txt1}></View>
                    <View style={styles.view_black}></View>

                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    backgroundColor: 'ivory'
                }}>
                    <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 10, height: 10, flex: 0, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 10, height: 10, flex: 0, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'dodgerblue'}}/>
                </View>
            </View>
        );
    }

    componentWillUnmount() {
    }

}
const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'ivory',
        flexWrap: 'wrap'
    },
    container_wrap: {
        // flex: 0.5,
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: 'ivory',
        flexWrap: 'wrap'
    },
    txt1: {
        backgroundColor: 'red',
        height: 40,
        width: 100,
        marginLeft: 10,
    },
    view_black: {
        backgroundColor: 'black',
        height: 40,
        width: 100,
        marginTop: 10,
    },
});
