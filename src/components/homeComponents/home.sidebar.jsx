import React from 'react';
import NameTag from '../reusables/nameTag';
import { getUserData } from '../../services/services'

function SideBar({testing}) {

    function handleClick() {
        getUserData()
    }
    return (
        <div className='sidebar'>
            <NameTag />
            <button onClick={handleClick} className='mx-10'>Click me</button>
            <p>{testing}</p>
            
        </div>
    );
}

export default SideBar;