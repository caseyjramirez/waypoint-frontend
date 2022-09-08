import React from 'react';
import NameTag from '../reusables/nameTag';

function SideBar({profileData, onAddNewTask}) {


    return (
        <div className='sidebar'>
            <NameTag
            profileData={profileData}
            onAddNewTask={onAddNewTask}
            />
            
        </div>
    );
}

export default SideBar;