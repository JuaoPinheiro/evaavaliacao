import styled from 'styled-components'
import { FaStar, FaRegStar } from "react-icons/fa";



//ICONS
export const Star = styled(FaStar)`
    color: #EFD444;
`

export const StarWhite = styled(FaRegStar)`
    color: #EFD444;


`



export const Image = styled.img``

export const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;


    .h2-highlights{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        border-top-right-radius: 1px solid #E11383;
    }

    .sc-lllmON{
            display: none;
        }

    .rec-arrow-right{
        margin-right: 70px;
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
        margin-left: 70px;

        &:hover{
            background: #E11383;
            color: white;
        }

    }

    .line{
        border-bottom: 4px solid #E11383;
        width: 64px;
    }
`

export const TextHighlights = styled.div`
    margin-left: 10%;
    margin-bottom: 4%;
    margin-top: 64px;
`


//CAROUSEL'S

export const H2Highlights = styled.h2``


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
                font-size: 8px;
            }

        }

        .paragraph-small{
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
        }

        .image-product{
            height: 200px;
            @media (max-width: 440px){
                height: 120px;
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
        font-size: 18px;
            }

`

export const Products = styled.div`
    display: flex;
    width: 236px;
    height: 452px;
    flex-direction: column;
    cursor: pointer;

`





