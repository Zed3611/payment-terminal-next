import {IPageState} from "./IPageState";
import {IOperator} from "./IOperator";

export interface IPageProps {
    setState(state: IPageState): void,
    state: IPageState,
    content: IOperator
}