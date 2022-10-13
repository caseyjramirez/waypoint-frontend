import TaskDetails from "./taskDetails";
import StatusTag from "./statusTag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function TaskCard({ data, raiseClick }) { 
    const edit = <FontAwesomeIcon icon={faPenToSquare} className='icon edit' />
    
    const {title, description, due, status} = data

    return (
        <div onClick={raiseClick} className="task-card mb-20">
            <div className="mr-10">
                <input type="checkbox" className="task-card-checkbox"/>
            </div>

            <div className="task-card-content">

                <div className="flex-row space-between">

                        <h2 className="mb-10 mr-10">{title}</h2>
                    <p className="bold">{due}</p>
                </div>

                <p className="mb-20">{description}</p>

                <div className="tags">
                    <StatusTag
                        status={status}
                    />
                </div>

                <div className="mb-10 edit-button-container">
                    <button className="btn edit-btn">{edit}</button>
                    <TaskDetails />
                </div>
            </div>
        </div>
    );
}

export default TaskCard;