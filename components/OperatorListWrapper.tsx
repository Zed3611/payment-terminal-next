import React from "react";
import Operator from "./Operator";
import {IOperatorListWrapper} from "../interfaces/IOperatorListWrapper";

const OperatorListWrapper: React.FC<IOperatorListWrapper> = (props) => {

    return(
        <div className={`list-wrapper m0a ${props.className}`} ref={props.link}>
            <h1>Выберите оператора для оплаты</h1>
            <ul className='operator-list'>
                {props.operators.map(operator => {
                    return <Operator content={operator} key={operator.id} setState={props.setState} state={props.state}/>
                })}
            </ul>
        </div>
    )
}

export default OperatorListWrapper