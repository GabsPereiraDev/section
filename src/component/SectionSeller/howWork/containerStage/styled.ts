import styled from 'styled-components'

interface IConteiner {
    row: boolean;
}


export const Container = styled.div<IConteiner>`
width: 100%;
height:18rem;
display:flex;
flex-direction:${props => props.row ? 'row' : 'row-reverse'};
align-items:center;
justify-content:space-around;
position:relative;
overflow:hidden;
padding:3rem 0rem;
&::before{
    content:'';
    position:absolute;
    margin: 0 auto;
    left:50%;
    width: 2px;
    height: 100%;
    background:rgb(244, 14, 93);
}
&:last-child:before {
    color: red;
    background:#fff;
}

.number{
    position:absolute;
    top:.2rem;
    width:100%;
    height:5rem;
    display:flex;
    align-items:center;
    justify-content:center;

    span{
   
    width:5rem;
    height:5rem;
    border-radius:4rem;
    background: #fff;
    border: solid 4px rgb(244, 14, 93);
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2rem;
    
}


}
@media(max-width:750px){
    flex-direction:column-reverse;
    height:30rem;
    justify-content: center;
    align-items: center;
    position:relative;
    margin-left:5rem;
    &::before{
    left:2.15rem;
    height: 100%;
}

    .number{

    width:100%;
    height:5rem;
    justify-content:start;
    top:-.3rem;
    span{
   
    width:4rem;
    height:4rem;
    border-radius:4rem;
    font-size:1.5rem;
    }
}
}
@media(max-width:650px){
    margin-left:0;
    overflow:visible;
    .number{
        width:100%;
        top:-1rem;
    }
    &::before{
    left:2.15rem;
  
    }   
}
@media(max-width:400px){

    align-items: end;
    &::before{
    left:1.6rem;
  
    }   
    .number{

        span{

        width:3rem;
        height:3rem;
        border-radius:4rem;
        font-size:1.5rem;
        }
    }
}
`