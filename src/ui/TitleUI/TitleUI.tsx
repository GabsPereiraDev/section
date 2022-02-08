import { Container } from "./style";

interface IText{
    title: string;
}



export function TitleUI({title}:IText){
    return(
        <Container>{title}</Container>
    )
}