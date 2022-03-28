import { Text } from "./style"

type Props = {
    text: string
}

export const AtomWhiteFooterParagraph = ({ text }: Props) => {
    return (
        <Text>{ text }</Text>
    )
}