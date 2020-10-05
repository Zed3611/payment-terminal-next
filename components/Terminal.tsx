import React, {useState, useEffect, useRef} from "react";
import {IOperator} from '../interfaces/IOperator'
import {IPageState} from "../interfaces/IPageState";
import OperatorListWrapper from "./OperatorListWrapper";
import PayPageWrapper from "./PayPageWrapper";

const TerminalPage: React.FC = () => {

    const operators: IOperator[] = [
        {id: 0, logo: '/pics/megaphone.jpg', name: 'Мегафон'},
        {id: 1, logo: '/pics/beeline.jpg', name: 'Билайн'},
        {id: 2, logo: '/pics/mts.png', name: 'МТС'},
        {id: 3, logo: '/pics/yota.jpg', name: 'Yota'},
        {id: 4, logo: '/pics/tele2.png', name: 'Tele2'}
    ]

    const [state, setState] = useState<IPageState>({page: "operator-list"})

    let listWrapperRef: React.RefObject<HTMLDivElement> = useRef(null),
        paysWrapperRef: React.RefObject<HTMLDivElement> = useRef(null)

    useEffect(()=>{
        switch (state.page) {
            case "left-right":
                listWrapperRef.current!.classList.remove('left')
                paysWrapperRef.current!.classList.add('right')
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
    })

    switch (state.page) {
        case "operator-list":
            return (
                <OperatorListWrapper operators={operators} className={''}
                                     setState={setState} state={state} content={state.content!}/>
            )
        case "pay-page":
            return (
                <PayPageWrapper className={''} setState={setState}
                                state={state} content={state.content!} link={paysWrapperRef}/>
            )
        case "left-right":
            return(
                <>
                    <OperatorListWrapper operators={operators} className={'left'} link={listWrapperRef}
                                         setState={setState} state={state} content={state.content!}/>
                    <PayPageWrapper className={''} setState={setState}
                                    state={state} content={state.content!} link={paysWrapperRef}/>
                </>
            )
        case "right-left":
            return(
                <>
                    <OperatorListWrapper operators={operators} className={''} link={listWrapperRef}
                                         setState={setState} state={state} content={state.content!}/>
                    <PayPageWrapper className={'right'} setState={setState}
                                    state={state} content={state.content!} link={paysWrapperRef}/>
                </>
            )
    }
}

export default TerminalPage