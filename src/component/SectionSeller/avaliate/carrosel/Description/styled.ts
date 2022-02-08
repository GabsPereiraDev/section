import styled from 'styled-components'



export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;
width:93%;
height: 10rem;
padding: 0rem 1rem;
.nameUser{
    display:flex;
    align-items:center;
    justify-content:start;
    color:#999;
    
    strong{
        margin-right:1rem;
        color:black;
    }

}
p{
    color:#666;
    line-height:1.5rem;
}
`