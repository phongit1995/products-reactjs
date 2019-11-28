
import * as taskContains from './../constants/tasks';

export const fetchListTask = ()=>{
    return {
        type:taskContains.FETCH_TASK
    }
}
export const fetchListTaskSuccess = data=>{
    return {
        type:taskContains.FETCH_TASK_SUCCESS,
        payload:data
    }
}
export const fetchListTaskFailed = error=>{
    return {
        type:taskContains.FETCH_TASK_FAILED,
        payload:error
    }
}
export const filterTask = keyword =>{
    return {
        type:taskContains.FILTER_TASK_,
        payload:keyword
    }
}
export const filterTaskSuccess = data =>{
    return {
        type:taskContains.FILTER_TASK_SUCCESS,
        payload:data
    }
}

