import { Container } from "./styled";

export function Notification(){
    return(
        <Container>
            <h3>Suas notificações</h3>
            <hr />
            <table>
                <thead>
                    <tr>
                        <td>Data Da criação</td>
                        <td>Titulo</td>
                        <td>Categoria</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>20-1-2020</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                        <td className="SALE">SALE</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                    <td>20-1-2020</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                        <td className="NEW">NEW</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}