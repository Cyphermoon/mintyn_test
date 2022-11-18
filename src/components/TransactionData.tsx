import { transactionDataType } from "../types"
import React from "react"
export const TransactionData = ({ text, field, color, className }: transactionDataType) => {
    return (
        <>
            {field === "default" && <td className='text-title_md text-gray-500 my-3'>{text}</td>}

            {field === "status" &&
                <td className={`flex justify-between`}>
                    <div className='flex w-[40%] justify-between my-3 p-3 border border-gray-300  rounded-full'>
                        <div className={`rounded-full w-5 h-5 text-title_sm  bg-${color}`} />
                        <span className={`text-label_md w-9/12 text-gray-500 text-${color}`}>{text}</span>
                    </div>
                    <button className='border-none w-[50%] outline-none bg-transparent'>
                        <img src="/icons/arrow.svg" alt="arrow down" />
                    </button>
                </td>

            }
            {field === "itemType" &&
                <td className={` ${className && className} flex justify-between items-center w-[48%]`}>
                    <div className={`bg-gray-700 rounded-full inline-block text-white p-3`}>VW</div>
                    <p className="text-title_md text-gray-500">{text}</p>
                </td>}
        </>

    )
}