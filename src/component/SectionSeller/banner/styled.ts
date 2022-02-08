import styled from 'styled-components'

interface IImage{
    url:string;
}

export const Container = styled.div<IImage>`
width:100%;
height:50rem;
background-image:url(${props=>props.url});
background-repeat: no-repeat;
background-position:center;
background-size:cover;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:relative;
overflow:hidden;
z-index:1;

&::before{
    content:'';
    position:absolute;
    background: #000;
    width: 100%;
    height:100%;
    opacity:0.2;
    z-index:-1;
}



a{

    padding:1rem 2rem;
    background:rgb(244, 14, 93);
    color:#fff;
    text-decoration:none;
    font-weight:bold;
    font-size:1.5rem;
    z-index:2;
}
h2{
    color: #fff;
    font-size:3rem;
    text-align:center;
    width:50rem;
    z-index:2;
}
@media (max-width:1000px){
    h2{
        width:70%;
        font-size:2rem;
    }
    a{
        padding:1rem 1rem;
    }
}
@media (max-width:600px){
    h2{
        width:95%;
        font-size:1.5rem;
    }
    a{
        padding:1rem 1rem;
        font-size:1.2rem;
    }
}
@media (max-width:400px){
    h2{
        width:95%;
        font-size:1.2rem;
    }
    a{
        padding:1rem 1rem;
        font-size:1.1rem;
    }
}
`