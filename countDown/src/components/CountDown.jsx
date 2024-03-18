import React from 'react'
import './CountDown.css'
function CountDown() {


  return (
<>
<div className="form">
<h1 className='heading'>Count Down App </h1>
<div className="input">
    <input id='dateTime' type="datetime-local" />
    <button id='submit'>start</button>
    </div>
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