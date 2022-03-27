import { all, call, put, takeLatest } from 'redux-saga/effects'
import { savePost } from '../actions';
import { ActionsTypes } from '../actions/types'; 
import { getPost } from './calls';
import { ResponseGenerator } from './type';

function* getAllPosts () {  
    try {
        const response:ResponseGenerator = yield call(getPost);  

        yield put(savePost({
            payload:{ posts: response?.data } 
        }))
    }catch (error) {
        console.log("Falha ao carregar o post");
    }
}  

export default all([
    takeLatest(ActionsTypes.GET_POST, getAllPosts)
]); 