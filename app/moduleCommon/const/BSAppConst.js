import { Dimensions } from 'react-native';

// 开发环境
// export const BSAPIURL = "http://app.dev.aijk.net/";
// export const  BSIMAGEURL = "http://file.dev.aijk.net/file/upload/image/";

// 测试环境
// export const BSAPIURL = "http://app2.test.aijk.net/";
// export const  BSIMAGEURL = "http://file2.test.aijk.net/file/upload/image/";

// 预发布环境
export const BSAPIURL = "https://apptt.bshcn.com.cn/";
export const  BSIMAGEURL = "http://117.78.42.229:9085/cfs-file/file/upload/image/";

//正式环境
// export const BSAPIURL = "https://app.bshcn.com.cn/";
// export const  BSIMAGEURL = "http://image.bshcn.com.cn/file/upload/image/";


export const BSProductID = "hcn.patient_ios";//产品码
export const BSTenantID = "hcn";//租户

export const DeviceScreenWidth = Dimensions.get('window').width;
export const DeviceScreenHeight = Dimensions.get('window').height;
