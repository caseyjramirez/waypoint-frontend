import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function SidebarButtonGroup() {
    const star = <FontAwesomeIcon icon={faStar} className='icon favorite-star title' />

    return (
        <div className="sidebar-button-group">
            <div className="flex-row ai-start mb-10">
                <span className='mr-10'>{star}</span>
                <h3>Tasks</h3>
            </div>

            <div>
                <button className='pointer sidebar-button flex-row ai-center mb-5'>
                    <p className='mr-10'>✔️</p>
                    <p>All Tasks</p>
                </button>

                <button className='pointer sidebar-button flex-row ai-center mb-5'>
                    <p className='mr-10'>🌟</p>
                    <p>Favorites</p>
                </button>
                
                <button className='pointer sidebar-button flex-row ai-center mb-5'>
                    <p className='mr-10'>🚀</p>
                    <p>Ready</p>
                </button>

                <button className='pointer sidebar-button selected flex-row ai-center mb-5'>
                    <p className='mr-10'>📅</p>
                    <p>Due Today</p>
                </button>
            </div>

        </div>
    );
}

export default SidebarButtonGroup;