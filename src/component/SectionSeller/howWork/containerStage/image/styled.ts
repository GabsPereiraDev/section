import styled from 'styled-components'

interface IImage{
    row:boolean;
}


export const Container = styled.div<IImage>`
width:35rem;
height:18rem;
display:flex;
align-items:center;
justify-content:${props=>props.row? 'end':'start'};

img{
    width: 22.5rem;
    height: 18rem;

    @media(max-width:1000px){
    width:18rem;
    height: auto;
    }
}
@media(max-width:750px){
    width:15rem;
    justify-content:center;
    img{
        width:15rem;
    }
}
@media(max-width:370px){
    width:15rem;
    img{
        width:15rem;
    }
}

`