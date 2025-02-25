import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  function complexIncrease() {
    setTimeout(() => {
      //this will take previous value and add 1 to it
      setValue((value) => value + 1);
      //this will take the current value and add 1 to it
      setValue(value + 1);
      // console.log(value);
    }, 2000);
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        {/* <button className="btn" onClick={reset}>
          reset
        </button> */}
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
