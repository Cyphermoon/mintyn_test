import React from "react"

export type searchBarType = {
    placeholder: string
    outline?: boolean
}

export type paymentSectionOptionType = {
    value: string
}

export type dateStateButtonType = {
    iconURL: string,
    altText: string
}

export type summaryItemType = {
    text: string,
    value: string,
    color: string
}

export type transactionDataType = {
    text: string,
    field?: "status" | "itemType" | "default",
    color?: string,
    className?: string
}

export type navButtonType = {
    text: string,
    active?: true
}

export type transactionListType = {
    transactionDatas: {
        itemType: string,
        price: string,
        transactionNo: string,
        time: string, 
        status: string
        color: string
    }[]
}

export type tableHeaderType = {
    text: string
    className?: string
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