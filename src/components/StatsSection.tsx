import React from 'react'
import DateStats from './DateStats'
import InfoDisplay from './InfoDisplay'
import InfoSummary, { SummaryItem } from './InfoSummary'
import PaymentTransactionSection from './PaymentTransactionSection'

const StatsSection = () => {
    return (
        <section className='flex-grow p-12 space-y-10'>
            <div className='flex justify-between'>
                <InfoDisplay name="Daily Transaction Volume" value={"2,342"} />
                <InfoDisplay name="Daily Transaction Value" value={"₦4,000,000"} />
                <InfoDisplay name="Total Transaction Volume" value={"452,000"} />
                <InfoDisplay name="Total Transaction Value" value={"₦4,000,000"} />
            </div>

            <section className='grid md:grid-cols-12 md:gap-4 md:grid-rows-2'>
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