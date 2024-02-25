import { useState } from "react";
function AddTweet({ onAddTweet ,sortTweet}) {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
   <button onClick={()=>{
     onAddTweet(text);
     setText('')
   }}>Tweet</button>

      <button
      onClick={()=>{
        sortTweet();
      }}
      >Sort tweets </button>
    </>
  );
}
export default AddTweet;

