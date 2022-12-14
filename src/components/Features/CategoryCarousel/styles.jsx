import styled from "styled-components"


export const Div = styled.div`
    margin-top: 64px;
  

    .rec-arrow-right{
        background: transparent;
        color: #E11383;
        box-shadow: none;

        &:hover{
            background: #E11383;
            color: white;
    }}

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

export const AllProductsCarousel = styled.div`
    gap: 40px;

.sizeDiv{
    .div-category{
        position: relative;
        align-items: end;
        display: flex;
        justify-content: center;
    }

    &:hover {
        transform: scale(0.9);
        transition: 0.7s ease all;

    }

    .paragraph-principal{
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        position: absolute;
        bottom: 30px;
        color: #FDFDFD;
    }

    .image-product{
        border-radius: 5px;
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
