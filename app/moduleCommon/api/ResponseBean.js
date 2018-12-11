
export default class ResponseBean {
    constructor(json) {
        this.data = json;
    }

    isSuccess(){
        return this.data.code === 200;
    }

    isEmpty() {
        return this.data.data === '' || this.data.data === null || this.data.data === undefined;
    }

    getData(){
        return this.data.data;
    }
    getCode(){
        return this.data.code;
    }

    getMsg(){
        return this.data.msg;
    }

    getServiceMsg(){
        if (this.data.code === 0){
            return this.getMsg();
        }
    }
}
