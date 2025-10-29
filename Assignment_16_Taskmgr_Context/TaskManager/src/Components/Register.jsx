import { useState } from "react"
import { useNavigate } from "react-router"
import { userSave } from "../services/users"
import { toast } from "react-toastify"

export function Register(){

    const [formdata,setformdata]=useState({
        name:'',
        email:'',
        passwd:''
    })
    const navigate=useNavigate()

    const handlechange=(e)=> setformdata({...formdata,[e.target.id]:e.target.value})

    const handleOnClick=()=>{
        const userinfo=formdata
        userSave(userinfo)
        toast.success("User register Successfully")
        navigate('/login')

    }

    return <div className="col-6 m-3 p-3 mb-3 boc border border-2">
         <h3>Register</h3>
        <div className="form-group mb-3">
            <label htmlFor="name" id="name">Name:</label>
            <input type="text" id="name" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="email" id="email">Email:</label>
            <input type="email" id="email" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="passwd" id="passwd">Password:</label>
            <input type="password" id="passwd" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <button className="btn btn-primary" onClick={handleOnClick}>Register</button>
        </div>
    </div>
}