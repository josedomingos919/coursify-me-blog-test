import { Container, Image } from "./style" 

interface Props {
    uri: string
} 

export const AtomDetailImage = ({ uri }: Props) => {
    return (
        <Container>
            <Image 
                resizeMode="contain" 
                source={{ uri }} 
            />
        </Container>
    )
}
 