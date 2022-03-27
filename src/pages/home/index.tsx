import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../store/hookTypes';
import { getPost } from '../../../store/reducers/post/actions';

export function Home () {
    const dispatch = useDispatch();
    const  { posts } =  useSelector((state)=> state.postReducer)
  
    return ( <>
        {posts?.map((item)=><Text> ID:{ item?.id }</Text>)}

        <TouchableOpacity onPress={()=> { 
            dispatch(getPost())
        }}> 
            <Text>Pegar dados</Text>
        </TouchableOpacity> 
    </>)
}
 