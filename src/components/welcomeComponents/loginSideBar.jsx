import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../forms/formInput";
import WelcomeHeader from "./welcomeHeader";

function LoginContent() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        const userLogin = {email, password}

        console.log(userLogin);
    }

    return (
        <div className="welcome-sidebar">
            <div className="welcome-content">
                <WelcomeHeader 
                headline = 'Login or sign up to begin.'
                />

                <form onSubmit={(e) => handleSubmit(e)}>
                    
                    <FormInput 
                    value={email}
                    label={'Email'}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'text'}
                    placeholder={'Enter your Email.'}
                    />

                    <FormInput 
                    value={password}
                    label={'Password'}
                    onChange={(e) => setPassword(e.target.value)}
                    type={'password'}
                    placeholder={'Enter your Password.'}
                    />

                    <button className='btn btn-xl btn-dark btn-dark-hover mx-20' type='submit'>Login</button>
                </form>
                
                <p className='text-center fix-bottom'>Don't have an account? <span className='bold text-btn' onClick={() => navigate('signup')}>Sign up now.</span></p>
            </div>
        </div>

    );
}

export default LoginContent;