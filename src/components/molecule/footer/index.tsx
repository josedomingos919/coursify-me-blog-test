import { AtomFooterButton } from "../../atom/footerButton"
import { AtomLogoTransparent } from "../../atom/logoTransparent"
import { AtomWhiteFooterParagraph } from "../../atom/whiteFooterParagraph"
import { Container } from "./style"
import { Alert, Linking } from "react-native";
import { endPonits } from "../../../../services/axios/endpoints";

export const MoleculeFooter = () => {

    const handlePopenLink = async () => { 
        const supported = await Linking.canOpenURL(endPonits.SITE_LINK);
    
        if (supported) { 
          await Linking.openURL(endPonits.SITE_LINK);
        } else {
          Alert.alert(`Falha ao abrir o link!`);
        }
      };

    return (
        <Container>  
            <AtomLogoTransparent />
            <AtomWhiteFooterParagraph text="O Coursify.me é uma plataforma de ensino a distância,onde qualquer pessoa ou empresa pode construir seuEAD e vender cursos pela internet." />
            <AtomFooterButton onPress={handlePopenLink} text="Quero conhecer a plataforma!" />
        </Container>
    )
}