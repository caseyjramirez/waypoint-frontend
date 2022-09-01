import React from 'react';
import WelcomeHeader from './welcomeHeader';
import FormInput from '../forms/formInput';
import ServerError from '../forms/serverError';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function LoginContent({email, password, confirmPassword, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, handleSubmit, emailError, passwordError, confirmPasswordError, serverError}) {
    const navigate = useNavigate();
    const next = <FontAwesomeIcon icon={faAngleRight} className='icon next-arrow' />
    const back = <FontAwesomeIcon icon={faAngleLeft} className='icon back-arrow' />


    return (
        <div className="welcome-content">
            <WelcomeHeader 
            headline = "Let's make it official!"
            />
            
            <form>
                
                {/* Email */}
                <FormInput 
                    value={email}
                    label={'Email'}
                    onChange={handleEmailChange}
                    type={'text'}
                    placeholder={"Where can we reach you?"}
                    error={emailError}
                />

                {/* Password */}
                <FormInput 
                    value={password}
                    label={'Password'}
                    onChange={handlePasswordChange}
                    type={'password'}
                    placeholder={"Create a new Password."}
                    error={passwordError}
                />

                {/* Confirm Password */}
                <FormInput 
                    value={confirmPassword}
                    label={'Confirm Password'}
                    onChange={handleConfirmPasswordChange}
                    type={'password'}
                    placeholder={"Confirm your new Password."}
                    error={confirmPasswordError}
                />
         
                <ServerError
                    serverError={serverError}
                />
                
                <div className="space-between">
                    <span onClick={() => navigate('/signup/job')} className='btn btn-xl btn-right btn-dark mx-20 ' type='submit'>{back}Back</span>
                    <span onClick={handleSubmit} className='btn btn-xl btn-right btn-dark btn-dark-hover mx-20 ' type='submit'>Login{next}</span>
                </div>
            </form>

            
            <p className='text-center fix-bottom'>Already have an account? <span className='bold text-btn' onClick={() => navigate('/')}>Login.</span></p>

        </div>
    );
}

export default LoginContent;