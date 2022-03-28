import { AtomOrangeText } from "../../atom/orangeText"
import { AtomParagraph } from "../../atom/paragraph"
import { AtomPostImage } from "../../atom/postImage"
import { AtomSubtitle } from "../../atom/subtitle"
import { Container, ContainerBody } from "./style"
import { useNavigation } from '@react-navigation/native'; 

export const MoleculePostCard = () => {
    const navigate  = useNavigation();
    const handleReadMore = ()=>   navigate.navigate("Detail" as never)
    
    return ( 
            
        <Container>
            <AtomPostImage />
            <ContainerBody> 
                <AtomSubtitle text="Como criar uma landing page de alta ..." />
                <AtomParagraph text="Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar ..." />  
                <AtomOrangeText onPress={handleReadMore} text="Leia mais" />
            </ContainerBody>  
        </Container> 
    )
}