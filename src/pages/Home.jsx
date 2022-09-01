import { testSessionData } from '../services/services';
import SideBar from '../components/homeComponents/home.sidebar';
import Feed from '../components/homeComponents/home.feed';

function Home() {
    
    function handleClick() {
        testSessionData()
    }
    
    return (
        <div>
            <SideBar />
            <Feed />
        </div>
    );
}

export default Home;