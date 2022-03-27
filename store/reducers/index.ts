import { combineReducers } from 'redux'
import { postReducer } from './post'
 
const rootReducer = combineReducers({ 
    postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export  { rootReducer };