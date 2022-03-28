import { AtomBlackTitle } from "../../atom/blackTitle"
import { AtomTitle } from "../../atom/title"
import { Container } from "./style"

type Props = {
    title: string
}

export const MoleculeCategoryBar = ({ title }:Props) => {
    return (
        <Container> 
            <AtomTitle text={title} />
            <AtomBlackTitle text="VER MAIS ►" />
        </Container>
    )
}