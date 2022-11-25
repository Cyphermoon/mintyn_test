import React from 'react'
import { sideBarOptionsType, sideBarOptionType } from '../types'

export const SideBarOption = ({ iconURL, text, active }: sideBarOptionType) => {
    return (
        <div
            className={`${active && "before:bg-blue-100 before:border-l-4 before:w-[calc(100%+53px)] before:h-full before:top-0 before:-left-8 before:absolute before:opacity-80 before:z-10 before:border-blue-500 py-3 px-2 rounded-lg mt-5"} scale-effect relative flex items-center cursor-pointer`}>

            <img className={`w-5 h-5 mr-4 ${active && 'relative z-20'}`} src={iconURL} alt={`${text} icon`} />
            <p className={`test-title_sm ${active && ' relative z-20'} text-slate-500`}>{text}</p>
        </div>
    )
}

const SideBarOptions = ({ headerText, children }: sideBarOptionsType) => {
    return (
        <section className='text-slate-500 relative'>
            <p className='mb-4'>{headerText}</p>
            <div className='space-y-3'>
                {children}
            </div>
        </section>
    )
}

export default SideBarOptions