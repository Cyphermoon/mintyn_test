import React from "react"

export type searchBarType = {
    placeholder: string
}

export type summaryItemType = {
    text: string,
    value: number,
    color: string
}

export type transactionDataType = {
    text: string
    field?: string
    color?: string
}

export type transactionListType = {
    transactionDatas: {
        itemType: string,
        price: string,
        transactionNo: string,
        time: string, 
        status: string
    }[]
}

export type tableHeaderType = {
    text: string
}

export type InfoSummaryType = {
    headerText: string,
    children: React.ReactNode
}

export type infoDisplayType = {
    name: string,
    value: string
}

export type sideBarOptionsType = {
    headerText: string,
    children: React.ReactNode,
    className?: string,
}

export type sideBarOptionType = {
    iconURL: string,
    text: string,
    active?: true
}

export type listItemType = {
    className?: string,
    children: React.ReactNode
}