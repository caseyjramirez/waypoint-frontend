import Tag from "./tag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function TagResult({ tag, onAddTag, currentTags, onEditTag }) {
    const edit = <FontAwesomeIcon icon={faEllipsis} className='icon tag-editor-icon' />

    const exists = currentTags.find(currentTag => currentTag === tag._id)

    
    function renderIsSelectedIndicator() {
        return exists ? <div className="is-selected mr-10"></div> : <div className="mr-15"></div>;
    }
    return (
        <div>
            <div className="task-tag-search-result">
                <div className="flex-row-center task-tag-search-result-tag-container" onClick={() => onAddTag(tag._id)}>
                    {/* render indicator */}
                    {renderIsSelectedIndicator()}

                    {/* render tag */}
                    <Tag
                        data={{
                            text: tag.tagTitle,
                            color: tag.tagColor
                        }}
                    />
                </div>
                <div onClick={() => onEditTag({type: "tag", ...tag})}>
                    <span className="pointer">{edit}</span>
                </div>
            </div>
        </div>
    );
}

export default TagResult;