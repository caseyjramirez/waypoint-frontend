import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

function ActionTag({onSave, onDiscard}) {
    const check = <FontAwesomeIcon icon={faCheck} className='icon save' />
    const discard = <FontAwesomeIcon icon={faX} className='icon discard' />

    return (
        <div className="flex-row mb-20">
            <button onClick={onSave} className='mr-10 tag unselected green'>
                <p className='action-tag'>{check}</p>
            </button>
            <button onClick={onDiscard} className='mr-10 tag unselected red'>
                <p className='action-tag'>{discard}</p>
            </button>
        </div>
    );
}

export default ActionTag;