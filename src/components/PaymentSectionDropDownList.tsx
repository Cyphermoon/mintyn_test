import React from 'react'
import { paymentSectionOptionType } from '../types'

const DropDownOptions = ({ value }: paymentSectionOptionType) => {
    return (
        <li>
            <a href="/" className="block py-2 px-4 hover:bg-gray-100">{value}</a>
        </li>
    )
}

const PaymentSectionDropDownList = () => {
    return (
        <div className='group relative'>
            <button className="text-gray-600 bg-slate-100  font-medium rounded-sm text-sm px-4 py-1 text-center inline-flex justify-between items-center border border-gray-300 w-44" type="button">
                <span className='inline-block'>All</span>
                <img
                    className='w-6 h-6'
                    style={{ filter: " invert(46%) sepia(4%) saturate(2700%) hue-rotate(176deg) brightness(92%) contrast(78%)" }}
                    src="/icons/arrow.svg"
                    alt="Arrow down icon" />
            </button>

            <div className="absolute left-0 hidden group-hover:block z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-1 text-sm text-gray-700">
                    <DropDownOptions value='All' />
                    <DropDownOptions value='Reconciled' />
                    <DropDownOptions value='Un-reconciled' />
                    <DropDownOptions value='Settled' />
                    <DropDownOptions value='Unsettled' />
                </ul>
            </div>
        </div>


    )
}

export default PaymentSectionDropDownList