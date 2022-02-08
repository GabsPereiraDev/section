import { TextUI } from "../../../ui/TextUI/TextUI";
import { TitleUI } from "../../../ui/TitleUI/TitleUI";
import { ContainerStage } from "./containerStage";
import { Container } from "./styled";

interface IHowWork{
    text:string;
    title:string;
}

export function HowWork({text, title}:IHowWork){
    return(
        <Container>

            <TextUI text={text}/>
            <TitleUI title={title}/>


            <ContainerStage
                stage="1"
                row={true}
                title="Register and list your products"
                text1="Register your business for free and create a product catalogue. Get free training on how to run your online business"
                text2="Our Martfury Advisors will help you at every step and fully assist you in taking your business online"
                url='https://reactstorefronts.com/static/img/vendor/milestone-1.png'
                nameImage="asdasd"
            />
            <ContainerStage
                stage="2"
                row={false}
                title="Register and list your products"
                text1="Register your business for free and create a product catalogue. Get free training on how to run your online business"
                text2="Our Martfury Advisors will help you at every step and fully assist you in taking your business online"
                url='https://reactstorefronts.com/static/img/vendor/milestone-1.png'
                nameImage="asdasd"
            />
            <ContainerStage
                stage="3"
                row={true}
                title="Register and list your products"
                text1="Register your business for free and create a product catalogue. Get free training on how to run your online business"
                text2="Our Martfury Advisors will help you at every step and fully assist you in taking your business online"
                url='https://reactstorefronts.com/static/img/vendor/milestone-1.png'
                nameImage="asdasd"
            />
            <ContainerStage
                stage="4"
                row={false}
                title="Register and list your products"
                text1="Register your business for free and create a product catalogue. Get free training on how to run your online business"
                text2="Our Martfury Advisors will help you at every step and fully assist you in taking your business online"
                url='https://reactstorefronts.com/static/img/vendor/milestone-1.png'
                nameImage="asdasd"
            />
            <ContainerStage
                stage="5"
                row={true}
                title="Register and list your products"
                text1="Register your business for free and create a product catalogue. Get free training on how to run your online business"
                text2="Our Martfury Advisors will help you at every step and fully assist you in taking your business online"
                url='https://reactstorefronts.com/static/img/vendor/milestone-1.png'
                nameImage="asdasd"
            />
        </Container>
    )
}