import React from 'react'
import { useThemeContext } from '../context/ThemeProvider'
import SideBarOptions, { SideBarOption } from './SideBarOptions'

const SideBar = () => {
    const { navOpened } = useThemeContext()

    return (
        <section className={`origin-top-left absolute md:static w-full md:w-[18%] z-30 md:z-[revert] left-0 top-20 block ${navOpened ? "animate-moveIn" : "animate-moveOut"} md:animate-none bg-white h-screen py-10  text-left px-8 space-y-8 md:block`}>
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