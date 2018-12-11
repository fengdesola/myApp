import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,

} from 'react-native';

export default class Divide extends Component {

    // static orientations = {
    //     horizontal: 'horizontal',
    //     vertical: 'vertical'
    // }

    static propTypes = {
        orientation: PropTypes.oneOfType(['horizontal', 'vertical']), //方向
        width: PropTypes.number, //宽度
        color: PropTypes.string,//颜色
    }

    static defaultProps = {
        orientation: 'horizontal',
        width: StyleSheet.hairlineWidth *2,
        color: '#e4e4e4',
    }

    render() {
        let props = Object.assign({},this.props);
        props.style = props.style?props.style:{};

        if (props.orientation && props.orientation === 'horizontal') {
            props.style =  Object.assign(props.style, {height: props.width});
        } else {
            props.style =  Object.assign(props.style, {width: props.width});
        }
        props.style =  Object.assign(props.style, {backgroundColor: props.color, flex: 1});

        return (
            <View style={props.style}/>
        );
    }
}
