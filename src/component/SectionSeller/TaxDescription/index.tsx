import { TextUI } from "../../../ui/TextUI/TextUI";
import { TitleUI } from "../../../ui/TitleUI/TitleUI";
import { Descont } from "./descontIcon";
import { Container } from "./styled";
import {BsCashCoin} from 'react-icons/bs'
import { ProcessPayments } from "./processPayments";



export function TaxDescription() {
    return (
        <Container>


            <TextUI text={'BEST FEES TO START'} />
            <TitleUI title={'Affordable, transparent, and secure'} />

            <Descont text='It doesn’t cost a thing to list up to 50 items a month, and you only pay after your stuff sells. It’s just a small percent of the money you earn'
            initialDescont='0$'
            lastDescont='5%'
            />

            <ProcessPayments icon={<BsCashCoin/>} text='We process payments with PayPal, an external payments platform that allows you to process transactions with a variety of payment methods. Funds from PayPal sales on Martfury will be deposited into your PayPal account.'/>

        </Container>
    )
}