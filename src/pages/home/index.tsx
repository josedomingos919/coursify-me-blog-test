import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../store/hookTypes';
import { getPost } from '../../../store/reducers/post/actions'; 
import { OrganismHeader } from '../../components/organism/header';
import { Container } from './styles';

export function Home () {
    const dispatch = useDispatch();
    const  { posts } =  useSelector((state)=> state.postReducer)
  
    return ( 
        <Container>
            <OrganismHeader /> 
            
            {posts?.map((item)=><Text> ID:{ item?.id }</Text>)}

            <TouchableOpacity onPress={()=> { 
                dispatch(getPost())
            }}> 
                <Text>Pegar dados</Text>
            </TouchableOpacity> 
        </Container>
    )
}
 