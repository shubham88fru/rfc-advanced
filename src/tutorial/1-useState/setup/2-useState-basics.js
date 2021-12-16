import React, { useState } from 'react';

const UseStateBasics = () => {
  /**
   * 1) useState needs a initial value, else initial value
   * is undefined.
   *
   * 2) returns an array - first element is state and second
   * element is a handler used to update the state.
   *
   * 3) Everytime state updates, component re-renders
   */
  const [value, setValue] = useState('INITIAL TITLE');

  const handleClick = (e) => {
    setValue('Hello world');
  };

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        CHANGE TITLE
      </button>
    </>
  );
};

export default UseStateBasics;
