import React from 'react'
import { searchBarType } from '../types'

const SearchBar = ({ placeholder }: searchBarType) => {
    return (
        <form>
            <input type="text" placeholder={placeholder} />
        </form>
    )
}

export default SearchBar