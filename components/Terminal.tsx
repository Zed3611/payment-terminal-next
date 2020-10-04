import React, {useState, useEffect, useRef} from "react";
import Operator from "./Operator";
import {IOperator} from '../interfaces/IOperator'
import {IPageState} from "../interfaces/IPageState";
import PayPage from "./PayPage";

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
                <div className='list-wrapper m0a'>
                    <h1>Выберите оператора для оплаты</h1>
                    <ul className='operator-list'>
                        {operators.map(operator => {
                            return <Operator content={operator} key={operator.id} setState={setState}/>
                        })}
                    </ul>
                </div>
            )
        case "pay-page":
            return (
                <div className='pays-wrapper m0a'>
                    <PayPage content={state.content!} key={state.content!.id} setState={setState}/>
                </div>
            )
        case "left-right":
            return(
                <>
                    <div className='list-wrapper m0a left' ref={listWrapperRef}>
                        <h1>Выберите оператора для оплаты</h1>
                        <ul className='operator-list'>
                            {operators.map(operator => {
                                return <Operator content={operator} key={operator.id} setState={setState}/>
                            })}
                        </ul>
                    </div>
                    <div className='pays-wrapper m0a' ref={paysWrapperRef}>
                        <PayPage content={state.content!} key={state.content!.id} setState={setState}/>
                    </div>
                </>
            )
        case "right-left":
            return(
                <>
                    <div className='list-wrapper m0a' ref={listWrapperRef}>
                        <h1>Выберите оператора для оплаты</h1>
                        <ul className='operator-list'>
                            {operators.map(operator => {
                                return <Operator content={operator} key={operator.id} setState={setState}/>
                            })}
                        </ul>
                    </div>
                    <div className='pays-wrapper m0a right' ref={paysWrapperRef}>
                        <PayPage content={state.content!} key={state.content!.id} setState={setState}/>
                    </div>
                </>
            )
    }
}

export default TerminalPage