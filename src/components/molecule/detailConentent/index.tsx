import { AtomDetailImage } from "../../atom/detailImage"
import { AtomDetailParagraph } from "../../atom/detailParagraph"
import { AtomSubtitle } from "../../atom/subtitle"
import { Container } from "./style"
 
export const MoleculeDetailConentent = () => {
    return (
        <Container>  
            <AtomSubtitle marginBottom={25} text="como criar uma landing page de alta conversão para o seu curso online" />
            <AtomDetailParagraph key={1} text="Uma landing page de alta conversão é o que todomundo que vende online precisa ter para otimizarresultados." />
            <AtomDetailParagraph key={2} text="No mercado competitivo de hoje em dia, é justodizer que quem tem a melhor página de vendasai na frente." />
             
            <AtomDetailImage uri="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg" key={2323}  />

            <AtomDetailParagraph key={3} text="Uma landing page de alta conversão é o que todomundo que vende online precisa ter para otimizarresultados." />
            <AtomDetailParagraph key={34} text="No mercado competitivo de hoje em dia, é justodizer que quem tem a melhor página de vendasai na frente." />
        </Container>
    )
}