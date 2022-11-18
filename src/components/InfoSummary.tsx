import React from 'react'
import { InfoSummaryType, summaryItemType } from '../types'

export const SummaryItem = ({ text, value, color }: summaryItemType) => {
    return (
        <div className='flex'>
            <p className='text-label_bg mr-1'>{text}:</p>
            <p className={`${color} font-semibold`}>{value}</p>
        </div>
    )
}

const InfoSummary = ({ headerText, children }: InfoSummaryType) => {
    return (
        <section className='space-y-3 bg-white p-3'>
            <h4 className='m-0'>{headerText}</h4>
            <div className='h-1 w-full flex'>
                <div className='w-4/6 h-full bg-secondary' />
                <div className='w-2/6 h-full bg-accent' />
            </div>
            <div className='space-y-1'>
                {children}
            </div>
        </section>
    )
}

export default InfoSummary