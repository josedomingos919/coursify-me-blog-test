export enum ActionsTypes {
    GET_POST = "@@GET_POST", 
    CHANGE_PENDING = "@@CHANGE_PENDING",
    SAVE_POST = "@@SAVE_POST"
} 

export type ChangePendingType = {
    pending: false
}

export type ChangePendingReturnType = {
    type: ActionsTypes,
    payload: ChangePendingType
}

