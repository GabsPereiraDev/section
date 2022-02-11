import { Container } from "./styled";

export function Invoice(){
    return(
        <Container>
            <h3>Suas notificações</h3>
            <hr />
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Titulo</td>
                        <td>Data</td>
                        <td>Preço</td>
                        <td>Estatos</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>500884010</td>
                        <td>Marshall Kilburn Portable Wireless Speaker</td>
                        <td>20-1-2020</td>
                        <td>$42.99</td>
                        <td className="RECUSADO">RECUSADO</td>
                    </tr>
                    <tr>
                    <td>500884010</td>
                        <td>Marshall Kilburn Portable Wireless Speaker</td>
                        <td>20-1-2020</td>
                        <td>$42.99</td>
                        <td className="APROVADO">APROVADO</td>
                    </tr>
                    <tr>
                    <td>500884010</td>
                        <td>Marshall Kilburn Portable Wireless Speaker</td>
                        <td>20-1-2020</td>
                        <td>$42.99</td>
                        <td className="PENDENTE">PENDENTE</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}