import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { taskButtonGroup } from '../../services/sidebar';
import { useLocation, useNavigate } from 'react-router-dom'
import { homeNavigation } from '../../services/navigation';

function SidebarTaskButtonGroup({ viewing, setViewing }) {
    const star = <FontAwesomeIcon icon={faStar} className='icon favorite-star title' />
    const { pathname } = useLocation();
    const navigate = useNavigate();

    function renderIsSelected(title) {
        return pathname === homeNavigation && viewing === title ? 'selected' : null;
    }

    function onClick(title) {
        if(pathname !== homeNavigation) {
            navigate(homeNavigation)
        }
        setViewing(title)
    }

    return (
        <div className="sidebar-button-group mb-20">
            <div className="flex-row ai-start mb-10">
                <span className='mr-10'>{star}</span>
                <h3>Tasks</h3>
            </div>

            <div>
                {
                    taskButtonGroup.map(taskButton => {
                        return (
                            <button onClick={() => onClick(taskButton.title)} className={`pointer sidebar-button flex-row ai-center mb-5 ${renderIsSelected(taskButton.title)}`}>
                                <p className='mr-10'>{taskButton.symbol}</p>
                                <p>{taskButton.title}</p>
                            </button>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default SidebarTaskButtonGroup;