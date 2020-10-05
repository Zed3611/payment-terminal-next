import React, {useRef} from "react";
import {IPageProps} from "../interfaces/IPageProps";
import LoadIcon from "./LoadIcon";
import MaskedInput from 'react-maskedinput'


const PayPage: React.FC<IPageProps> = (props) => {

    const backHandler = (): void => {
        if(props.state.page === "pay-page") {
            handler = null
            props.setState({page: "left-right", content: props.content})
        }
    }

    const payHandler = (): void => {
        if(!done) {
            done=true
            if (!(payInfoRef.current!.state.phone !== '' && payInfoRef.current!.state.sum !== undefined &&
                payInfoRef.current!.state.phoneStatus === '' && payInfoRef.current!.state.sumStatus === '')) {
                done=false
                return
            }
            loadIconRef.current!.classList.remove('hidden')
            setTimeout(()=>{
                loadIconRef.current!.classList.add('hidden')
                if (Math.floor(Math.random() * 2) > 0) {
                    successPageRef.current!.classList.remove('hidden')
                    exitTimerRef.current!.classList.remove('hidden')
                    successPageRef.current!.classList.add('active')
                    handler = setTimeout(()=>{
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
        handler:NodeJS.Timeout | null = null

    return (
        <main className='pay-page'>
            <h1>Введите данные оплаты</h1>
            <article className='inner-pay-page blue-color'>
                <section className='top-line' onClick={backHandler}>
                    <div className="arrow"/>
                    Назад
                </section>
                <section className='operator-wrapper blue-color'>
                    <div className='image-wrapper'>
                        <img src={props.content.logo} className="operator-logo"/>
                    </div>
                    <strong className='operator-name'>{props.content.name}</strong>
                </section>
                <PayInfo ref={payInfoRef}/>
                <button className='pay-button blue-color' onClick={payHandler}>Оплатить</button>
            </article>
            <div className='hidden' ref={loadIconRef}>
                <LoadIcon/>
            </div>
            <article className='success-page hidden' ref={successPageRef}>
                <img src={'/pics/success.jpg'} className='success-img'/>
                Оплата выполнена успешно!
                <div style={{margin:'0 0 50px 55px'}} className='hidden' ref={exitTimerRef}>
                    <LoadIcon/>
                </div>
            </article>
            <article className='success-page hidden' ref={failPageRef}>
                <img src={'/pics/fail.jpg'} className='success-img'/>
                Сервис временно недоступен!
            </article>
        </main>
    )
}

interface IPayInfoState {
    phone: string,
    sum: number | undefined,
    phoneStatus: string,
    sumStatus: string
}

class PayInfo extends React.Component{

    state: IPayInfoState = {
        phone: '',
        sum: undefined,
        phoneStatus: '',
        sumStatus: '',
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

    render(){
        return (<section className='info-fields'>
            <div className='info-field'>
                Номер телефона:<br/>
                <MaskedInput mask='+7(111)111-11-11' size={12} name='phone' onChange={this._onChange}/>
                <br/><label id='phone-status' style={{fontSize:'1rem', color: 'red'}}>{this.state.phoneStatus}</label>
            </div>
            <div className='info-field'>
                Сумма пополнения:<br/>
                <input maxLength={4} size={3} name='sum' onChange={this._onChange}/>
                <br/><label id='sum-status' style={{fontSize:'1rem', color: 'red'}}>{this.state.sumStatus}</label>
            </div>
        </section>)
    }
}

export default PayPage