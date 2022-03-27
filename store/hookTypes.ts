import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux' 
import { rootReducer } from './reducers'

export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector