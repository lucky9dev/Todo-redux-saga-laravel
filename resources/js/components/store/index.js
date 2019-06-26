import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from "redux-saga";
import { RunSaga } from './sagas/SagaMiddleWare';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(RunSaga);

export default store;