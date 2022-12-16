import React, { useState, useEffect } from 'react';
import SideBar from '../components/homeComponents/home.sidebar';
import Feed from '../components/homeComponents/home.feed';
import EditForm from '../components/homeComponents/editForm/home.editForm';

function Home({ user, addNewTask, addNewTag, updateTag, deleteTag, updateTask, deleteTask, onFavoriteTask }) {
    // const navigate = useNavigate();

    const [isCreatingNewTask, setIsCreatingNewTask] = useState(false)
    const [isEditFormOpen, setIsEditFormOpen] = useState(false)
    const [editFormData, setEditFormData] = useState()

    function saveNewTask(newTask) {
        setIsCreatingNewTask(false)
        addNewTask(newTask)
    }

    function openEditForm(data) {
        setEditFormData(data)
        setIsEditFormOpen(true)
    }
    
    const handleAddNewTask = () => setIsCreatingNewTask(true)
    const handleDiscardNewTask = () => setIsCreatingNewTask(false)
    const closeTaskForm = () => setIsEditFormOpen(false)

    
    return (
        <div>
            <SideBar
                user={user}
                onAddNewTask={handleAddNewTask}
            />
            <Feed
                user={user}
                tasks={user.tasks}
                tags={user.tags}
                creatingNewTask={isCreatingNewTask}
                onDiscardNewTask={handleDiscardNewTask}
                onSaveNewTask={saveNewTask}
                onCreateNewTag={addNewTag}
                onEditForm={openEditForm}
                onFavoriteTask={onFavoriteTask}
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