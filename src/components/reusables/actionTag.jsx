
function ActionTag({onSave, onDiscard, saveLabel = 'save', discardLabel = 'discard'}) {

    return (
        <div className="flex-row mb-20 tags">
            <button onClick={onSave} className='mr-10 tag save-tag'>
                <p className='action-tag-symbol'>{saveLabel}</p>
            </button>
            <button onClick={onDiscard} className='mr-10 tag discard-tag'>
                <p className='action-tag-symbol'>{discardLabel}</p>
            </button>
        </div>
    );
}

export default ActionTag;