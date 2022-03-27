import logoPng from './../../../assets/icon/logo.png';
import { Container, Image } from "./style"

export const AtomLogo = () => {
    return (
        <Container>
            <Image source={logoPng} />
        </Container>
    )
}