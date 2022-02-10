import { CodeText } from "./CodeText";
import { ListProduct } from "./listProduct";
import { Container } from "./style";

export function Congratulation() {
    return (
        <Container>
            <h1>Payment Success</h1>
            <div>
                <CodeText />
                <ListProduct />
            </div>
        </Container>
    )
}