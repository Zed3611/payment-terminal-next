import React, {useRef} from "react";
import {IPageProps} from "../interfaces/IPageProps";
import LoadIcon from "./LoadIcon";
import MaskedInput from 'react-maskedinput'
import {Button, InfoField, InfoForm, InfoLabel, SuccessPage, Arrow, TopLine, InnerPayPage} from '../style/PayPageStyled'
import {OperatorStyled} from '../style/OperatorListStyled'
import {ImageWrapper} from "../style/OperatorListStyled"


const PayPage: React.FC<IPageProps> = (props) => {

    const backHandler = (): void => {
        if(props.state.page === "pay-page" && !done) {
            refresh()
            props.setState({page: "left-right", content: props.content})
            props.setTransition('left-right')
        }
    }

    const payHandler = (): void => {
        if(!done) {
            done=true
            loadIconRef.current!.classList.remove('hidden')
            setTimeout(()=>{
                loadIconRef.current!.classList.add('hidden')
                if (Math.floor(Math.random() * 2) > 0) {
                    successPageRef.current!.classList.remove('hidden')
                    exitTimerRef.current!.classList.remove('hidden')
                    successPageRef.current!.classList.add('active')
                    handler = setTimeout(()=>{
                        done=false
                        if(handler)
                            backHandler()
                    }, 2000)
                }
                else {
                    failPageRef.current!.classList.remove('hidden')
                    failPageRef.current!.classList.add('active')
                    handler = setTimeout(()=>{
                        if(handler)
                            refresh()
                    }, 2000)
                }
            }, 3000)
        }
    }

    const refresh = (): void => {
        handler = null
        done=false
        successPageRef.current!.classList.add('hidden')
        failPageRef.current!.classList.add('hidden')
        successPageRef.current!.classList.remove('active')
        failPageRef.current!.classList.remove('active')
        exitTimerRef.current!.classList.add('hidden')
    }

    let payInfoRef: React.RefObject<PayInfo> = useRef(null),
        successPageRef: React.RefObject<HTMLDivElement> = useRef(null),
        failPageRef: React.RefObject<HTMLDivElement> = useRef(null),
        loadIconRef: React.RefObject<HTMLDivElement> = useRef(null),
        exitTimerRef: React.RefObject<HTMLDivElement> = useRef(null),
        done: boolean = false,
        handler: number | null = null

    return (
        <main className='pay-page'>
            <h1>Введите данные оплаты</h1>
            <InnerPayPage>
                <TopLine onClick={backHandler}>
                    <Arrow/>
                    Назад
                </TopLine>
                <OperatorStyled>
                    <ImageWrapper>
                        <img src={props.content.logo} className="operator-logo"/>
                    </ImageWrapper>
                    <strong className='operator-name'>{props.content.name}</strong>
                </OperatorStyled>
                <PayInfo ref={payInfoRef} onClick={payHandler}/>
            </InnerPayPage>
            <div className='hidden' ref={loadIconRef}>
                <LoadIcon/>
            </div>
            <SuccessPage className='hidden' ref={successPageRef}>
                <img src={'/pics/success.jpg'} className='success-img'/>
                Оплата выполнена успешно!
                <div style={{margin:'0 0 50px 1.5em'}} className='hidden' ref={exitTimerRef}>
                    <LoadIcon/>
                </div>
            </SuccessPage>
            <SuccessPage className='hidden' ref={failPageRef}>
                <img src={'/pics/fail.jpg'} className='success-img'/>
                Сервис временно недоступен!
            </SuccessPage>
        </main>
    )
}

interface IPayInfoState {
    phone: string,
    sum: number | undefined,
    phoneStatus: string,
    sumStatus: string
}

interface IPayInfoProps {
    onClick: () => void
}

class PayInfo extends React.Component<IPayInfoProps>{

    constructor(props: IPayInfoProps) {
        super(props);
        this.onClick = props.onClick
    }

    onClick: () => void

    state: IPayInfoState = {
        phone: '',
        sum: undefined,
        phoneStatus: 'Неверно введен номер!',
        sumStatus: 'Диапазон суммы 1-1000',
    }

    _onChange = (e:any): void => {
        this.setState({[e.target.name]: e.target.value})
        switch (e.target.name) {
            case 'phone':
                if(!(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(e.target.value)))
                    this.setState({phoneStatus: 'Неверно введен номер!'})
                else
                    this.setState({phoneStatus: ''})
                break
            case 'sum':
                if(!(e.target.value >= 1 && e.target.value <= 1000))
                    this.setState({sumStatus: 'Диапазон суммы 1-1000'})
                else
                    this.setState({sumStatus: ''})
                break

        }
    }

    _onSubmit = (event: any): void => {
        event.preventDefault()
        if (this.state.phone !== '' && this.state.sum !== undefined &&
            this.state.phoneStatus === '' && this.state.sumStatus === '')
            this.onClick()

    }

    render(){
        return (
            <InfoForm>
                <InfoField>
                    Номер телефона:
                    <MaskedInput mask='+7(111)111-11-11' size={12} name='phone' onChange={this._onChange} style={{'width': '8.2em'}}/>
                    <InfoLabel id='phone-status'>{this.state.phoneStatus}</InfoLabel>
                </InfoField>
                <InfoField>
                    Сумма:
                    <input maxLength={4} size={3} name='sum' onChange={this._onChange} style={{'width': '3em'}}/>
                    <InfoLabel id='sum-status'>{this.state.sumStatus}</InfoLabel>
                </InfoField>
                <Button type={'submit'} onClick={this._onSubmit}>Оплатить</Button>
            </InfoForm>)
    }
}

export default PayPage