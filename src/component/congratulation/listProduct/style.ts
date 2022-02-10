import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width:23rem;
width:90%;
border:1px solid #eaeaea;
align-items:center;
height: auto;
@media(max-width:1200px){
  max-width:20rem;
}



header{
 width:100%;
 
   div{
    width: 95%;
    padding:1rem 0rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;

   }
   
}

article{
  display:flex;
  justify-content: space-between;
  align-items:center;
  min-height:2rem;
  width: 95%;
  margin: 0 auto;
  padding:2rem 0;
  border-bottom: 1px solid #eaeaea;
  p{
    color: #666;
  }
  span{
    color: #666;
    font-weight: bold;
    font-size: 1.2rem;
  }
  strong{
    font-size: 1.2rem;
  }
}

main{
 width:100%;

   div{
    width: 95%;
    padding:2rem 0rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
   }
}

`