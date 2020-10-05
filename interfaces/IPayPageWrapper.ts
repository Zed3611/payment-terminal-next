import {IPageProps} from "./IPageProps";
import React from "react";

export interface IPayPageWrapper extends IPageProps{
    className: string,
    link?: React.RefObject<HTMLDivElement>
}