import logoPng from '../../../assets/image/teste.jpg';
import { Container, Image } from "./style"

export const AtomPostImage = () => {
    return (
        <Container>
            <Image source={logoPng} />
        </Container>
    )
}