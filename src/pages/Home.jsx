import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../services/services';
import { welcomeNavigation } from '../services/navigation';
import SideBar from '../components/homeComponents/home.sidebar';
import Feed from '../components/homeComponents/home.feed';

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


    const handleAddNewTask = () => setIsCreatingNewTask(true)
    const handleDiscardNewTask = () => setIsCreatingNewTask(false)

    
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
                creatingNewTask={isCreatingNewTask}
                onDiscardNewTask={handleDiscardNewTask}
                onSaveNewTask={saveNewTask}
            />
        </div>
    );
}

export default Home;