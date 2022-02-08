import { useState } from "react";
import { ImageStage } from "./image";
import { ListStage } from "./listStage";
import { Container } from "./styled";

interface IStage{
    row:boolean;
    stage:string;
    text1:string;
    text2:string;
    title:string;
    nameImage:string;
    url:string;
}

export function ContainerStage({row, stage, text1, text2, title, url, nameImage}:IStage){

    return(
        <Container  row={row}>
            <ListStage 
            title={title}
            text1={text1}
            text2={text2}
            />
            <ImageStage url={url} name={nameImage} row={row}/>
            <div className="number">
            <span>{stage}</span>
            </div>
        </Container>
    )
}