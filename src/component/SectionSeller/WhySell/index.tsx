import { ContainerIcons } from "./ConteinerIcons";
import { Container } from "./styled";
import {AiFillTags} from 'react-icons/ai'
import { TitleUI } from "../../../ui/TitleUI/TitleUI";
import { TextUI } from "../../../ui/TextUI/TextUI";

interface IWaySell{
    text:string;
    title:string;
}
export function WhySell({text,title}:IWaySell){
    return(
        <Container>
            <TextUI text={text}/>
            <TitleUI title={title}/>
           <ContainerIcons/>
        </Container>
    )
}