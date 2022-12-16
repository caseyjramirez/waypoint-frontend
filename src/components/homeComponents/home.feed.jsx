import React from 'react';
import Directory from "../reusables/directory";
import SearchBar from "../reusables/searchBar";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";
import NewTaskCard from "../tasks/newTaskCard";

function Feed({
    user, 
    tasks, 
    tags, 
    creatingNewTask, 
    onDiscardNewTask, 
    onSaveNewTask, 
    onCreateNewTag, 
    onEditForm,
    onFavoriteTask
}) {

    function renderTaskCard(task) {
        return (
            <TaskCard 
                key={task._id} 
                data={task}
                tags={tags}
                onCreateNewTag={onCreateNewTag}
                onEditTag={onEditForm}
                onEditTask={onEditForm}
                onFavoriteTask={onFavoriteTask}
            />
        )
    }

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
                {tasks.map(task => renderTaskCard(task))}
            
            </>
        ) : (
            <>
                {tasks.map(task => renderTaskCard(task))}
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
                    firstName={user.firstName}
                />

                {renderFeedConent()}
            </div>

            <div className="feed-footer">

            </div>

        </div>
    );
}

export default Feed;