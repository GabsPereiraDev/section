import styled from 'styled-components'



export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
height:22rem;
width:24rem;

svg{
    width:5rem;
    height:auto;
    fill:rgb(244,14,93);
}
h3{
    font-size:2rem;
}
p,a{
    color:#666;
    font-size:1.2rem;
}
a{
    transition:0.4s;
    &:hover{
        color:rgb(244,14,93);
        transition:0.4s;
    }
}
`