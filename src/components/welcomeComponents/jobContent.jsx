import React, { useState } from 'react';
import WelcomeHeader from "./welcomeHeader";
import FormInput from "../forms/formInput";
import { useNavigate } from "react-router-dom";
import { validateJob } from '../../validation/newUser.validation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function JobContent({jobTitle, company, handleJobTitleChange, handleCompanyChange}) {
    const navigate = useNavigate();
    const next = <FontAwesomeIcon icon={faAngleRight} className='icon next-arrow' />
    const back = <FontAwesomeIcon icon={faAngleLeft} className='icon back-arrow' />
    
    const [jobTitleError, setJobTitleError] = useState('')
    const [companyError, setCompanyError] = useState('')

    function validateUserInputs() {
        setJobTitleError('')
        setCompanyError('')
        const error = validateJob({jobTitle, company})
        
        if(error.error) {
            for(let errorMessage of error.error.details) {
                const path = errorMessage.path[0]
                if(path === 'jobTitle') setJobTitleError(errorMessage.message)
                if(path === 'company') setCompanyError(errorMessage.message)
            }
            return
        }
        navigate('/signup/info')
}

    return (
        <div className="welcome-content">
            <WelcomeHeader 
            headline = 'Tell us a little bit about what you do.'
            />
            
            <form>
                {/* job title */}
                <FormInput 
                value={jobTitle}
                label={'Job Title'}
                onChange={handleJobTitleChange}
                type={'text'}
                placeholder={"What do you do?"}
                error={jobTitleError}
                />
        
                {/* company */}
                <FormInput 
                value={company}
                label={'Company'}
                onChange={handleCompanyChange}
                type={'text'}
                placeholder={"Where do you work?"}
                error={companyError}
                />
                
                <div className="space-between">
                    <span onClick={() => navigate('/signup')} className='btn btn-xl btn-right btn-dark mx-20 ' type='submit'>{back}Back</span>
                    <span onClick={validateUserInputs} className='btn btn-xl btn-right btn-dark mx-20 ' type='submit'>Next{next}</span>
                </div>
            </form>
            
            <p className='text-center fix-bottom'>Already have an account? <span className='bold text-btn' onClick={() => navigate('/')}>Login.</span></p>

        </div>
    );
}

export default JobContent;