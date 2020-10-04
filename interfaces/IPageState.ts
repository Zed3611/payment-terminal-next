import {IOperator} from "./IOperator";

export interface IPageState{
    page: 'operator-list' | 'pay-page' | 'left-right' | 'right-left',
    content?: IOperator
}