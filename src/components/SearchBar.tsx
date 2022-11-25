import React from 'react'
import { searchBarType } from '../types'

const SearchBar = ({ placeholder, outline }: searchBarType) => {
    return (
        <form className={`${outline ? "flex focus-within:border focus-within:border-slate-800 focus-within:rounded-lg bg-transparent border-b border-gray-400 rounded-none" : "bg-transparent focus-within:bg-slate-100 hidden rounded-lg"} items-center py-2 px-2 w-5/12 max-w-md md:flex`}>
            <img className='mr-2 w-5 h-5' src='/icons/Search.svg' alt='Bell icon' />
            <input
                className='bg-transparent flex-grow p-1 outline-none' type="text"
                placeholder={placeholder} />
        </form>
    )
}

export default SearchBar