import React from 'react'
import  WithCounter  from './WithCounter';
 const ClickCounter = (props) => {
    const{count,incrementCount}=props;
  return (
    <div>
        <button onClick={incrementCount}>Click me </button>
        <div>{count}</div>
    </div>
  )
}

export default WithCounter(ClickCounter,10);
