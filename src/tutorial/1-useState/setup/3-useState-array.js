import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // if dont import useState, use React Namespace
  const removeItem = (id) => {
    const filtered = people.filter((person) => person.id !== id);
    setPeople(filtered);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>REMOVE ME</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        CLEAR ALL
      </button>
    </>
  );
};

export default UseStateArray;
