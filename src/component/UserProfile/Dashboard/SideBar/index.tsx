import { Container } from "./styled";
import {AiOutlineHeart, AiOutlineUser} from 'react-icons/ai'
import {FaRegBell} from 'react-icons/fa'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BsShop} from 'react-icons/bs'
import {CgLogOff} from 'react-icons/cg'
import Link from 'next/link'

interface ISideBar{
    li1?:string;
    li2?:string;
    li3?:string;
    li4?:string;
    li5?:string;
    li6?:string
}

export function SideBar({li1,li2,li3,li4,li5,li6}:ISideBar){
    return(
        <Container>
            <div className='username' >
                <img src="https://reactstorefronts.com/static/img/users/3.jpg" alt="" />

                <article>
                    <p>Hello</p>

                    <strong>Username@gmail.com</strong>
                    
                </article>

            </div>
            <ul>
                <li className={li1}>
                    <Link href="/profile/account">
                        <a>
                        <AiOutlineUser/>Informações Sobre a Conta
                        </a>
                    </Link>
                </li>
                <li className={li2}>
                    <Link href="/profile/notifications">
                       <a>
                       <FaRegBell/>Notificações
                       </a>
                    </Link>
                </li>
                <li className={li3}>
                    <Link href="/profile/invoices">
                       <a>
                       <HiOutlineDocumentReport/>Faturas
                       </a>
                       
                    </Link>
                </li>
                <li className={li4}>
                    <Link href="/profile/address">
                        <a><MdOutlineLocationOn/>Endereços</a>
                    </Link>
                </li>
                <li className={li5}>
                    <Link href="/profile/RecentViewed">
                       <a><BsShop/>Produtos Vistos Recetemente</a>
                    </Link>
                </li>
                <li className={li6}>
                    <Link href="/profile/WishList">
                        <a><AiOutlineHeart/>Lista de Desejos</a>
                    </Link>
                </li>
                <li>
                    <a href="">
                        <CgLogOff/>Logout
                    </a>
                </li>
            </ul>
        </Container>
    )
}