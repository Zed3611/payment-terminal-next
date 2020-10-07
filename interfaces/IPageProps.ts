import {IPageState} from "./IPageState";
import {IOperator} from "./IOperator";

export interface IPageProps {
    setState(state: IPageState): void,
    setTransition(state: 'left-right' | 'right-left' | undefined) :void,
    state: IPageState,
    content: IOperator
}