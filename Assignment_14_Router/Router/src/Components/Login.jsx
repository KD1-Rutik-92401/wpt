import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export function Login(){
    const [formdata,setformdata]=useState({
        email:'',
        passwd:''
    })

    const handlechange=(e)=>setformdata({...formdata,[e.target.id]:e.target.value})

    const navigate=useNavigate()

    const handlelogin=()=>{
        if(formdata.email==='rutik@gmail.com' && formdata.passwd ==='rutik'){
            navigate('/Welcome',{
        state:{
            email:formdata.email
        }
        })
    }
        else
            toast.error("invalid invalid email or password")
    }

    return (
        <div className='col-6 row-5 m-3 p-3 box border border-2'>

            <div className="form-group mb-5">
                <label htmlFor="email" id="email">Email</label>
                <input className="form-control" id="email" type="email" onChange={handlechange}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="passwd" id="passwd">Password</label>
                <input className="form-control" id="passwd" type="password"  onChange={handlechange}/>
            </div>
            <div  className="form-group mb-3" >
                <button className="btn btn-primary" onClick={handlelogin}>Sign in</button>
            </div>

        </div>
    )
    
}