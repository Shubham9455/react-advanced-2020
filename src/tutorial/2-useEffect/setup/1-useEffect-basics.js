import React, { useState, useEffect } from "react";
// by default runs after every re-render because of strict node
// cleanup function


// second parameter runs if value inside array changes
// runs only at initial render if empty array is passed
//if no second parameter is passed, it runs after every re-render

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // automatically runs after every re-render
  useEffect(() => {
    console.log("useEffect");
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  },[value]);
  useEffect(() => {
    console.log("useEffect Initial");
  },[]);
  console.log("abs");
  console.log("abs2");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
