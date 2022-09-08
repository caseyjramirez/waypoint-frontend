import React, { useState } from 'react';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatusTag from './statusTag';
import TagList from './tagList';

function NewTaskCard({onDiscardNewTask}) {
    const check = <FontAwesomeIcon icon={faCheck} className='icon save' />
    const discard = <FontAwesomeIcon icon={faX} className='icon discard' />

    const [status, setStatus] = useState('ready')

    function handleStatusChange(e) {
        console.log(e);
    }

    return (
        <div className="task-card new-task mb-20">
            <div className='new-task-container'>
                <input className='mb-10' type="text" placeholder='Create a new task.'/>
                <input className='description mb-10' type="text" placeholder='Give me a description.'/>
                <TagList
                    status={status}
                />
                <div className="flex-row">
                    <span className='mr-20'>{check}</span>
                    <span onClick={onDiscardNewTask} >{discard}</span>
                </div>
            </div>
        </div>
    );
}

export default NewTaskCard;