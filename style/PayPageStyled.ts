import styled from "styled-components";

export const Button = styled.button`
    margin: 10px 0 0 0;
    width: 300px;
    background-color: rgb(43,160,199);
    border: none;
    cursor: pointer;
    color: black;
    font-size: 1.75em;
    border: 2px solid black;
    border-radius: 5px;
    
    :hover{
        background-color: black;
        color: rgb(43,160,199);
    }
`

export const InfoField = styled.div`
    display: flex;
    flex-direction: column;
    
    ,input{
        border: none;
        font-size: 1.5em;
        font-family: Arial;
    }
`
interface IInfoLabelProps {
    opacity?: string
}

export const InfoLabel = styled.label<IInfoLabelProps>`
    font-size: 0.7em;
    color: red;
    height: 1em;
    opacity: ${props => props.opacity};
`

export const InfoForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const SuccessPage = styled.article`
    position: absolute;
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 2em;
    z-index: -1;
    top: 0;
    transition: top 0.25s linear;
    
    .hidden&{
        display: flex;
        top: 120px;
    }
    
    .active&{
        top: 500px;
    }
    
    @media screen and (max-width: 700px) {
        width: 100%;
        
        .active&{
            top: 470px;
        }
    }
    
    @media screen and (max-width: 550px) {
        .active&{
            top: 420px;
        }
    }
    
    @media screen and (max-width: 440px) {
        .active&{
            top: 360px;
        }
    }
`

export const PaysWrapper = styled.main`
    margin: 0 auto;
    width: 700px;
    position: fixed;
    right: calc(50% - 350px);
    transition: right 0.35s ease-out;
    
    .right&{
        right: -1500px;
        transition: right 0.35s ease-out;
    }
    
    @media screen and (max-width: 700px) {
        width: 100%;
        right: 0;
    }
`

export const Arrow = styled.div`
    top: 10px;
    width: 20px;
    height: 20px;
    border-top: 5px solid black;
    border-right: 5px solid black;
    transform: rotate(-135deg);
    
    @media screen and (max-width: 550px) {
        height: 15px;
        width: 15px;
    }
    
    @media screen and (max-width: 440px) {
        height: 13px;
        width: 13px;
    }
`

export const TopLine = styled.section`
    display: flex;
    cursor: pointer;
    width: fit-content;
    font-size: 1.75em;
    align-items: center;
    
    @media screen and (max-width: 700px) {
        margin: 5px;
    }
`

export const InnerPayPage = styled.article`
    padding: 20px;
    background-color: rgb(43,160,199);
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 700px) {
        padding: 0;
    }
`