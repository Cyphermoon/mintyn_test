import React from 'react'
import { searchBarType } from '../types'

const SearchBar = ({ placeholder, outline }: searchBarType) => {
    return (
        <form className={`${outline ? "flex bg-transparent border-b border-gray-400 rounded-none" : "bg-transparent hidden rounded-lg"} items-center py-2 px-2 w-11/12 max-w-md md:flex`}>
            <img className='mr-2 w-5 h-5' src='/icons/Search.svg' alt='Bell icon' />
            <input
                className='bg-transparent flex-grow p-1 outline-none' type="text"
                placeholder={placeholder} />
        </form>
    )
}

export default SearchBar