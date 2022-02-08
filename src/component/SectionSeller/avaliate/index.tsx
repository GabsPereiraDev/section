import { CarroselAvaliation } from "./carrosel";
import { Container } from "./styled";
import { Api } from '../../../api/avaliate'
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ButtonUI } from "../../../ui/button";


export function Avaliate() {




    const { width, height } = useWindowSize()


    const [count, setCount] = useState<number>(0)





    function handleClickRight() {
        if(width <= 700){
            count <= -675?  setCount(0):setCount(count - 109)
        }
        else if (width <= 1100 && width > 700){
            count <= -1062?  setCount(0):setCount(count - 118)
        }else{
            count <= -1100?  setCount(0):setCount(count - 125)
        }
    };

    function handleClickLeft() {
        if(width <= 700){
            count >= 0?  setCount(0):setCount(count + 109)
        }
        else if(width <= 1100 && width > 700){
            count >= 0?  setCount(-1062):setCount(count +118)
        }else{
            count >= 0?setCount(-1125) : setCount(count + 125)
        }
    };


console.log(count)


    return (
        <Container>
            <ButtonUI
                height="1.5rem"
                width="1.5rem"
                icon={<IoIosArrowForward />}
                position='right'
                onClick={handleClickRight}
                margin={'2rem'}
            />
            <ButtonUI
                height="1.5rem"
                width="1.5rem"
                icon={<IoIosArrowBack />}
                position='right'
                onClick={handleClickLeft}
                margin={'5rem'}
            />

            <h3>What client say</h3>
            <article>

                {Api.map((item, index) => {
                    return <CarroselAvaliation
                    translate={count}
                        key={index}
                        name={item.name}
                        avaliate={item.avaliate}
                        url={item.url}
                        nameUrl={item.url}
                        description={item.description}
                        work={item.work}
                    />
                })}
            </article>
        </Container>
    )
}