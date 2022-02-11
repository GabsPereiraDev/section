import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:17rem;


.username{

    display:flex;
    align-items:start;
    img{
        width:4rem;
        height:4rem;
        border-radius: 6rem;
    }
    article{
       padding-left: 1rem;
        p{
            margin: .5rem 0;
            color: #666;
        }
    }
}
ul{
    display: flex;
    flex-direction: column;
    align-items:start;
    border: 1px solid #d1d1d1;
    list-style:none;
    justify-content:center;
    padding:0rem;
    li{
        width:17rem;
    
        transition: all 0.4s;
        border-bottom: 1px solid #eaeaea;
        &:hover{
            background-color:rgb(244, 14, 93);
           a{
            color:#fff
           }
        }
        a{
            width:100%;
            height:53px;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;
            font-size:1rem;
            
        }
        svg{
            width:1.25rem;
            height: auto;
            margin-left:1rem;
            margin-right:.5rem;
        }
        
    }
    .select{
          background-color:rgb(244, 14, 93);
           a{
            color:#fff
           }
    }
    
}
@media(max-width:1056px) {
    max-width:normal;
    width:90vw;
   
    .username{
        width:100%;
    }
    ul{
        width:100%;
        li{
            width:100%;
            a{
                width:100%;
            }
        }
    }
}
`