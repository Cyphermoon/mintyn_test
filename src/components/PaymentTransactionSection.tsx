import { tableHeaderType } from '../types'
import { TransactionList } from './TransactionList'
import datas from "../transaction_list.json"
import NavButton from './NavButton'
import SearchBar from './SearchBar'
import PaymentSectionDropDownList from './PaymentSectionDropDownList'

const TableHeader = ({ text, className }: tableHeaderType) => {
    return (
        <th className={`${className && className} text-left text-title_md py-4 text-gray-600 font-medium`}>{text}</th>
    )
}


const PaymentTransactionSection = () => {
    return (
        <section className='space-y-6'>
            <h2>Payments</h2>
            <div className='flex justify-between items-center'>
                <p className='text-label_bg text-gray-500'>
                    <span>Showing </span>
                    <span className='text-primary inline-flex items-center'>
                        <span>20</span>
                        <img className='w-6 h-6' style={{ filter: "invert(46%) sepia(92%) saturate(4172%) hue-rotate(202deg) brightness(94%) contrast(100%)" }} src="/icons/arrow.svg" alt="Arrow Down Icon" />
                    </span>
                    <span>out of 500 payments</span>
                </p>

                <SearchBar placeholder='Search payment' outline={true} />

                <PaymentSectionDropDownList />
            </div>

            <table className='w-full'>
                <thead >
                    <tr className="bg-lightgray">
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

            <div className='flex justify-between'>
                <p className='text-label_md text-gray-700'>Showing 1 to 10 of 500 entries</p>
                <div>
                    <NavButton text="Previous" />
                    <NavButton text="1" active={true} />
                    <NavButton text="2" />
                    <NavButton text="Next" />
                </div>
            </div>
        </section>
    )
}

export default PaymentTransactionSection