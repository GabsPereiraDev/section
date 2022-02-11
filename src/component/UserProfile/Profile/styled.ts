import styled from "styled-components";

export const Container = styled.div`
width:892px;
display: flex;
flex-direction: column;
align-items: start;
justify-content:start;



form{
    margin: 1rem;
    width:95%;
    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content:center;
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

    input{
    width:95%;
    padding: 1rem;
    margin:.5rem 0rem; 
    border: 1px solid #ddd;
    &:focus{
        border:1px solid rgb(244, 14, 93);
    }
}
section{
    width:99%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    input{
        width:45%;
    }
    @media(max-width:772px){

    flex-direction:column;
    align-items:start;
    justify-content:start;
    input{
    width:96%;
    }

}
}
button{
    padding:.75rem 3rem;
    border: none;
    background-color:rgb(244, 14, 93);
    color:#f9f9f9;
    border-radius:.25rem;
    font-weight:bold;
    border:1px solid #fff;
    transition: all 0.4s;
    &:hover{
        background-color:#f9f9f9;
        color:rgb(244, 14, 93);
        border:1px solid rgb(244, 14, 93);
    }
}
}

@media(max-width:1050px){
      width:95vw;     
      form{
          margin:0;
      } 
}
@media(max-width:352px){
      width:90vw;     
      form{
          margin:0;
      } 
}

`