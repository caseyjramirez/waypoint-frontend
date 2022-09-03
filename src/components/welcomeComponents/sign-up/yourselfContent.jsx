import React, { useState } from 'react';
import WelcomeHeader from '../welcomeHeader';
import FormInput from '../../forms/formInput';
import { useNavigate } from "react-router-dom";
import { validateName } from '../../../validation/newUser.validation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


function YourselfContent({firstName, lastName, handleFirstNameChange, handleLastNameChang}) {
    const navigate = useNavigate();
    const next = <FontAwesomeIcon icon={faAngleRight} className='icon next-arrow' />
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    
    
    
    
    function validateUserInputs() {
            setFirstNameError('')
            setLastNameError('')
            const {error} = validateName({firstName, lastName})
            
            if(error) {
                for(let errorMessage of error.details) {
                    const path = errorMessage.path[0]
                    if(path === 'firstName') setFirstNameError(errorMessage.message)
                    if(path === 'lastName') setLastNameError(errorMessage.message)
                }
                return
            }
            navigate('/welcome/signup/job')
    }
    
    
    return (
        <div className="welcome-content">

            <WelcomeHeader 
            headline = 'Tell us a little bit about yourself.'
            />
            
            <form>
                
                {/* first name */}
                <FormInput 
                value={firstName}
                label={'First Name'}
                onChange={handleFirstNameChange}
                type={'text'}
                placeholder={"What's youe first name?"}
                error={firstNameError}
                />
        
                {/* last name */}
                <FormInput 
                value={lastName}
                label={'Last Name'}
                onChange={handleLastNameChang}
                type={'text'}
                placeholder={"What's youe last name?"}
                error={lastNameError}
                />
                
                <div className="space-between">
                    <span onClick={validateUserInputs} className='btn btn-xl btn-right btn-dark mx-20 stick-right' type='submit'>Next{next}</span>
                </div>
            </form>
            
            <p className='text-center fix-bottom'>Already have an account? <span className='bold text-btn' onClick={() => navigate('/welcome/login')}>Login.</span></p>

        </div>
    );
}

export default YourselfContent;