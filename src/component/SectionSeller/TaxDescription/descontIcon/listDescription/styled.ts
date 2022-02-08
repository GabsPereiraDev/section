import styled from 'styled-components'



export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

h6{
   text-align: center;
   margin: 1rem;
   font-size:1.2rem;
}
li{
   color: #666;
   font-size:1.2rem;
   width: 30rem;
   font-weight:normal;
   margin:1rem;
}
@media(max-width:550px){
   li{
   font-size:1.1rem;
   width: 90%;
   margin:1rem 0rem;
   }
}

`