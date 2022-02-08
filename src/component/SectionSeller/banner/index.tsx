import Link from "next/link";
import { Container } from "./styled";

interface IBanner{
    urlImage: string;
    name: string;
    UrlButton:string;
}



export function Banner({urlImage,name,UrlButton}:IBanner){
    return(
        <Container url={urlImage}>
            <h2>{name}</h2>
            <Link href={UrlButton}>Começe a Vender</Link>
        </Container>
        

    )
}