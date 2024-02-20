import { useState } from "react";
import Twitter from "./Twitter";
function AddTweet({ onAddTweet }) {
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          onAddTweet(text);
          setText("");
        }}
      >
        Tweet
      </button>
    </>
  );
}
export default AddTweet;
``;
