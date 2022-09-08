import Directory from "../reusables/directory";
import SearchBar from "../reusables/searchBar";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";
import NewTaskCard from "../reusables/newTaskCard";

function Feed({profileData, creatingNewTask, onDiscardNewTask}) {
    function renderFeedConent() {
        return creatingNewTask ? (
            <>
                <NewTaskCard
                    onDiscardNewTask={onDiscardNewTask}
                />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            
            </>
        ) : (
            <>
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </>
        ) ;
    }
    return (
        <div className="home-feed">
            <div className="feed-header">
                <div className="flex-row bg-white px-10">
                    <Directory />
                    <SearchBar />
                </div>
                
                <div className="header-shadow"></div>
            </div>
            
            <div className="feed-content">
                <GreetingMessage
                    firstName={profileData.firstName}
                />

                {renderFeedConent()}
            </div>

        </div>
    );
}

export default Feed;