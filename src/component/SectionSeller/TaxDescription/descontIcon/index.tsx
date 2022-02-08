
import { DescontIcon } from "./icon";
import { ListDescription } from "./listDescription";
import { Container } from "./styled";


interface IDesctIcons{
    text: string;
    initialDescont:string;
    lastDescont:string;
}



export function Descont({text, initialDescont, lastDescont}:IDesctIcons) {
    return (
        <Container>

            <h5>{text}</h5>

            <DescontIcon initialDescont={initialDescont} lastDescont={lastDescont}/>

            <ListDescription/>

        </Container>
    )
}