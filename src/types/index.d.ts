import React from "react"

export type searchBarType = {
    placeholder: string
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