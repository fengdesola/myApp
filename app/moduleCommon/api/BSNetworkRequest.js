import {BSProductID, BSAPIURL} from "../const/BSAppConst";
import MD5 from "../../moduleBase/utils/MD5";
import ToastUtil from "../../moduleBase/utils/ToastUtil";
import ResponseBean from "./ResponseBean";


// 请求回调 code
export const BSRequestStatus = {
    timeout: -1001,                  //请求超时
    success: 200,                    //成功
    failure: 201,                    //失败
    accessTokenExpired: 202,         //token过期
    loginUserNotFound: 404,          //用户不存在
    loginUserPasswordNotRight: 501,  //登录密码错误
    loginInOtherDevice: 615,         //账号在其他设备登录
    accountRegisted: 603,            //账号已经存在
    registedInOtherTenant: 670,      //账号在其他租户下已经存在
    regFailed: 714,                  //预约挂号失败异常
    tokenFailure: 409,               //令牌失效
    loginFailure: 503,               //设备异地登录
    encryFailure: 504,               //加密失败
    appealFailure: 502,              //账号申诉-手机号未注册
}

// 请求类型
export const RequestType = {
    json: "*.jsonRequest",//json,默认类型
    form: "file/header",  //表单
}
// 请求头参数key
export const ProductCode = "B-Product-Code";
export const ServiceId = "X-Service-Id";
export const AccessToken = "X-Access-Token";
export const AuthFailedCode = "X-Auth-Failed-Code";
export const Signature = "X-Signature";
export const RegionCode = "X-RegionCode";
export const ContentType = "Content-Type";

// 请求回调错误默认描述
export const RequestErrorMsg = "服务器开了个小差, 请稍后再试!";
export const RequestTimeoutMsg = "请求超时，请检查您的网络!";
// 请求回调参数key
export const CodeStatus = "code";
export const Success = "success";
export const Message = "msg";
export const Body = "body";
export const Type = "type";

export default class BSNetworkRequest {

    /**************需要自类继承的*************/
    // 请求URL
    baseUrl() {
        return BSAPIURL;
    }

    // 请求类型
    requestUrl() {
        return RequestType.json;
    }


    // 子类请求头
    requestHeader() {
        return null;
    }

    // 请求body
    requestArgument() {
        return null;
    }

    /******************************************/

    // 请求头
    requestHeaderFieldValue() {

        let headers = this.requestHeader();
        if (!headers) {
            headers = new Object();
        }
        headers[ProductCode] = BSProductID;
        headers[AccessToken] = "b60ad689-7988-4d92-bc16-e15526f9853a";
        headers[RegionCode] = "440300000000";
        // post内容格式为json
        headers[ContentType] = "application/json";

        //有token时加密
        if (this.needEncryFromService()) {
            let token = headers[AccessToken];
            let salt = token.substr(4, 4);
            let body = [salt, JSON.stringify(this.requestArgument())].sort();
            let signature = MD5.getMd5(body[0] + body[1]);
            headers[Signature] = signature;
        }

        return headers;
    }

    // 配置需要加密的服务
    needEncryFromService() {
        return true;
    }

    fetchData() {

        return new Promise((resolve, reject) => {
            let url = this.baseUrl() + this.requestUrl();
            let header = this.requestHeaderFieldValue();
            let body = this.requestArgument();

            console.log("url===" + url);
            console.log("header===" + JSON.stringify(header));
            console.log("body===" + JSON.stringify(body));

            this._fetchTimeout(
                fetch(url, {
                    method: "POST",
                    headers: header,
                    body: JSON.stringify(body),
                }), 10000
            )
                .then(response => {
                    console.log("response===");
                    console.log(response)
                    return response.json();
                })
                .then(responseJson => {
                    // this.logRequest(responseJson,header,body,responseJson);
                    console.log("responseJson===");
                    console.log(responseJson);
                    let bean = new ResponseBean(responseJson);
                    ToastUtil.showShort(bean.getServiceMsg());
                    resolve(bean);
                })
                .catch(error => {
                    // this.logRequest(url,header,body,error);
                    console.log("error===");
                    console.log(error);
                    let msg = error.message != RequestTimeoutMsg ? RequestErrorMsg : RequestTimeoutMsg;
                    ToastUtil.showShort(msg);
                    reject(error);
                })
        });
    }

    // 私有方法
    _fetchTimeout(fetch, timeout) { // 超时版的fetch
        return Promise.race([
            fetch,
            new Promise(function (resolve, reject) {
                let error = new Error(RequestTimeoutMsg);
                setTimeout(() => reject(error), timeout);
            })
        ]);
    }

    logRequest(url, header, body, result) {
        console.log("url:" + url);
        console.log("header:" + JSON.stringify(header));
        console.log("body:" + JSON.stringify(body));
        console.log("result" + JSON.stringify(result));
    }
}
