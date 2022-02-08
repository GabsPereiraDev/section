import { ReactNode } from "react";
import { Container } from "./styled";
import  Link  from 'next/link';

interface IConteiner{
    icon:ReactNode;
    title:string;
    description:string;
    url:string;
}


export function Icons({icon,title,description,url}:IConteiner){
    return(
        <Container>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href='url'>Saiba mais</Link>
        </Container>
    )
}