import styled from 'styled-components'

interface ICarrosel{
    translate?:number
}

export const Container = styled.div<ICarrosel>`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:90%;
background: #f7f7f7;
margin: 4.9%;
@media(max-width:1100px){
    margin:3.9%;
}
@media(max-width:700px){
    width:92%;
    align-items:start;
}
transform: translate3d(${props=>props.translate+'%'}, 0px, 0px);
transition: all .8s;
`