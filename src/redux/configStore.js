import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './../reducers/index';
import createSagaMiddleware from 'redux-saga' ;
import rootSaga from './../sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;
const configStore = ()=>{
    const middleware = [thunk,sagaMiddleware];
    const enhander= [applyMiddleware(...middleware)]
    const store = createStore(rootReducers,composeEnhancers(...enhander));
    sagaMiddleware.run(rootSaga)
    return store ;
}
export default configStore ;