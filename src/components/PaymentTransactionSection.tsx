import React from 'react'
import { tableHeaderType } from '../types'
import { TransactionList } from './TransactionList'
import datas from "../transaction_list.json"

const TableHeader = ({ text, className }: tableHeaderType) => {
    return (
        <th className={`${className && className} text-left text-title_md py-4 text-gray-600 font-medium`}>{text}</th>
    )
}

const PaymentTransactionSection = () => {
    return (
        <section className=''>
            <h2>Payments</h2>
            <table className='w-full'>
                <thead >
                    <tr className="bg-gray-300">
                        <TableHeader text={"Item Type"} className={"pl-6"} />
                        <TableHeader text={"Item Price"} />
                        <TableHeader text={"Transaction No"} />
                        <TableHeader text={"Status"} />
                    </tr>
                </thead>

                <tbody className='bg-white'>
                    <TransactionList transactionDatas={datas} />
                </tbody>


            </table>
        </section>
    )
}

export default PaymentTransactionSection