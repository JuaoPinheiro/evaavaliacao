
import styled from 'styled-components'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaMap } from "react-icons/fa";






import Lupa from '../assets/lupa.png'






// ICONS
export const FaaUser = styled(FaUser)`
    color: #fff;
    margin-left: -2%;
`

export const Cart = styled(FaShoppingCart)`
    color: #fff;
    margin-left: -2%;
    
    `

export const Lock = styled(FaLock)`
    color: #FF3BA5;
    width: 50px;
    height: 50px;
`
export const Card = styled(FaCreditCard)`
    color: #FF3BA5;
    width: 50px;
    height: 60px;
`

export const Truck = styled(FaTruckMoving)`
    color: #FF3BA5;
    width: 50px;
    height: 50px;
`

export const ChartEmail = styled(MdOutlineMarkEmailRead)`
    color: #fff;
    width: 50px;
    height: 50px;
    margin-top: 48px;
`

export const Store = styled(FaStore)`
    color: #FF3BA5;
    width: 20px;
    height: 20px;
`

export const Map = styled(FaMap)`
    color: #FF3BA5;
    width: 20px;
    height: 20px;
`

export const WhatsIcon = styled(FaWhatsapp)`
    color: #fff;
`
export const IconEmail = styled(HiOutlineMail)`
    color: #fff;

`





export const InputHeader = styled.input`
    background: url(${Lupa}) no-repeat;
    background-color: #fff;
    background-position: 95%;

    width: 100%;
    max-width: 450px;
    height: 32px;
    border-radius: 4px;

`

export const Container = styled.div`
    width: 100%;

    .thumbs-wrapper,
    .carousel-status
    {
        display: none;
    }

    .dot.selected{
        background-color: #FF3BA5;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #0C0D0D;
    width: 100%;
    height: 60px;

    .css-1s2u09g-control, 
    Select{
        background-color: #0C0D0D;
        border: none;
        color: #fff;
    }
`

export const AHeader = styled.a`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #FDFDFD;
    text-decoration: none;
    @media (max-width: 950px){
        display: none;
    }
`

//IMAGES

export const ImageCarousel1 = styled.img`
    transform: matrix(1, -0.04, 0.02, 1, -4, -5);
    width: 100%;
    min-width: 1366px;
    margin-top: -2.4%;
 `

export const DivCarousel = styled.div`
    display: flex;
    position: relative;

    img{
        width: 100%;
        min-width: 1366px;
    }
`

export const H1Carousel = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 49px;
    color: #FDFDFD;
    position: absolute;
    margin-top: 110px;
    margin-left: 200px;

`

export const ParagraphCarousel = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FDFDFD;
    position: absolute;
    margin-top: 170px;
    margin-left: 200px;

`

export const Section = styled.section`
    display: flex;
    margin-top: 65px;
    gap: 150px;
    justify-content: center;
    text-align: center;


     p{ 
        color: #FF3BA5;
    }

    .div-service{
        border-right: 1px solid #DADFEB;
        width: 200px;
    }
`

export const Services = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    gap: 150px;
    margin-top: 64px;

    @media (max-width: 1080px){
        gap: 60px;
    }
    
       
`

//TEXT Services

export const TextServices = styled.h3`
        color: #ffffff;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        display: flex;
        position: absolute;
        bottom: 22px;  
        padding-left: 57px;
        cursor: pointer;
`

export const NewsLetter = styled.div`
    background: #3C3E40;
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .div-input{
        display: flex;
        gap: 18px;
        margin-top: 48px;
    }

    input{
        background: #FDFDFD;
        border-radius: 4px;
        width: 278px;
        height: 32px;
        padding-left: 5px;
        margin-bottom: 48px;
    }

    h2{
        color: #fff;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }

    button{
        width: 266px;
        height: 42px;
        background: #E11383;
        border-radius: 8px;
        border: none;
        color: #fff;
        margin-bottom: 48px;
    }
;
`

export const Footer = styled.footer`
    background: #0C0D0D;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-top: 32px;
    padding-bottom: 32px;


    .DivAbout1{
        display: flex;
        flex-direction: column;
        margin-left: 164px;
    }


    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #E11383;
        padding-bottom: 8px;
    }

    .lineFooter{
        border: 2px solid #FDFDFD;
        width: 100px;
        height: 0;
        margin-bottom: 18px;
    }

    .about1{
        display: flex;
        flex-direction: column; 
        gap: 10px;
        padding-right: 99px;

        a{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FDFDFD;            
            text-decoration: none;
        }
    }

    .about2{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-right: 99px;
        padding-top: 60px;


        p{
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            color: #FDFDFD;
            text-decoration: none;
        }
    }


    .about3{
        padding-top: 60px;

        p{
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            color: #FDFDFD;
            text-decoration: none;
            margin-bottom: 12px;
        }

        .contact{
            display: flex;
            flex-direction: row;
            gap: 10px;
            margin-top: 10px;
        }
    }


`




