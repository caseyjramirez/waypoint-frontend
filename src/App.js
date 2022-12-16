import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUserData } from './services/services';
import { welcomeNavigation } from './services/navigation'
import Welcome from './pages/Welcome'
import NotFound from "./pages/NotFound";
import LoginContent from "./components/welcomeComponents/loginSideBar";
import SignupContent from "./components/welcomeComponents/signupSideBar";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null)

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

  function deleteTag(tagId) {
    setUser(user => ({...user, tags: user.tags.filter(tag => tag._id !== tagId)}))
  }

  function deleteTask(taskId) {
    setUser(user => ({...user, tasks: user.tasks.filter(task => task._id !== taskId)}))
  }



  function renderAuthorizedRoutes() {
    if(user) {
      return (
        <Route path="/" element={
          <Home 
          user={user}
          addNewTag={addNewTag}
          addNewTask={addNewTask}
          updateTag={updateTag}
          deleteTag={deleteTag}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />}></Route>
      )
    }
  }
  
  return (
    <div>
        <Routes>
          <Route path="/welcome" element={<Welcome />}>
            <Route path="" element={<LoginContent />}></Route>
            <Route path="signup/*" element={<SignupContent />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          {renderAuthorizedRoutes()}
        </Routes>
    </div>
  );
}

export default App;
