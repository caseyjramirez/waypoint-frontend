import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';


function SearchBar() {
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
    const clear = <FontAwesomeIcon icon={faXmark} className='icon' />
    const [query, setQuery] = useState("")

    function renderClearClass() {
        if(query) return 'search-bar-clear mr-10'
        else return 'search-bar-clear mr-10 hidden'
    }


    return (
        <div className='search-bar'>
            <span className='search-bar-submit mr-10'>{search}</span>
            <input  type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <span className={renderClearClass()} onClick={() => setQuery("")}>{clear}</span>
        </div>
    );
}

export default SearchBar;