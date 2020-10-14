import React, {useState, useEffect, useRef} from "react";
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
    const [transition, setTransition] = useState<'left-right' | 'right-left' | undefined>(undefined)

    const listWrapperRef: React.RefObject<HTMLDivElement> = useRef(null),
        paysWrapperRef: React.RefObject<HTMLDivElement> = useRef(null)

    useEffect(()=>{
        setTimeout(()=>{
            switch (state.page) {
                case "left-right":
                    paysWrapperRef.current!.classList.add('right')
                    listWrapperRef.current!.classList.remove('left')
                    setTimeout(()=>{
                        setState({page: "operator-list"})
                    },350)
                    break
                case "right-left":
                    listWrapperRef.current!.classList.add('left')
                    paysWrapperRef.current!.classList.remove('right')
                    setTimeout(()=>{
                        setState(prevState => {return({page: "pay-page", content: prevState.content})})
                    },350)
                    break
            }
        }, 10)
    },[transition])

    switch (state.page) {
        case "operator-list":
            return (
                <OperatorListWrapper operators={operators} className={''} setState={setState} state={state}
                                     content={state.content!} setTransition={setTransition}/>
            )
        case "pay-page":
            return (
                <PayPageWrapper className={''} setState={setState}
                                state={state} content={state.content!} link={paysWrapperRef} setTransition={setTransition}/>
            )
        case "left-right":
            return(
                <>
                    <OperatorListWrapper operators={operators} className={'left'} link={listWrapperRef}
                                         setState={setState} state={state} content={state.content!} setTransition={setTransition}/>
                    <PayPageWrapper className={''} setState={setState}
                                    state={state} content={state.content!} link={paysWrapperRef} setTransition={setTransition}/>
                </>
            )
        case "right-left":
            return(
                <>
                    <OperatorListWrapper operators={operators} className={''} link={listWrapperRef}
                                         setState={setState} state={state} content={state.content!} setTransition={setTransition}/>
                    <PayPageWrapper className={'right'} setState={setState}
                                    state={state} content={state.content!} link={paysWrapperRef} setTransition={setTransition}/>
                </>
            )
    }
}

export default TerminalPage