import React, { useState, useEffect } from 'react';
import StatusTag from '../reusables/statusTag';
import DateTimeSelector from '../reusables/dateTimeSelector';
import ActionTag from '../reusables/actionTag';
import Tags from './components/tags';
import { validateTitle, validateTime } from '../../validation/newTask.validation';
import { createNewTask } from '../../services/services';

function NewTaskCard({onDiscardNewTask, onSaveNewTask, onCreateNewTag, onEditTag, tags}) {
    const randomColorNumber = Math.floor(Math.random() * 5);

    const [title, setTitle] = useState('') 
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('ready')
    const [dueDate, setDueDate] = useState(null)
    const [titleError, setTitleError] = useState('')
    const [dueError, setDueError] = useState('')
    const [taskTags, setTaskTags] = useState([])
    
    useEffect(() => {
        const profileTagIDs = tags.map(tag => tag._id)
        setTaskTags(tagIDs => tagIDs.filter(tagID => profileTagIDs.includes(tagID)))
    }, [tags])


    function renderTitleClass() {
        return titleError ? 'title-input input-error' : 'title-input';
    }


    function adjustForTimeChange(time) {
        const unadjustedTime = new Date(time).getTime()
        const timeChange = new Date().getTimezoneOffset() * 60 * 1000
        const adjustedTime = unadjustedTime + timeChange 
        return adjustedTime
    }

    // console.log(new Date(dueDate), new Date(dueDate).getTimezoneOffset());
    
    function handleSaveNewTask() {
        setTitleError('')
        setDueError('')
        
        const { error } = validateTitle(title)
        const timeError = validateTime(dueDate)

        if(error || timeError) {
            if(error) {setTitleError(error.details[0].message)}
            if(timeError) {
                setDueError(timeError)
            }
            return
        }

        const newTask = { title, description, status, due: new Date(dueDate).toUTCString(), tags: taskTags }
        
        createNewTask(newTask)
        onSaveNewTask(newTask)
    }

    const handleAddTaskTag = newTagID => {
        if(taskTags.find(currentTagID => currentTagID === newTagID)) {
            setTaskTags(tags => tags.filter(tag => tag !== newTagID))
            return;
        }
        setTaskTags(tagIDs => [...tagIDs, newTagID])
    }
    
    const handleRemoveTaskTag = removeTagID => {
        setTaskTags(tags => tags.filter(tag => tag !== removeTagID))
    }


    return (
        <div className="task-card new-task-card mb-20">
            <div className='new-task-card-container'>
                <div className='mb-20'>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className={renderTitleClass()} type="text" placeholder='Create a new task.'/>
                    <ul>
                        {titleError && <li className="error-message">{titleError}</li>}
                    </ul>
                </div>

                <div className='mb-10'>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='description' type="textbox" placeholder='Give me a description.'/>
                </div>
                
                
                <DateTimeSelector
                    onDueDateChange={setDueDate}
                    dueDate={dueDate}
                    error={dueError}
                />
                
                <div className="tags">
                    <StatusTag
                        status={status}
                        onSatusChange={setStatus}
                    />               
                    
                    <Tags
                        tags={tags}
                        taskTagIDs={taskTags}
                        onCreateNewTag={onCreateNewTag}
                        onEditTag={onEditTag}
                        addTaskTag={handleAddTaskTag}
                        removeTaskTag={handleRemoveTaskTag}
                        randomColorNumber={randomColorNumber}
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