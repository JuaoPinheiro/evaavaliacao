import styled from 'styled-components'
import { MdOutlineMarkEmailRead } from "react-icons/md";


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
        margin-left: 9%;
        padding-top: 50px;
        font-size: 13px;
        color: #DADFEB;
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