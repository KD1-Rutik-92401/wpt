import { useState } from "react";

function Counter(){
    const[count,setCount] =useState(0)

    const incr=()=>{
        setCount(count+1)
        console.log("incr"+count)
    }

    const decr=()=>{
        setCount(count-1)
        console.log("decr"+count)
    }

        return(
        <div  style={{border: '2px solid white', padding: '5px', margin: '5px', display: 'inline-block'}}>
            <h3>Coutnt:{count}</h3>
            <button onClick={incr}>Increment</button>
            <button onClick={decr}>Decrement</button>
        </div>
        )
}

export default Counter