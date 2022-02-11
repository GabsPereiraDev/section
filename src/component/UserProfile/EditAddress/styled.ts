import styled from "styled-components";

export const Container = styled.div`
width:90vw;
max-width:892px;
display: flex;
flex-direction: column;
align-items: start;
justify-content:start;
@media (max-width:1335px) {
        width:60vw;
}


form{
    margin: 1rem;
    width:100%;
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
    align-items:start;
    flex-direction:column;
    input{
        width:100%;
        margin-bottom:2rem;
    }
    label{
        font-size:.9rem;
        margin-bottom:.25rem;
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
@media (max-width:1050px) {
        width:86vw;
        margin:0 auto;
        form{
            margin:0;
        }
}

`