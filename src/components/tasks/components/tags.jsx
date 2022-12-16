import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { createNewTag } from '../../../services/services';
import TagResult from './tagResult';
import Tag from './tag';
import { tagColors } from '../../../styles/tagColors';

function Tags({ tags, taskTagIDs, addTaskTag, removeTaskTag, onCreateNewTag, onEditTag, randomColorNumber }) {

    // console.log('task tags on the task level', taskTagIDs);
    
    const plus = <FontAwesomeIcon icon={faPlus} className='icon add-tag' />
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon tag-form-search' />
    const clear = <FontAwesomeIcon icon={faXmark} className='icon tag-form-clear' />
    
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [taskTags, setTaskTags] = useState(taskTagIDs.map(id => tags.find(tag => tag._id === id)))


    
    useEffect(() => {
        setTaskTags(
            taskTagIDs.map(id => tags.find(tag => tag._id === id))
        )
    }, [taskTagIDs, tags])


    function renderTagFormClass() {
        return isOpen ? 'tag-form active' : 'tag-form';
    }

    function closeForm() {
        setIsOpen(false)
        setQuery('')
    }

    function renderSearchResults() {
        return tags.filter(tag => {
            return tag.tagTitle.toLowerCase().includes(query.toLowerCase())
        })
    }


    function renderTagResults() {
        return (
            renderSearchResults().map(tag => 
                <TagResult
                    key={tag._id}
                    currentTags={taskTagIDs}
                    tag={tag} 
                    onAddTag={addTaskTag}
                    onEditTag={onEditTag}
                />)
        )
    }
    
    function renderExistingTags() {
        return taskTags.map(tag => {
            if (tag) {
                return (<div className='mr-10'>
                    <Tag 
                        key={tag._id}
                        data={{
                            text: tag.tagTitle,
                            color: tag.tagColor
                        }}
                        removable={true}
                        removeTag={() => removeTaskTag(tag._id)}
                    />
                </div>)
            } else {
                return null
            }
        })
    }

    function createTagDisabled() {
        if(query.length > 0 && query.length <= 25) {
            return false
        } else {
            return true
        }
    }

    function createTagClasses() {
        if(query.length > 0 && query.length <= 25) {
            if(renderSearchResults().length > 0) {
                if(renderSearchResults()[0].tagTitle !== query) {
                    return 'tag-form-adder-container-creator mb-10 active pointer'
                }
            } else {
                return 'tag-form-adder-container-creator mb-10 active pointer'
            }
        }
        return 'tag-form-adder-container-creator mb-10'
    }

    async function createTag() {
        setQuery('')
        const newTag = {
            tagTitle: query,
            tagColor: tagColors[randomColorNumber]
        }
        
        const response = await createNewTag(newTag)
        addTaskTag(response.data)
        onCreateNewTag({...newTag, _id: response.data})
    }

    return (
        <div className="tags mb-20 tag-form-container">
            <div>
                <p className='mr-10'>Tags:</p>
            </div>
 
            <div className='mr-10'>
                {/* tag form open button */}
                <button onClick={() => setIsOpen(true)} className="btn add-tag">{plus}</button>
                
                {/* tag form */}
                <div className={renderTagFormClass()}>
                    {/* tag form container */}
                    <div className='tag-form-adder-container'>
                        <div className='tag-form-adder-container-search-bar mb-5'>
                            <span className='my-10'>{search}</span>
                            <input placeholder='Search for a tag...' className='mr-10' type="text" value={query} onChange={e => setQuery(e.target.value)}/>
                            <span onClick={closeForm} className='my-10'>{clear}</span>
                        </div>
                        
                        <div className='deco-line mb-10'></div>
                        
                        <div className='tag-form-adder-container-results mb-10'>
                            {renderTagResults()}
                        </div>
                            <div className='deco-line mb-10'></div>
                        

                        <button disabled={createTagDisabled()} onClick={createTag} className={createTagClasses()}>
                            <p className='my-10'>Create:</p>
                            <Tag
                                data={{
                                    text: query,
                                    color: tagColors[randomColorNumber]
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* existing tags on a task */}
            <div className='tag-form-container-existing-tags'>
                {renderExistingTags()}
            </div>

        </div>
    );
}

export default Tags;