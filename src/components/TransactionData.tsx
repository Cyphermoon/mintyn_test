import { transactionDataType } from "../types"
export const TransactionData = ({ text, field, color, className }: transactionDataType) => {
    return (
        <>
            {field === "default" && <td className='text-label_big text-gray-500 my-3'>{text}</td>}

            {field === "status" &&
                <td className={`flex justify-between`}>
                    <div className='flex w-[44%] justify-between my-3 p-3 border border-gray-300  rounded-full'>
                        <div className={`rounded-full w-5 h-5  bg-${color}`} />
                        <span className={`text-label_bg w-9/12 text-gray-500 text-${color}`}>{text}</span>
                    </div>
                    <button className='border-none w-[50%] outline-none bg-transparent'>
                        <img
                            src="/icons/arrow.svg" alt="arrow down"
                            style={{ filter: "brightness(0) saturate(100%) invert(85%) sepia(1%) saturate(829%) hue-rotate(320deg) brightness(91%) contrast(100%)" }} />
                    </button>
                </td>

            }
            {field === "itemType" &&
                <td className={` ${className && className} flex justify-between items-center w-[49%]`}>
                    <div className={`bg-gray-600 rounded-full inline-block text-white p-3`}>VW</div>
                    <p className="text-label_big text-gray-500">{text}</p>
                </td>}
        </>

    )
}