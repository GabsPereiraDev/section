import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width:90%;
max-width:48rem;
padding-bottom: 4rem;
@media (max-width:1200px){
    max-width:35rem;
}
@media (max-width:910px){
    max-width:none;
}
p{
    color: #666;
}
strong{
    color:black;
}
a{
    margin-top:3rem;
    background-color:rgb(244, 14, 93);
    padding: 1rem 2rem;
    border-radius:.25rem;
    color:#fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: bold;
    transition:all .4s;
    svg{
        margin-right:.25rem;
        width:1.5rem;
        height:1.5rem;
    }

    &:hover{
        background-color:#fff;
        color:rgb(244, 14, 93);
    }
}

`