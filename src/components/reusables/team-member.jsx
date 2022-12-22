import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function TeamMember({email, removeTeamMember}) {
    const clear = <FontAwesomeIcon icon={faXmark} className='icon remove-tag' />

    return (
        <div className="team-member">
            <p>{email}</p>
            <button onClick={() => removeTeamMember(email)} className="pointer ml-5">{clear}</button>
        </div>
    );
}

export default TeamMember;