import TagEditForm from './editForm.tag';

function EditForm({ isOpen, data, onCloseTaskForm, onUpdateTag, onDeleteTag }) {
    
    function renderClass() {
        return isOpen ? "edit-task active" : "edit-task"
    }

    function renderForm() {
        // returning if tag title has not been selected
        if(!data) {return}

        if(data.type === 'tag') {
            return (
                <TagEditForm
                    data={data}
                    onCloseTaskForm={onCloseTaskForm}
                    onUpdateTag={onUpdateTag}
                    onDeleteTag={onDeleteTag}
                />
            )
        }
    }

    return (
        <div className={renderClass()}>
            {renderForm()}
        </div>
    );
}

export default EditForm;