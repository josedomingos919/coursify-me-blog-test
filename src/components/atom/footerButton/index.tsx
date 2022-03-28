import { TouchableOpacityProps } from 'react-native'
import { Button, Text } from "./style"
 
interface Props extends TouchableOpacityProps {
    text: string
}

export const AtomFooterButton = ({ text, ...restProps }: Props) => {
    return (
        <Button {...restProps} > 
            <Text>{ text }</Text>
        </Button>
    )
}