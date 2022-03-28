import { useDispatch } from 'react-redux';
import { useSelector } from '../../../store/hookTypes';
import { OrganismCategoryBar } from '../../components/organism/categoryBar';
import { OrganismFooter } from '../../components/organism/footer';
import { OrganismHeader } from '../../components/organism/header';
import { OrganismListPosts } from '../../components/organism/listPosts';
import { Container, ScrollView } from './styles'; 

export function Home () {
    const dispatch = useDispatch();
    const  { posts } =  useSelector((state)=> state.postReducer)
 
    return ( 
        <Container>
            <OrganismHeader /> 

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            > 
                <OrganismCategoryBar title='CURSOS ONLINE' />
                <OrganismListPosts />
                <OrganismCategoryBar title='CURSOS ONLINE' />
                <OrganismListPosts />
                <OrganismFooter />
            </ScrollView>
        </Container>
    )
}
 