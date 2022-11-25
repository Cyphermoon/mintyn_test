import { InfoSummaryType, summaryItemType } from '../types'

export const SummaryItem = ({ text, value, color }: summaryItemType) => {
    return (
        <div className='flex'>
            <p className='text-[.98rem] text-gray-700 mr-1 font-medium'>{text}:</p>
            <p className={`${color} font-semibold`}>{value}</p>
        </div>
    )
}

const InfoSummary = ({ headerText, children }: InfoSummaryType) => {
    return (
        <section className={`space-y-3 bg-white p-3 col-span-full lg:col-start-9 lg:col-end-13 row-span-1`}>
            <h4 className='text-title_md text-gray-600'>{headerText}</h4>
            <div className='h-[5px] w-full flex'>
                <div className='w-5/6 h-full bg-secondary' />
                <div className='w-1/6 h-full bg-accent' />
            </div>
            <div className='space-y-2'>
                {children}
            </div>
        </section>
    )
}

export default InfoSummary