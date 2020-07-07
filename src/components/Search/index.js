import React from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';
import './styles.scss';

const Search = () => {
    return (
        <div className='search'>
            <input className='search-input' placeholder={'Search for an account'} />
            <SearchIcon />
        </div>
    )
}

export default Search