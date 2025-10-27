import { useState } from "react"


function LoginForm(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleButton=()=>{
        const msg =` Email: ${email}, Password: ${password}`
        alert(msg)
    }

    return(
        <div style={{padding:'10px', margin:'10px', border:'2px solid white', justifyItems:'space-around'}}>
            <h3>Login Form</h3>
           <div>Email : <input type="text" id='email' onChange={(e)=>setEmail(e.target.value)} /></div>
           <div>Password : <input type="text" id='password' onChange={(e)=>setPassword(e.target.value)} /></div>
           <div><button onClick={handleButton}> Submit</button> </div>
        </div>
    )
}

export default LoginForm