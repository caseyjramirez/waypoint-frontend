import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { getUserData } from './services/services';
import { welcomeNavigation, homeNavigation, teamNavigation } from './services/navigation'
import Welcome from './pages/Welcome'
import NotFound from "./pages/NotFound";
import LoginContent from "./components/welcomeComponents/loginSideBar";
import SignupContent from "./components/welcomeComponents/signupSideBar";
import Home from "./pages/Home";
import Teams from './pages/Teams';
import Authorized from './pages/Authorized';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const [user, setUser] = useState(null)
  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false)
  const [viewing, setViewing] = useState(() => {
    if(pathname === homeNavigation) {
      return 'All Tasks'
    }
    else if(pathname === teamNavigation) {
      return 'All Teams'
    }
  })

  useEffect(() => {
    getUserData().then(r => {
      if(r.status === 200) {
        setUser(r.data)
      } else {
        navigate(welcomeNavigation.loginRoute)
      }
    })
  }, [])

  console.log(user);

  function addNewTag(newTag) {
    setUser(user => ({...user, tags: [...user.tags, newTag]}))
  }

  function addNewTask(newTask) {
    setUser(user => ({...user, tasks: [...user.tasks, newTask]}))
    console.log(newTask);
  }
  
  function updateTag(updatedTag) {
    setUser(user => ({...user, tags: user.tags.map(tag => {
      if (tag._id === updatedTag._id) {
        return updatedTag
      } else {
        return tag
      }
    })}))
  }

  function updateTask(updatedTask) {
    setUser(user => ({...user, tasks: user.tasks.map(task => {
      if (task._id === updatedTask._id) {
        return updatedTask
      } else {
        return task
      }
    })}))
  }

  function onFavoriteTask(taskId) {
    setUser(user => ({...user, tasks: user.tasks.map(task => {
      if (task._id === taskId) {
        return {...task, isFavorite: !task.isFavorite}
      } else {
        return task
      }
    })}))
  }

  function deleteTag(tagId) {
    setUser(user => ({...user, tags: user.tags.filter(tag => tag._id !== tagId)}))
  }

  function deleteTask(taskId) {
    setUser(user => ({...user, tasks: user.tasks.filter(task => task._id !== taskId)}))
  }

  function changeTaskStatus(taskId, status) {
    setUser(user => ({...user, tasks: user.tasks.map(task => {
      if (task._id === taskId) {
        return {...task, status}
      } else {
        return task
      }
    })}))
  }
  



  function renderAuthorizedRoutes() {
    if(user) {
      return (
        <Route path="/" element={<Authorized 
          user={user}
          handleAddNewTask={() => setIsCreatingNewTask(true)}
          viewing={viewing}
          setViewing={setViewing}
        />} >
          <Route path="" element={
            <Home 
              user={user}
              addNewTag={addNewTag}
              addNewTask={addNewTask}
              updateTag={updateTag}
              deleteTag={deleteTag}
              updateTask={updateTask}
              deleteTask={deleteTask}
              onFavoriteTask={onFavoriteTask}
              setTaskStatus={changeTaskStatus}
              handleDiscardNewTask={() => setIsCreatingNewTask(false)}
              isCreatingNewTask={isCreatingNewTask}
              viewing={viewing}
          />}/>

          <Route path="teams" element={
            <Teams 
              user={user}
              viewing={viewing}
            />}/>
          </Route>
      )
    }
  }
  
  return (
    <div>
        <Routes>
          <Route path="/welcome" element={<Welcome />}>
            <Route path="" element={<LoginContent setUser={setUser} />}></Route>
            <Route path="signup/*" element={<SignupContent setUser={setUser} />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          {renderAuthorizedRoutes()}
        </Routes>
    </div>
  );
}

export default App;
