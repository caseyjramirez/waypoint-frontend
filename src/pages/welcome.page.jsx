import LoginBackgroundVideo from '../components/welcomeComponents/login-bg-video';
import Logo from '../components/reusables/logo';
import { Outlet } from "react-router-dom";

function WelcomePage() {
    return (
        <div className="welcome-page">
            <Logo />
            <Outlet />
            <LoginBackgroundVideo />
        </div>

    );
}

export default WelcomePage;