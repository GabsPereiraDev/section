import styled from "styled-components";

export const Container = styled.div`
width:90vw;
display: flex;
align-items: start;
justify-content: start;
font-family: Work Sans,sans-serif;
margin: 0 auto;
a{
    font-family: Work Sans,sans-serif;
}
input{
    font-family: Work Sans,sans-serif;
}
div{
    margin-left: 1rem;
}
@media (max-width:1056px) {
    flex-direction:column;
    align-items:start;
    div{
        margin-left: 0rem;
    }
}
`