import { all } from 'redux-saga/effects'

import postSaga from "./../reducers/post/saga";

export function * rootSaga (): any {
    console.log("rootSaga is running...");
    return yield all([ postSaga ]);
}