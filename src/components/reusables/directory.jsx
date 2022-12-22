import { useLocation } from 'react-router-dom'
import { homeNavigation, teamNavigation } from '../../services/navigation';


function Directory({ viewing }) {
    const { pathname } = useLocation();

    function renderAppPart() {
        if(pathname === homeNavigation) return 'Tasks'
        else if(pathname === teamNavigation) return 'Teams'
    }

    return (
        <div className="mb-20">
            <h3><span className="light-color">{renderAppPart()} / </span>{viewing}</h3>
        </div>
    );
}

export default Directory;