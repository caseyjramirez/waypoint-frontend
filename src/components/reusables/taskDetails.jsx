import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faStar } from '@fortawesome/free-solid-svg-icons';

function TaskDetails() {
    const star = <FontAwesomeIcon icon={faStar} className='icon favorite-star favorite' />
    const comment = <FontAwesomeIcon icon={faComment} className='icon comment'/>

    return (
        <div className='flex-row'>
            <span className='mr-10'>{star}</span>
            <div className='flex-row'>
                <span>{comment}</span>
                <p className='bold'>3</p>
            </div>
        </div>
    );
}

export default TaskDetails;