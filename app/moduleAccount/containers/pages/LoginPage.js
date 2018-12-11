import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from "react-native";
import {scaleHeight, scaleSize, setSpText} from '../../../moduleBase/utils/ScreenUtil';
import {textColor, themeColor} from "../../../moduleCommon/theme/ThemeColor";
import Divide from "../../../moduleBase/containers/component/Divide";
import ToastUtil from "../../../moduleBase/utils/ToastUtil";
import LoginApi from "./api/LoginApi";
import MD5 from "../../../moduleBase/utils/MD5";
import {actionInputAccount, actionInputPwd, actionLogin, actionTogglePwd} from "../../actions/LoginPageAction";
import { connect } from 'react-redux';
import {Loading} from "../../../moduleBase/containers/component/Loading";

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const mainBg = require('../../../img/account/b_account_bg_register.png');
const imgLogo = require('../../../img/account/b_account_img_login_logo.png');


class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'login',
    }

    constructor(props) {
        super(props);
        this.state = {
            txtUser: '',
            userClearVisibility: false,
            txtPwd: '',
            isPwd: true,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("=========componentWillReceiveProps");
        console.log(nextProps);
        this._receiveLogin(nextProps);
    }


    _receiveLogin(nextProps) {
        const {mState, navigation} = nextProps;
        console.log("==========receiveLogin");
        console.log(mState);
        if (this.props.mState.loginData !== mState.loginData && mState.loginData.data){
            let data = mState.loginData.data;
            if (data.isSuccess()){
                navigation.navigate('HomePage')
            }
        }
    }


    _userClearVisibility() {
        const {mState, inputAccount} = this.props;
        if (!mState.inputAccount.accountTxt) {
            return null;
        } else {
            return <TouchableOpacity
                onPress={inputAccount}
                // onPress={() => {this.refs.inputUser.clear()}}
            >
                <Image style={{width: scaleSize(40), height: scaleSize(40),}}
                       source={require('../../../img/account/b_account_ic_editclear.png')}
                />
            </TouchableOpacity>
        }
    }




    render() {
        console.log("loginPage=====render");
        const {mState, inputAccount, inputPwd, togglePwd, login} = this.props;
        return (
            <View style={styles.container}>
                <Loading visibility={mState.loginData.showLoading}/>
                <Image style={{width: scaleSize(750), height: scaleSize(390),}} source={mainBg}/>
                <Image style={{width: scaleSize(192), height: scaleSize(192), marginTop: scaleSize(150) * -1}}
                       source={imgLogo}/>

                <View style={styles.layInput}>
                    <Image style={{width: scaleSize(40), height: scaleSize(40)}}
                           source={require('../../../img/account/b_account_ic_login_iphone.png')}/>
                    <TextInput ref={'inputUser'} style={styles.txtInput}
                               placeholder={'phone no'}
                               placeholderTextColor={'gray'}
                               underlineColorAndroid={'transparent'}
                               keyboardType={'numeric'}
                               maxLength={11}
                               selectTextOnFocus={true}
                               onChangeText={
                                   // (text) => {
                                   // this.setState({txtUser: text});
                                   // if (text.length > 0) {
                                   //     this.setState({userClearVisibility: true});
                                   // } else {
                                   //     this.setState({userClearVisibility: false});
                                   // }
                                   //      }
                                   inputAccount
                                }
                               value={mState.inputAccount.accountTxt}/>

                    {this._userClearVisibility()}
                </View>
                <View style={styles.layInput}>
                    <Divide/>
                    {/*<View style={{backgroundColor: '#e4e4e4', height: scaleSize(2), flex: 1}}/>*/}
                </View>
                <View style={styles.layInput}>
                    <Image style={{width: scaleSize(40), height: scaleSize(40)}}
                           source={require('../../../img/account/b_account_ic_login_password.png')}/>
                    <TextInput style={styles.txtInput}
                               placeholder={'pwd'}
                               placeholderTextColor={'gray'}
                               underlineColorAndroid={'transparent'}
                               maxLength={16}
                               secureTextEntry={mState.togglePwd.showPwd}
                               onChangeText={inputPwd}
                               value={mState.inputPwd.pwdTxt}/>

                    <TouchableOpacity
                        onPress={()=>togglePwd(!mState.togglePwd.showPwd)}>
                        <Image style={{width: scaleSize(40), height: scaleSize(40)}}
                               source={mState.togglePwd.showPwd ? require('../../../img/account/b_account_ic_login_password_close.png') : require('../../../img/account/b_account_ic_login_password_visible.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.layInput}>
                    <Divide/>
                </View>
                <TouchableOpacity style={styles.layInput} onPress={()=>login(mState.inputAccount.accountTxt, mState.inputPwd.pwdTxt)}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>login</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }

    componentDidMount() {

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    layInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scaleSize(80),
        marginRight: scaleSize(80),
    },
    txtInput: {
        height: scaleHeight(88),
        flex: 1,
        fontSize: setSpText(28),
        color: textColor,
        marginLeft: scaleSize(20)
    },
    loginBtn: {
        marginTop: scaleHeight(20),
        height: scaleHeight(88),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeColor,
        borderRadius: 1000,
    },
    loginBtnText: {
        fontSize: setSpText(32),
        color: 'white'
    }

});

const mapStateToProps = (state)=>{

    console.log(state);
    return {
        mState : state.LoginPageReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputAccount : (txt)=>{
            dispatch(actionInputAccount(txt));
        },
        inputPwd : (txt)=>{
            dispatch(actionInputPwd(txt));
        },
        togglePwd : function togglePwd (showPwd){
            dispatch(actionTogglePwd(showPwd));
        },
        login : function login(accountName, accountPwd) {
            dispatch(actionLogin(accountName, accountPwd));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
// export default LoginPage;
