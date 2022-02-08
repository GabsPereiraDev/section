import { Container } from "./styled";

interface IImage{
    work: string;
    name: string;
    description:string;
}



export function DescriptionAvaliate({work, name, description}:IImage){
    return(
        <Container>
            <div className="nameUser"><strong>{name}</strong> {work}</div>
            <p>{description}</p>

        </Container>
    )
}