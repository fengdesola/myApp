import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Dimensions, Text, View, Modal, ActivityIndicator } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;




// export class EasyLoading {
//     constructor() {
//     }
//     static bind(loading, key = 'default') {
//         loading && (this.map[key] = loading);
//     }
//     static unBind(key = 'default') {
//         this.map[key] = null
//         delete this.map[key];
//     }
//     static show(text = 'Loading...', timeout = -1, key = 'default') {
//         this.map[key] && this.map[key].setState({ "isShow": true, "text": text, "timeout": timeout });
//     }
//     static dismis(text = 'Loading...', key = 'default') {
//         this.map[key] && this.map[key].setState({ text: text, isShow: false });
//     }
// }
//
// EasyLoading.map = {};



export class Loading extends React.Component {

    static propTypes = {
        visibility: PropTypes.bool,
        color: PropTypes.string,
        text: PropTypes.string,
        textStyle: PropTypes.any,
        loadingStyle: PropTypes.any,
    };
    static defaultProps = {
        visibility: false,
    }

    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
    }
    render() {

        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.props.visibility}
                onRequestClose={() => { } }>
                <View style={[styles.load_box, this.props.loadingStyle]}>
                    <ActivityIndicator animating={true} color={this.props.color || '#FFF'} size={'large'} style={styles.load_progress} />
                    <Text style={[styles.load_text, this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    load_box: {
        width: 100,
        height: 100,
        backgroundColor: '#0008',
        alignItems: 'center',
        marginLeft: SCREEN_WIDTH / 2 - 50,
        marginTop: SCREEN_HEIGHT / 2 - 50,
        borderRadius: 10
    },
    load_progress: {
        position: 'absolute',
        width: 100,
        height: 90
    },
    load_text: {
        marginTop: 70,
        color: '#FFF',
    }
});
