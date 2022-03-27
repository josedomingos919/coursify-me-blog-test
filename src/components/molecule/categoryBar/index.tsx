
import { AtomBlackTitle } from "../../atom/blackTitle"
import { AtomTitle } from "../../atom/title"
import { Container } from "./style"

export const MoleculeCategoryBar = () => {
    return (
        <Container> 
            <AtomTitle text="CURSOS ONLINE" />
            <AtomBlackTitle text="VER MAIS ►" />
        </Container>
    )
}