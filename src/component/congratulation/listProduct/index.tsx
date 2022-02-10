import { BsCurrencyDollar } from "react-icons/bs";
import { Container } from "./style";

export function ListProduct() {
    return (
        <Container>
            <header>
                <div>
                    <span>PRODUTO</span>
                    <span>TOTAL</span>
                </div>
                <article>
                    <p>
                        No Product.
                    </p>
                </article>
            </header>

            <main>
                <div>
                    <span>
                        SUBTOTAL
                    </span>
                    <BsCurrencyDollar />
                </div>
                <article>
                    <span>Total</span>
                    <strong>$00,00</strong>
                </article>
            </main>
        </Container>
    )
}