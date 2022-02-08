import { Ask } from "./ask";
import { Container } from "./styled";



export function AskFrequently() {
    return (
        <Container>
            <Ask
                title="How do fees work on Martfury?"
                p1="Joining and starting a shop on Martfury is free. There are three basic selling fees: a listing fee, a transaction fee, and a payment processing fee."
                p2="It costs USD 0.20 to publish a listing to the marketplace. A listing lasts for four months or until the item is sold. Once an item sells, there is a 3.5% transaction fee on the sale price (not including shipping costs). If you accept payments with PayPal, there is also a payment processing fee based on their fee structure."
                p3="Listing fees are billed for $0.20 USD, so if your bank’s currency is not USD, the amount may differ based on changes in the exchange rate."
            />

            <Ask
                title="What do I need to do to create a shop?"
                p1="It’s easy to set up a shop on Martfury. Create an Martfury account (if you don’t already have one), set your shop location and currency, choose a shop name, create a listing, set a payment method (how you want to be paid), and finally set a billing method (how you want to pay your Martfuryfees)."
               
            />

            <Ask
                title="How do I get paid?"
                p1="If you accept payments with PayPal, funds from PayPal sales on Martfury will be deposited into your PayPal account. We encourage sellers to use a PayPal Business account and not a Personal account, as personal accounts are subject to monthly receiving limits and cannot accept payments from buyers that are funded by a credit card."

                p2="It costs USD 0.20 to publish a listing to the marketplace. A listing lasts for four months or until the item is sold. Once an item sells, there is a 3.5% transaction fee on the sale price (not including shipping costs). If you accept payments with PayPal, there is also a payment processing fee based on their fee structure."

                p3="Listing fees are billed for $0.20 USD, so if your bank’s currency is not USD, the amount may differ based on changes in the exchange rate."
            />

            <Ask
                title="Do I need a credit or debit card to create a shop?"
                p1="No, a credit or debit card is not required to create a shop. To be verified as a seller you have the choice to use either a credit card or to register via PayPal. You will not incur any charges until you open your shop and publish your listings."
              
            />

            <Ask
                title="What can I sell on Martfury??"
                p1="Martfury provides a marketplace for crafters, artists and collectors to sell their handmade creations, vintage goods (at least 20 years old), and both handmade and non-handmade crafting supplies."
            />

        </Container>
    )
}