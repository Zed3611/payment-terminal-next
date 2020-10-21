import React, {useState, useEffect} from "react";
import {IOperator} from '../interfaces/IOperator'
import {IPageState} from "../interfaces/IPageState";
import OperatorListWrapper from "./OperatorListWrapper";
import PayPageWrapper from "./PayPageWrapper";

const operators: IOperator[] = [
    {id: 0, logo: '/pics/megaphone.jpg', name: 'Мегафон'},
    {id: 1, logo: '/pics/beeline.jpg', name: 'Билайн'},
    {id: 2, logo: '/pics/mts.png', name: 'МТС'},
    {id: 3, logo: '/pics/yota.jpg', name: 'Yota'},
    {id: 4, logo: '/pics/tele2.png', name: 'Tele2'}
]

const TerminalPage: React.FC = () => {

    const [state, setState] = useState<IPageState>({page: "operator-list"})
    const [payClass, setPayClass] = useState<string>('right')
    const [operatorClass, setOperatorClass] = useState<string>('')

    useEffect(()=>{
        setTimeout(()=>{
            switch (state.page) {
                case "left-right":
                    setPayClass(() => {return('right')})
                    setOperatorClass(() => {return('')})
                    setTimeout(()=>{
                        setState({page: "operator-list"})
                    },350)
                    break
                case "right-left":
                    setPayClass(() => {return('')})
                    setOperatorClass(() => {return('left')})
                    setTimeout(()=>{
                        setState(prevState => {return({page: "pay-page", content: prevState.content})})
                    },350)
                    break
            }
        }, 10)
    },[state])

    switch (state.page) {
        case "operator-list":
            return (
                <OperatorListWrapper operators={operators} className={''} setState={setState} state={state}
                                     content={state.content!}/>
            )
        case "pay-page":
            return (
                <PayPageWrapper className={''} setState={setState}
                                state={state} content={state.content!}/>
            )
        case "left-right":
            return(
                <>
                    <OperatorListWrapper operators={operators} className={operatorClass}
                                         setState={setState} state={state} content={state.content!}/>
                    <PayPageWrapper className={payClass} setState={setState}
                                    state={state} content={state.content!}/>
                </>
            )
        case "right-left":
            return(
                <>
                    <OperatorListWrapper operators={operators} className={operatorClass}
                                         setState={setState} state={state} content={state.content!}/>
                    <PayPageWrapper className={payClass} setState={setState}
                                    state={state} content={state.content!}/>
                </>
            )
    }
}

export default TerminalPage