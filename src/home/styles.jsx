
import styled from 'styled-components'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaMap } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";


import Lupa from '../assets/lupa.png'

export const FaaUser = styled(FaUser)`
    color: #fff;
`

export const Cart = styled(FaShoppingCart)`
    color: #fff;    
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

    @media (max-width: 810px){
        max-width: 230px;
            }

            @media (max-width: 810px){
        max-width: 100px;
            }

            @media (max-width: 500px){
                display: none;
            }

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

    .divHeaderCart{
        display: flex;
        gap: 30px;
    }

    .css-1s2u09g-control, 
    Select{
        background-color: #0C0D0D;
        border: none;
        color: #fff;

        @media (max-width: 450px){
        display: none;
    }
        
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
    @media (max-width: 1070px){
        display: none;
    }
`


export const ImageCarousel1 = styled.img`
    transform: matrix(1, -0.04, 0.02, 1, -4, -5);
    width: 100%;
    min-width: 1366px;
    margin-top: -2.4%;

    @media (max-width: 850px){
        transform: matrix(1, -0.03, 0.02, 1, -4, -5);
            }

            @media (max-width: 600px){
        transform: matrix(1, -0.01, 0.02, 1, -4, -5);
            }

    
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

    @media (max-width: 680px){
        margin-left: 100px;
        font-size: 30px;
            }

     @media (max-width: 500px){
         margin-left: 50px;
         font-size: 20px;
}

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

    @media (max-width: 680px){
        margin-left: 100px;
        font-size: 15px;
            }

     @media (max-width: 500px){
        margin-left: 50px
     }

`

export const Section = styled.section`
    display: flex;
    margin-top: 65px;
    gap: 150px;
    justify-content: center;
    text-align: center;

    @media (max-width: 650px){
        flex-direction: column;
        border-radius: 5px;
        align-items: center;
        gap: 80px;
}

     p{ 
        color: #FF3BA5;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
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

        @media (max-width: 650px){
            flex-direction: column;
 }
    }

    .div-message{
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .message{
        position: absolute;
        color: white;
        margin-left: 110px;
        padding-top: 50px;
        font-size: 13px;
        color: #DADFEB;

        @media (max-width: 650px){
        margin-left: 0;
        margin-top: 95px;
 }
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
        text-align: center;
    }

    button{
        width: 266px;
        height: 42px;
        background: #E11383;
        border-radius: 8px;
        border: none;
        color: #fff;
        margin-bottom: 48px;
        cursor: pointer;

        &:hover{
            opacity: .7;
        }

        &:active{
            opacity: .9;
        }
    }
;
`

export const ChartEmail = styled(MdOutlineMarkEmailRead)`
    color: #fff;
    width: 50px;
    height: 50px;
    margin-top: 48px;
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

        @media (max-width: 700px){
            margin-left: 40px
            }

    @media (max-width: 610px){
            margin-left: 5px;
    }
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
        background-color: #FDFDFD;
        width: 100px;
        height: 0;
        margin-bottom: 18px;
    }

    .about1{
        display: flex;
        flex-direction: column; 
        gap: 10px;
        padding-right: 99px;

        @media (max-width: 720px){
            padding-right: 50px
            }

        a{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FDFDFD;            
            text-decoration: none;

            @media (max-width: 550px){
                font-size: 10px;
            }
        }
    }

    .about2{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-right: 50px;
        padding-top: 60px;

        @media (max-width: 410px){
            padding-right: 10px;
            }


        p{
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            color: #FDFDFD;
            text-decoration: none;

            @media (max-width: 550px){
                font-size: 10px;
            }
        }
    }


    .about3{
        padding-top: 60px;

        @media (max-width: 570px){
            padding-right: -150px;
    }

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

           p{
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            @media (max-width: 930px){
                display: none;
            }
           }
        }
    }


`




