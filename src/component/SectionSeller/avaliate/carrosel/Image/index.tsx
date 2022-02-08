import { Container } from "./styled";

interface IImage{
    url: string;
    nameUrl: string;
    avaliate: number;
}




export function ImagemAvaliate({url, nameUrl, avaliate}:IImage){
    return(
        <Container>
            <img src={url} alt={nameUrl} />
            <span>{avaliate}</span>
        </Container>
    )
}