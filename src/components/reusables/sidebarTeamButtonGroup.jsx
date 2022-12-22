import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom'
import { teamNavigation } from '../../services/navigation';


function SidebarTeamButtonGroup({ viewing, setViewing }) {
    const userGroup = <FontAwesomeIcon icon={faUserGroup} className='icon user-group' />
    const { pathname } = useLocation();
    const navigate = useNavigate()

    function renderIsSelected(label) {
        return pathname === teamNavigation && viewing === label? 'selected' : null;
    }

    function onAllTeamsClick() {
        setViewing('All Teams')
        navigate(teamNavigation);
    }
    
    return (
        <div className="teams-sidebar-button-group">
            <div onClick={onAllTeamsClick} className={`pointer flex-row ai-start teams-sidebar-button-group-all ${renderIsSelected('All Teams')}`}>
                <span className='mr-10'>{userGroup}</span>
                <h3>Teams</h3>
            </div>

        </div>
    );
}

export default SidebarTeamButtonGroup;