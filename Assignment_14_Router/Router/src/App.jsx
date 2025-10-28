import { toast } from 'react-toastify'
import './App.css'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Link, Route, Routes } from 'react-router'
import { Welcome } from './Components/Welcome'
import { Aboutus } from './Components/Aboutus'
import { NotFound } from './Components/NotFound'

function App() {

  return (
   <div>
    <h1>React Router</h1>
    <button onClick={()=>toast.info("Hello")}>Toast</button>
    <hr/>
    <div>
    <Link className='btn btn-secondary m-2' to="/Home">Home</Link>
    <Link className='btn btn-secondary m-2' to="/Login">Login</Link>
    <Link className='btn btn-secondary m-2' to="/AboutUs">About us</Link>
    </div>
    <hr/>
    {/* <Home/>
    <Login/> */}
    <Routes>
      <Route index element=<Home/> />
      <Route path='/Home' element=<Home/> />
      <Route path='/Login' element=<Login/> />
      <Route path='/Welcome' element=<Welcome/> />
      <Route path='/Aboutus' element=<Aboutus/> />
      <Route path='*' element=<NotFound/> />

    </Routes>
   </div>
  )
}

export default App
