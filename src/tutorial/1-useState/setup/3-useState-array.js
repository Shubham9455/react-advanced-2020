import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  var [people, setPeople] = React.useState(data);

  function handeler(id){
    // people[index].name = "Deleted";
    let newPeople = people.map((p)=>{
      if(p.id===id){
        p.name = "D"+p.name;
        return p;
      }
      else return p;
    });
    setPeople(newPeople);
    console.log(newPeople);
  }
  return (
    <>
      <h2>useState array example</h2>
      {
        people.map((person,index)=>{
          const {id,name} = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button className='btn' onClick={()=>handeler(id)}>Add D</button>
            </div>
          );
        })
      }
    </>
  );
};

export default UseStateArray;
