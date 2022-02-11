import styled from "styled-components";

export const Container = styled.div`
margin-top:4rem;
width:90vw;
max-width:892px;
display: flex;
flex-direction: column;
align-items: start;
justify-content:start;
h3{
    margin-bottom: .25rem;
}
hr{
    width:100%;
    color:#ffff;
}
table{
    margin:1rem;
    width:90%;
    max-width:790px;


    thead{
        td{
            font-weight: bold;
            padding: 1rem;
        }
    }
    tbody{
        td{
            padding: 1rem;
            max-width:263px;
            color:#666;
        }
    }
    .RECUSADO{
        display: flex;
        align-items:center;
        justify-content: center;
        border: 1px solid red;
        padding: .5rem 0;
        margin:0 auto;
        margin-top:1.5rem;
        font-size:0.7rem;
        width:5rem;
        color:red;
    }
    .APROVADO{
        display: flex;
        align-items:center;
        justify-content: center;
        border: 1px solid green;
        padding: .5rem 0;
        margin:0 auto;
        margin-top:1.5rem;
        font-size:0.7rem;
        width:5rem;
        color:green;
    }
    .PENDENTE{
        display: flex;
        align-items:center;
        justify-content: center;
        border: 1px solid #c8aa04;
        padding: .5rem 0;
        margin:0 auto;
        margin-top:1.5rem;
        font-size:0.7rem;
        width:5rem;
        color:#c8aa04;
    }
}



`