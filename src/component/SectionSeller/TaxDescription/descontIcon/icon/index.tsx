
import { Container } from "./styled";

interface IDesctIcons{
    initialDescont:string;
    lastDescont:string;
}



export function DescontIcon({initialDescont, lastDescont}:IDesctIcons) {
    return (
        <Container>

        <span>{initialDescont} <p>Descontos</p></span>
        <span>{lastDescont} <p>Desconto Finais</p></span>

        </Container>
    )
}