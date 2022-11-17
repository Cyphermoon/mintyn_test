import React from 'react'
import InfoDisplay from './InfoDisplay'

const StatsSection = () => {
  return (
    <section className='flex-grow px-5 py-5'>
        <div className='flex justify-between'>
        <InfoDisplay name="Daily Transaction Volume" value={"2,342"} />
        <InfoDisplay name="Daily Transaction Value" value={"₦4,000,000"} />
        <InfoDisplay name="Total Transaction Volume" value={"452,000"} />
        <InfoDisplay name="Total Transaction Value" value={"₦4,000,000"} />
        </div>
    </section>
  )
}

export default StatsSection