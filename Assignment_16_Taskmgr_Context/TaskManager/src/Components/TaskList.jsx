import { useContext, useEffect, useState } from "react"
import { userContext } from "../App"
import { useNavigate } from "react-router"
import { deleteTaskById, findAllTasks } from "../services/tasks"

export function TaskList(){
    const [tasks,settask]=useState([])
    const {user}=useContext(userContext)
    const navigate=useNavigate()

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
        else{
            const taskList=findAllTasks()
            settask(taskList.filter((task)=>task.useremail===user.email))

        }
    },[])

    const handledeleteclick=(taskid)=>{
        const remainingtask=deleteTaskById(taskid)
        settask(remainingtask.filter((task)=>task.useremail===user.email))

    }
    

    return <div>
        <h3>Task List</h3>
       <table className="table table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {tasks.map((task)=> <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.desc}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>handledeleteclick(task.id)}>Delete</button>
                </td>
            </tr>)}
        </tbody>
       </table>
    </div>
}