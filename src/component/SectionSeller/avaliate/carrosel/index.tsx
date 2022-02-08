import { Container } from "./styled";
import { ImagemAvaliate } from "./Image";
import { DescriptionAvaliate } from "./Description";



interface IAvaliate{
    url:string;
    nameUrl:string;
    avaliate:number;
    work:string;
    description:string;
    name:string;
    translate:number;
}

export function CarroselAvaliation({url,name,description,avaliate,nameUrl,work, translate}:IAvaliate){

   



    return(
        <Container translate={translate}>
          
            <ImagemAvaliate url={url} avaliate={avaliate} nameUrl={nameUrl} />
            <DescriptionAvaliate work={work} description={description}  name={name}/>
        </Container>
    )
}