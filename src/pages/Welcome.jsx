import WelcomeVideo from '../components/welcomeComponents/welcomeVideo';
import Logo from '../components/reusables/logo';
import { Outlet } from "react-router-dom";

function WelcomePage() {
    return (
        <div className="welcome-page">
            <Logo />
            <Outlet />
            <WelcomeVideo />
        </div>

    );
}

export default WelcomePage;