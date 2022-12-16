import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { renderTagClass } from "../../../styles/tagColors";

function Tag({data, removable = false, removeTag}) {

    const { text, color } = data
    const [tagTitle, setTagtitle] = useState(text)
    const [tagColor, setTagColor] = useState(color)

    useEffect(() => {
        setTagtitle(text)
        setTagColor(text)
    }, [data])

    const clear = <FontAwesomeIcon icon={faXmark} className='icon remove-tag' />

    function renderText() {
        return data.text ? data.text : null;
    }
    
    return (data.text ? (
        removable ? (
            <div className={renderTagClass(data.color)}>
                <p>{renderText()}</p>
                <button onClick={removeTag} className="pointer ml-5">{clear}</button>
            </div>
        ) : (
            <div className={renderTagClass(data.color)}>
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