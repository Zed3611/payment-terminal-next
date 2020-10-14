import React from "react";
import {IPageProps} from "../interfaces/IPageProps";
import {ImageWrapper} from "../style/OperatorListStyled"
import {OperatorStyled} from '../style/OperatorListStyled'

const Operator:React.FC<IPageProps> = (props) => {

    const onclickHandler = (): void => {
        if(props.state.page === "operator-list") {
            props.setState({page: "right-left", content: props.content})
            props.setTransition('right-left')
        }
    }

    // @ts-ignore
    return (
        <OperatorStyled pointer margin='20' className='operator' onClick={onclickHandler}>
            <ImageWrapper>
                <img src={props.content.logo} className="operator-logo"/>
            </ImageWrapper>
            <strong className='operator-name'>{props.content.name}</strong>
        </OperatorStyled>
    );
}

export default Operator