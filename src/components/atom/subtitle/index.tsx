import { Text } from "./style"

type Props = {
    text: string
}

export const AtomSubtitle = ({ text }: Props) => {
    return (
        <Text>{ text }</Text>
    )
}