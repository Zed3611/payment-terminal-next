import styled from "styled-components";

export const ListWrapper = styled.div`
    margin: 0 auto;
    width: 700px;
    position: absolute;
    left: calc(50% - 350px);
    transition: left 0.35s ease-out;
    
    &.left{
        left: -1500px;
        transition: left 0.35s ease-out;
    }
    
    @media screen and (max-width: 700px) {
        width: 100%;
        left: 0;
    }
`

export const ImageWrapper = styled.div`
    width: 9em;
    text-align: center;
    border-radius: 1.2em;
    margin-right: 20px;
    background: white;
    align-content: center;
`

export const OperatorList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const OperatorStyled = styled.li`
    height: 6em;
    display: flex;
    margin: ${props=> props.margin==='20' ? 
        '20px 0 20px 0' : '5px 0 5px 0'};
    background-color: rgb(43,160,199);
    padding: 10px;
    align-items: center;
    cursor: ${props => props.pointer ? "pointer" : "auto"};
    
    .operator-name{
        font-size: 4em;
    }
`