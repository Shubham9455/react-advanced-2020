import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}> Change The Title</button>
    </>
  );
};

export default ErrorExample;
