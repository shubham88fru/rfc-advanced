import React, { useState } from 'react';
/**
 * REACT HOOKS - Rules of Road.
 * 1) Hook names usually start with `use`
 * 2) Component inside which hook is being used needs to be uppercase.
 * 3) Hook should be invoked inside the FC component body. Can't call hook in
 * global module context.
 * 4) Can't call hooks conditionally.
 */
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
