import { Container } from "./styled";

interface IImage{
    url:string;
    name:string;
    row:boolean;
}


export function ImageStage({url, name, row}:IImage){
    return(
        <Container row ={row}>
            <img src={url} alt={name} />
        </Container>
    )
}