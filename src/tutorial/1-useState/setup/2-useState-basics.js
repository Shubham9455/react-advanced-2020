import React, { useState } from 'react';

const UseStateBasics = () => {
  var [text,setText] = useState(0);
  // const handleClick = ({num}) => {
    
  // }
  function handleClick(num){
    if (num ===0) {
      text += 1;
    } else {
      text -= 1;
    }
    console.log(num);
    setText(text);
  }
  return <>
    <h1>{text}</h1>
    <button className='btn' onClick = {()=>handleClick(0)}>Increase Number</button>
    <button className='btn' onClick = {()=>handleClick(1)}>Decrease Number</button>
  </>;
};

export default UseStateBasics;
