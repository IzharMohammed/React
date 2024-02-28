import React, { useState } from "react";
import WithCounter from "./WithCounter";
const HoverCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <>
      <button onMouseOver={incrementCount}>Hover me</button>
      <div>{count}</div>
    </>
  );
};
export default WithCounter(HoverCounter, 50);
