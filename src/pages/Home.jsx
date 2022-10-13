import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../services/services';
import { welcomeNavigation } from '../services/navigation';
import SideBar from '../components/homeComponents/home.sidebar';
import Feed from '../components/homeComponents/home.feed';
import EditForm from '../components/homeComponents/editForm/home.editForm';

function Home() {
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState({
        firstName: '', 
        lastName: '', 
        jobTitle: '', 
        company: '', 
        email: '', 
        userIcon: ''
    })



    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState([]);
    const [isCreatingNewTask, setIsCreatingNewTask] = useState(true)
    const [isEditFormOpen, setIsEditFormOpen] = useState(false)
    const [editFormData, setEditFormData] = useState()
    
    useEffect(() => {
        getUserData()
        .then(res => {
            if(res.status !== 200) return navigate(welcomeNavigation.loginRoute)
            const { firstName, lastName, jobTitle, company, email, userIcon, tasks, tags } = res.data

            setProfileData({firstName, lastName, jobTitle, company, email, userIcon})
            setTasks(tasks)
            setTags(tags)
        })
        .catch(e => {
            return navigate(welcomeNavigation.loginRoute)
        })
    }, [])

    function saveNewTask(newTask) {
        handleDiscardNewTask()
        setTasks(tasks => [newTask, ...tasks])
    }

    function createNewTag(newTag) {
        setTags(tags => [...tags, newTag])
    }

    function updateTag(updateTag) {
        setTags(tags => tags.map(tag => {
            if (tag._id === updateTag._id) {
                return updateTag
            }
            return tag
        }))
    }

    function deleteTag(tagId) {
        setTags(tags => tags.filter(tag => tag._id !== tagId))
    }


    const handleAddNewTask = () => setIsCreatingNewTask(true)
    const handleDiscardNewTask = () => setIsCreatingNewTask(false)
    
    const openEditForm = (data) => {
        setEditFormData(data)
        setIsEditFormOpen(true)
    }
    
    const closeTaskForm = () => setIsEditFormOpen(false)

    
    const {firstName, lastName, jobTitle, company, email, userIcon} = profileData
    return (
        <div>
            <SideBar
                profileData={{firstName, lastName, jobTitle, company}}
                onAddNewTask={handleAddNewTask}
            />
            <Feed
                profileData={{firstName}}
                tasks={tasks}
                tags={tags}
                creatingNewTask={isCreatingNewTask}
                onDiscardNewTask={handleDiscardNewTask}
                onSaveNewTask={saveNewTask}
                onCreateNewTag={createNewTag}
                onEditForm={openEditForm}

            />

            <EditForm
                isOpen={isEditFormOpen}
                onCloseTaskForm={closeTaskForm}
                data={editFormData}
                onUpdateTag={updateTag}
                onDeleteTag={deleteTag}
            />
        </div>
    );
}

export default Home;