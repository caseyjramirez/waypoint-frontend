import React, { useState, useEffect } from 'react';
import TaskDetails from "./taskDetails";
import { renderDate } from '../../services/date';
import StatusTag from "./statusTag";
import Tags from '../tasks/components/tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { addTagToTask, removeTagFromTask, changeTaskStatus } from '../../services/services';


function TaskCard({ data, raiseClick, tags, onCreateNewTag, onEditTag, onEditTask, onFavoriteTask, setStatus }) { 
    const randomColorNumber = Math.floor(Math.random() * 5);
    const edit = <FontAwesomeIcon icon={faPenToSquare} className='icon edit' />
    const {title, description, due, _id } = data
    
    const [taskTags, setTaskTags] = useState(data.tags)

    useEffect(() => {
        const profileTagIDs = tags.map(tag => tag._id)
        setTaskTags(tagIDs => tagIDs.filter(tagID => profileTagIDs.includes(tagID)))
    }, [tags])


    const handleAddTaskTag = newTagID => {
        if(taskTags.find(tagId => tagId === newTagID)) {
            removeTagFromTask(_id, newTagID)
            return setTaskTags(tags => tags.filter(tag => tag !== newTagID))
        }
        setTaskTags(tagIDs => [...tagIDs, newTagID])
        addTagToTask(_id, newTagID)
    }

    const handleRemoveTaskTag = removeTagID => {
        setTaskTags(tags => tags.filter(tag => tag !== removeTagID))
        removeTagFromTask(_id, removeTagID)
    }

    const handleStatusChange = status => {
        changeTaskStatus(_id, status)
        setStatus(_id, status);
    }
    
    return (
        <div onClick={raiseClick} className="task-card mb-20">
            <div className="mr-10">
                <input type="checkbox" className="task-card-checkbox"/>
            </div>

            <div className="task-card-content">

                <div className="flex-row space-between">

                    <h2 className="mb-10 mr-10">{title}</h2>
                    <p className="bold">{renderDate(due)}</p>
                </div>

                <p className="mb-20">{description}</p>

                <div className="tags">
                    <StatusTag
                        status={data.status}
                        onSatusChange={handleStatusChange}
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
                </div>

                <div className="mb-10 edit-button-container">
                    <button onClick={() => onEditTask({type: "task", ...data})} className="btn edit-btn">{edit}</button>
                    <TaskDetails 
                        data={data}
                        onFavoriteTask={onFavoriteTask}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskCard;