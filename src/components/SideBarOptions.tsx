import React from 'react'
import { sideBarOptionsType, sideBarOptionType } from '../types'

export const SideBarOption = ({ iconURL, text, active }: sideBarOptionType) => {
    return (
        <div className={`${active && "bg-blue-100 border-l-4 border-blue-500 py-3 px-2 rounded-lg mt-5"} flex items-center`}>
            <img className="w-5 h-5 mr-4" src={iconURL} alt={`${text} icon`} />
            <p className='test-title_sm text-slate-500'>{text}</p>
        </div>
    )
}

const SideBarOptions = ({ headerText, children }: sideBarOptionsType) => {
    return (
        <section className='text-slate-500'>
            <p className='mb-4'>{headerText}</p>
            <div className='space-y-3'>
                {children}
            </div>
        </section>
    )
}

export default SideBarOptions