import { Text } from "./style"

type Props = {
    text: string
}

export const AtomTitle = ({ text }: Props) => {
    return (
        <Text>{ text }</Text>
    )
}