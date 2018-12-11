import MD5Util from "react-native-md5";

export default class MD5 {

    // md5字符串加密
    static getMd5(text){
        return MD5Util.hex_md5(text);
    }
}
