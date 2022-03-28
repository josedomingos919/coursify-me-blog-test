import { TouchableOpacity } from "react-native"
import { Text } from "./style"

type Props = {
    text: string,
    onPress?: ()=> void
}
 
export const AtomOrangeText= ({ text, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{ text }</Text>
        </TouchableOpacity>
    )
} 