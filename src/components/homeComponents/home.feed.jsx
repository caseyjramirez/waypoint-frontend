import Directory from "../reusables/directory";
import SearchBar from "../reusables/searchBar";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";

function Feed() {
    return (
        <div className="home-feed">
            <div className="feed-header flex-row">
                <Directory />
                <SearchBar />
            </div>
            <div className="feed-content">
                <GreetingMessage/>
                <TaskCard />
                <TaskCard />
            </div>

        </div>
    );
}

export default Feed;