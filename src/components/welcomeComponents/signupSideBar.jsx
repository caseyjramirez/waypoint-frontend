import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { validateLoginInfo, validateNewUser } from "../../validation/newUser.validation";
import { createResource } from "../../services/services";
import { userAPI } from "../../services/url";
import { useNavigate } from "react-router-dom";
import YourselfContent from "./sign-up/yourselfContent";
import JobContent from "./sign-up/jobContent";
import LoginContent from "./sign-up/loginContent";

function SignupContent() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [serverError, setServerError] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        
        setPasswordError('');
        setEmailError('');
        setConfirmPasswordError('');
        setServerError('')

        const newUserError = validateNewUser({firstName, lastName, jobTitle, company})
        if(newUserError) return navigate('/signup')

        const error = validateLoginInfo({password, email})
        if(error.error) {
            for(let errorMessage of error.error.details) { 
                const path = errorMessage.path[0]
                if(path === 'password') setPasswordError(errorMessage.message)
                if(path === 'email') setEmailError(errorMessage.message)
            }
            return
        }
        if(confirmPassword !== password) return setConfirmPasswordError('Passwords do not match');
        
        const newUser = { firstName, lastName, jobTitle, company, email, password }
        const data = await createResource(userAPI, newUser)

        if(data.response) return setServerError(data.response.data);
        navigate('/')
    }



    return (
        <div className="welcome-sidebar">
            <Routes>
                <Route path='/' element={
                    <YourselfContent
                    firstName={firstName}
                    lastName={lastName}
                    handleFirstNameChange={(e) => setFirstName(e.target.value)}
                    handleLastNameChang={(e) => setLastName(e.target.value)}
                    />
                }>
                </Route>

                <Route path='job' element={
                    <JobContent
                    jobTitle={jobTitle}
                    company={company}
                    handleJobTitleChange={(e) => setJobTitle(e.target.value)}
                    handleCompanyChange={(e) => setCompany(e.target.value)}
                    />
                }>
                </Route>

                <Route path='info' element={
                    <LoginContent
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    handleEmailChange={(e) => setEmail(e.target.value)}
                    handlePasswordChange={(e) => setPassword(e.target.value)}
                    handleConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
                    handleSubmit={handleSubmit}
                    emailError={emailError}
                    passwordError={passwordError}
                    confirmPasswordError={confirmPasswordError}
                    serverError={serverError}
                    />
                }>
                </Route>

            </Routes>
        </div>

    );
}

export default SignupContent;