import { useState } from "react"

function ClickTracker(){
    const [press,setPress]=useState("")
    const handler = (e)=>{
        const inner =e.target.innerHTML
        setPress(inner)
    }
    return(
        <div>
            <h1>last press button is: {press}</h1>
            <button onClick={handler}>button1</button>
            <button onClick={handler}>button2</button>
            <button onClick={handler}>button3</button>
        </div>
    )
}
export default ClickTracker