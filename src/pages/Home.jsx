import React, { useState } from 'react';
import Feed from '../components/homeComponents/home.feed';
import EditForm from '../components/homeComponents/editForm/home.editForm';

function Home({ user, addNewTask, addNewTag, updateTag, deleteTag, updateTask, deleteTask, onFavoriteTask, setTaskStatus, handleDiscardNewTask, isCreatingNewTask, viewing }) {

    const [isEditFormOpen, setIsEditFormOpen] = useState(false)
    const [editFormData, setEditFormData] = useState()


    function saveNewTask(newTask) {
        handleDiscardNewTask()
        addNewTask(newTask)
    }

    function openEditForm(data) {
        setEditFormData(data)
        setIsEditFormOpen(true)
    }
    
    const closeTaskForm = () => setIsEditFormOpen(false)

    
    return (
        <div>
            <Feed
                user={user}
                tasks={user.tasks}
                tags={user.tags}
                viewing={viewing}
                creatingNewTask={isCreatingNewTask}
                onDiscardNewTask={handleDiscardNewTask}
                onSaveNewTask={saveNewTask}
                onCreateNewTag={addNewTag}
                onEditForm={openEditForm}
                onFavoriteTask={onFavoriteTask}
                setStatus={setTaskStatus}
            />

            <EditForm
                isOpen={isEditFormOpen}
                onCloseTaskForm={closeTaskForm}
                data={editFormData}
                tags={user.tags}
                onUpdateTag={updateTag}
                onDeleteTag={deleteTag}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
            />
        </div>
    );
}

export default Home;