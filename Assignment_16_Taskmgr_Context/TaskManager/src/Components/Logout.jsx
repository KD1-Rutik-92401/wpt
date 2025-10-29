import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { userContext } from "../App";


export function Logout(){
    const {setuser}=useContext(userContext)
    
    useEffect(()=>{
        setuser(null)

    },[])


    return <div>
        <h3>Logout</h3>
        <h5>Thank you for using Task Manager</h5>
        <Link className="btn btn-link" to="/login">Login Again</Link>
    </div>
}