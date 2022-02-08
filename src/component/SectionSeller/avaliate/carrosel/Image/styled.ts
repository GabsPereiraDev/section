import styled from 'styled-components'



export const Container = styled.div`
display:flex;
align:start;
justify-content:end;
position:relative;
width:31rem;
height: 7rem;
@media(max-width:1200px){
    width:26rem
}
@media(max-width:1000px){
    width:23rem
}
@media(max-width:800px){
    width:18rem
}
@media(max-width:700px){
    width:30rem;
    padding:0rem 2rem;
}
@media(max-width:600px){
    width:25rem;
   
}
@media(max-width:500px){
    width:22rem;
   
}
@media(max-width:400px){
    width:15rem;
   
}

img{
    position: absolute;
    top: -3.5rem;
    left: 0;
    width: 7rem;
    height: 7rem;
    border-radius:5rem

}
span{
    color: gold;
    font-size:3.5rem;
    margin-right:1rem;
}

`