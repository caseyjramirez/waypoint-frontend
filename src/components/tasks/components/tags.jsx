import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { createNewTag } from '../../../services/services';
import TagResult from './tagResult';
import Tag from './tag';
import { tagColors } from '../../../styles/tagColors';

function Tags({ tags, taskTags, addTaskTag, onCreateNewTag, removeTaskTag, onEditTag, randomColorNumber }) {
    const plus = <FontAwesomeIcon icon={faPlus} className='icon add-tag' />
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon tag-form-search' />
    const clear = <FontAwesomeIcon icon={faXmark} className='icon tag-form-clear' />

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    console.log('tags', tags);
    console.log('task tags', taskTags);

    function renderTagFormClass() {
        return isOpen ? 'tag-form active' : 'tag-form';
    }

    function closeForm() {
        setIsOpen(false)
        setQuery('')
    }

    function renderSearchResults() {
        return tags.filter(tag => tag.tagTitle.toLowerCase().includes(query.toLowerCase()))
    }


    function renderTagResults() {
        return (
            renderSearchResults().map(tag => 
                <TagResult
                    key={tag._id}
                    currentTags={taskTags}
                    tag={tag} 
                    onAddTag={addTaskTag}
                    onEditTag={onEditTag}
                />)
        )
    }

    function renderExistingTags() {
        return taskTags.map(tag => { 
            return (<div className='mr-10'>
                <Tag 
                    key={tag._id}
                    text={tag.tagTitle} 
                    color={tag.tagColor}
                    removable={true}
                    removeTag={() => removeTaskTag(tag)}
                />
            </div>
        )})
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

    function createTag() {
        setQuery('')
        const newTag = {
            tagColor: tagColors[randomColorNumber],
            tagTitle: query
        }
        
        createNewTag(newTag)
        onCreateNewTag(newTag)
    }

    return (
        <div className="tags mb-20 tag-form-container">
            <div>
                <p className='mr-10'>Tags:</p>
            </div>
 
            <div className='mr-10'>
                <button onClick={() => setIsOpen(true)} className="btn add-tag">{plus}</button>
                
                {/* being form */}
                <div className={renderTagFormClass()}>
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
                                text={query}
                                color={tagColors[randomColorNumber]}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className='tag-form-container-existing-tags'>
                {renderExistingTags()}
            </div>

        </div>
    );
}

export default Tags;