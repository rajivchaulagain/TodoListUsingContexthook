import React from 'react';
import { useTodo } from './TodoContext';

export const ToDoInput = () => {
  const { input, handleInput, onSubmit } = useTodo();
  return (
    <>
      <input value={input} onChange={(e) => handleInput(e)} />
      <button onClick={(e) => onSubmit(e)} disabled={input.length === 0}>
        Add
      </button>
    </>
  );
};
