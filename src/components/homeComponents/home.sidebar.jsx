import React from 'react';
import NameTag from '../reusables/nameTag';
import SidebarTaskButtonGroup from '../reusables/sidebarTaskButtonGroup';
import SidebarTeamButtonGroup from '../reusables/sidebarTeamButtonGroup';

function SideBar({ user, onAddNewTask, viewing, setViewing }) {


    return (
        <div className='sidebar'>
            <NameTag
                user={user}
                onAddNewTask={onAddNewTask}
            />

            <SidebarTaskButtonGroup 
                viewing={viewing}
                setViewing={setViewing}
            />

            <SidebarTeamButtonGroup 
                viewing={viewing}
                setViewing={setViewing}
            />
            
        </div>
    );
}

export default SideBar;