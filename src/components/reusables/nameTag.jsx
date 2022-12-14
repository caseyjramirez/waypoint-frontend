import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const imgSrc = 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

function NameTag({user, onAddNewTask}) {
    const plus = <FontAwesomeIcon icon={faPlus} className='icon' />

    function onClick() {
        onAddNewTask()
    }

    const {firstName, lastName, jobTitle, company} = user
    return (
        <div className="name-tag mb-40">
            <div className="flex-row align-center mb-5">
                <img src={imgSrc} alt="" className="avatar"/>
                <h3>{firstName} {lastName}</h3>
            </div>
            <div>
                <p className="text-small">{jobTitle} | {company}</p>
            </div>
            <button className='mx-10 btn plus-button' onClick={onClick}>{plus}</button>
        </div>
    );
}

export default NameTag;