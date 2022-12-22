import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from '../../services/services'
import { welcomeNavigation, homeNavigation } from "../../services/navigation";
import FormInput from "../forms/formInput";
import ServerError from "../forms/serverError";
import WelcomeHeader from "./welcomeHeader";

function LoginContent({setUser}) {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [serverError, setServerError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        setServerError('')

        const userLogin = {email, password}
        const data = await loginService(userLogin)
        
        if(data.response) return setServerError('Invalid Email or Password.');
        
        setUser(data.data);
        navigate(homeNavigation)
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

                    <ServerError 
                        serverError={serverError}
                    />

                    <button className='btn btn-xl btn-dark btn-dark-hover mx-20' type='submit'>Login</button>
                </form>
                
                <p className='text-center fix-bottom'>Don't have an account? <span className='bold text-btn' onClick={() => navigate(welcomeNavigation.signupRoute.base)}>Sign up now.</span></p>
            </div>
        </div>

    );
}

export default LoginContent;