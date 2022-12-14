import styled from 'styled-components'
import { FaStar } from "react-icons/fa";



//ICONS
export const Star = styled(FaStar)`
    color: #EFD444;
`

export const Div = styled.div`
    margin-bottom: 100px;
    .sc-lllmON{
        display: none;
    }

    .rec-arrow-right{
        background: transparent;
        color: #E11383;
        box-shadow: none;

        &:hover{
            background: #E11383;
            color: white;
    }

    .div-stars{
        display: flex;
        justify-content: center;
    }
}

    .rec-arrow-left{
        background: transparent;
        color: #E11383;
        box-shadow: none;

        &:hover{
            background: #E11383;
            color: white;
        }

    }

`

export const TextHighlights = styled.div`
    margin-left: 10%;
    margin-bottom: 4%;
    margin-top: 64px;

    .line{
        border-bottom: 4px solid #E11383;
        width: 64px;
    }
`

export const H2Highlights = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #0C0D0D;
`

export const AllProductsCarousel = styled.div`
    display: flex;
    gap: 40px;

    .sizeDiv{
        max-width: 236px;
        width: 100%;
        text-align: center;
        display: inline-block;

        &:hover {
            border: 1px solid #BA0668;
            border-radius: 4px;
            transform: scale(0.9);
            transition: 0.7s ease all;

        }

        &:hover button{
            display: block;
        }

        .paragraph-principal{
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            padding-bottom: 8px;
            padding-top: 8px;
            text-align: center;

            @media (max-width: 440px){
                font-size: 10px;
            }
        }

        .price-old{
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #3C3E40;
            text-decoration: line-through;
            padding-top: 8px;
            padding-left: 70px;

            @media (max-width: 440px){
                padding-left: 30px;
                font-size: 6px;
            }

        }

        .image-product{
            height: 250px;

            @media (max-width: 440px){
                height: 200px;
            }
        }

        button{
            background: #E11383;
            border-radius: 8px;
            width: 220px;
            height: 42px;
            border: none;
            color: #fff;
            margin: 16px 8px;
            display: none;
            cursor: pointer;
        }
    }
`

export const H1Price = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #E11383;
    padding-top: 8px;
    padding-bottom: 4px;
    text-align: center;

    @media (max-width: 440px){
        font-size: 20px;
        padding-top: 0;
}

`






