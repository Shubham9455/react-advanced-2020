import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "shubham",
    age: 20,
    message: "random",
  });

  function changeMessage(){
    const newPerson = {...person,message:"Hello"}
    setPerson(newPerson);
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

