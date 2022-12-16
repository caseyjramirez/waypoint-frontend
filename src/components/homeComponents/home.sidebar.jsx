import React from 'react';
import NameTag from '../reusables/nameTag';
import SidebarButtonGroup from '../reusables/sidebarButtonGroup';

function SideBar({user, onAddNewTask}) {


    return (
        <div className='sidebar'>
            <NameTag
                user={user}
                onAddNewTask={onAddNewTask}
            />

            <SidebarButtonGroup 
                
            />
            
        </div>
    );
}

export default SideBar;