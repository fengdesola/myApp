import * as ActionType from "../../moduleCommon/ActionType";
import LoginApi from "../containers/pages/api/LoginApi";
import MD5 from "../../moduleBase/utils/MD5";
import ToastUtil from "../../moduleBase/utils/ToastUtil";
import ResponseBean from "../../moduleCommon/api/ResponseBean";
import {isEmpty} from "../../moduleBase/utils/ScreenUtil";
import * as Error from "../../moduleCommon/api/Error";

export function actionInputAccount(txt) {
    return changeTxt(txt);
}

function changeTxt(txt) {

    return {
        type : ActionType.ACTION_LOGIN_PAGE_INPUT_ACCOUNT,
        accountTxt: txt,
        // accountClearVisible: false,
    }

}

export function actionInputPwd(txt) {
    return {
        type : ActionType.ACTION_LOGIN_PAGE_INPUT_PWD,
        pwdTxt: txt,
    }
}

export function actionTogglePwd(showPwd) {
    return {
        type: ActionType.ACTION_LOGIN_PAGE_TOGGLE_PWD,
        showPwd: showPwd,
    }

}

function validate(accountName, accountPwd) {
    if (accountName === '' || accountPwd === '')
        return false;
    else
        return true;
}

export function actionLogin(accountName, accountPwd) {
    return (dispatch) => {
        if (validate(accountName, accountPwd)){

            dispatch(
                {
                    type : ActionType.ACTION_LOGIN_PAGE_LOGIN_FETCH,
                    showLoading : true,
                }
            );

            let api = new LoginApi(accountName, MD5.getMd5(accountPwd));
            api.fetchData()
                .then(resBean=>{
                    if (resBean.getCode() === 404){
                        ToastUtil.showShort(resBean.getMsg());
                    }
                    dispatch(
                        {
                            type: ActionType.ACTION_LOGIN_PAGE_LOGIN_FETCH,
                            showLoading: false,
                            data : resBean,
                        }
                    );

                })
                .catch(error=>{
                    dispatch(
                        {
                            type: ActionType.ACTION_LOGIN_PAGE_LOGIN_FETCH,
                            showLoading: false,
                        }
                    );
                })

        } else {
            ToastUtil.showShort('validate fail')
        }
    }


}
