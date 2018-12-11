import {createStackNavigator, StackNavigator} from "react-navigation";
import Splash from "../pages/Splash";
import HomePage from "../pages/home/HomePage";
import {themeColor} from "../moduleCommon/theme/ThemeColor";
import {Image} from 'react-native'
import React from 'react';
import LoginPage from "../moduleAccount/containers/pages/LoginPage";

const AppMain = createStackNavigator(
    {
        SplashPage: {
            screen: Splash,
        },
        LoginPage: {
            screen: LoginPage
        },
        HomePage: {
            screen: HomePage
        },


    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: themeColor
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 20
            },
            headerBackImage: <Image style={{height: 40, width: 40}}
                                    source={require('../img/common/arrow_left.png')}></Image>,
            headerTintColor: '#fff'
        }
    }
)

export default AppMain
