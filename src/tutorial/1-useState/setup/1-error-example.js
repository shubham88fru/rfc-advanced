import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'Hello People'; // title in theory changes but not updated on UI
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        CHANGE TITLE
      </button>
    </>
  );
};

export default ErrorExample;
