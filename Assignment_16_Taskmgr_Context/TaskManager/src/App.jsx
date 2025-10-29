import { createContext, useContext, useState } from "react"
import { Route, Routes } from "react-router";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { TaskForm } from "./Components/TaskForm";
import { TaskList } from "./Components/TaskList";
import { UserLayout } from "./Components/UserLayout";
import { Logout } from "./Components/Logout";




export const userContext = createContext({});

function App() {

  const [user, setuser] = useState([])

  return (
    <div>

      <h1>Task Manager</h1>
      <userContext.Provider value={{ user, setuser }}>
        <Routes>
          <Route index element=<Login /> />
          <Route path="/login" element=<Login/> />
          <Route path="/register" element=<Register/> />
          <Route path="/user" element=<UserLayout/> >
            <Route path="taskform" element=<TaskForm/> />
            <Route path='tasklist' element=<TaskList/> />
          </Route>
          <Route path='/logout' element=<Logout/> />
        </Routes>
      </userContext.Provider>

    </div>
  )
}

export default App
