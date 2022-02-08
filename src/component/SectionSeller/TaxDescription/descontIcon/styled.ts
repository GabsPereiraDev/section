import styled from 'styled-components'



export const Container = styled.div`
display:flex;
align:center;
justify-content:center;
flex-direction: column;
h5{
   color: #666;
   font-size:1.5rem;
   text-align: center;
   width: 47rem;
   font-weight: normal;
   margin: 1rem;
}
@media(max-width:800px){
   h5{
      width:90%;
      margin:0 auto;
   }
}
@media(max-width:700px){
   h5{
      font-size:1.4rem;
   }
}
@media(max-width:500px){
   h5{
      font-size:1.3rem;
   }
}

`