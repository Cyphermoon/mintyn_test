import React from 'react'
import { infoDisplayType } from '../types'

const InfoDisplay = ({ name, value }: infoDisplayType) => {
    return (
        <div className='bg-white p-3 rounded-sm'>
            <div className='flex flex-col justify-start'>
                <p className='text-title-md text-gray-500'>{name}</p>
                <h3>{value}</h3>
            </div>
        </div>
    )
}

export default InfoDisplay