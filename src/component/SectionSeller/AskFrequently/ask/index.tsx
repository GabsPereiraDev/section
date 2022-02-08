import { Container } from "./styled";

interface IAsk{
    title: string;
    p1:string;
    p2?:string;
    p3?:string;
}

export function Ask({title,p1,p2,p3}:IAsk){
    return(
        <Container>
            <h3>{title}</h3>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
        </Container>
    )
}