import React from 'react';
import Directory from "../reusables/directory";
import SearchBar from "../reusables/searchBar";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";
import NewTaskCard from "../tasks/newTaskCard";

function Feed({
    profileData, 
    tasks, 
    tags, 
    creatingNewTask, 
    onDiscardNewTask, 
    onSaveNewTask, 
    onCreateNewTag, 
    onEditForm
}) {


    function renderFeedConent() {
        return creatingNewTask ? (
            <>
                <NewTaskCard
                    onDiscardNewTask={onDiscardNewTask}
                    onSaveNewTask={onSaveNewTask}
                    tags={tags}
                    onCreateNewTag={onCreateNewTag}
                    onEditTag={onEditForm}
                />
                {tasks.map(task => {
                    return (
                        <TaskCard key={task._id} data={task} raiseClick={() => onEditForm(task)} />
                    )
                })}
            
            </>
        ) : (
            <>
                {tasks.map(task => {
                    return (
                        <TaskCard key={task._id} data={task} onClick={() => onEditForm(task)} />
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