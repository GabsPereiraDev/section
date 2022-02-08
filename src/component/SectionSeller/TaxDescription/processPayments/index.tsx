
import { ReactNode } from "react";
import { PaymentsIcon } from "./paymentsIcon";
import { Container } from "./styled";

interface IPayments{
    icon: ReactNode;
    text:string;

}



export function ProcessPayments({text, icon}:IPayments) {
    return (
        <Container>

        <PaymentsIcon payments={text} icon={icon}/>

        <p>Listing fees are billed for 0.20 USD, so if your bank’s currency is not USD, the amount in your currency may vary based on changes in the exchange rate.</p>
            
        </Container>
    )
}