import React, { ReactElement } from "react";

export interface ISocialMedia {
    icon: ReactElement,
    lnk: string,
}

export interface IAboutCard {
    index: number;
    img: string;
    subTitle: string;
    btnText: string;
    btnLnk: string;
    description: string;
    title: string
}

export interface IServceCard {
    title: string;
    description: string;
    icon: React.Node;
}