import React from 'react'
import DateStats from './DateStats'
import InfoDisplay from './InfoDisplay'
import InfoSummary, { SummaryItem } from './InfoSummary'
import PaymentTransactionSection from './PaymentTransactionSection'

const StatsSection = () => {
    return (
        <section className='flex-grow p-4 md:p-9 space-y-14'>
            <div className='md:flex space-y-6 md:space-y-0 flex-col md:flex-row justify-between'>
                <InfoDisplay name="Daily Transaction Volume" value={"2,342"} />
                <InfoDisplay name="Daily Transaction Value" value={"₦4,000,000"} />
                <InfoDisplay name="Total Transaction Volume" value={"452,000"} />
                <InfoDisplay name="Total Transaction Value" value={"₦4,000,000"} />
            </div>

            <section className='grid grid-cols-12 gap-5 md:gap-3 grid-rows-2'>
                <DateStats />

                <InfoSummary headerText={"Orders"}>
                    <SummaryItem text="Pending Orders" value="20" color="text-accent" />
                    <SummaryItem text="Reconciled Orders" value="80" color="text-secondary" />
                    <SummaryItem text="Total Payment" value="100" color="text-primary" />
                </InfoSummary>

                <InfoSummary headerText={"Payments"}>
                    <SummaryItem text="Un-reconciled Payments" value="20" color="text-accent" />
                    <SummaryItem text="Reconciled Orders" value="80" color="text-secondary" />
                    <SummaryItem text="Total Payment" value="100" color="text-primary" />
                </InfoSummary>

            </section>

            <PaymentTransactionSection />

        </section>
    )
}

export default StatsSection