import React from 'react'
import { listItemType } from '../types'
import SearchBar from './SearchBar'


const ListItem = ({ children, className }: listItemType) => {
    return <li className={`${className ? className : ""}`}>
        {children}
    </li>
}

const Nav = () => {
    return (
        <nav className='flex justify-between items-center bg-white drop-shadow-2xl py-3 px-5'>
            <h1 className='text-primary'>TransMonitor</h1>
            <SearchBar placeholder='Search...' />
            <ul className='flex justify-between w-11/12 max-w-sm'>
                <ListItem>
                    <a href='/'>Support</a>
                </ListItem>
                <ListItem>
                    <a href="/" title='Frequent Asked Question'>FAQ</a>
                </ListItem>
                <ListItem>
                    <small>3</small>
                </ListItem>
                <ListItem className='flex'>
                    <div className='flex flex-col'>
                        <small>Hello</small>
                        <p>Oluwaleke Ojo</p>
                    </div>
                    <img src="https://via.placeholder.com/30" alt="User Profile" />
                </ListItem>
            </ul>
        </nav>
    )
}

export default Nav