import BSNetworkRequest from "../../../../moduleCommon/api/BSNetworkRequest";
import {BSTenantID} from "../../../../moduleCommon/const/BSAppConst";

export default class LoginApi extends BSNetworkRequest {

    constructor(userName, pwd) {
        super();
        this.userName = userName;
        this.pwd = pwd;
    }

    requestUrl(){
        return 'logon/login';
    }
    requestHeader() {
        return {};
    }

    requestArgument() {
        return {
            'loginName': this.userName,
            'pwd': this.pwd,
            'tenantId': BSTenantID,
            'rid': 'patient',
            'forAccessToken': true
        };
    }
}
