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
article{
    width: 100%;
    display:flex;
    justify-content:start;
    
    .container{
        width:100%;
        max-width:336px;
        margin: 2rem 2rem 2rem 0rem;
        strong{
            font-size:0.9rem;

        }
        hr{
            color:#fff;
        }
        p{
            color:#666;
            font-size:0.9rem;
        }
    }
}



`