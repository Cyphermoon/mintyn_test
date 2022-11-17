import { transactionDataType } from "../types"

export const TransactionData = ({ text, field, color }: transactionDataType) => {
    return (
        <>
            {field !== "status" && <td className='text-title_md text-gray-500 my-3'>{text}</td>}
            {field === "status" &&
                <td className={`flex justify-between`}>
                    <div className='flex w-[29%] justify-between my-3 p-3 border border-gray-300 rounded-full'>
                        <div className={`rounded-full w-5 h-5 text-title_sm  bg-${color}`} />
                        <span className={`text-label_md  text-gray-500 text-${color}`}>{text}</span>
                    </div>
                    <button className='border-none w-[42%] outline-none bg-transparent'>
                        <img src="/icons/arrow.svg" alt="arrow down" />
                    </button>
                </td>

            }
            {field === "itemType" && <td>

            </td>}

        </>

    )
}

export const TransactionList = () => {
    return (
        <tr className='border-b border-gray-300'>
            <TransactionData text='Apple MacBook' field="itemType" />
            <TransactionData text='$303010' />
            <TransactionData text='123456789' />
            <TransactionData text='pending' field='status' color='secondary' />
        </tr>
    )
}