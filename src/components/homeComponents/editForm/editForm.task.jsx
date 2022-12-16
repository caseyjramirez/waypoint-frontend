import React, { useState, useEffect } from 'react';
import { faArrowLeft, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionTag from '../../reusables/actionTag';
import DateTimeSelector from '../../reusables/dateTimeSelector';
import { validateTitle, validateTime } from '../../../validation/newTask.validation';
import { updateTask, deleteTask } from '../../../services/services';

function TaskEditForm({ data, onCloseTaskForm, onUpdateTask, onDeleteTask }) {
    const back = <FontAwesomeIcon icon={faArrowLeft} className='icon' />
    
    const [updatedTask, setUpdatedTask] = useState(null)
    const [newDueDate, setNewDueDate] = useState(null)
    const [titleError, setTitleError] = useState('');
    const [dueError, setDueError] = useState('')

    useEffect(() => {
        setUpdatedTask(data)
    }, [data])
    
    function closeTaskForm() {
        setNewDueDate(null)
        onCloseTaskForm()
    }

    const handleChange = (e) => { 
        const { name, value } = e.target
        setUpdatedTask({ ...updatedTask, [name]: value })
    }

    function renderTitleClass() {
        return titleError ? 'input-error title-input' : 'title-input';
    }

    function getDate() {
        return newDueDate ? new Date(newDueDate) : new Date(data.due)
    }


    async function handleUpdateTask() {
        setTitleError('')
        setDueError('')
        
        const { error } = validateTitle(updatedTask && updatedTask.title)
        let timeError;

        if(newDueDate) {
            timeError = validateTime(newDueDate)
        }


        if(error || timeError) {
            if(error) {setTitleError(error.details[0].message)}
            if(timeError) {
                setDueError(timeError)
            }
            return
        }

        delete updatedTask.type;
        const newTask = {...updatedTask, due: getDate().toUTCString() }
        
        onUpdateTask(newTask)
        updateTask(data._id, newTask)
        closeTaskForm()
    }

    async function handleDeleteTask() {
        onDeleteTask(data._id)
        deleteTask(data._id)
        closeTaskForm()
    }

    

    return (
        <div className="edit-task-wrapper">
            <div className='mb-30'>
                <div className='mb-20 edit-task-wrapper-header'>
                    <span className='mr-30 pointer' onClick={closeTaskForm}>{back}</span>
                    <h3 className='type'>Type: Task</h3>
                </div>
                <div className='deco-line mb-10'></div>
            </div>

            <div className="mb-30">
                    <div className='flex-row ai-center span100'>
                        <p className='editor-label mr-20'>Task title:</p>
                        <input onChange={handleChange} name='title' value={updatedTask && updatedTask.title} className={renderTitleClass()} type="text" placeholder='Update task title.'/>
                    </div>
                    <ul>
                        {titleError && <li className="error-message">{titleError}</li>}
                    </ul>
            </div>

            <div className="mb-30">
                    <div className='flex-row ai-center span100'>
                        <p className='editor-label mr-20'>Description:</p>
                        <textarea onChange={handleChange} name='description' value={updatedTask && updatedTask.description} className={renderTitleClass()} type="text" placeholder='Update task description.'/>
                    </div>
            </div>

            <div className="mb-30">
                <DateTimeSelector
                    onDueDateChange={setNewDueDate}
                    dueDate={getDate()}
                    error={dueError}
                />
            </div>

            <ActionTag
                discardLabel='delete task'
                saveLabel='update task'
                onSave={handleUpdateTask}
                onDiscard={handleDeleteTask}
            />
            
        </div>
    );
}

export default TaskEditForm;