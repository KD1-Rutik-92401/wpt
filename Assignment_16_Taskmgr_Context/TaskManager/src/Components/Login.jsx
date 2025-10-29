import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { userContext } from "../App"
import { findUserByCredentials } from "../services/users"
import { toast } from "react-toastify"


export function Login(){
    const[forminfo,setforminfo]=useState({
        email:'',
        passwd:''
    })

    const{setuser}=useContext(userContext)

    const navigate=useNavigate()

    const handlechange=(e)=>setforminfo({...forminfo,[e.target.id]:e.target.value})

    const handleOnClick=()=>{
        try{
            const user=findUserByCredentials(forminfo)
            setuser(user)
            navigate('/user/tasklist')
        }
        catch(err){
            toast.error("Invalid Email or Password")

        }

    }

    return<div className="col-6 m-3 p-3 box border border-2">
        <h3>Login</h3>
        <div className="form-group mb-3">
            <label htmlFor="email" id="email">Email:</label>
            <input type="email" id="email" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="passwd" id="passwd">Password:</label>
            <input type="password" id="passwd" onChange={handlechange}/>
        </div>
        <div className="form-group mb-3">
            <button className="btn btn-primary mx-3" onClick={handleOnClick}>Sign Up</button>
            <Link className="btn btn-secondary mx-3" to="/register">Register</Link>
        </div>


    </div>
}