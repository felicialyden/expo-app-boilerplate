import { ButtonProps, Button as PaperButton } from "react-native-paper"

function Button(children: JSX.Element, props: ButtonProps) {
    return (
        <PaperButton {...props}>
            {
                children
            }
        </PaperButton>
    )
}

export default Button