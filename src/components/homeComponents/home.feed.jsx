import React from 'react';
import Directory from "../reusables/directory";
import SearchBar from "../reusables/searchBar";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";
import NewTaskCard from "../reusables/newTaskCard";

function Feed({profileData, tasks, creatingNewTask, onDiscardNewTask, onSaveNewTask}) {


    function renderFeedConent() {
        return creatingNewTask ? (
            <>
                <NewTaskCard
                    onDiscardNewTask={onDiscardNewTask}
                    onSaveNewTask={onSaveNewTask}
                />
                {tasks.map(task => {
                    return (
                        <TaskCard data={task} />
                    )
                })}
            
            </>
        ) : (
            <>
                {tasks.map(task => {
                    return (
                        <TaskCard data={task} />
                    )
                })}
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