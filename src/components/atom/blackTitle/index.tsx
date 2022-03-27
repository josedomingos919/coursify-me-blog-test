import { Text } from "./style"

type Props = {
    text: string
}

export const AtomBlackTitle = ({ text }: Props) => {
    return (
        <Text>{ text }</Text>
    )
}