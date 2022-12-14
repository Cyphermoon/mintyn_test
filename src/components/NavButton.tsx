import React from 'react'
import { navButtonType } from '../types'

const NavButton = ({ text, active }: navButtonType) => {
    return (
        <button className={`${active ? "bg-primary text-white" : "bg-transparent text-gray-700 "} inline-block outline-none px-3 py-2 text-label_md border border-gray-300`}>{text}</button>
    )
}

export default NavButton