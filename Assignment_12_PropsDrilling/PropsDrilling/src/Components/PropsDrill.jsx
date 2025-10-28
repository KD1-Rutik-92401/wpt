
import { useState } from 'react';

function GrandChild({count,setcount}){
    return <div  style={{border: '2px solid red', padding: '5px', display: 'inline-block'}}>
        <h3>Grandchild</h3>
        <div>
            <button onClick={()=>setcount(count+1)} >increment</button>
        </div>
    </div>

}


function Child(props){
    return <div  style={{border: '2px solid purple', padding: '5px', display: 'inline-block'}}>
        <h3>Child</h3>
         {props.children}

    </div>

}

function Parent(){

    const[count,setcount]=useState(0)

    return <div  style={{border: '2px solid blue', padding: '5px', display: 'inline-block'}}>
        <div><h3>Count: {count} </h3></div>
        <Child>
            <GrandChild count={count} setcount={setcount}/>
        
        </Child>
    </div>
}

export default Parent