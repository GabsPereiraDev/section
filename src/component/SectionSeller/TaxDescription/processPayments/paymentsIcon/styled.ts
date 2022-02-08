import styled from 'styled-components'



export const Container = styled.div`
display:flex;
align-items:start;
padding:3rem 0rem;
text-align:start;

p{
   width: 32rem;
   font-size:1.1rem;
   font-weight:bold;
   line-height:1.8rem;
   padding-left: 3rem;
   margin: 0;
   color:black;
   text-align:start;
}
svg{
   width:10rem;
   height:auto;
}
@media(max-width:1000px){
   width: 100%;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   svg{
   padding-bottom:2rem;
   }
}

@media(max-width:600px){
   align-items:center;
   p{
      width:70%;
      padding-left: 0rem;
      font-size:1.1rem;
   }
   svg{
      width:8rem;
   padding-bottom:2rem;
   }
}
@media(max-width:400px){
   p{
      width:18rem;
      padding-left: 0rem;
      font-size:1rem;
   }
   svg{
      width:6rem;
   padding-bottom:2rem;
   }
   
}

`