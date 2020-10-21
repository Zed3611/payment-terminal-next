import React from "react";
import PayPage from "./PayPage";
import {IPayPageWrapper} from "../interfaces/IPayPageWrapper";
import {PaysWrapper} from '../style/PayPageStyled'

const PayPageWrapper: React.FC<IPayPageWrapper> = (props) => {

    return(
        <PaysWrapper className={`${props.className}`}>
            <PayPage content={props.content} key={props.content.id} setState={props.setState} state={props.state}/>
        </PaysWrapper>
    )

}

export default PayPageWrapper