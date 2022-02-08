import Link from "next/link";
import { TitleUI } from "../../../ui/TitleUI/TitleUI";
import { Container } from "./styled";

interface IBanner{

    title: string;
    CellNumber:string;
}



export function Contact({title,CellNumber}:IBanner){
    return(
        <Container>
            <TitleUI title={title}/>
            <a href={`tel:+${CellNumber}`}>Entre Em Contato</a>
        </Container>
        

    )
}