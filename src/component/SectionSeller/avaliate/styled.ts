import styled from 'styled-components'



export const Container = styled.div`
position: relative;
display: flex;
flex-direction:column;
align-items: start;
h3{
    margin-left:2.5rem;
    font-size:1.6rem;
}
article{
    width:91vw;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    height: 30rem;
    @media(max-width:1100){
        width:95vw;
    }
}
`