import { Text } from "./style"

type Props = {
    text: string
}

export const AtomOrangeText= ({ text }: Props) => {
    return (
        <Text>{ text }</Text>
    )
}