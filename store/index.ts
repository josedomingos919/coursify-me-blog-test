import { createStore, applyMiddleware } from 'redux' 
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

import { rootReducer } from "./reducers"
import { rootSaga } from './saga'

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);