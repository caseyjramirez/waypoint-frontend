import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, } from '@fortawesome/free-solid-svg-icons';
import ActionTag from '../../reusables/actionTag';
import { tagColorObjects } from '../../../styles/tagColors';
import { updateTag, deleteTag } from '../../../services/services';


function TagEditForm({ data, onCloseTaskForm, onUpdateTag, onDeleteTag }) {
    const back = <FontAwesomeIcon icon={faArrowLeft} className='icon' />
    const { tagTitle, tagColor, _id } = data

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [tagError, setTagError] = useState('')

    useEffect(() => {
        setTitle(tagTitle)
        setColor(tagColor)
    }, [tagTitle, tagColor])


    function renderTitleClass() {
        return tagError ? 'input-error title-input' : 'title-input';
    }

    async function handleUpdateTag() {
        setTagError('')

        if(title.length < 1) {
            return setTagError('Give your tag a title!')
        }

        if(title.length > 25) {
            return setTagError('Tag titles must be less than 25 characters long.')
        }

        const updatedTag = {
            tagTitle: title,
            tagColor: color
        }

        updateTag(_id, updatedTag)
        onCloseTaskForm()
        onUpdateTag({...updatedTag, _id})
    }

    function handleDeleteTag() {
        deleteTag(_id)
        onCloseTaskForm()
        onDeleteTag(_id)
    }

    return (
    <div className="edit-task-wrapper">
        <div className='mb-30'>
            <div className='mb-20 edit-task-wrapper-header'>
                <span className='mr-30 pointer' onClick={onCloseTaskForm}>{back}</span>
                <h3 className='type'>Type: Tag</h3>
            </div>
            <div className='deco-line mb-10'></div>
        </div>
        
        <div className='mb-30'>
            {/* title */}
            <div className='flex-row ai-center mb-30'>
                <p className='editor-label mr-10'>Tag title:</p>
                <div>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className={renderTitleClass()} type="text" placeholder='Update tag title.'/>
                    <ul>
                        {tagError && <li className="error-message">{tagError}</li>}
                    </ul>
                </div>
            </div>

            
            {/* color */}
            <div className='flex-row ai-center'>
                <p className='editor-label mr-10'>Tag color:</p>
                <select onChange={e => setColor(e.target.value)} name="cars" id="cars" >
                    {
                        tagColorObjects.map(tag => {
                            if(tag.value === tagColor) {
                                return <option selected value={tag.value}>{tag.label}</option>
                            } else {
                                return <option value={tag.value}>{tag.label}</option>
                            }
                        })
                    }
                </select>
            </div>


        </div>



        <ActionTag
            discardLabel='delete tag'
            saveLabel='update tag'
            onSave={handleUpdateTag}
            onDiscard={handleDeleteTag}
        />
    </div>
    );
}

export default TagEditForm;