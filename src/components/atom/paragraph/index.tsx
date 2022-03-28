import { Text } from "./style"

type Props = {
    text: string
}

export const AtomParagraph = ({ text }: Props) => {
    return (
        <Text>{ text }</Text>
    )
}