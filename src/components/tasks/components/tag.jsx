import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { renderTagClass } from "../../../styles/tagColors";

function Tag({text, color, removable = false, removeTag}) {
    const clear = <FontAwesomeIcon icon={faXmark} className='icon remove-tag' />

    function renderText() {
        return text ? text : null;
    }
    
    return (text ? (
        removable ? (
            <div className={renderTagClass(color)}>
                <p>{renderText()}</p>
                <button onClick={removeTag} className="pointer ml-5">{clear}</button>
            </div>
        ) : (
            <div className={renderTagClass(color)}>
                <p>{renderText()}</p>
            </div>
        )

    ) : 
    (
        <p>hello</p>
    )
        
    )
}

export default Tag;