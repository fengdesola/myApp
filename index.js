import { AppRegistry } from 'react-native';
import AppMain from './app/containers/app';
import { YellowBox } from 'react-native';
import Root from "./app/moduleCommon/Root";
import App from "./App";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('myApp', () => App);
