import { Text } from "./style"

interface Props {
    text: string,
    marginBottom?: number
}

export const AtomDetailParagraph = ({ text, marginBottom = 30 }: Props) => {
    return (
        <Text marginBottom={marginBottom}>{ text }</Text>
    )
}