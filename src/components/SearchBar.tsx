import React from 'react'
import { searchBarType } from '../types'

const SearchBar = ({ placeholder }: searchBarType) => {
    return (
        <form className='bg-gray-50 flex items-center rounded-sm p-1'>
            <input
                className='bg-transparent flex-grow p-1 outline-none' type="text"
                placeholder={placeholder} />
        </form>
    )
}

export default SearchBar