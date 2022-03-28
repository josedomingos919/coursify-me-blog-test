import { OrganismDetailConentent } from '../../components/organism/detailConentent';
import { OrganismFooter } from '../../components/organism/footer';
import { OrganismHeader } from '../../components/organism/header'; 
import { Container, ScrollView } from './styles'; 

export function Detail () {
 
    return ( 
        <Container>
            <OrganismHeader /> 

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >   
                <OrganismDetailConentent />
                <OrganismFooter />
            </ScrollView>
        </Container>
    )
}
 