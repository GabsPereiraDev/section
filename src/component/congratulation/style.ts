import styled from "styled-components";

export const Container = styled.div`
h1{
    text-align: center;
    font-size:3rem;
    margin-bottom: 5rem;
}
div{
    display:flex;
    justify-content:space-between;
    width:90%;
    margin:0 auto;
    flex-wrap:wrap;
    @media(max-width:1300px){
        width:97%
    }
    @media (max-width:910px){
    max-width:none;
}
}

`