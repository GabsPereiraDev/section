
import { Container } from "./style";
import {BsArrowLeft} from 'react-icons/bs'

export function CodeText(){
    return(
        <Container>
            <h2>Thank you! Your order is processing.</h2>

            <p>Your order number is <strong>123</strong></p>

            <p>An email will be sent containing information about your purchase. If you have any questions about your purchase, email us at <strong>contact@martfury.com</strong></p>


            <a href=""><BsArrowLeft/> Voltar para o Shop</a>
        </Container>
    )
}