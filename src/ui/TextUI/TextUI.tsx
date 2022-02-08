import { Container } from "./style";

interface IText{
    text: string;
}



export function TextUI({text}:IText){
    return(
        <Container>{text}</Container>
    )
}