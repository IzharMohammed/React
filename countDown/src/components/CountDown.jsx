import React, { useState } from 'react'
import './CountDown.css'
function CountDown() {
  const[target,setTarget] = useState('');
  const [diff, setdiff] = useState(0);
  
function handleSubmit(){
setInterval(()=>{
  setdiff(new Date(target) - new Date())
},1000)
}

  return (

<>
<div className="form">
<h1 className='heading'>Count Down App </h1>
<div className="input">
    <input id='dateTime' type="datetime-local" value={target} onChange={(e)=>setTarget(e.target.value)}/>
    <button id='submit' onClick={handleSubmit}>start</button>
    </div>
    {diff}
    <div className="display">
    <ul>
    <li><span>Nan</span>Days</li>
    <li><span>Nan</span>Hours</li>
    <li><span>Nan</span>Minutes</li>
    <li><span>Nan</span>Seconds</li>
</ul>
    </div>
</div>
</>
  )
}

export default CountDown