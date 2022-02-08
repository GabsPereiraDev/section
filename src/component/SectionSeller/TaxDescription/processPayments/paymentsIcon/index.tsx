

import { ReactNode } from "react";
import { Container } from "./styled";


interface IPayments{
    icon: ReactNode;
    payments:string;

}



export function PaymentsIcon({icon,payments}:IPayments) {
    return (
        <Container>
            {icon}

            <p>
                {payments}
            </p>
            
        </Container>
    )
}