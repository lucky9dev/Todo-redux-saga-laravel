import { takeLatest, call, put , takeEvery } from "redux-saga/effects";
import ActionTypes from "../constant/constant";
import  ActionTodo  from "../action/ActionTodo";



export function* RunSaga() {

    yield takeEvery(ActionTypes.TODO_DATA_REQUEST, GetTodoData);

    yield takeEvery(ActionTypes.TODO_DATA_ADD, AddTodoData);

    yield takeEvery(ActionTypes.TODO_DATA_DELETE, DeleteTodoData);
  
}

    

  function* GetTodoData() {
    
      const response = yield call(ActionTodo.TODO_FETCH_API);
      const payload = response.data;
      yield put({ type: ActionTypes.TODO_DATA_FETCH, payload });
    
  }

  function* AddTodoData(action) {
  
      const response = yield call(ActionTodo.TODO_ADD_API , action.data);
      yield call(GetTodoData);
    
  }

  function* DeleteTodoData(action) {
    
       const response = yield call(ActionTodo.TODO_DELETE_API , action.data);
       yield call(GetTodoData);

   }


