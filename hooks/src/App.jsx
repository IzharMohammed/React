import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";
import { availability, generateId } from "./utils/features";
import Boi from "./Boi";

function App() {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");
  const [username, setUsername] = useState("");


  let usernameAvailable = useMemo(availability,[])

  /* using useEffect we can also stop re-rendering but it will not return any value
 const[id,showId]=useState('');
 useEffect(()=>{
 showId(Math.random()*34)
 },[]) */

/*    We can use useEffect or useMemo both works the same the difference is that useMemo returns and
   useEffect doesn't returns any value we have to make change by useState any value  */

  let id = useMemo(() => {
    return Math.random() * 34;
  }, []);
  
  let randomId = useMemo(generateId, []);

const fetchdata =useCallback((pow=1)=>{
  return Math.random()*25*pow
},[])

  return (
    <>
      <p>{id}</p>
      <div>
        <button onClick={() => setShow((prev) => !prev)}>
          {show ? "Hide" : "Reveal"}
        </button>
        <p>{show ? "Api key " : "*******"}</p>

        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <h1>{randomId}</h1>

        <h3>Username</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p style={{ color: usernameAvailable ? "green" : "red" }}>
          {usernameAvailable ? "username available" : "username not available"}
        </p>

        <Boi  fetchdata={fetchdata}/>
      </div>
    </>
  );
}

export default App;
