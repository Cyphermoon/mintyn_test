import React from 'react'

const DateStateHeader = () => {
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-title_md font-medium'>Today: 5, Aug 2018</h3>
            <div className='flex items-center'>
                <div className='border mr-8 border-gray-300 p-2 inline-flex items-center justify-between rounded-lg'>
                    <p className='text-label-md mr-4 text-gray-500'>1 Jan - 1 Jun </p>
                    <img className='w-4 h-4' src="/icons/arrow.svg" alt="Down Arrow" />

                </div>
                <div >
                    <button className='bg-stone-100 border border-gray-100 rounded-sm p-1'>
                        <img src="/icons/arrow_left.png" alt="Arrow Left icon" />
                    </button>
                    <button className='bg-stone-100 border border-gray-100 rounded-sm p-1'>
                        <img src="/icons/arrow_right.png" alt="Arrow Right icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DateStateHeader