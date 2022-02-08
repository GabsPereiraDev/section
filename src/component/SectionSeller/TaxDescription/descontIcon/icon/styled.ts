import styled from 'styled-components'



export const Container = styled.div`


display: flex;

justify-content:center;
align-items:center;

span{
    width:10rem;
    height:10rem;
    border-radius:8rem;
    border: solid 3px gold;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-size:4rem;
   
    margin: 2rem;
    
}
p{
    color:#666;
    font-size:1.2rem;
    text-align:center;
    font-weight:normal;
    margin: 0;
}

@media(max-width:700px){
    span{
    width:7rem;
    height:7rem;
    font-size:2rem;
    margin: 1.5rem;
    }
    p{
    font-size:1.1rem;
}

`