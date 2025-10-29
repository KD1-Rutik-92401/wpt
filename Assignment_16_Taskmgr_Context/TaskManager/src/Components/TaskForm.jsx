import { useContext, useState } from "react"
import { userContext } from "../App"
import { taskSave } from "../services/tasks"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export function TaskForm(){

    const[task,setask]=useState({
        title:'',
        desc:''
    })

    const{user}=useContext(userContext)
    const navigate=useNavigate()

    const handlechange=(e)=>setask({...task,[e.target.id]:e.target.value})

    const handleOnClick=()=>{
        const taskinfo=task
        taskinfo.useremail=user.email
        taskSave(taskinfo)
        toast.success("Task Register Successfully")
        navigate('/user/tasklist')

    }


    return <div className="col-6 m-3 p-3 box border border-2">
        <h3>New Task</h3>
         <div className="form-group mb-3">
            <label htmlFor="title" id="title">Title:</label>
            <input type="text" id="title" className="form-control" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="desc" id="desc">Description:</label>
            <input type="text" id="desc"  className="form-control" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <button className="btn btn-primary mx-3" onClick={handleOnClick}>Add Task</button>
        </div>

    </div>
}