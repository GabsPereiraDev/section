import styled from 'styled-components'




export const Container = styled.div`

width:35rem;
height:18rem;
display:flex;
flex-direction:column;
align-items:start;
padding:5rem 0rem;

@media(max-width:1000px){
    width:28rem;
}

h2{
    font-size:1.5rem;
}

li{
    margin-bottom:2rem;
    margin-left:-1.5rem;
    p{
        color:#666;
        font-size:1.3rem;
    }
  
}

@media(max-width:750px){
    padding:2rem 0rem;

    h2{
    font-size:1.3rem;
}

li{
    margin-bottom:2rem;
    margin-left:-1.5rem;
    p{
        color:#666;
        font-size:1.1rem;
    }
  
}
}

@media(max-width:600px){
    width:70%;
}

`