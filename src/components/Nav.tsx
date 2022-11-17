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
        <nav className='flex justify-between items-center'>
            <h1>TransMonitor</h1>
            <SearchBar placeholder='Search...' />
            <ul className='flex justify-between max-w-sm'>
                <ListItem>
                    <a href='/'>Support</a>
                </ListItem>
                <ListItem>
                    <a href="/" title='Frequent Asked Question'>FAQ</a>
                </ListItem>
                <ListItem>
                    <small>3</small>
                </ListItem>
                <ListItem>
                    <div>
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