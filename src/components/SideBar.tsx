import React from 'react'
import SideBarOptions, { SideBarOption } from './SideBarOptions'

const SideBar = () => {
    return (
        <section className='w-1/6 bg-white h-screen py-10 text-left px-8 space-y-8'>
            <button className='font-sans text-white font-semibold text-title_sm uppercase bg-secondary rounded-full px-9 py-3'>Generate Invoice</button>

            <SideBarOptions headerText="Main">
                <SideBarOption active={true} iconURL='/icons/Vector.svg' text='Overview' />
            </SideBarOptions>

            <SideBarOptions headerText="Payments">
                <SideBarOption iconURL='/icons/wallet-43-1.svg' text='All Payments' />
                <SideBarOption iconURL='/icons/wallet-43-2.svg' text='Reconciled Payment' />
                <SideBarOption iconURL='/icons/wallet-43-1.svg' text='Un-Reconciled Payment' />
                <SideBarOption iconURL='/icons/ic_fiber_manual_record_48px.svg' text='Manual Settlement' />
            </SideBarOptions>

            <SideBarOptions headerText="Orders">
                <SideBarOption iconURL='/icons/order.svg' text='All Orders' />
                <SideBarOption iconURL='/icons/order_3.svg' text='Pending Orders' />
                <SideBarOption iconURL='/icons/order_2.svg' text='Reconciled Orders' />
            </SideBarOptions>

            <SideBarOption iconURL='/icons/single-01.svg' text='Merchant Profile' />

        </section>
    )
}

export default SideBar