import {IPayPageWrapper} from "./IPayPageWrapper";
import {IOperator} from "./IOperator";

export interface IOperatorListWrapper extends IPayPageWrapper{
    operators: IOperator[]
}