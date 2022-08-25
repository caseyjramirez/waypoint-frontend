import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { validateLoginInfo } from "../../validation/newUser.validation";
import { createResource, getResource } from "../../services/services";
import { userAPI } from "../../services/url";
import YourselfContent from "./yourselfContent";
import JobContent from "./jobContent";
import LoginContent from "./loginContent";

import axios from "axios";

function SignupContent() {
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


    async function handleSubmit(e) {
        e.preventDefault();
        setPasswordError('');
        setEmailError('');
        setConfirmPasswordError('');

        const error = validateLoginInfo({password, email})
        if(error.error) {
            for(let errorMessage of error.error.details) { 
                const path = errorMessage.path[0]
                if(path === 'password') setPasswordError(errorMessage.message)
                if(path === 'email') setEmailError(errorMessage.message)
            }
            return
        }
        if(confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
        }

        const newUser = { firstName, lastName, jobTitle, company, email, password }

        const data = await createResource(userAPI, newUser)
        console.log(data);
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

                <Route path='/job' element={
                    <JobContent
                    jobTitle={jobTitle}
                    company={company}
                    handleJobTitleChange={(e) => setJobTitle(e.target.value)}
                    handleCompanyChange={(e) => setCompany(e.target.value)}
                    />
                }>
                </Route>

                <Route path='/info' element={
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
                    />
                }>
                </Route>



            </Routes>
        </div>

    );
}

export default SignupContent;