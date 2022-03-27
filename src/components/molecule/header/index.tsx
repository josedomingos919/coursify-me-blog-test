import { AtomHamburger } from "../../atom/hamburger"
import { AtomLogo } from "../../atom/logo"
import { Container } from "./style"

export const MoleculeHeader = () => {
    return (
        <Container>
            <AtomLogo />
            <AtomHamburger />
        </Container>
    )
}