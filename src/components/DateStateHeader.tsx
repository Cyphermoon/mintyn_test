import { dateStateButtonType } from "../types"

const DateStateNavButton = ({ iconURL, altText }: dateStateButtonType) => {
    return (
        <button className='border border-slate-400 p-1 rounded-sm'>
            <img
                className="w-6 h-6"
                src={iconURL}
                alt={altText}
                style={{ filter: "invert(67%) sepia(17%) saturate(197%) hue-rotate(179deg) brightness(95%) contrast(85%)" }} />
        </button>
    )
}

const DateStateHeader = () => {
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-title_md text-gray-600 font-semibold'>Today: 5, Aug 2018</h3>
            <div className='flex items-center'>
                <div className='border mr-8 border-slate-400 p-1 inline-flex items-center justify-between rounded-lg'>
                    <p className='text-label-md mr-4 text-gray-500'>1 Jan - 1 Jun </p>
                    <img
                        className='w-6 h-6'
                        style={{ filter: "invert(67%) sepia(17%) saturate(197%) hue-rotate(179deg) brightness(95%) contrast(85%)" }}
                        src="/icons/arrow.svg"
                        alt="Down Arrow" />

                </div>
                <div className="space-x-3">
                    <DateStateNavButton iconURL="/icons/arrow_left.png" altText="Arrow Left Icon" />
                    <DateStateNavButton iconURL="/icons/arrow_right.png" altText="Arrow Right Icon" />

                </div>
            </div>
        </div>
    )
}

export default DateStateHeader