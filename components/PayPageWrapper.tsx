import React from "react";
import PayPage from "./PayPage";
import {IPayPageWrapper} from "../interfaces/IPayPageWrapper";

const PayPageWrapper: React.FC<IPayPageWrapper> = (props) => {

    return(
        <div className={`pays-wrapper m0a ${props.className}`} ref={props.link}>
            <PayPage content={props.content} key={props.content.id} setState={props.setState} state={props.state}/>
        </div>
    )

}

export default PayPageWrapper