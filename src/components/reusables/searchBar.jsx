import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';


function SearchBar({query, setQuery}) {
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />


    return (
        <div className='search-bar'>
            <span className='search-bar-submit mr-10'>{search}</span>
            <input  type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        </div>
    );
}

export default SearchBar;