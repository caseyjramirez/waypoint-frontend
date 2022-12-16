import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faStar } from '@fortawesome/free-solid-svg-icons';
import { changeTaskFavorite } from '../../services/services';

function TaskDetails({ data, onFavoriteTask }) {

    function renderIsFavorite() {
        return data.isFavorite ? 'favorite' : null;
    }

    function isFavoriteClick() {
        onFavoriteTask(data._id)
        changeTaskFavorite(data._id)
    }


    const star = <FontAwesomeIcon icon={faStar} className={`icon favorite-star ${renderIsFavorite()}`} />
    const comment = <FontAwesomeIcon icon={faComment} className='icon comment'/>

    return (
        <div className='flex-row'>
            <span onClick={isFavoriteClick} className='mr-10 pointer'>{star}</span>
            <div className='flex-row'>
                <span>{comment}</span>
                <p className='bold'>3</p>
            </div>
        </div>
    );
}

export default TaskDetails;