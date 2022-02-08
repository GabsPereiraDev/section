import { AskFrequently } from "./AskFrequently";
import { Avaliate } from "./avaliate";
import { Banner } from "./banner";
import { Contact } from "./Contact";
import { HowWork } from "./howWork";
import { Container } from "./styled";
import { TaxDescription } from "./TaxDescription";
import { WhySell } from "./WhySell";



export function SectionSeller(){
    return(
        <Container>
            <Banner 
            urlImage="https://reactstorefronts.com/static/img/bg/vendor.jpg" 
            UrlButton="asd"
            name="Millions Of Shoppers Can’t Wait To See What You Have In Store"
            />

            <WhySell 
            text="WHY SELL ON MARTFURY" 
            title="Join a marketplace where nearly 50 million buyers around
            the world shop for unique items"/>

            <HowWork 
            text= 'HOW IT WORKS'
            title ='Easy to start selling online on Martfury just 4 simple steps'
            />

            <TaxDescription/>

            <Avaliate/>

            <AskFrequently/>

            <Contact title="Still have more questions? Feel free to contact us." CellNumber="5516997554544"/>

            <Banner 
            urlImage="https://reactstorefronts.com/static/img/bg/vendor.jpg" 
            UrlButton="asd"
            name="Millions Of Shoppers Can’t Wait To See What You Have In Store"
            />


        </Container>
    )
}