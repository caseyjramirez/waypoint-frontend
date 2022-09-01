import Directory from "../reusables/directory";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";

function Feed() {
    return (
        <div className="home-feed">
            <div className="feed-header">
                <Directory />

            </div>
            <div className="feed-content">
                <GreetingMessage/>
                <TaskCard />
            </div>

        </div>
    );
}

export default Feed;