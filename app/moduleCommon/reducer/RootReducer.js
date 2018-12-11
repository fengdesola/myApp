/**
 * 事件分发 总模块
 */

import { combineReducers } from 'redux';
import LoginPageReducer from "../../moduleAccount/reducers/LoginPageReducer";

//这里面必须要有初始数据 - 否则报错
const rootReducer = combineReducers({
    //GetWeatherReducer : GetWeatherReducer,
    LoginPageReducer,
});

export default rootReducer;
