import React from 'react'
import InfoDisplay from './InfoDisplay'
import InfoSummary, { SummaryItem } from './InfoSummary'

const StatsSection = () => {
  return (
    <section className='flex-grow px-5 py-5'>
        <div className='flex justify-between'>
            <InfoDisplay name="Daily Transaction Volume" value={"2,342"} />
            <InfoDisplay name="Daily Transaction Value" value={"₦4,000,000"} />
            <InfoDisplay name="Total Transaction Volume" value={"452,000"} />
            <InfoDisplay name="Total Transaction Value" value={"₦4,000,000"} />
        </div>

        <div className='space-y-2'>
            <InfoSummary headerText={"Orders"}>
                <SummaryItem text="Pending Orders" value="20" color="text-accent"/>
                <SummaryItem text="Reconciled Orders" value="80" color="text-secondary"/>
                <SummaryItem text="Total Payment" value="80" color="text-primary"/>
        </InfoSummary>

        <InfoSummary headerText={"Payments"}>
            <SummaryItem text="Un-reconciled Payments" value="20" color="text-accent"/>
            <SummaryItem text="Reconciled Orders" value="80" color="text-secondary"/>
            <SummaryItem text="Total Payment" value="80" color="text-primary"/>
        </InfoSummary>
        </div>
        
    </section>
  )
}

export default StatsSection