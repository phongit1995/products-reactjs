import { take,call,put,takeLatest ,fork,delay,select} from 'redux-saga/effects';
import * as TaskAction from './../constants/tasks';
import { getListTask } from './../apis/tasks';
import {STATUS_CODE} from './../constants/index';
import {fetchListTaskSuccess,fetchListTaskFailed,filterTaskSuccess} from './../actions/tasks';
function *rootSaga(){
    yield fork(watchFetchListTaskAction);
    yield takeLatest(TaskAction.FILTER_TASK_,filterTaskSaga)
}
function * watchFetchListTaskAction(){
    yield take(TaskAction.FETCH_TASK);
    const res = yield call(getListTask);
    const {status,data} = res ;
    if(status===STATUS_CODE.SUCCESS){
        yield(put(fetchListTaskSuccess(data)));
    }else {
        yield(put(fetchListTaskFailed(data)));
    }
}
function * filterTaskSaga({payload}){
    yield delay(500);
    console.log(payload);
    let list = yield select(state=>state.tasks.listTask);
    console.log(list);
    const listTaskFilter = list.filter(task=>{
       return  task.title.toLowerCase().includes(payload)
    })
    yield(put(filterTaskSuccess(listTaskFilter)));
}
export default rootSaga ;