import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  }



  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize',checkSize);
    // return () => {
    //   console.log('cleanup');
    //   window.removeEventListener('resize',checkSize);
    // }
  },[]);


  // inplace of removingEventListener we can just pass an empty array as second argument to run useEffect only once

  return <>
  <h1>Window</h1>
  <h2>{size} px</h2>
  </>;
};

export default UseEffectCleanup;
