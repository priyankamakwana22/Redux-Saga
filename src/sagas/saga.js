import {takeEvery, put, delay, takeLatest} from 'redux-saga/effects';
// import { delay} from 'redux-saga';

export function* ageUpAsync() {
  yield delay(4000); // It is like a setTimeOut
  yield put({type: 'AGE_UP_ASYNC', value: 1}); // put : It will perform the action what ever we want to perform.
}

export function* watchAgeUp() {
  yield takeEvery('AGE_UP', ageUpAsync); // takeEvery  : It works as a watcher if the api is fetched or not
  yield takeLatest('AGE_UP', ageUpAsync); // takeLatest : When there are so many requests than it will only perform the latest action like when we are clicking on a button 10 times then also it will take the last time only.
}
