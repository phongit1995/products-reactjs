import axios from 'axios';
class AxiosServer {
    constructor(){
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleError);
        this.instance = instance ;
    }
    handleSuccess(responsive){
        return responsive ;
    }
    handleError (error){
        return Promise.reject(error);
    }
    get(url){
        return this.instance.get(url);
    }
}
export default new AxiosServer();