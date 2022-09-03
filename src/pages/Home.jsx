import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../services/services';
import SideBar from '../components/homeComponents/home.sidebar';
import Feed from '../components/homeComponents/home.feed';

function Home() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [userIcon, setUserIcon] = useState('');
    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getUserData()
        .then(res => {
            if(res.status !== 200) return navigate('/welcome/login')
            const { firstName, lastName, jobTitle, company, email, userIcon, tasks, tags } = res.data

            setFirstName(firstName)
            setLastName(lastName)
            setJobTitle(jobTitle)
            setCompany(company)           
            setEmail(email)
            setUserIcon(userIcon)
            setTasks(tasks)
            setTags(tags)
        })
        .catch(e => {
            return navigate('/welcome/login')
        })
    }, [])

    
    return (
        <div>
            <SideBar
            testing={firstName}
            />
            <Feed />
        </div>
    );
}

export default Home;