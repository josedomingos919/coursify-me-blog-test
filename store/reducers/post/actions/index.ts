import { PostActionsType, PostType } from "../types";
import { ChangePendingType, ChangePendingReturnType, ActionsTypes } from "./types";

export const changePending  = (payload:ChangePendingType):ChangePendingReturnType =>  {
    return { 
        type: ActionsTypes.CHANGE_PENDING,
        payload 
    }
}

export const savePost = ({ payload }: PostActionsType)=> ({
    type: ActionsTypes.SAVE_POST,
    payload
})

export const getPost = ()=> ({
    type: ActionsTypes.GET_POST,
})