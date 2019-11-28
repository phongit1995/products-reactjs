import axiosServers from './../common/axiosServices';
import {API_ENDPOINT} from './../constants/index';
const url ='tasks';
export const getListTask  = ()=>{
    return axiosServers.get(`${API_ENDPOINT}/${url}`);
} 
