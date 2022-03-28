
import { MoleculeCategoryBar } from "../../molecule/categoryBar"
import { Container } from "./style"

type Props = {
    title: string
}

export const OrganismCategoryBar = ({ title }:Props) => {
    return (
        <Container> 
            <MoleculeCategoryBar title={title} />
        </Container>
    )
}