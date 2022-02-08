import styled from "styled-components"

interface IButton {
    position: string;
    width: string;
    height: string;
    margin: string;
}





export const Button = styled.button<IButton>`
 
    position: absolute;
    ${props => props.position}: ${props=>props.margin} ;
    z-index:3;
    border-radius: 2rem;
    box-shadow: none;
    border: none;
    padding:.5rem;
    top: 0;
    svg{
        width:${props => props.width};
        height:${props => props.height};
    }
`