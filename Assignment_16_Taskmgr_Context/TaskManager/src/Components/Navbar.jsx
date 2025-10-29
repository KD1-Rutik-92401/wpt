import { Link } from "react-router";

export function Navbar(){

    return <div className="navbar navbar-lg-3 navbar-light bg-light">
        <nav>
        <Link className="nav-link" to="/user/taskform">Add Task</Link>
        <Link className="nav-link" to="/user/tasklist">Task List</Link>
        <Link className="nav-link" to="/logout">Logout</Link>
        
    </nav>
    </div>
}