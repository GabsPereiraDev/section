import { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { Container } from "./styled";


interface IDashboard {
    children:ReactNode;
    li1?:string;
    li2?:string;
    li3?:string;
    li4?:string;
    li5?:string;
    li6?:string
}



export function Dashboard({children, li1, li2, li3, li4, li5, li6}:IDashboard){
    return(
        <Container>
            <SideBar
            li1={li1}
            li2={li2}
            li3={li3}
            li4={li4}
            li5={li5}
            li6={li6}
         />
            <div>
                {children}
            </div>
        </Container>
    )
}