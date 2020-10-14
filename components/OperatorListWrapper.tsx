import React from "react";
import Operator from "./Operator";
import {IOperatorListWrapper} from "../interfaces/IOperatorListWrapper";
import {ListWrapper, OperatorList} from '../style/OperatorListStyled'

const OperatorListWrapper: React.FC<IOperatorListWrapper> = (props) => {

    return(
        <ListWrapper className={`${props.className}`} ref={props.link}>
            <h1>Выберите оператора для оплаты</h1>
            <OperatorList>
                {props.operators.map(operator => {
                    return <Operator content={operator} key={operator.id} setState={props.setState} state={props.state} setTransition={props.setTransition}/>
                })}
            </OperatorList>
        </ListWrapper>
    )
}

export default OperatorListWrapper