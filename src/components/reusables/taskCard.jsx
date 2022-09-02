import TagList from "./tagList";
import TaskDetails from "./taskDetails";

function TaskCard() { 
    return (
        <div className="task-card mb-20">
            <div className="mr-10">
                <input type="checkbox" className="task-card-checkbox"/>
            </div>
            {/* childrend divs will stack like column */}
            <div className="task-card-content">
                {/* here will be title and due date in a row */}
                <div className="flex-row space-between">
                    <h2 className="mb-10">Do Time Sheets</h2>
                    <p className="bold">Due at: 12:00 pm today</p>
                </div>
                {/* this is description */}
                <p className="mb-20">It’s that dreadful time of the week.... do your timesheet!!!</p>

                {/* this is tags + star/message */}
                <div className="mb-10 flex-row-align-bottom">
                    <TagList />
                    <TaskDetails />
                </div>
            </div>
        </div>
    );
}

export default TaskCard;