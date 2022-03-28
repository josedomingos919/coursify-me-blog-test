import { Text } from "./style"

interface Props {
    text: string,
    marginBottom?: number
}

export const AtomSubtitle = ({ text, marginBottom = 16 }: Props) => {
    return (
        <Text marginBottom={marginBottom}>{ text }</Text>
    )
}