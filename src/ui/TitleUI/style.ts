import styled from "styled-components";

export const Container = styled.h2`

        margin:2rem;
        font-size:2rem;
        font-weight:normal;
        text-align: center;
        width:50rem;

        @media(max-width:1000px){
                width:90%;
        }
        @media(max-width:550px){
                font-size:1.5rem;
        }
        @media(max-width:400px){
                font-size:1.2rem;
        }
`