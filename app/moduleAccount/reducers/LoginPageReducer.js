import * as ActionType from "../../moduleCommon/ActionType";

const initialState = {
    inputAccount : {
        accountTxt: "",
    },
    inputPwd : {
        pwdTxt: "",
    },
    togglePwd : {
        showPwd: true,
    },
    loginData: {

    }

}

export default function getLoginPage(state = initialState, action) {
    let newState;
    switch (action.type) {
        case ActionType.ACTION_LOGIN_PAGE_INPUT_ACCOUNT:{
            newState = Object.assign({}, state, {
                inputAccount: {
                    accountTxt: action.accountTxt,
                }

            });
            break;
        }
        case ActionType.ACTION_LOGIN_PAGE_INPUT_PWD:{
            newState = Object.assign({}, state, {
                inputPwd: {
                    pwdTxt: action.pwdTxt,
                }

            });
            break;
        }
        case ActionType.ACTION_LOGIN_PAGE_TOGGLE_PWD:{
            newState = Object.assign({}, state, {
                togglePwd: {
                    showPwd: action.showPwd,
                }
            });
            break;
        }
        case ActionType.ACTION_LOGIN_PAGE_LOGIN_FETCH:{
            newState = Object.assign({}, state, {
                loginData: {
                    showLoading : action.showLoading,
                    data : action.data,
                }
            });
            break;
        }
        default:
            newState = state;
            break;

    }

    return newState;
}
