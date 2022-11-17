import React from 'react'
import { searchBarType } from '../types'

const SearchBar = ({ placeholder, outline }: searchBarType) => {
    return (
        <form className={`${outline ? "bg-transparent border-b border-gray-400 rounded-none" : "bg-gray-100 rounded-lg"} flex items-center py-1 px-2 w-11/12 max-w-sm`}>
            <img className='mr-2 w-5 h-5' src='/icons/Search.svg' alt='Bell icon' />
            <input
                className='bg-transparent flex-grow p-1 outline-none' type="text"
                placeholder={placeholder} />
        </form>
    )
}

export default SearchBar