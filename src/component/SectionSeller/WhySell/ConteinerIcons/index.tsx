import { Icons } from "./icons";
import { Container } from "./styled";
import {AiFillTags} from 'react-icons/ai'



export function ContainerIcons(){
    return(
        <Container>
           <Icons icon={<AiFillTags/>} 
            title="Low Fees" 
            description="It doesn’t take much to list your items and once you make a sale, Martfury’s transaction fee is just 2.5%." 
            url="asdasdasd"/> 

            <Icons icon={<AiFillTags/>} 
            title="Low Fees" 
            description="It doesn’t take much to list your items and once you make a sale, Martfury’s transaction fee is just 2.5%." 
            url="asdasdasd"/>

             <Icons icon={<AiFillTags/>} 
            title="Low Fees" 
            description="It doesn’t take much to list your items and once you make a sale, Martfury’s transaction fee is just 2.5%." 
            url="asdasdasd"/>
        </Container>
    )
}