import React, { useState } from 'react';
import StatusTag from './statusTag';
import DateTimeSelector from './dateTimeSelector';
import ActionTag from './actionTag';
import { validateTitle, validateTime } from '../../validation/newTask.validation';
import { createNewTask } from '../../services/services';

function NewTaskCard({onDiscardNewTask, onSaveNewTask}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('ready')
    const [timeDue, setTimeDue] = useState('17:00')
    const [dateDue, setDateDue] = useState(new Date().toJSON().substring(0, 10))

    const [titleError, setTitleError] = useState('')
    const [dueError, setDueError] = useState('')

    function renderTitleClass() {
        return titleError ? 'input-error' : '';
    }


    function adjustForTimeChange(time) {
        const unadjustedTime = new Date(time).getTime()
        const timeChange = new Date().getTimezoneOffset() * 60 * 1000
        const adjustedTime = unadjustedTime + timeChange 
        return new Date(adjustedTime).toJSON()
    }
    
    function handleSaveNewTask() {
        setTitleError('')
        setDueError('')
        const due = adjustForTimeChange(`${dateDue}T${timeDue}:00.000Z`);
        
        const { error } = validateTitle(title)
        const timeError = validateTime(due)

        if(error || timeError) {
            if(error) {setTitleError(error.details[0].message)}
            if(timeError) {
                setDueError(timeError)
            }
            return
        }

        const newTask = {
            title, 
            description, 
            status, 
            due,
        }

        createNewTask(newTask)
        onSaveNewTask(newTask)
    }

    return (
        <div className="task-card new-task-card mb-20">
            <div className='new-task-card-container'>
                <div className='mb-20'>
                    <input  onChange={(e) => setTitle(e.target.value)} value={title} className={renderTitleClass()} type="text" placeholder='Create a new task.'/>
                    <ul>
                        {titleError && <li className="error-message">{titleError}</li>}
                    </ul>
                </div>

                <div className='mb-10'>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='description' type="textbox" placeholder='Give me a description.'/>
                </div>
                
                
                <DateTimeSelector
                    onTimeChange={setTimeDue}
                    timeDue={timeDue}
                    onDateChange={setDateDue}
                    datedue={dateDue}
                    error={dueError}
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