import { transactionListType } from "../types"
import { TransactionData } from "./TransactionData"



export const TransactionList = ({ transactionDatas }: transactionListType) => {

    return <>
        {transactionDatas.map((data, idx) => (
            <tr key={idx} className='border-b border-gray-300'>
                <TransactionData text={data.itemType} field="itemType" className={"pl-6"} />
                <TransactionData text={data.price} field="default" />
                <TransactionData text={data.transactionNo} field="default" />
                <TransactionData text={data.status} field='status' color={data.color} />
            </tr>

        ))}
    </>

}