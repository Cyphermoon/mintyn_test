import React from 'react'
import { searchBarType } from '../types'

const SearchBar = ({ placeholder }: searchBarType) => {
    return (
        <form className='bg-gray-100 flex items-center rounded-lg p-1 w-11/12 max-w-sm'>
            <input
                className='bg-transparent flex-grow p-1 outline-none' type="text"
                placeholder={placeholder} />
        </form>
    )
}

export default SearchBar