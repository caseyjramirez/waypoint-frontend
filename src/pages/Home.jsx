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
    const [creatingNewTask, setCreatingNewTask] = useState(true)
    
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

    const handleAddNewTask = () => setCreatingNewTask(true)
    const handleDiscardNewTask = () => setCreatingNewTask(false)


    
    const {firstName, lastName, jobTitle, company, email, userIcon} = profileData
    return (
        <div>
            <SideBar
                profileData={{firstName, lastName, jobTitle, company}}
                onAddNewTask={handleAddNewTask}
            />
            <Feed
                profileData={{firstName}}
                creatingNewTask={creatingNewTask}
                onDiscardNewTask={handleDiscardNewTask}
            />
        </div>
    );
}

export default Home;