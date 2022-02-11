import Link from "next/link";
import { Container } from "./styled";

export function UserAddress(){
    return(
        <Container>
            <h3>Endereços</h3>
            <article>
            <div className="container">
                <strong>Endereço de Cobrança</strong>
                <hr />
                <p>Você ainda não configurou este tipo de endereço.</p>
                <Link href="/profile/edit-address">Edit</Link>
            </div>
            <div className="container">
                <strong>Endereço para envio</strong>
                <hr />
                <p>Você ainda não configurou este tipo de endereço.</p>
                <Link href="/profile/edit-address">Edit</Link>
            </div>    
                
            </article>  

        
        </Container>
    )
}