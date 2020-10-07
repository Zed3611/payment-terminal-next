import React from "react";
import {IPageProps} from "../interfaces/IPageProps";

const Operator:React.FC<IPageProps> = (props) => {

    const onclickHandler = (): void => {
        if(props.state.page === "operator-list") {
            props.setState({page: "right-left", content: props.content})
            props.setTransition('right-left')
        }
    }

    return (
        <li className="operator blue-color" onClick={onclickHandler}>
            <div className='image-wrapper'>
                <img src={props.content.logo} className="operator-logo"/>
            </div>
            <strong className='operator-name'>{props.content.name}</strong>
        </li>
    );
}

export default Operator