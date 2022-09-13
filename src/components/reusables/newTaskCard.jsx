import React, { useState } from 'react';
import StatusTag from './statusTag';
import DateTimeSelector from './dateTimeSelector';
import ActionTag from './actionTag';

function NewTaskCard({onDiscardNewTask}) {

    const [status, setStatus] = useState('ready')
    const [timeDue, setTimeDue] = useState('17:00')
    const [dateDue, setDateDue] = useState(new Date().toJSON().substring(0, 10))

    function handleSaveNewTask() {
        console.log('saved');
    }

    return (
        <div className="task-card new-task-card mb-20">
            <div className='new-task-card-container'>
                <input className='mb-10' type="text" placeholder='Create a new task.'/>
                <textarea className='description mb-10' type="textbox" placeholder='Give me a description.'/>
                
                <DateTimeSelector
                    onTimeChange={setTimeDue}
                    timeDue={timeDue}
                    onDateChange={setDateDue}
                    datedue={dateDue}
                />
                
                <div className="tags">
                    <StatusTag
                        status={status}
                        onSatusChange={setStatus}
                    />               
                    <ActionTag
                        onSave={handleSaveNewTask}
                        onDiscard={onDiscardNewTask}
                    />
               
                </div>
                
            </div>
        </div>
    );
}

export default NewTaskCard;