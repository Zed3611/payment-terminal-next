import React from "react";
import {IPageProps} from "../interfaces/IPageProps";
import LoadIcon from "./LoadIcon";


const PayPage: React.FC<IPageProps> = (props) => {

    const backHandler = () => {
        props.setState({page: "left-right", content: props.content})
    }

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
                <button className='pay-button blue-color'>Оплатить</button>
            </article>
            <div className=''>
                <LoadIcon/>
            </div>
            <article className='success-page'>
                <img src={'/pics/success.jpg'} className='success-img'/>
                Оплата выполнена успешно!
                <div style={{margin:'0 0 50px 55px'}} className='hidden'>
                    <LoadIcon/>
                </div>
            </article>
            <article className='success-page'>
                <img src={'/pics/fail.jpg'} className='success-img'/>
                Сервис временно недоступен!
            </article>
        </main>
    )
}

export default PayPage