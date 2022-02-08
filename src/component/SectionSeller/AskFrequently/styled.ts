import styled from 'styled-components'



export const Container = styled.div`
width:90%;
height:55rem;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
border-bottom: 1px solid #999;

@media(max-width:1100px){
    height:90rem;
}
@media(max-width:650px){
    height:auto;
}

`