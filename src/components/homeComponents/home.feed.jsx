import React, { useState, useEffect } from 'react';
import Directory from "../reusables/directory";
import SearchBar from "../reusables/searchBar";
import GreetingMessage from "../reusables/geetingMessage";
import TaskCard from "../reusables/taskCard";
import NewTaskCard from "../tasks/newTaskCard";
import { isToday } from 'date-fns';

function Feed({
    user, 
    tasks, 
    tags,
    viewing, 
    creatingNewTask, 
    onDiscardNewTask, 
    onSaveNewTask, 
    onCreateNewTag, 
    onEditForm,
    onFavoriteTask,
    setStatus
}) {
    const [query, setQuery] = useState('')

    function filterByQuery() {
        return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
    }


    function filterTaskCards() {
        const filteredByQuery = filterByQuery()

        if(viewing === 'All Tasks') return filteredByQuery
        else if(viewing === 'Favorites') {
            return filteredByQuery.filter(task => task.isFavorite === true)
        }
        else if(viewing === 'Ready') {
            return filteredByQuery.filter(task => task.status === 'ready')
        }
        else if(viewing === 'Due Today') {
            return filteredByQuery.filter(task => isToday(new Date(task.due)) === true)
        }
    }

    function renderTaskCards() {
        return filterTaskCards().map(task => <TaskCard 
            key={task._id} 
            data={task}
            tags={tags}
            onCreateNewTag={onCreateNewTag}
            onEditTag={onEditForm}
            onEditTask={onEditForm}
            onFavoriteTask={onFavoriteTask}
            setStatus={setStatus}
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
                {renderTaskCards()}
            
            </>
        ) : (
            <>
                {renderTaskCards()}
            </>
        ) ;
    }
    return (
        <div className="home-feed">
            <div className="feed-header">
                <div className="bg-white px-10">
                    <Directory 
                        viewing={viewing}
                    />
                    <SearchBar 
                        query={query}
                        setQuery={setQuery}
                    />
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