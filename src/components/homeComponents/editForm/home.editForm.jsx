import TagEditForm from './editForm.tag';
import TaskEditForm from './editForm.task';

function EditForm({ isOpen, data, onCloseTaskForm, onUpdateTag, onDeleteTag, onUpdateTask, onDeleteTask }) {
    
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
        } else if(data.type === 'task') { 
            return (
                <TaskEditForm 
                    data={data}
                    onCloseTaskForm={onCloseTaskForm}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
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