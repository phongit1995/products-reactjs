
import * as taskContans from './../constants/tasks';
import {ToastError}from './../helper/toastHelper';
const initalState= {
    listTask:[]
};
const taskReducer = (state= initalState,action)=>{
    switch (action.type) {
        case taskContans.FETCH_TASK :
            return {
                ...state,
                listTask:[]
            };
        case taskContans.FETCH_TASK_SUCCESS:
            return {
                ...state,
                listTask:[...action.payload]
            }
        case taskContans.FETCH_TASK_FAILED :
            const {message} = action.payload ;
            ToastError(message);
            return {
                ...state
            }
        case taskContans.FILTER_TASK_SUCCESS :
            const {payload}= action;
            return {
                ...state,
                listTask:[...payload]
            }
        default:
            return state
    }
}
export default taskReducer;