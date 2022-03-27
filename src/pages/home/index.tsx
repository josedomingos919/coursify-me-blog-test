import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../store/hookTypes';
import { getPost } from '../../../store/reducers/post/actions'; 
import { OrganismCategoryBar } from '../../components/organism/categoryBar';
import { OrganismHeader } from '../../components/organism/header';
import { Container } from './styles';

export function Home () {
    const dispatch = useDispatch();
    const  { posts } =  useSelector((state)=> state.postReducer)
  
    return ( 
        <Container>
            <OrganismHeader /> 
            <OrganismCategoryBar />
        </Container>
    )
}
 