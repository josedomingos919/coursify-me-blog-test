import {  ActionsTypes  } from './actions/types';
import { PostStateType, PostActionsType } from './types';

const initialState: PostStateType = {
    pending: false,
    posts: [],
    error: null
}

export const postReducer = (state = initialState, action: PostActionsType): PostStateType =>{
    switch(action.type){
        case ActionsTypes.SAVE_POST: 
            return {
                ...state,
                posts: action.payload?.posts
            }

        case ActionsTypes.CHANGE_PENDING:
            return {
                ...state,
                pending: !state.pending
            }
        default:
            return state;
    }
}