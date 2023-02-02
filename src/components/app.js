import { useState } from "react"



export default function App(){
    const [count, setCount] = useState(0)

    return(
            <div>
            <div> This is a simple stateful and server-side rendered React App</div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
            </div>
    )






}