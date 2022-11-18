import { dateStateButtonType } from "../types"

const DateStateNavButton = ({ iconURL, altText }: dateStateButtonType) => {
    return (
        <button className='border border-slate-200 rounded-sm'>
            <img src={iconURL}
                alt={altText}
                style={{ filter: "brightness(0) saturate(100%) invert(85%) sepia(1%) saturate(829%) hue-rotate(320deg) brightness(91%) contrast(100%)" }} />
        </button>
    )
}

const DateStateHeader = () => {
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-title_md text-gray-600 font-semibold'>Today: 5, Aug 2018</h3>
            <div className='flex items-center'>
                <div className='border mr-8 border-gray-300 p-2 inline-flex items-center justify-between rounded-lg'>
                    <p className='text-label-md mr-4 text-gray-500'>1 Jan - 1 Jun </p>
                    <img
                        className='w-5 h-5'
                        style={{ filter: "brightness(0) saturate(100%) invert(85%) sepia(1%) saturate(829%) hue-rotate(320deg) brightness(91%) contrast(100%)" }}
                        src="/icons/arrow.svg"
                        alt="Down Arrow" />

                </div>
                <div >
                    <DateStateNavButton iconURL="/icons/arrow_left.png" altText="Arrow Left Icon" />
                    <DateStateNavButton iconURL="/icons/arrow_right.png" altText="Arrow Right Icon" />

                </div>
            </div>
        </div>
    )
}

export default DateStateHeader