import { Container } from "./styled";

interface IList{
    title:string;
    text1:string;
    text2:string;
}


export function ListStage({title, text1, text2}:IList){
    return(
        <Container>
            <h2>
                {title}
            </h2>

            <ul>
                <li><p>{text1}</p></li>
                <li><p>{text2}</p></li>
            </ul>
        </Container>
    )
}